import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getImages } from "../services/api";
import { delay } from "../utils/delayFunction";

export function PhotoGallery() {
  const [image, setImage] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function searchImages(input) {
    const images = await getImages(input);
    setImage(images?.hits);
  }

  const loadImages = async () => {
    const images = await getImages();
    setImage(images?.hits);
  };

  useEffect(() => {
    (async function images() {
      await loadImages();
    })();
  }, []);

  const handleSearch = async () => {
    await searchImages(searchTerm);
  };

  return (
    <>
      <div className="flex justify-center gap-1 items-center m-3">
        <div className="relative w-full max-w-md">
          <input
            className="border-solid border-2 border-cyan-900 p-1 rounded-md pr-10 w-full"
            type="text"
            placeholder="Pesquise aqui"
            value={searchTerm}
            onChange={({ target }) => {
              setSearchTerm(target.value);
              delay(1200, async () => await searchImages(target.value));
            }}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={handleSearch}
          >
            <Search />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {image?.map((img) => (
          <div
            className="flex flex-col items-center border-2 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            key={img.id}
          >
            <img
              src={img.previewURL}
              className="w-full h-48 object-cover"
              alt={img.tags}
            />
            <h1 className="p-2 text-sm text-center">{img.tags}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
