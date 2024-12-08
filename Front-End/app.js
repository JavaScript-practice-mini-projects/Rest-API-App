const dataApi = fetch('http://localhost:4000/data')
dataApi
    .then(res => res.json())
    .then(data => console.log(data))