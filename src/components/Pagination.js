const Pagination = ({ totalNoOfPages, currentPage, setCurrentPage, pageSize,setPageSize,setIsLoading }) => {
    const pageNumberClickHandler = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const previousPageClickHandler = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const nextPageClickHandler = () => {
        setCurrentPage((prev) => prev + 1);
    };
    const handleSelectChange = (event) => {
        setIsLoading(true);
        setPageSize(Number(event.target.value));
        setCurrentPage(0);
    };

    return (
        <>
        <div className="pagination" aria-label="Pagination controls">
            <ul>
            <li className="pagination-item">
                <label htmlFor="recordsPerPage">Records per page :</label>
                <select
                id="recordsPerPage"
                aria-label="Select records per page"
                onChange={handleSelectChange}
                value={pageSize}
                >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                </select>
            </li>
            <li className="page-link">
                {[...Array(totalNoOfPages).keys()].map((n) => (
                <button
                    key={n}
                    type="button"
                    className={`btn ${currentPage === n ? "btn-active" : ""}`}
                    onClick={() => pageNumberClickHandler(n)}
                    aria-label={`Go to page ${n + 1}`}
                >
                    {n + 1}
                </button>
                ))}
            </li>
            <li>
                <button
                type="button"
                className="btn-primary me-10"
                disabled={currentPage === 0}
                onClick={() => previousPageClickHandler()}
                aria-label="Previous page"
                >
                <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                type="button"
                className="btn-primary"
                onClick={() => nextPageClickHandler()}
                disabled={currentPage === totalNoOfPages - 1}
                aria-label="Next page"
                >
                <i className="fa-solid fa-chevron-right"></i>
                </button>
            </li>
            </ul>
        </div>
        </>
    );
};

export default Pagination;