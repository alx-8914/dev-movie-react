import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #000000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  border-radius: 8px; /* Adiciona bordas arredondadas ao container */

  iframe {
    border: none;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px; /* Bordas arredondadas no botão */
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #cc0000; /* Cor mais escura no hover */
    }
  }
`;
