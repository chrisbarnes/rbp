import { getPageBySlug } from "../../../lib/api";

export default async function handler(req, res) {
  const previewUrlSecret = process.env.CONTENTFUL_PREVIEW_URL_SECRET;

  if (req.query.secret !== previewUrlSecret || !req.query.slug) {
    res.status(401).json({ message: "Invalid token." });
  }

  const page = await getPageBySlug(req.query.slug);

  if (!page) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});

  res.redirect(`/${page.fields.slug}`);
}
