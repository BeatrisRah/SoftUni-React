import requester from "../api/requester.js";

const url = 'http://localhost:3030/jsonstore/users';

async function post(data) {
    return await requester({method:'POST', url, data})
}

async function get(id= null) {
    let newurl = url
    if(id) newurl += `/${id}`
    return await requester({method:'GET', url: newurl})
}

export default{
    post,
    get
}