import styled, { css } from 'styled-components';
import media from './media';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  ${media.tablet`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    max-width: 960px;
  `}
  ${media.desktop`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    max-width: 960px;
  `}
`;

export default Container;