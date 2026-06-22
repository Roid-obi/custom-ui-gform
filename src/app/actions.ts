"use server";

export type FormState = {
  success: boolean;
  error?: string;
};

export async function submitForm(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get("name") as string;
  const programStudi = formData.get("programStudi") as string;
  const linkTugas = formData.get("linkTugas") as string;
  const gdriveLink = formData.get("gdriveLink") as string;

  if (!name || !programStudi || !linkTugas || !gdriveLink) {
    return { success: false, error: "Semua kolom formulir harus diisi!" };
  }

  // Validate URLs for linkTugas and gdriveLink
  try {
    new URL(linkTugas);
  } catch {
    return {
      success: false,
      error:
        "Format Link Tugas tidak valid! (Harus diawali http:// atau https://)",
    };
  }

  try {
    new URL(gdriveLink);
  } catch {
    return {
      success: false,
      error:
        "Format Link GDrive tidak valid! (Harus diawali http:// atau https://)",
    };
  }

  // Google Form POST URL
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdGMzOpPH4yYsmE9fLw_Xck2mahrWzihQkN8OhlNpdwfcgtRA/formResponse";

  const body = new URLSearchParams();
  body.append("entry.2030470506", name);
  body.append("entry.110923271", programStudi);
  body.append("entry.1758926408", linkTugas);
  body.append("entry.1229008366", gdriveLink);

  try {
    const res = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: body.toString(),
    });

    if (!res.ok) {
      return {
        success: false,
        error: `Gagal mengirim ke Google Form. (Kode status: ${res.status})`,
      };
    }

    const text = await res.text();

    // If the submission failed, the Google Form re-renders the form inputs, so 'entry.2030470506' will exist in HTML.
    // If it succeeded, it shows the confirmation page where 'entry.2030470506' is absent.
    const isError = text.includes("entry.2030470506");
    if (isError) {
      return {
        success: false,
        error: "Pengiriman ditolak oleh Google Form. Harap periksa data Anda.",
      };
    }

    return { success: true };
  } catch (error: unknown) {
    console.error("Submit error:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan jaringan saat mengirim data.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
