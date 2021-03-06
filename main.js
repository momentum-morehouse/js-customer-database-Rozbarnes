import customers from './customers.js'
console.log(customers)
let person = [{
    thumbNail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg',
    name: "Pauline Hughes",
    email: "pauline.hughes@example.com",
    address: "3747 Elgin St, Roseville, IN 93281",
}]

function listCustomers(personArray) {
    let customerList = document.querySelector('#customer-list');
    console.log(customerList)

    for (let customer of customers) {
        let newCustomer = document.createElement("li");

        let customerText = document.createTextNode(`${customer.name.title} located in: ${ customer.location.street }`);
        let customerImage = document.createElement("img")
        customerImage.src = `${ customer.picture.thumbnail }`;
        let customerEmail = document.createElement("email");
        newCustomer.append(customerImage, customerText, customerEmail);
        customerList.append(newCustomer);
        newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
    };
};

listCustomers(person);





 