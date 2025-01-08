export function PhotoGallery() {
  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div className="flex flex-col items-center" key={i}>
              <img src="https://cdn.pixabay.com/photo/2019/08/21/19/26/rain-4421893_960_720.jpg" />
              <h1>teste imagem</h1>
            </div>
          ))}
      </div>
    </>
  );
}
