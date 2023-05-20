import express from "express";
import fetch from "node-fetch";

// This variable defines the port of your computer where the API will be available
const PORT = 3000;

// This variable instantiate the Express.js library
const app = express();

// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Books API is running on: http://localhost:${PORT}.`)
);

app.get("/", async (request, response) => {
    response.header("Access-Control-Allow-Origin", '*')
  let res = await fetch(
    "https://compareprivateplanes.com/tools/airport_map/server.php?f=get_model_list"
  );

  let data = await res.json();

  return response.json(data);
});
