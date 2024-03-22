const endPointAPI = 'https://reqres.in/api/users'

let content = document.getElementById('user-card')

const userData = fetch(endPointAPI)
    .then((data) => data.json())
    .then((res) => {
        console.log(res.data[0])
        const data = res.data;
        console.log(data);
        data.forEach(element => {
            content.innerHTML += `
            
           <div class="card">
            <img src="${element.avatar}" alt="Profile Picture">
            <div class="info">
                <div class="name">${element.first_name} ${element.last_name}</div>
                <div class="email">${element.email}</div>
                <div class="id">${element.id}</div>
            </div>
            </div>
            `
        })

    })