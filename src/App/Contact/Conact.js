import React from 'react'
import Card from '../Card/Card'
import { Navigate } from 'react-router-dom'
import NavBar from '../Navbar/navbar';
import Footer from '../Footer/Footer';

export default function Contact() {
  const loggedInUser = sessionStorage.getItem("user");
  const contactStyles= {
    fontSize: "24px"
  }
  return (
    <>
      {!loggedInUser && <Navigate to="/" />}
      {loggedInUser &&
        <>
          <NavBar />
          <Card title="Contact Us" >
            <span style={contactStyles}>
              Contact us at below details, <br />
              Lorem@lorem.com, <br />
              857-222-9033 <br />
              Lorem towers, Boston, Massachusets, 02215
            </span>
          </Card>
          <Footer />
        </>
      }
    </>
  )
}
