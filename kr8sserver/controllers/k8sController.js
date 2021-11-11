const k8s = require('@kubernetes/client-node');
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sApi2 = kc.makeApiClient(k8s.ExtensionsV1beta1Api);
const k8sApi3 = kc.makeApiClient(k8s.AppsV1Api);


const k8sController = {};


////   All API middleware for 'default' Namespace   ////

k8sController.getNamespaceList = (req, res, next) => {
    k8sApi.listNamespace()
      .then((data) => {
        console.log(data.body);  
        res.locals.namespaceList = data.body;
        return next();
    })
      .catch((err) => {
        return next({
          log: `ERROR in k8sController.getNamespaceList: ${err} `, 
          status: 500, 
          message: 'Error occurred: Could not retrieve namespace list'
        });
      });
};

k8sController.getPodList = (req, res, next) => {
    k8sApi.listNamespacedPod('default')
      .then((data) => {
        console.log(data.body);  
        res.locals.podList = data.body;
        return next();
    })
      .catch((err) => {
        return next({
          log: `ERROR in k8sController.getPodList: ${err} `, 
          status: 500, 
          message: 'Error occurred: Could not retrieve pod list'
        });
      });
};

k8sController.getNodeList = (req, res, next) => {
    k8sApi.listNode('default')
      .then((data) => {
        console.log(data.body);  
        res.locals.nodeList = data.body;
        return next();
    })
      .catch((err) => {
        return next({
          log: `ERROR in k8sController.getNodeList: ${err} `, 
          status: 500, 
          message: 'Error occurred: Could not retrieve node list'
        });
      });
};

k8sController.getDeploymentList = (req, res, next) => {
    k8sApi3.listNamespacedDeployment('default')
      .then((data) =>{
        console.log(data.body);
        res.locals.deploymentList = data.body;
        return next();
      })
      .catch((err) => {
          return next({
            log: `ERROR in k8sController.getDeploymentList: ${err} `, 
            status: 500, 
            message: 'Error occurred: Could not retrieve node list'
          });
      });
};

k8sController.getServiceList = (req, res, next) => {
    k8sApi.listNamespacedService('default')
      .then((data) =>{
        console.log(data.body);
        res.locals.serviceList = data.body;
        return next();
      })
      .catch((err) => {
        return next({
            log: `ERROR in k8sController.getServiceList: ${err} `, 
            status: 500, 
            message: 'Error occurred: Could not retrieve service list'
        });
      });
};

k8sController.getIngressList = (req, res, next) => {
    k8sApi2.listNamespacedIngress('default')
      .then((data) =>{
        console.log(data.body);
        res.locals.ingressList = data.body;
        return next();
      })
      .catch((err) => {
        return next({
            log: `ERROR in k8sController.getIngressList: ${err} `, 
            status: 500, 
            message: 'Error occurred: Could not retrieve ingress list'
        });
      });
};

module.exports = k8sController;
