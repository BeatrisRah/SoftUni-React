import { useState, useEffect} from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table/Table";
import CreateUser from "../CreateUser";
import UserDetails from "../UserDetails";
import authService from "../../services/auth-service";


export default function Section() {
    const [users, setUsers] = useState([])
    const [showCreate, toggleCreate] = useState(false)
    const [showdetails, toggleDetails] = useState(null)

    const [userId, setUserID] = useState(null)

    useEffect(() => {
        authService.getAllUsers()
        .then(data => setUsers(Object.values(data)))
    }, [])

    const showCreateForm = () => {
        toggleCreate(true)
    }

    const closeCreateForm = () => {
        toggleCreate(false)
    }

    const addUser = (newUSer) => {
        setUsers(u => ([...u, newUSer]))
    }

    const showDetailsForm = (userID) => {
        toggleDetails(userID)
    }

    const closeDetailsForm = () => {
        toggleDetails(null)
    }


    return (
        <>
            <section className="card users-container">
                <SearchBar />

                <div className="table-wrapper">
                    {/* <!-- Overlap components  --> */}
                    {showCreate && <CreateUser onClose={closeCreateForm} user={userId} addUser={addUser} />}
                    {showdetails && <UserDetails onClose={closeDetailsForm} user={users.find(u => u._id === showdetails)} />}
                    <Table users={users} onShow={showDetailsForm} />
                    

                    
                </div>

                <button className="btn-add btn" onClick={showCreateForm} >Add new user</button>

                <Pagination />
            </section>
        </>
    )
}