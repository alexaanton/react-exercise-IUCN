This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For this project I used material-ui and material-table libraries. 
The data is served from http://apiv3.iucnredlist.org/api/v3/docs.

I have 4 tables:
* Available regions for species - that is populated from the API
* Species for [region] - is picking up a random region and is populating the table from the API
* Critically Endangered in [region] - it is filterig the results from 2. by category ==="CR" 
   * expanding the row will call the API method to get messures by Scientific name and region
* Mammals displayed in [region] - it is filterig the results from 2. by class_name ==="MAMMALIA" 

For getting started with this project you should clone the repository and do:
clone the repository
cd bimspot-exercise
npm install
npm start
