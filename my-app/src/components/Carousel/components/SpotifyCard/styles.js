import styled from 'styled-components';

export const SpotifyCardContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 300px;
  height: 380px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;