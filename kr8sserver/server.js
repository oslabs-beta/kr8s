const express = require("express");
const cors = require("cors");
const path = require("path");
const k8sController = require("./controllers/k8sController.js");
const { app } = require("electron");

const PORT = 3400;

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled 🎈" });
});

//Routes handling requests for k8s cluster info

app.get("/api/namespaceList", k8sController.getPodList, (req, res) =>
  res.status(200).json(res.locals.namespaceList)
);

app.get("/api/podList", k8sController.getPodList, (req, res) =>
  res.status(200).json(res.locals.podList)
);

app.get("/api/nodeList", k8sController.getNodeList, (req, res) =>
  res.status(200).json(res.locals.nodeList)
);

app.get("/api/deploymentList", k8sController.getDeploymentList, (req, res) =>
  res.status(200).json(res.locals.deploymentList)
);

app.get("/api/serviceList", k8sController.getServiceList, (req, res) =>
  res.status(200).json(res.locals.serviceList)
);

app.get("/api/ingressList", k8sController.getIngressList, (req, res) =>
  res.status(200).json(res.locals.ingressList)
);

//Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  const defaultClientError = {
    status: 500,
    message: { error: "An unexpected error occurred." },
  };
  const errorObj = Object.assign(defaultClientError, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT} `));
