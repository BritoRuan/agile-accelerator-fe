export async function getImages(query) {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const imagesData = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=10`
  );
  const images = imagesData.json();
  return images;
}
