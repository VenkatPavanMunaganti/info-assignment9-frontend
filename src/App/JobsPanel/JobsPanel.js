import React from 'react'
import Card from '../Card/Card'
import { Navigate } from 'react-router-dom'
import NavBar from '../Navbar/navbar'
import Footer from '../Footer/Footer'
import './JobsPanel.css'
import Jobs from '../Jobs/Jobs'

export default function JobsPanel() {

  var jobsContainer = {
    width: "350px"
  };

  const jobs = [
    "Software Developer",
    "Data Analyst",
    "Cloud Engineer",
    "Security Analyst",
    "Project Manager"
  ];
  
  const loggedInUser = sessionStorage.getItem("user");
  return (
    <>
      {!loggedInUser && <Navigate to="/" />}
      {loggedInUser &&
        <>
          <NavBar />
          <Card title="Jobs">
            <div className='jobsContainer' style={jobsContainer}>
              {
                jobs.map((job) => <Jobs key={job} job={job}/>)
              }
            </div>
          </Card>
          <Footer />
        </>
      }
    </>
  )
}
