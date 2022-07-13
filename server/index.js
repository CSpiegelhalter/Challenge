const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get("/stocks", (req, res) => {
  const stockArray = [

    ["AAPL", "Apple Computer"],

    ["TSLA", "Tesla Inc."],

    ["PG", "Procter & Gamble Company, The"],

    ["IBM", "International Business Machines Corporation"],

    ["APDN", "Applied DNA Sciences, Inc."]

  ]
  let returnData = []
  for (let i of stockArray) {
    let currentObject = {
      "symbol": i[0],
      "name": i[1]
    }
    returnData.push(currentObject)
  }
  // Sorts in alpha order
  returnData.sort((a, b) => a.name.localeCompare(b.name))
  res.json(returnData);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});