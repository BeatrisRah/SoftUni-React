import { useState } from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table/Table";
import CreateUser from "../CreateUser";

export default function Section() {
    const [formDisplay, setFormDisplay] = useState(false)
    function showForm(){
        setFormDisplay(true)
    }

    function hideForm(){
        setFormDisplay(false)
    }

    return (
        <section className="card users-container">
            <SearchBar />

            <div className="table-wrapper">
                {/* <!-- Overlap components  --> */}
                {formDisplay ? <CreateUser eventHandler={hideForm} /> : ''}
                <Table />
                

                
            </div>

            <button className="btn-add btn" onClick={showForm} >Add new user</button>

            <Pagination />
        </section>
    )
}