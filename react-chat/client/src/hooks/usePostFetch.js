import { useEffect, useState } from "react"

const chatsUrl = 'http://localhost:3030/jsonstore/messenger'


export default function usePostFetch(defaultValuesSeter){
    const [val, setVal] = useState({content:'', user:'Bett'})


    const formSubmiter = (formData) => {
        const content = formData.get('content')
        setVal(v => ({...v, content:content}))

    }
    useEffect(() => {
        if(val.content === '') return;
        fetch(chatsUrl, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(val)
        })
        .then(res => res.json())
        .then(data => defaultValuesSeter(c => ([...c, data])))
    }, [val])

    return [formSubmiter]

}