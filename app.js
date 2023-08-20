const cimg = document.getElementById('img');
const cdesc = document.getElementById('desc');
const crating = document.getElementById('rating');
const cprice = document.getElementById('price');
const btn = document.querySelectorAll('.btn');



let index = 0;
let customers = []

class Customer {
    constructor(img, desc, rating, price) {
        this.img = img;
        this.desc = desc;
        this.rating = rating;
        this.price = price;
    }
}


function createCustomer(img, desc, rating, price) {
    let Img = `./img/${img}.png`;

    let customer = new Customer(Img, desc, rating, price);
    customers.push(customer)
}


createCustomer(0, `Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport`, 4.0, '$599')
createCustomer(1, `Analog Watch - For Boys HM-7072`, 5.0, '$456')
createCustomer(2, `APPLE iPhone 13 (Midnight, 128 GB)`, 3.0, '$234')
createCustomer(3, `Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)#JustHere`, 2.0, '$678')
createCustomer(4, `Black Dial Digital Watch - For Men GW0271G2`, 5.0, '$326')


btn.forEach((element) => {
    element.addEventListener('click', (ele) => {
        
        if (ele.target.classList.contains('btn-previous'))
            index--;

        if (index < 0)
            index = customers.length - 1

        cimg.src = customers[index].img;
        cdesc.innerHTML = customers[index].desc;
        crating.innerHTML = customers[index].rating;
        cprice.innerHTML = customers[index].price;
    })



    element.addEventListener('click', (ele) => {
        if (ele.target.classList.contains('btn-next'))
            index++

        if (index === customers.length)
            index = 0

        cimg.src = customers[index].img;
        cdesc.innerHTML = customers[index].desc;
        crating.innerHTML = customers[index].rating;
        cprice.innerHTML = customers[index].price;
    })
})