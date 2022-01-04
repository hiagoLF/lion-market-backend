export function extractKeyFromImageUrl(imageUrl: string) {
  const urlSplited = imageUrl.split(".");
  const last = urlSplited.length - 1;
  const key = urlSplited[last - 1].split("/")[1] + "." + urlSplited[last];
  return key
}
