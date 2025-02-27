import requester from "../api/requester.js";

const url = 'http://localhost:3030/jsonstore/users';

async function post(data) {
    return await requester({method:'POST', url, data})
}

export default{
    post
}