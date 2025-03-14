import { useEffect, useState } from "react";

const chatsUrl = 'http://localhost:3030/jsonstore/messenger'

export default function useFetcher(type, initialState = [] ){
    const [state, setState] = useState(initialState)
    const [pending, setPending] = useState(true)

    let urlToFetch = ''
    const options = {}

    switch(type){
        case 'get':
            urlToFetch = chatsUrl;
            break;
    }

    useEffect(() => {
        setPending(true)
        fetch(urlToFetch, options)
        .then(res => res.json())
        .then(data => {
            setState(Object.values(data))
            setPending(false)
        })
    }, [])

    return [pending, state]
}