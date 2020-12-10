import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: space-around;
  background: #fcfcfc;
  bottom: 0;
  left: 0;
  right:0;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;
  max-width: 500px;
  position: fixed;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #8a8a8a;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current]{
    color: #000;

    &:after{
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 40px;
      line-height: 20px;
    }
  }
`