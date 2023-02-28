import React from 'react'

function Rating(props) {
  return (
    <div>
        { Math.round(props.children) === 1 ? <h3>★☆☆☆☆</h3> : null}
        { Math.round(props.children) === 2 ? <h3>★★☆☆☆</h3> : null}
        { Math.round(props.children) === 3 ? <h3>★★★☆☆</h3> : null}
        { Math.round(props.children) === 4 ? <h3>★★★★☆</h3> : null}
        { Math.round(props.children) === 5 ? <h3>★★★★★</h3> : null}
    </div>
  )
}

export default Rating