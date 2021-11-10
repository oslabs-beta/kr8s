# Kr8s

## Summary

[Kr8s](https://kr8s.dev/) is a desktop application made for developers that need to monitor and visualize their Kubernetes clusters in a user friendly GUI. This easy-to-use tool will display the most important metrics for your cluster, nodes, pods, and containers. Kr8s will work seamlessly with Prometheus and Grafana to give you everything you need in one application.

## Metrics

The Dashboard page is the first page you will see once you connect to your local cluster. This page will give you metrics of your cluster on a high-level including pod usage, CPU usage, and memory usage.  
![dashboard-screenshot](https://github.com/oslabs-beta/kr8s/blob/dev/docs/images/dashboard-screenshot.png)

The Nodes page will give you everything you will need to know about the nodes in your cluster such as the names and health of each node.  
![nodes-screenshot](https://github.com/oslabs-beta/kr8s/blob/dev/docs/images/nodes-screenshot.png)

The Pods page will display the most important metrics you will need when monitoring all of your pods including pod CPU usage, memory usage, and the names and health of each pod.  
<img src="https://media.giphy.com/media/SxELWUtpWU84Xzk0OT/giphy.gif" width="800" height="auto"/>

The Pod View page can be accessed when you click on a specific pod on the Pods page. This view will give you useful information of a specific pod and the containers inside that pod.  
![podview-screenshot](https://github.com/oslabs-beta/kr8s/blob/dev/docs/images/podview-screenshot.png)

# Getting Started

## Setting up Kr8s

If you already have Prometheus and Grafana running on your machine, simply download and open the Kr8s desktop application. Once the application is loaded, you can click the **Local Cluster** button and it will lead you to the Dashboard where you will be able to visualize the health of your Kubernetes cluster. <!-- [TODO] -->

_SCREENSHOT OR GIF GOING FROM CONNECT PAGE TO DASHBOARD_

## Setting up Prometheus and Grafana

If you do not have Prometheus and/or Grafana set up, you can simply copy the following two lines of commands on your terminal and you will be ready to go. <!-- [TODO] -->

```console
kubectl create namespace monitoring
```

```console
kubectl apply -f manifests/
```

## I don't have a cluster but want to demo Kr8s

We created a [small microservices application](https://github.com/jgstoddard/kr8sdemo) that you can use demo Kr8s. <!-- [TODO] -->

# Upcoming Features

Some features in future versions include:

1.
2.

Please refer to [CONTRIBUTING.md](https://github.com/oslabs-beta/kr8s/blob/dev/CONTRIBUTING.md) to see how you can contribute to this product!

# Meet Our Team

Adam Sheff  
[LinkedIn](https://www.linkedin.com/in/adam-sheff/) | [Github](https://github.com/adamISheff)

Duke Lee  
[LinkedIn](https://www.linkedin.com/in/duke-lee) | [Github](https://github.com/dukelee11)

Justin Stoddard  
[LinkedIn](https://www.linkedin.com/in/jgstoddard/) | [Github](https://github.com/jgstoddard)

Reland Boyle  
[LinkedIn](https://www.linkedin.com/in/relandboyle/) | [Github](https://github.com/GlorifiedBicycle)
