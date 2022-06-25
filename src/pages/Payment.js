import React from 'react'
import Header from '../components/Header'
import Sidenav from '../components/Sidenav'

export default function Payment() {
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
                                    <h3>Rp. 100,000.00</h3>
                                    <p>SPP</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-money-bill-wave" />
                                </div>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-6 col-6 mt-3">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>Rp. 0.00</h3>
                                    <p>DSP</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-coins" />
                                </div>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-6 col-6 mt-3">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>Rp. 0.00</h3>
                                    <p>DPP</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-money-bill" />
                                </div>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-6 col-6 mt-3">
                            {/* small box */}
                            <div className="small-box bg-secondary">
                                <div className="inner">
                                    <h3>Rp. 0.00</h3>
                                    <p>LAINNYA</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-12 col-6 mt-3">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>Rp. 100,000.00</h3>
                                    <p>TOTAL</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                </div>
                <div></div>
            </section>
        </div>
    </div>
  )
}
