// ПОЛУЧЕНИЕ ДАННЫХ
const getData = async (url) => {
    const result = await fetch(url, {
        method: 'GET',
        headers: {
            'X-API-KEY': 'ba6ad19b-8943-4a6f-9ca0-49e0f297a73a',
            'Content-Type': 'application/json',
        },
    })
    return await result.json();
}
export{getData}