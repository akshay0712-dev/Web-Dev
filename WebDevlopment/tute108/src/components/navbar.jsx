import React, { useEffect} from 'react'

const navbar = ({color}) => {

useEffect(() => {
  alert("colour was changed to " + color)


}, [color])


  return (
    <div>navbar of color {color}</div>
  )
}

export default navbar