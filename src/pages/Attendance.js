import React from 'react'
import Sidenav from '../components/Sidenav'
import Header from '../components/Header'

function Attendance() {
  return (
    <div>
      <Sidenav/>
      <Header/>
      <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 col-6 mt-3">
                      <div className="small-box bg-success">
                        <div className="inner px-5 pt-4">
                          <h4>You are Present, Today</h4>
                          <p>Have a nice day !</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-6 mt-3">
                      <div className="card">
                      <table class="table text-center col-lg-12">
                        <thead className="table-active">
                            <tr>
                                <th scope="col col-lg-1">No</th>
                                <th scope="col col-lg-3">Tanggal</th>
                                <th scope="col col-lg-4">Datang</th>
                                <th scope="col col-lg-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>25/juni</td>
                                <td>08.00</td>
                                <td>masuk</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>25/juni</td>
                                <td>08.00</td>
                                <td>masuk</td>
                            </tr>
                            <tr>
                                <td scope="row">3</td>
                                <td>25/juni</td>
                                <td>08.00</td>
                                <td>masuk</td>
                            </tr>
                        </tbody>
                    </table>
                      </div>
                    </div>

                  </div>
                </div>
            </section>
      </div>
    </div>
  )
}

export default Attendance