import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table/Table";
import CreateUser from "../CreateUser";
import UserDetails from "../UserDetails";

export default function Section() {
    const [formDisplay, setFormDisplay] = useState(false)
    const [userID, setUSerID] = useState('')
    const [userAdded, toggleUser] = useState(false)
    const [details, toggleDetails] = useState(false)
    

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

    function toggleAddUser(){
        toggleUser(u => !u)
    }

    return (
        <>
            {details ? <UserDetails userID={userID} toggleHandler={removeUserDetails} /> : ''}
            <section className="card users-container">
                <SearchBar />

                <div className="table-wrapper">
                    {/* <!-- Overlap components  --> */}
                    {formDisplay ? <CreateUser toggleAddUser={toggleAddUser} eventHandler={hideForm} /> : ''}
                    <Table detailsHanler={userDetails} userAdded={userAdded} />
                    

                    
                </div>

                <button className="btn-add btn" onClick={showForm} >Add new user</button>

                <Pagination />
            </section>
        </>
    )
}