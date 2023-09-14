import { useEffect, useState } from "react";
import { setActivePage } from "../store/productReducer";
import { useDispatch, useSelector } from 'react-redux';

const getPageArray = (arrayLength=0, startNumber) => {
    return [...Array(arrayLength)].map((item, idx) => {
        return startNumber + idx + 1;
    })
}

const Pagination = ({totalPages}) => {
    const totalPageButtons = Math.min(totalPages, 10);
    const pageArray = getPageArray(totalPageButtons, 0);
    const [pages, setPages] = useState(pageArray);
    const { activePage } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (activePage > pages[pages.length - 1]) {
            const startNumber = activePage - totalPageButtons;
            const newPageArray = getPageArray(totalPageButtons, startNumber)
            setPages(newPageArray);
        }

        if(activePage < pages[0]) {
            const startNumber = activePage - 1;
            const newPageArray = getPageArray(totalPageButtons, startNumber)
            setPages(newPageArray);
        }
    }, [activePage]);

    return (
        <div className="pagination">
            <button onClick={() => { dispatch(setActivePage(activePage - 1))}} disabled={activePage === 1}>Prev </button>
            {
                pages?.map((pageNumber) => {
                    return (<button className={activePage === pageNumber ? 'selected' : ''} onClick={() => {dispatch(setActivePage(pageNumber))}}>{pageNumber}</button>)
                })
            }
            <button disabled={totalPages === activePage}  onClick={() => { dispatch(setActivePage(activePage + 1)) }}>Next</button>
        </div>
    )
}

export default Pagination;