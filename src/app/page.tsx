"use client";

import { useActionState, useState } from "react";
import { type FormState, submitForm } from "./actions";

const PROGRAM_STUDI = [
  "D3 Agribisnis",
  "D3 Akuntansi",
  "D3 Bahasa Inggris",
  "D3 Bahasa Mandarin",
  "D3 Budi Daya Ternak",
  "D3 Desain Komunikasi Visual",
  "D3 Farmasi",
  "D3 Hiperkes dan Keselamatan Kerja",
  "D3 Keuangan dan Perbankan",
  "D3 Kebidanan",
  "D3 Komunikasi Terapan",
  "D3 Manajemen Administrasi",
  "D3 Manajemen Bisnis",
  "D3 Manajemen Pemasaran",
  "D3 Manajemen Perdagangan",
  "D3 Perpustakaan",
  "D3 Perpajakan",
  "D3 Teknik Informatika",
  "D3 Teknik Kimia",
  "D3 Teknik Mesin",
  "D3 Teknik Sipil",
  "D3 Teknologi Hasil Pertanian",
  "D3 Usaha Perjalanan Wisata",
  "D4 Bahasa Inggris untuk Komunikasi Bisnis dan Profesional",
  "D4 Bahasa Mandarin untuk Komunikasi Bisnis dan Profesional",
  "D4 Demografi dan Pencatatan Sipil",
  "D4 Keselamatan dan Kesehatan Kerja",
];

const initialState: FormState = {
  success: false,
};

export default function Home() {
  const [state, formAction, pending] = useActionState(submitForm, initialState);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  // When form succeeds, we track it to show a beautiful success screen
  if (state.success && !submittedOnce) {
    setSubmittedOnce(true);
  }

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-lg z-10 transition-all duration-500">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-500 p-0.5 shadow-lg shadow-purple-500/20 mb-4 animate-pulse">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                SV
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            PKKMB SV UNS 2026
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Portal Kustom Pengumpulan Tugas Mahasiswa Baru
          </p>
        </div>

        {/* Form Card */}
        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl shadow-black/50 overflow-hidden">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-amber-400" />

          {state.success ? (
            /* Success State */
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-400 ring-8 ring-emerald-500/5 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  Tugas Berhasil Terkirim!
                </h2>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Data pengumpulan tugas Anda telah berhasil diteruskan dan
                  disimpan langsung di database Google Form.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-300 text-sm font-medium shadow-sm active:scale-95 cursor-pointer"
                >
                  Kirim Tanggapan Lain
                </button>
              </div>
            </div>
          ) : (
            /* Active Form State */
            <form action={formAction} className="space-y-6">
              {/* Error Banner */}
              {state.error && (
                <div className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400 animate-shake">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold">Terjadi Kesalahan:</span>
                    <p className="mt-0.5 text-red-300/90">{state.error}</p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Nama Lengkap <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Masukkan nama lengkap sesuai KTM"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Program Studi Field */}
              <div className="space-y-2">
                <label
                  htmlFor="programStudi"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Program Studi <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="programStudi"
                    name="programStudi"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer"
                  >
                    <option value="" disabled hidden>
                      Pilih Program Studi Anda
                    </option>
                    {PROGRAM_STUDI.map((prodi) => (
                      <option
                        key={prodi}
                        value={prodi}
                        className="bg-slate-900 text-slate-100"
                      >
                        {prodi}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Link Tugas Field */}
              <div className="space-y-2">
                <label
                  htmlFor="linkTugas"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Link Tugas <span className="text-amber-400">*</span>
                </label>
                <input
                  type="url"
                  id="linkTugas"
                  name="linkTugas"
                  required
                  placeholder="https://contoh-link-tugas.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Link GDrive Field */}
              <div className="space-y-2">
                <label
                  htmlFor="gdriveLink"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Link Google Drive Dokumen{" "}
                  <span className="text-amber-400">*</span>
                </label>
                <input
                  type="url"
                  id="gdriveLink"
                  name="gdriveLink"
                  required
                  placeholder="https://drive.google.com/..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={pending}
                  className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  {pending ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Mengirimkan data...
                    </>
                  ) : (
                    <>
                      Kirim Jawaban
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer info */}
        <p className="mt-8 text-center text-xs text-slate-600">
          Formulir kustom ini terintegrasi secara aman dengan Google Form asli.
          <br />
          &copy; 2026 Panitia PKKMB Sekolah Vokasi UNS.
        </p>
      </div>
    </main>
  );
}
