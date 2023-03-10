


<h1 align="center">Artist Search</h1>
<h3 align="center">A simple NodeJS Application to search for artists from a Last.fm API endpoint based on user inputs and process the data to a csv file</h3>

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







## Run Locally

Clone the project

```bash
 $ git clone https://github.com/Rumeli33/codingChallenge
```

Go to the project directory

```bash
 $ cd codingChallenge
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


