async function getPhotos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default getPhotos;
