const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

async function convert() {
  const dataDirectory = path.join(process.cwd(), "data");
  // console.log(dataDirectory);
  const csvFilePath = path.join(dataDirectory + "/data.csv");
  // console.log(csvFilePath);

  const jsonFilePath = path.join(dataDirectory + "/data.json");
  // console.log(jsonFilePath);

  const jsonArray = await csv().fromFile(csvFilePath);
  console.log(jsonArray);

  const validData = jsonArray.filter((d) => !isNaN(parseFloat(d.income)));
  const sortedData = validData.sort(
    (a, b) => parseFloat(b.income.replaceAll(",", "")) - parseFloat(a.income.replaceAll(",", ""))
  );

  fs.writeFile(jsonFilePath, JSON.stringify(sortedData), (err) => {
    if (err) {
      console.error(err);
    }
  });
}

convert();
