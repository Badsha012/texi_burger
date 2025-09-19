const loadData= () =>{
    const url="https://taxi-kitchen-api.vercel.app/api/v1/categories";


    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
};

loadData();
