import React, { useEffect } from 'react'
import Card2 from '../components/Card2'
import Card from '../components/Card'
import '../styles/POTD.css'
import '../styles/app.css'
import '../styles/home.css'

import striversimg from '../images/strivers.webp'
import leetcodeimg from '../images/leetCode.png'

const POTD = () => {

  return (
    <div className='page-content'>
      <div className='pod'>
        <h1 className='heading'>Today's Problems</h1>
        <Card2
          name="Two sum"
          difficulty="Easy"
          url="https://leetcode.com/problems/two-sum/"
        />
        <Card2
          name="Merge Intervals"
          difficulty="Medium"
          url="https://leetcode.com/problems/merge-intervals/"
        />
        <Card2
          name="median of two sorted array in rotated sorted array"
          difficulty="hard"
          url="https://leetcode.com/problems/median-of-two-sorted-arrays/"
        />
      </div>
      <h1 className='heading2'>Solve More problems</h1>
        <div className='lower-container'>
          <Card
            title={"Striver's SDE Sheet"}
            imgurl={striversimg}
            url=""
            externalurl="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
          />
          <Card
            title={"Leetcode Top 150"}
            imgurl={leetcodeimg}
            url=""
            externalurl="https://leetcode.com/problem-list/top-interview-questions/"
          />
        </div>
    </div>
  )
}

export default POTD