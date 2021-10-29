import fetch from "node-fetch";
const apiCalls = {};

apiCalls.fetchPods = async () => {
  
  try{
    let response = await fetch('http://localhost:31000/api/podList')
    response = await response.json();
    return response;
  } catch {
    console.log('Error occured fetching pods');
  }
};


apiCalls.fetchNodes = async () => {
  const nodeData = {};
  try{
    let response = await fetch('http://localhost:31000/api/nodeList')
    response = await response.json();
    return response;
  } catch {
    console.log('Error occured fetching nodes');
  }
};

export default apiCalls;