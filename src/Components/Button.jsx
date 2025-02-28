import React from 'react';
import styled from 'styled-components';

const Button = () => {

    const handleClick = () =>{
        window.open("https://wa.me/917358382190", "_blank")
    }
  return (
    <StyledWrapper>
      <button onClick={handleClick}> <span>Book on WhatsApp !</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   outline: none;
   cursor: pointer;
   border: none;
   padding: 0.9rem 2rem;
   margin: 0;
   font-family: inherit;
   font-size: inherit;
   position: relative;
   display: inline-block;
   letter-spacing: 0.05rem;
   font-weight: 700;
   font-size: 17px;
   border-radius: 500px;
   overflow: hidden;
   background: #66ff66;
   color: #ffbb00;
   box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  button span {
   position: relative;
   z-index: 10;
   transition: color 0.4s;
  }

  button:hover span {
   color: black;
  }

  button::before,
  button::after {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 0;
  }

  button::before {
   content: "";
   background:rgb(0, 0, 0);
   width: 120%;
   left: -10%;
   transform: skew(30deg);
   transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
   transform: translate3d(100%, 0, 0);
  }`;

export default Button;
