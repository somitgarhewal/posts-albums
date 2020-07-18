//This component is to display page no. and go to another page
import React from 'react';

const Pagination = (props) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.item.length / props.itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            {pageNumbers.map(number =>
                <button key={number} id={number} onClick={(event) => props.setCurrentPage(event.target.id)}>
                    {number}
                </button>
            )}
        </>
    )
}

export default Pagination