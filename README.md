Data source
https://data.cese.nsw.gov.au/data/dataset/nsw-public-schools-income-from-licensed-canteens

Steps to generate `data.json`

- Download [csv](https://data.cese.nsw.gov.au/data/dataset/nsw-public-schools-income-from-licensed-canteens)

- Move the csv file into `/data`

- Change the csv file name from `2022-licensed-canteens.csv` to `data.csv`

- Open the csv file 
  - Remove title from the top row 
  - Remove total income from the bottom row

- Convert `data.csv` file to `data.json` with following command
  
  ```shell
  node data/convert_csv_to_json.js`
  ```
