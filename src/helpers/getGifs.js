
export const getGifs = async (category) => {

    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=bhyQRbVDHWZWJe5tlg4a28nCDbRFz1og`;

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