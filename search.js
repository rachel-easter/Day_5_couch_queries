const request = require('request');

const couchDBUrl = 'http://127.0.0.1:5984';
const dbName = 'employee';

// Mango query
const mangoQuery = {
    selector: {
      name: {
        $eq: "Rachel"
      }
    },
    fields: ["_id", "name", "age"], // Include only specific fields in the result
    sort: [{ name: 'asc' }], // Sort the result by name in ascending order
    limit: 10, // Limit the number of results
  };
// Perform the Mango query with authentication
request.post({
  url: `${couchDBUrl}/${dbName}/_find`,
  json: mangoQuery,
  auth: {
    user: 'admin',
    pass: 'admin'
  }
}, (error, response, body) => {
  if (error) {
    console.error('Error performing Mango query:', error);
  } else {
    console.log('Query result:', body);
  }
});
