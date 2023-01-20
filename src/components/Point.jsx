import React from 'react'

const Point = ({ point, number, showNumbers }) => {
  return (
    <div className='point' style={{ left: point.x - 5 + 'px', top: point.y - 5 + 'px' }}>
      {showNumbers && <div className='number'>{number}</div>}
    </div>
  )
}

export default Point