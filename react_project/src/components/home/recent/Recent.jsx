import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Products Listed' subtitle='Given under are the products provided by the company at the given time. ' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
