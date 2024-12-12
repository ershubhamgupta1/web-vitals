import React from 'react'

const GoodLCPScore = ()=>{
    return (
      <>
        <h2> Good CLP Score</h2>
        <img
          src="https://lostintokyo.co.uk/content/uploads/sites/3/2017/02/test-image-7MB-1180x787.jpg"
          alt="Unoptimized"
          width="1180"
          height="787"
          loading="lazy" // Prioritize LCP image
          decoding="async" // Improve rendering pipeline
          style={{ display: "block", maxWidth: "100%", height: "auto" }} // Ensure responsive display
          />

        <div style={{ height: 2000, background: 'red' }}>
          <p>Scroll down for more content...</p>
        </div>
      </>

    )
  }

export default GoodLCPScore
