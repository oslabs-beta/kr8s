const k8s = require('@kubernetes/client-node');
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sApi2 = kc.makeApiClient(k8s.ExtensionsV1beta1Api);
const k8sApi3 = kc.makeApiClient(k8s.AppsV1Api);


const k8sController = {};

k8sController.getPodList = (req, res, next) => {
    k8sApi.listNamespacedPod('default').then((res) => {
        console.log(res.body);  
})
};


module.exports = k8sController;