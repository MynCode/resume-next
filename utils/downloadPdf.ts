export async function downloadPDF(): Promise<void> {
  const response: Response = await fetch("/api/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const blob: Blob = await response.blob();
  const url: string = window.URL.createObjectURL(blob);
  const a: HTMLAnchorElement = document.createElement("a");
  a.href = url;
  a.download = "james-duffield-resume-2024.pdf";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
