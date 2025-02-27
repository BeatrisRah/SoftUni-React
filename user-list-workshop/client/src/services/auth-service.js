import api from "../api/api.js"

async function createUser({firstName, lastName, email, phoneNumber ,imageUrl, country, city, street, streetNumber}){
    const expextedData = {
        firstName, 
        lastName, 
        email, 
        imageUrl,
        phoneNumber ,
        createdAt:Date.now(),
        updatedAt:Date.now(),
        address: {
            country,
            city,
            street,
            streetNumber
        }}
    return await api.post(expextedData)
    
}

async function getAllUsers() {
    const response = await api.get()
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

async function getOneUSer(id) {
    const response = await api.get(id)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
export default{
    createUser,
    getAllUsers,
    getOneUSer
}