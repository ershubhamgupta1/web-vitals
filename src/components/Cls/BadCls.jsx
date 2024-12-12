import React from 'react'

const BadClsScoreComp = ()=>{
    return (
      <>
      <h2> Bad Score</h2>
            <img
        src="https://lostintokyo.co.uk/content/uploads/sites/3/2017/02/test-image-7MB-1180x787.jpg"
        alt="Unoptimized" 
        // width={'1180px'} height={'787px'}
        // loading='lazy'
      />
      <div style={{ height: 2000, background:'red' }}>
        <p>Scroll down for more content...</p>
      </div>

      </>
    )
  }

export default BadClsScoreComp
