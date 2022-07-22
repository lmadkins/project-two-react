import React from 'react';
import Card from 'react-bootstrap/Card';


const ResultsCard = ({ element }) =>(
  
  <Card
    key={element.name} 
    className='resultCard'>

    <Card.Title>
      {element.name}
    </Card.Title> 

    <span>
    {Math.round((element.distance) * 100) / 100} miles away
    <a 
        href={`https://www.google.com/maps/dir/?api=1&origin=&destination=${element.latitude}%2C${element.longitude}`}
        rel='noreferrer'
        target='_blank'>
        Get Directions
      </a> 
    </span>
    <br/>
    {element.street}  
    <span>
      {element.accessible === true && 
        <span 
          className='badge accessibleBadge'>
          ADA Accessible
        </span>}
        
    {element.unisex === true && 
      <span 
        className='badge unisexBadge'>
        Gender Neutral
      </span>} 
    
    {element.changing_table === true && 
      <span 
        className='badge changingTableBadge'>
        Changing Tables
      </span>} 
    </span>
  </Card>
); 

export default ResultsCard;