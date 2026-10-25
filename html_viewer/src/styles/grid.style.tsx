import styled from 'styled-components';
import { appColors, publicUrl } from '../data/constants';

const iconFacebook = `${publicUrl}/img/icons/facebook-oval.svg`;
const iconInstagram = `${publicUrl}/img/icons/instagram-fill.svg`;
const iconTwitter = `${publicUrl}/img/icons/twitter-original.svg`;

export const Grid = styled.div.attrs({
  className: 'grid'
})`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 1em;
  row-gap: 1em;
  width: 100%;
`;

export const GridItem = styled.a.attrs({ className: 'grid_item' })`
  display: block;
  border-radius: 0.25em;
  border: solid 0.0625em ${appColors.mid};
  margin: 0;
  max-width: 50%;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  .icon {
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    filter: invert(63%) sepia(7%) saturate(1420%) hue-rotate(244deg) brightness(91%) contrast(84%);
    height: 3em;
    width: 3em;
    &.icon- {
      &Facebook {
        background-image: url(${iconFacebook});
      }
      &Instagram {
        background-image: url(${iconInstagram});
      }
      &Twitter {
        background-image: url(${iconTwitter});
      }
    }
  }
  .label {
    color: #333;
    display: block;
    font-size: 0.75em;
  }
`;
