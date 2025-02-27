import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table/Table";

export default function Section() {
    return (
        <section className="card users-container">
            {/* <!-- Search bar component --> */}
            <SearchBar />

            {/* <!-- Table component --> */}
            <div className="table-wrapper">
                {/* <!-- Overlap components  --> */}
                <Table />
                

                
            </div>

            {/* <!-- New user button  --> */}
            <button className="btn-add btn">Add new user</button>

            {/* <!-- Pagination component  --> */}
            <Pagination />
        </section>
    )
}