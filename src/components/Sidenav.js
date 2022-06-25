import React from 'react'
import Home from '../pages/Home'

export default function Sidenav() {
  return (
    <div>
    {/* Main Sidebar Container */}
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="#" className="brand-link">
            {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
            <span className="brand-text font-weight-light mx-5 px-3">StudentApp</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            {/* SidebarSearch Form */}
            <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                    </button>
                    </div>
                </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="nav-icon fas fa-home" />
                            <p>
                                Dashboard
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/attandance" className="nav-link">
                            <i className="nav-icon fas fa-fingerprint" />
                            <p>
                                Attendance Today
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/lesson" className="nav-link">
                            <i className="nav-icon fas fa-list" />
                            <p>
                                Lesson List
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/violation" className="nav-link">
                            <i className="nav-icon fas fa-edit" />
                            <p>
                                Violation
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/payment" className="nav-link">
                            <i className="nav-icon fas fa-wallet" />
                            <p>
                                Payment
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
    {/* /.sidebar */}
    </aside>
    </div>
  )
}
