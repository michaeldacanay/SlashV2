import axios from 'axios';

export default async function DataFetch(site, item) {
    // const [data, setData] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;
    site = site.toLowerCase();
    item = item.toLowerCase();
    console.log('API URL:', apiUrl);
    console.log('Site:', site);
    console.log('Item:', item);
    // useEffect(() => {
    //     // Fetch data from your API using Axios
    //     axios.get(`${apiUrl}/all`)
    //         .then((response) => setData(response.data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);
    let url;

    if (site === "all") {
        url = `${apiUrl}${item}`;
    }
    else if (site === "all" && item === "all") {
        url = `${apiUrl}/all`;
    }
    else {
        url = `${apiUrl}/${item}/${site}`;
    }
    // let response = await axios.get(url);
    // console.log("Results are " + JSON.stringify(response.data));
    // return JSON.stringify(data);
    console.log(url);
    console.log('Before Axios Request');
    try {
        const response = await axios.get(url);
        console.log('Before Axios Request');
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
