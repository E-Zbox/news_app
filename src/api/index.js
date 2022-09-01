const axios = require("axios");

const baseURL = "https://api.newscatcherapi.com/v2/";
const timeout = 1000;

exports.NewsCatcherInstance = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "x-api-key": "M6iphQ4hQRvSozBGJxkOEInDXzeRJlN9T6HC4Gqq-nw",
        timeout,
    },
});

exports.searchApi = require("./search");
exports.latestApi = require("./latest");
exports.sourcesApi = require("./sources");

/**
let params = new URLSearchParams({ q: "Apple" });

Client({ url: "search", method: "GET", params })
    .then((res) => {
        console.log(res.data);
        console.log("data >>>>>>>>>>");
    })
    .catch((err) => {
        console.log(err);
        console.log("error <<<<<<<<<<<<<<<<<<<");
    });
*/
