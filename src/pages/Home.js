import React from 'react'
import Header from '../components/Header'
import Sidenav from '../components/Sidenav'
import LessonTimetable from '../components/LessonTimetable'

export default function Home() {
  return (
    <div>
        <Sidenav/>
        <Header/>
        <div className="content-wrapper">
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="small-box bg-gradient-secondary mt-3">
                                <div className="inner">
                                    <h2 className="text-right m-auto">Welcome back, Dzahah Saifullah</h2>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>25</h3>
                                    <p>June 2022</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-fingerprint" />
                                </div>
                                <a href="#" className="small-box-footer">See Lesson <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>95<sup style={{fontSize: 20}}>%</sup></h3>
                                    <p>Attendance</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-fingerprint" />
                                </div>
                                <a href="#" className="small-box-footer">Attendance Today <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>10</h3>
                                    <p>Unfinished Task</p>
                                </div>
                                <div className="icon">
                                    <i className="far fa-copy" />
                                </div>
                                <a href="#" className="small-box-footer">Do it Now ! <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>5</h3>
                                    <p>Offense Points</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="#" className="small-box-footer">Check your Violation<i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                    <LessonTimetable/>
                </div>
                <div></div>
            </section>
        </div>
    </div>
  )
}
