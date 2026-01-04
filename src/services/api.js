const BASE_URL = "https://api.jikan.moe/v4"

export const getPopularAnimes = async () => {
    const response = await fetch(`${BASE_URL}/top/anime`)
    const data = await response.json()
    return data.data
}

export const searchForAnime = async (query) => {
    const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.data
}