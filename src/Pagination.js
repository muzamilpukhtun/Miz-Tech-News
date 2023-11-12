import React from 'react'
import { useGlobalContext } from './Context'
const Pagination = () => {
  const {page,nbPages,getPREVPage,getNEXTPage}=useGlobalContext();
  return (
    <>
    <div className="pagination-btn">
      <button onClick={()=>getPREVPage()}>PREV</button>
      <p>{page+1} of {nbPages}</p>
      <button onClick={()=>getNEXTPage()}>NEXT</button>
    </div>
    </>
  )
}

export default Pagination