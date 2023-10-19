import axios from 'axios';

export default async function DataFetch(site, item) {
    const apiUrl = process.env.REACT_APP_API_URL;
    site = site.toLowerCase();
    item = item.toLowerCase();

    let url;

    if (site === "all") {
        url = `${apiUrl}/item/${item}`;
    }
    else if (item === "all") {
        url = `${apiUrl}/${site}`;
    }
    else if (site === "all" && item === "all") {
        url = `${apiUrl}/all`;
    }
    else {
        url = `${apiUrl}/${item}/${site}`;
    }

    try {
        const response = await axios.get(url);
        return response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
