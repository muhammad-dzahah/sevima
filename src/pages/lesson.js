import React from 'react'
import Header from '../components/Header'
import LessonTimetable from '../components/LessonTimetable'
import ListTask from '../components/Listtask'
import Sidenav from '../components/Sidenav'

export default function lesson() {
  return (
    <div>
        <Sidenav/>
        <Header/>
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-lg-12 col-6 mt-3">
                            <div className="small-box">
                                <div className="card bg-success px-4 pt-3">                                    
                                    <h4 >Jadwal Pelajaran</h4>
                                    <p>2022/2023</p>
                                </div>
                                <LessonTimetable/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-6 mt-4">
                            <div className="small-box">
                                <div className="card bg-success px-4 pt-3">                                    
                                    <h4 >List Tugas</h4>
                                    <p>June</p>
                                </div>
                                <ListTask/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    </div>
  )
}
