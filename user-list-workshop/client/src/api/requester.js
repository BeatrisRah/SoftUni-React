export default async function({method, url, data}){
    const options = {
        method,
        headers: {'Content-type': 'application/json'}
    }

    if(data){
        options.body = JSON.stringify(data)
    }

    return await fetch(url, options)
}