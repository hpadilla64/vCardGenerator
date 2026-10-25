import { useContext } from 'react';
import { ConfigContext } from '../data/context';
import { Grid, GridItem } from '../styles/grid.style';

export default function SocialMenu() {
  const config = useContext(ConfigContext).vCard;

  return (
    <Grid>
      {config.social.map(({ url, type, user }: { url: string; type: string; user: string }, index: number) => {
        return (
          <GridItem href={url} target="_blank" rel="noreferrer" key={`social_${index}`}>
            <i className={`icon icon-${type}`}></i>
            <span className="label">{user}</span>
          </GridItem>
        );
      })}
    </Grid>
  );
}
