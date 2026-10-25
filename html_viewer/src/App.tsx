import React from "react";
import "./styles/App.css";
import ProfileBanner from "./components/profileBanner";
import SocialMenu from "./components/socialMenu";
import { ConfigContext } from "./data/context";
import vCardData from "./data/vcard.json";
import { publicUrl } from "./data/constants";

function App() {
  return (
    <ConfigContext.Provider
      value={{
        publicUrl,
        vCard: vCardData
      }}
    >
      <ProfileBanner />
      <SocialMenu />
    </ConfigContext.Provider>
  );
}

export default App;
