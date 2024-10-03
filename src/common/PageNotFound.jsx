import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

function PageNotFound() {

  return (
    
    <>
      <h1>Page Not Found</h1>
      <p><NavLink to='/Home'>Exit</NavLink> from this page</p>
    </>
  )
}

export default PageNotFound