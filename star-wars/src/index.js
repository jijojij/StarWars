const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok){
        throw new Error(`Could not fetch ${url}`)
    }
    const body = await res.json();
    return body;
}

getResource('https://swapi.dev/api/people/1')
    .then(x => console.log(x))
    .catch(e=>console.log(e))

