import React from 'react'

const Header = ({searchValue,setSearchValue,handleSearch}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="input-group g_input mb-3">
              <span className="input-group-text" id="basic-addon1"><i className="material-icons">search</i></span>
              <input type="text" className="form-control" onBlur={handleSearch} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search" aria-label="search" aria-describedby="basic-addon1" />
            </div>
           
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">  <i className="material-icons">home</i></a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header