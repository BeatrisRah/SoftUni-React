import { useState, useEffect} from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table/Table";
import CreateUser from "../CreateUser";
import UserDetails from "../UserDetails";
import authService from "../../services/auth-service";
import DeleteUser from "../DeleteUser";


export default function Section() {
    const [users, setUsers] = useState([])
    const [showCreate, toggleCreate] = useState(false)
    const [showdetails, toggleDetails] = useState(null)
    const [deleteUserID, setDeleteUserID] = useState(null)

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
        setUserID(null)
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

    const showDeleteForm = (userID) => {
        setDeleteUserID(userID)
    }

    const showEditForm = (userID) => {
        setUserID(userID)
        showCreateForm()
    }

    return (
        <>
            <section className="card users-container">
                <SearchBar />

                <div className="table-wrapper">
                    {/* <!-- Overlap components  --> */}
                    {showCreate && <CreateUser onClose={closeCreateForm} user={users.find(u => u._id === userId)} addUser={addUser} />}
                    {showdetails && <UserDetails onClose={closeDetailsForm} user={users.find(u => u._id === showdetails)} />}
                    {deleteUserID && <DeleteUser />}
                    <Table users={users} onShow={showDetailsForm} onEdit={showEditForm} onDelete={showDeleteForm} />
                    

                    
                </div>

                <button className="btn-add btn" onClick={showCreateForm} >Add new user</button>

                <Pagination />
            </section>
        </>
    )
}