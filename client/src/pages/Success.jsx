import React from 'react'
import {useLocation } from "react-router-dom"
const Success = () => {
    const location = useLocation()
  return (
    <div>Success{console.log(location)}</div>
  )
}

export default Success