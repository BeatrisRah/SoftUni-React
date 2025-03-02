import { useState, useEffect} from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table/Table";
import CreateUser from "../CreateUser";
import UserDetails from "../UserDetails";
import authService from "../../services/auth-service";

export default function Section() {
    const [formDisplay, setFormDisplay] = useState(false)
    const [userID, setUSerID] = useState('')
    const [details, toggleDetails] = useState(false)

    const [users, setUSers] = useState([])

    const addUser = (newUser) => {
        setUSers(u => ({...u, newUser }))
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const data =  await authService.getAllUsers()
                setUSers(data)
            } catch(err){
                console.log(err);
            }
            
        }
        fetchUsers()
        
    }, [])

    

    function userDetails(idUser){
        setUSerID(idUser)
        toggleDetails(true)
    }

    function removeUserDetails(){
        toggleDetails(false)
    }


    function showForm(){
        setFormDisplay(true)
    }

    function hideForm(){
        setFormDisplay(false)
    }


    return (
        <>
            {details ? <UserDetails userID={userID} toggleHandler={removeUserDetails} /> : ''}
            <section className="card users-container">
                <SearchBar />

                <div className="table-wrapper">
                    {/* <!-- Overlap components  --> */}
                    {formDisplay ? <CreateUser  eventHandler={hideForm} /> : ''}
                    <Table detailsHanler={userDetails}/>
                    

                    
                </div>

                <button className="btn-add btn" onClick={showForm} >Add new user</button>

                <Pagination />
            </section>
        </>
    )
}