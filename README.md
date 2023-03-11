


<h1 align="center">Artist Search</h1>
<h3 align="left">A simple NodeJS Application to search for artists from a Last.fm API endpoint based on user inputs and process the data to a csv file</h3>

- Github Repo:  https://github.com/Rumeli33/codingChallenge

## Authors

- Rumeli Paul : [@rumeli](https://github.com/Rumeli33)


## API Reference

#### Get searched artists

```http
  GET https://ws.audioscrobbler.com/2.0/?method=artist.search&artist={ARTIST}&api_key={YOUR_API_KEY}&format=json
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `artist` | `string` | **Required**. Name of artist from user |


## Installation

Clone the Repo

```bash
$ https://github.com/Rumeli33/codingChallenge.git
```
Install dependencies
```bash
$ npm install axios
$ npm install dotenv
$ npm install readline
$ npm install csv-writer
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`= c4bf258ae7513f090bf8c79378e9a75c

`LAST_FM_URL` = https://ws.audioscrobbler.com/2.0/?method=artist.search

You are advised to get your own key from Last.fm by registering yourself.





## Run Locally

Clone the project

```bash
 $ git clone https://github.com/Rumeli33/codingChallenge
```

Go to the project directory

```bash
 $ cd codingChallenge
```

To open in Visual Studio

```bash
 $ code .
```

Install dependencies

```bash
 $ npm install
```

Add environment variables

(See above section on Environment variables)


Start the project

```bash
  $ node app.js
```

Enter Artist name

```bash
Enter the name of the artist (also the filename for CSV):
```

You can find sample files created inside the folder structure:
For example: Searching for artist name "harry", retrieves the results from the API and saves them into the csv file harry.csv.


## Note: 

If no data is returned by the API, a random artist is selected from the JSON dictionary "artists.json", which can be found under "./data/artists.json".

An example can be found in the file : hjdljdflsxcs.csv
 where the file name is a random keypress generated word, which returns nothing from the API.


