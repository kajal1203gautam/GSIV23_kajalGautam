
export const getServices = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc4NjRiZmJkYWQ2N2VhMjY1MDI2MzE0Mzk3MTJiOCIsInN1YiI6IjY0ZGI3Zjg3NTllOGE5MDExYzhhYjQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wOVADtsMYRJBWX7d0yp2-pYimCXx6hhGhxozUniHDso'
        }
    };
    try {
        const response = await fetch(`${url?url:"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"}`, options)
        const {results} = await response.json();
        return results
    } catch (error) {
        console.log({ error })
    }
}

export const getProduct = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc4NjRiZmJkYWQ2N2VhMjY1MDI2MzE0Mzk3MTJiOCIsInN1YiI6IjY0ZGI3Zjg3NTllOGE5MDExYzhhYjQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wOVADtsMYRJBWX7d0yp2-pYimCXx6hhGhxozUniHDso'
        }
    };
    try {
        const response = await fetch(url, options)
        const result = await response.json();
        return result
    } catch (error) {
        console.log({ error })
    }
}