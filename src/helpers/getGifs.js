export const getGifs = async (category) => {
  const API_KEY = "lVv58xozg2RLx74t7heIkXqwHcpoYFLY";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(category)}&limit=5`;

  const resp = await fetch(url);
  if (!resp.ok) {
    console.error("Error en la petición:", resp.status);
    return;
  }

  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  console.log(gifs);

  return gifs;
};