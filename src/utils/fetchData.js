import React from 'react'
// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// }
// 1: initial api of exercise db
// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'aee05141fcmsh11cddba78fd2ee2p1d0031jsnabd4f9ce35ff',
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// };
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '210567091dmsh8c21cdff6622282p138c9fjsnc50fe14af9f0',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
// 1: initial api
// export const youtubeOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'aee05141fcmsh11cddba78fd2ee2p1d0031jsnabd4f9ce35ff',
//         'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//     }
// };
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '210567091dmsh8c21cdff6622282p138c9fjsnc50fe14af9f0',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()

    return data;
}

