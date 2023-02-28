import React from 'react'

function Greetings(props) {
  return (
    <div>
        <h2 lang={props.lang}>{props.children}</h2>
    </div>
  )
}

export default Greetings