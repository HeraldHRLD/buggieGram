import styled from 'styled-components'

export const Button = styled.button`
  background: #2aa7c9;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display:  block;
  width: 100%;
  text-align: center;
  bottom: 0;
  &[disabled]{
    opacity: .3;
  }
`