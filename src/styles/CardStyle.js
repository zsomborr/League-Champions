import styled from "styled-components";

export default styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: darkgray;
  text-align: center;
  width: 200px;
  padding: 10px;
  float: left;
  margin: 10px;
  color: black;
  font-size: 1rem;
  &:hover {
    box-shadow: 0 10px 18px 5px #000;
    background-color: gray;
    color: white;
  }
`;
