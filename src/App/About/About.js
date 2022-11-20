import React from 'react'
import Card from '../Card/Card'
import image from '../../images/placeholder.png'
import { Navigate } from 'react-router-dom'
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/navbar';

export default function About() {
  const loggedInUser = sessionStorage.getItem("user");
  return (
    <>
      {!loggedInUser && <Navigate to="/" />}
      {loggedInUser &&
        <>
        <NavBar />
        <Card title="About"
          image={image}
        >
          <p>Lorem ipsum dolor sit amet, consectetur at auctor. Suspendisse bibendum ante non venenatis ornare. Nunc eu pulvinar justo. Etiam vitae augue ut libero porta efficitur. Donec at tristique orci, pulvinar pretium turpis. Suspendisse non blandit augue. Quisque rutrum mi dictum diam fermentum, in egestas lectus mattis. Maecenas sem lectus, fermentum sit amet mauris vitae, rhoncus cursus mi. Duisiquam nec, egestas a quam. In porta massa auctor sapien ornare interdum. Donec ultrices sem id suscipit sodales. Se erat. Etiam hendrerit justo nec turpis venenatis, at convallis arcu pretium. Maecenas vel mollis sapien, vel vulputate velit. Praesent posuere vulputate erat, quis venenatis tortor iaculis eu. Proin fringilla in nisi quis scelerisque</p>
        </Card>
        <Footer />
        </>
      }
    </>
  )
}
