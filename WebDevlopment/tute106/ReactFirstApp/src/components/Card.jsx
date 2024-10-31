import React from 'react';
import './Card.css'; // Make sure to create a corresponding CSS file

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg" alt="Card Image" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Card {props.title}</h2>
        <p className="card-description">This is a brief description of the card {props.content} content. You can add more details here.</p>
        <button className="card-button">Read More</button>
      </div>
    </div>
  );
};

export default Card;
