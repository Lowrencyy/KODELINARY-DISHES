import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

 let params = useParams();

 const [details , setDetails] = useState({});

 const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
 );
 const detailData = await data.json();
 setDetails(detailData);
};

useEffect(() => {
    fetchDetails();

},[params.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <Info>
            <Button>Instruction</Button>
            <Button>Ingredients</Button>
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top:1rem;;
margin-bottom:5rem;
margin-left:21rem;
display:flex;


.active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
}

h2{
    margin-bottom:2rem;
    font-weight:900;
    text-align:center;
}

li{
font-size:1.2rem;
line-height:2.5rem;
}

ul{
    margin-top:2rem;
}

img{
    border-radius:30px;
}
`

const Button = styled.button`
padding: 1rem 2rem;
color:313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;

`

const Info = styled.div`
margin-left:10rem;
`

export default Recipe;