const BASE_URL = "https://victor.alwaysdata.net/static/images/";
const FALLBACK_IMAGE = "/images/default.jpg";

export const getImageUrl = (image) => {
  if (!image) return FALLBACK_IMAGE;

  const img = image.trim();

  // 1. External images (Unsplash, APIs, CDN)
  if (img.startsWith("http://") || img.startsWith("https://")) {
    return img;
  }

  // 2. Public images (React public folder)
  if (img.startsWith("/images/")) {
    return img;
  }

  // 3. Backend full static path
  if (img.startsWith("/static/images/")) {
    return BASE_URL + img.replace("/static/images/", "");
  }

  // 4. Plain filename from backend (e.g. "shoe.jpg")
  return BASE_URL + img;
};