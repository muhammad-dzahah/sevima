import React from 'react'
import Header from '../components/Header'
import Sidenav from '../components/Sidenav'

export default function violation() {
  return (
    <div>
        <Sidenav/>
        <Header/>
        <div className="content-wrapper">
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="col-lg-6 col-6 mt-3">
                            {/* small box */}
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>5</h3>
                                    <p>Points</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-6 mt-3">
                                <div className="small-box bg-success">
                                    <div className="inner px-5 pt-4">
                                        <h4>Excelentt</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
