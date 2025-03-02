import { useState, useEffect} from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table/Table";
import CreateUser from "../CreateUser";
import UserDetails from "../UserDetails";
import authService from "../../services/auth-service";

export default function Section() {


    return (
        <>
            <section className="card users-container">
                <SearchBar />

                <div className="table-wrapper">
                    {/* <!-- Overlap components  --> */}
                    {/* {formDisplay ? <CreateUser  eventHandler={hideForm} /> : ''} */}
                    <Table />
                    

                    
                </div>

                <button className="btn-add btn"  >Add new user</button>

                <Pagination />
            </section>
        </>
    )
}