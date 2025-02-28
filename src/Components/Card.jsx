import React from 'react';
import styled from 'styled-components';

const Card = ({price,pack,info,features = []}) => {
  return (
    <StyledWrapper>
      <div className="plan mb-3 mt-3">
        <div className="inner">
          <span className="pricing">
            <span>
              {price}
            </span>
          </span>
          <p className="title">{pack}</p>
          <p className="info">{info}</p>
          <ul className="features">
          {features.map((features, index) => (
            <li key={index} className="feature-item">
              <span className="icon">
                <svg height={24} width={28} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              <span><strong>{features}</strong></span>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .plan {
    border-radius: 16px;
    // box-shadow: 30px 30px 30px -20px rgba(23, 22, 22, 0.2);
    padding: 10px;
    background-color: #fff;
    color: #697e91;
    max-width: 350px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .plan strong {
    font-weight: 600;
    color: #425275;
  }

  .plan .inner {
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    background-color:rgb(230, 220, 35);
    border-radius: 12px;
    position: relative;
  }

  .plan .pricing {
    position: absolute;
    top: 0;
    right: 0;
    background-color:rgb(135, 137, 142);
    border-radius: 99em 0 0 99em;
    display: flex;
    align-items: center;
    padding: 0.625em 0.75em;
    font-size: 1.25rem;
    font-weight: 600;
    color:rgb(250, 252, 255);
  }

  .plan .pricing small {
    color:rgb(255, 255, 255);
    font-size: 0.75em;
    margin-left: 0.25em;
  }

  .plan .title {
    font-weight: 600;
    font-size: 1.25rem;
    color: #425675;
    margin-top: -8%;
  }

  .plan .title + * {
    margin-top: 0.85rem;
  }

  .plan .info + * {
    margin-top: 1rem;
  }

  .plan .features {
    display: flex;
    flex-direction: column;
  }

  .plan .features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plan .features li + * {
    margin-top: 0.75rem;
  }

  .plan .features .icon {
    background-color: #1FCAC5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .plan .features .icon svg {
    width: 14px;
    height: 14px;
  }

  .plan .features + * {
    margin-top: 1.25rem;
  }

  .plan .action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }



  .plan .button {
    background-color: #6558d3;
    border-radius: 6px;
    color: #fff;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    border: 0;
    outline: 0;
    width: 100%;
    padding: 0.625em 0.75em;
    text-decoration: none;
  }

  .plan .button:hover, .plan .button:focus {
    background-color: #4133B7;
  }`;

export default Card;
