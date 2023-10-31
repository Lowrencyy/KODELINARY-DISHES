import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"


function Search() {
  return (
    <FormStyle>
      <div>
    
      <input type="text"/>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.div`

margin:0rem;
padding-top:40px;
div{
  width:100%;
  position:relative;
}

input{
  border:none;
  background:linear-gradient(35deg,#494949 , #313131);
  font-size:1.5rem;
  color:white;
  padding:0.6rem 2rem;
  border:none;
  border-radius:1rem;
  outline:none;
  width:50%;
  margin-left:23.5%;
}

svg{
  position:absolute;
  top:50%;
  left:0%;
  transform:translate(100%,-50%);
  color:white;

}

`
export default Search


last do 1:33 