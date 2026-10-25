import { useContext } from "react";
import { ConfigContext } from "../data/context";
import { HeaderBanner } from "../styles/profileBanner.style";
import { Grid, GridItem } from "../styles/grid.style";

export default function ProfileBanner() {
  const config = useContext(ConfigContext);
  const {
    publicUrl,
    vCard: { firstName, additionalName, lastName, namePrefix, phones, photoURL }
  } = config;

  const iconContact = "/img/icons/postcard.svg";
  const iconPhone = "/img/icons/phone.svg";
  const iconWhatsapp = "/img/icons/whatsapp.svg";

  return (
    <HeaderBanner $src={`${publicUrl}${photoURL}`}>
      <div className='profile_menu'>
        <h1 className='profile_name'>
          {`${namePrefix !== "" ? namePrefix + " " : namePrefix}${firstName} ${
            additionalName !== "" ? additionalName + " " : additionalName
          }${lastName}`}
        </h1>
        <Grid>
          <GridItem href={`${publicUrl}/vcards/test.vcf`} download={true}>
            <i className={`icon`}>
              <img src={`${publicUrl}${iconContact}`} alt='Agregar contacto' />
            </i>
          </GridItem>
          <GridItem
            href={`tel:${phones
              .map(({ type, number }: { type: string; number: string }) =>
                type === "WORK" ? number : null
              )
              .filter(Boolean)
              .join()}`}
            target='_blank'
          >
            <i className={`icon`}>
              <img src={`${publicUrl}${iconPhone}`} alt='Teléfono' />
            </i>
          </GridItem>
          <GridItem
            href={`https://wa.me/${phones
              .map(({ type, number }: { type: string; number: string }) =>
                type === "WhatsApp" ? number.replace("+", "") : null
              )
              .filter(Boolean)
              .join()}`}
            target='_blank'
          >
            <i className={`icon`}>
              <img src={`${publicUrl}${iconWhatsapp}`} alt='Whatsapp' />
            </i>
          </GridItem>
        </Grid>
      </div>
    </HeaderBanner>
  );
}
