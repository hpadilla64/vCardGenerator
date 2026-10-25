import styled from 'styled-components';
import { appColors } from '../data/constants';

export const HeaderBanner = styled.div<{ $src: string }>`
  background-image: url(${(props) => props.$src});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: solid 1em ${appColors.dark};
  border-radius: 0 0 30% 0;
  height: 60vh;
  margin-bottom: 1em;
  position: relative;
  text-align: center;
  width: 100%;
  .profile_menu {
    bottom: 0.5em;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 0 1em;
    position: absolute;
    text-align: left;
    width: 70%;
    .profile_name {
      color: #fff;
      font-size: 2em;
      margin: 0;
      padding: 0;
      text-shadow: 0.0625em 0.125em 0.125em ${appColors.dark};
      margin-bottom: 1em;
      width: 100%;
    }
    .grid {
      .grid_item {
        background-color: ${appColors.dark};
        border-radius: 100%;
        border: none;
        box-shadow: 0.125em 0.125em 0.0625em ${appColors.mid};
        height: 2em;
        margin-right: auto;
        width: 2em;
        .icon {
          height: 90%;
          line-height: 0;
          margin: 0;
          padding: 0;
          width: 90%;
          img {
            display: block;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
`;
