export async function getImages(query) {
  const imagesData = await fetch(
    `https://pixabay.com/api/?key=48111710-9796b8cff12b655de682c1d1b&q=${query}&per_page=10`
  );
  const images = imagesData.json();
  return images;
}
