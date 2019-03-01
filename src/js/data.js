const url = 'https://api.myjson.com/bins/ve3x6';

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