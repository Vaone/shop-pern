import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../reducers/deviceReducer";

const Pages = () => {
  const totalCount = useSelector(state => state.device.totalCount); 
  const limit = useSelector(state => state.device.limit); 
  const currentPage = useSelector(state => state.device.currentPage);
  const pageCount = Math.ceil(totalCount / limit);
  const dispatch = useDispatch();
  
  let pages = []
  for(let i=0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Pagination className="mt-4">
      {pages.map((page) => (
        <Pagination.Item 
          key={page}
          active={currentPage === page}
          onClick={()=> dispatch(setCurrentPage(page))}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
