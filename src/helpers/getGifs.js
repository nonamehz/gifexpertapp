
export const getGifs = async (category) => {

    const API_KEY = 'bhyQRbVDHWZWJe5tlg4a28nCDbRFz1og';
    const URL = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${API_KEY}`;

    const respuesta = await fetch(URL);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}