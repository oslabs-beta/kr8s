

const fetchPods = () => {
    const podList = [];

    fetch('http://localhost:31000/api/podList')
      .then((data) => data.json())
      .then((data) => {
      //iterate through data.items, push to podList array
    //   data.items.forEach((pod) => {
    //       podList.push({
    //           podName: item.metadata.name
    //       })
    //   })
        console.log(data.item.metadata.name);
      

    })
      .catch(err => { console.log(err) });

};

//console.log('test')
//fetchPods();
