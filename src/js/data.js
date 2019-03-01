const url = 'https://api.myjson.com/bins/ms3i6';

window.onload = () =>{
    fetch(url)
    .then(res => res.json()
    ).then((data)=>{
        getData(data)
    
    })
    .catch(error => {
        console.log('error', error);  
    });
    };