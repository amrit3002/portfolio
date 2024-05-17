export const getImageUrl = (path) =>{
    return new URL(`/assets/${path}`, import.meta.url).href;
};

// it is taking the relative path appending it on our base 
// URL and then passing us back.
