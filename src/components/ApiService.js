const axios = require('axios');

const apiClient = axios.create({
    baseURL: "http://apiv3.iucnredlist.org/api/v3",
    withCredentials: false, // This is the default
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
});

export default {
    getSpecies() {
        return apiClient.get("/region/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee");
    },
    getSpecieByRegion(id) {
        return apiClient.get("/species/region/"+ id +"/page/0?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee");
    },
    getMeasures(name, region){
        return apiClient.get("/measures/species/name/"+ name +"/region/"+ region + "?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee");
    }
};