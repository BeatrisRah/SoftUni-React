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
        adress: {
            country,
            city,
            street,
            streetNumber
        }}
    return await api.post(expextedData)
    
}

export default{
    createUser,
}