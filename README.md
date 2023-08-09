# University-Ranking

## Table of content 
- Description
- Requirements and installations
- Usage
## Description :
- This is the repository which implements the system that captures data related to a universities ranking.
- The data set have been downloaded from the kaggle website.
- The data set contains 29 columns.
- You can get the top **n** unversities of any **country** based on specific **ranking column**.
-  
## Installations are requirements :
- You need to install npm module and all the dependencies present in the package.json.
  ```
  npm install --save
  ```
- Required to add the .env with URI property of the database.
  
## Usage :

- Clone the repository by running the following command, or download the repository.
  ```
  git clone https://github.com/everest-engineering/JackPotUnitTesting.git
  ```
- install npm module.
  ```
  npm install
  ```
- To run import and and get the reports run the following commands.
  ```
  node index.js <option>
  ```
- The avalible options are :
  - i: Imports the data to the tables
  - q: For the query data 
- To import the data  run as following command
  ```
  node index.js -i <path>
  ```
- To get top universities run as the following command
   ```
  node index.js -q <column name> <limit> <country name>
  ```
