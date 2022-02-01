export default function handler(req, res) {
  // Clears the preview mode cookies.
  res.clearPreviewData();
  return res.status(200).json({ message: "Success" });
}
