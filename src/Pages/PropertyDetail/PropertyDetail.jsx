import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function PropertyDetail() {
    const {id }=useParams()
    const [property,setProperty]=useState([])
    
    const url = `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1fc8c2832emshb2fa4e7c1c9408cp1fb4e1jsn0e2323619837',
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
		}
	};
	
	useEffect(()=>{
		fetch(url, options).then(res=>res.json()).then(data=>setProperty(data))
	},[])
  
  return (
    <div>{property.title}</div>
  )
}

PropertyDetail.propTypes = {}

export default PropertyDetail
