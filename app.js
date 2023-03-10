require("dotenv").config();
const axios = require("axios");    // require axios to get data as Promise from API endpoint
const artistsJson = require("./data/artists.json"); // require the default artists.json from dictionary
const createCsvWriter = require("csv-writer").createObjectCsvWriter; // require csv-writer to write to csv files
const readline = require("readline").createInterface({    // require readline to process user inputs
  input: process.stdin,
  output: process.stdout,
});
const base_url = process.env.LAST_FM_URL;
const api_key = process.env.API_KEY;

//Take Artist name as user input and also as the filename input for csv, process the results into the csv
readline.question(
  `Enter the name of the artist (also the filename for CSV):`,
  (name) => {
    const artist_name = name;
     //create csv writer object with csv file path and csv headers
    const csvWriter = createCsvWriter({
        path: `./${artist_name}.csv`,
        header: [
          { id: "name", title: "NAME" },
          { id: "mbid", title: "MBID" },
          { id: "url", title: "URL" },
          { id: "image_small", title: "IMAGE_SMALL" },
          { id: "image", title: "IMAGE" },
        ],
      });
    axios
      .get(`${base_url}&artist=${artist_name}&api_key=${api_key}&format=json`)
      .then((response) => {     

        //Get the relevant Artists data from the response object returned by API method
        let data = response.data.results.artistmatches.artist;
        if(data.length === 0){
            data = [artistsJson[Math.floor(Math.random()*artistsJson.length)]];          
        }
        
            const dataToWrite = data.map((element) => ({
                name: element.name,
                mbid: element.mbid,
                url: element.url,
                image_small: element.image.find((item) => (item.size === "small"))["#text"],
                image: element.image.find((item1) => (item1.size === "large"))["#text"],
              }));
      
              //write to the csv file
              csvWriter.writeRecords(dataToWrite).then(() => {
                console.log("...Done");
              });
        
        //create object to write to csv file
        
      })
      .catch(console.error());
    readline.close();
  }
);
