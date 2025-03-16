import { useEffect, useState } from "react"
import { useUser } from "../context/UserContext"
import {v4 as uuid} from 'uuid'

const chatsUrl = 'http://localhost:3030/jsonstore/messenger'


export default function usePostFetch(defaultValuesSeter){
    const {user, login, logout} = useUser()
    const [val, setVal] = useState({content:null, author:user})
    const [error, setError] = useState(null)


    const formSubmiter = (formData) => {
        const content = formData.get('content')
        const id = uuid()
        setVal(v => ({...v, content:content, id}))

    }
    useEffect(() => {
        if(!val.content) return
        if(val.content === '' ) {
            setError('Please type a message')
            return
        };

        if(!user){
            setError('Plese log in!')
            return;
        }

        //if no errors, clear last ones
        setError(null)

        fetch(chatsUrl, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(val)
        })
        .then(res => res.json())
        .then(data => defaultValuesSeter(c => ([...c, data])))
    }, [val.content])

    return [formSubmiter, error]

}