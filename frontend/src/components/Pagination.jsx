import React, { useState } from "react";

export default function Pagination({ nPages, currentPage, setCurrentPage }) {
    const [pageRange, setPageRange] = useState(5);
    const pages = Array.from({ length: nPages }, (_, i) => i + 1);

    const getPageNumbersToShow = () => {
        const middlePage = Math.ceil(pageRange / 2);
        const startPage = Math.max(currentPage - middlePage + 1, 1);
        const endPage = Math.min(startPage + pageRange - 1, nPages);
        return Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
        );
    };

    const renderPageNumbers = getPageNumbersToShow().map((pageNumber) => (
        <li
            key={pageNumber}
            className={currentPage === pageNumber ? "active" : null}
        >
            <div
                className="page-link"
                onClick={() => setCurrentPage(pageNumber)}
                role="button"
            >
                {pageNumber}
            </div>
        </li>
    ));
    console.log(getPageNumbersToShow());

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
                <li className="page-item">
                    <div
                        className={`page-link ${
                            currentPage === 1 ? "disabled" : ""
                        }`}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        role="button"
                    >
                        Previous
                    </div>
                </li>
                <li className="page-item">
                    <div
                        className="page-link"
                        onClick={() => setCurrentPage(1)}
                        role="button"
                    >
                        {"<<"}
                    </div>
                </li>
                {renderPageNumbers}
                <li className="page-item">
                    <div
                        className="page-link"
                        onClick={() => setCurrentPage(nPages)}
                        role="button"
                    >
                        {">>"}
                    </div>
                </li>
                <li className="page-item">
                    <div
                        className={`page-link ${
                            currentPage === nPages ? "disabled" : ""
                        }`}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        role="button"
                    >
                        Next
                    </div>
                </li>
            </ul>
        </nav>
    );
}
