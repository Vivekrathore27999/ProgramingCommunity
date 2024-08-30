import React from 'react'
import Card3 from '../components/Card3'
import Card from '../components/Card'
import '../styles/contests.css'

import contestslogo from '../images/contestslogo.png'
import codechefimg from '../images/codechef.png'
import leetcodeimg from '../images/leetCode.png'

const Contests = () => {
  return (
    <div className='page-content'>
      <div className='contests'>
        <h1 className='heading'>Our Upcoming Contests</h1>
        <div className='contest-cards'>
          <Card3
            name="weekly contest 1"
            imgurl={contestslogo}
            externalurl="https:/www.google.com"
          />
          <Card3
            name="weekly contest 2"
            imgurl={contestslogo}
            externalurl="https:/www.google.com"
          />
          <Card3
            name="weekly contest 3"
            imgurl={contestslogo}
            externalurl="https:/www.google.com"
          />
        </div>
      </div>
      <h1 className='heading2'>other contests</h1>
      <div className='lower-container'>
        <Card
          title={"Leetcode weekly contest"}
          imgurl={leetcodeimg}
          url=""
          externalurl="https://leetcode.com/contest/"
        />
        <Card
          title={"codechef starters contests"}
          imgurl={codechefimg}
          url=""
          externalurl="https://codechef.com/contests"
        />
      </div>
    </div>
  )
}

export default Contests