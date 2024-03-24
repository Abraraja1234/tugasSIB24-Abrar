let data = [
    {
        foto: "E:/Tugas 8/asetss/download.jfif",
        namaProduk: "kaos oblong",
        desc: "bahanya tebel dan lembut",
        harga: "Rp. 50.000",
        toko: "Zin Store",
    },
    {
        foto: "E:/Tugas 8/asetss/download (1).jfif",
        namaProduk: "Baju rajut",
        desc: "bahannya adem",
        harga: "Rp. 125.000",
        toko: "Zin Store",
    },
    {
        foto: "E:/Tugas 8/asetss/images.jfif",
        namaProduk: "kaos oblong polos",
        desc: "bahannya agak tebal",
        harga: "50.000",
        toko: "Zin Store",
    },
    {
        foto: "E:/Tugas 8/asetss/download (3).jfif",
        namaProduk: "dress korea",
        desc: "bahanya tipis",
        harga: "Rp. 150.000",
        toko: "Zin Store",

    },
   
    

];

let fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    }
};

async function postData() {
    try {
        const userCard = document.getElementById('user-card');

        data.forEach(async (produk) => {
            const response = await fetch(`https://reqres.in/api/baju/${produk.id}`, {
                ...fetchOptions,
                body: JSON.stringify(produk)
            });
            const responseData = await response.json();
            console.log(responseData);

            

            const productHTML = `
            <div class="card">
            <img src="${responseData.foto}" alt="Profile Picture">
            <div class="info">
                <div class="name">${responseData.namaProduk}</div>
                <div class="email">${responseData.desc}</div>
                <div class="id">${responseData.harga}</div>
                <div class="ntoko">${responseData.toko}</div>
            </div>
            </div>`
            userCard.innerHTML += productHTML;
        });
    } catch (error) {
        console.error('Gagal melakukan permintaan:', error);
    }
}

postData();