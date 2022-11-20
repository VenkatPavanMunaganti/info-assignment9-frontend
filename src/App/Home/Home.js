import React from 'react'
import Card from '../Card/Card'
import image from '../../images/placeholder.png'
import { Navigate } from 'react-router-dom'
import NavBar from '../Navbar/navbar'
import Footer from '../Footer/Footer'

export default function Home() {
  const loggedInUser = sessionStorage.getItem("user");
  let fullname=null;
  if(loggedInUser){
    fullname =  "Welcome, "+(JSON.parse(loggedInUser)).fullname
  }
  return (
    <>
      {!loggedInUser && <Navigate to="/" />}
      {loggedInUser &&
        <>
          <NavBar />
          <Card title={fullname}
            image={image}
          >
            <p>Quisque mattis placerat auctor. Suspendisse. Etiam vitae augue ut libero porta efficitur. Donec at tristique orci, pulvinar pretium turpis. Suspendisse non blandit augue. Quisque rutrum mi dictum diam fermentum, in egestas lectus mattis. Maecenas sem lectus, fermentum sit amet mauris vitae, rhoncus cursus mi. Duis lectus leo, vehicula quis aliquam nec, en ornare interdum. Donec ultrices sem id suscipit sodales. Sed eget posuere erat. Etiam hendrerit justo nec turpis venenatis, at convallis arcu pretium. Maecenas vel mollis sapien, vel vulputate velit. Praesent posuere vulputate erat, quis venenatis tortor iaculis eu. Proin fringilla in nisi quis scelerisque" </p>
          </Card>
          <Footer />
        </>
      }
    </>
  )
}
