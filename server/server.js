const express = require('express');
const path = require('path');
const k8sController = require('./controllers/k8sController.js')


const PORT = 3000;

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes handling requests for k8s cluster info

app.get('/api/getPodList', 
k8sController.getPodList,
(req, res) => res.status(200).json('response here'));



//Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    const defaultClientError = {
      status: 500,
      message: { error: 'An unexpected error occurred.' },
    };
    const errorObj = Object.assign(defaultClientError, err);
    return res.status(errorObj.status).json(errorObj.message);
  });
  

app.listen(PORT, () => console.log(`Server listening on port ${PORT} `))