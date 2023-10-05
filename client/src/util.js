import axios from "axios";

let config = {
  headers: {
    Connection: "keep-alive"
  }
};

/**
 * API to get results from the backend
 * @param {*} site user input for site
 * @param {*} item user input for the product name
 * @returns
 */
export default async function getResults(site, item) {
  //https://slash-app-staging.azurewebsites.net/all/dell
  let url = "http://127.0.0.1:8000/" + site + "/" + item;
  let response = await axios.get(url);
  console.log("Results are " + JSON.stringify(response.data));
  return JSON.stringify(response.data);
}
