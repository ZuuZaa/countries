import styled from "styled-components";

export const Button = styled.button`
  background: inherit;
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  cursor: pointer,
  font-size: 1.1rem;
  font-weight: 300;
  transition: all .3s;

  img {
    width: 1.5rem;
    height: 1.5rem; 
    margin-inline: 0.8rem;
    filter: ${({ theme }) => theme.icon};
  }
  
  &:hover {
    transform: scale(1.04)
  }
  `;