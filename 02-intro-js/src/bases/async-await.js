const getImagenPromesa = () => new Promise( resolve => ('https/') )

const getImagen = async() =>  {
    try {
        const apiKey = 'gBBDX3TikRoh8ZR4Gu2NiDfZSzDAn78M';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json()
        
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    } catch (error) {
        console.warn(error)
    }
}