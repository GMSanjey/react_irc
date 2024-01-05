import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
// import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?'  />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to Undo   Your Trusted Partner in Household Services!

At "Undo", we pride ourselves on being a beacon of innovation and excellence in Service. Established with a vision to redefine the standards of the industrt, we have evolved into a dynamic force committed to delivering unparalleled solutions that meet and exceed our clients' expectations.</p>
            <p>"Undo" was founded on the principles of integrity, innovation, and customer satisfaction. Since our inception, we have embarked on a journey of continuous improvement, staying at the forefront of [Industry/Service] trends and technological advancements. Our commitment to excellence has enabled us to build lasting relationships with clients and partners alike.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src="https://imgs.search.brave.com/kQftJ3cxJTIdLSI7OgBmOm8E3V9YWPmKPjZXJEldD-M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA2/Mzk4NDYzMC9waG90/by9sYXJnZS10cmF2/ZWwtYWdlbmN5LW9m/ZmljZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9c29aWU9l/QlZDVzdlU1VZaFVS/NVk0SnlYWmZuTF9V/VXc4cnh1b0lQV2JY/OD0" alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
