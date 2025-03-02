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


    return (
        <>
            <section className="card users-container">
                <SearchBar />

                <div className="table-wrapper">
                    {/* <!-- Overlap components  --> */}
                    {showCreate && <CreateUser onClose={closeCreateForm} user={userId} />}
                    <Table users={users}  />
                    

                    
                </div>

                <button className="btn-add btn" onClick={showCreateForm} >Add new user</button>

                <Pagination />
            </section>
        </>
    )
}