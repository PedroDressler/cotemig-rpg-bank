import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;

  & .container {
    background-color: rgba(255,255,255, .05);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    
    a {
      color: #eee;
      font-weight: bold;
      opacity: 1;
      transition: opacity .2s;
  
      &:hover {
        opacity: .7;
      }
    }
  }

  & .btn-container {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }
`

export default Container