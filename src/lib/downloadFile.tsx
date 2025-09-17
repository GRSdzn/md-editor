export function downloadFile(content: string, filename = "README.md") {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link); // для Firefox
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url); // освобождаем память
}
