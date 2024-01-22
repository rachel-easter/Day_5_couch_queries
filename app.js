const request = require('request');

const couchDBUrl = 'http://127.0.0.1:5984';
const dbName = 'employee';

// Mango query
const mangoQuery = {
  selector: {
    name: 'Rachel'
  }
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
