import React from 'react'

function Header() {
  return (
    <div>
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav d-flex mb-auto">
                <li className="nav-item mt-2">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li>
                    <div className="content-header ">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard v1</li>
                        </ol>
                    </div>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto my-2">
                {/* Navbar Search */}
                {/* <li className="nav-item">
                    <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i className="fas fa-search" />
                    </a>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search" />
                                </button>
                                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i className="fas fa-times" />
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li> */}
                {/* fullscreen */}
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                </li>
            </ul>
        </nav>
        {/* /.navbar */}
    </div>
  )
}

export default Header