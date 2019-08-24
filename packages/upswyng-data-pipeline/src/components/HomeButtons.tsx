import React from "react";
import { THomeButtonAnchor, THomeButtonRouterLink } from "../types";
import { HomeRouterLink, HomeAnchorLink } from "./HomeLink";
import HomeButton from "./HomeButton";
import { colors } from "../App.styles";
import { StyleSheet, View } from "react-native";

import BananaIcon from "../icons/Banana";
import BusinessCenterIcon from "../icons/BusinessCenter";
import CallIcon from "../icons/Call";
import DirectionsBusIcon from "../icons/DirectionsBus";
import DoorIcon from "../icons/Door";
import HomeIcon from "../icons/Home";
import HygieneIcon from "../icons/Hygiene";
import LocalHospitalIcon from "../icons/LocalHospital";
import PeopleIcon from "../icons/People";
import PetsIcon from "../icons/Pets";
import SocksIcon from "../icons/Socks";
import WifiIcon from "../icons/Wifi";

const routerLinkButtons: THomeButtonRouterLink[] = [
  {
    text: "Food",
    icon: BananaIcon,
    linkProps: {
      to: "/food",
    },
    color: colors.gold,
  },
  {
    text: "Shelter",
    icon: HomeIcon,
    linkProps: {
      to: "/shelters",
    },
    color: colors.orangeDark,
  },
  {
    text: "Hygiene",
    icon: HygieneIcon,
    linkProps: {
      to: "/hygiene",
    },
    color: colors.teal,
  },
  {
    text: "Transit",
    icon: DirectionsBusIcon,
    linkProps: {
      to: "/transit",
    },
    color: colors.green,
  },
  {
    text: "Resources",
    icon: SocksIcon,
    linkProps: {
      to: "/resources",
    },
    color: colors.purple,
  },
  {
    text: "Hotlines",
    icon: CallIcon,
    linkProps: {
      to: "/hotlines",
    },
    color: colors.pink,
  },
  {
    text: "Health",
    icon: LocalHospitalIcon,
    linkProps: {
      to: "/health",
    },
    color: colors.red,
  },
  {
    text: "Wifi",
    icon: WifiIcon,
    linkProps: {
      to: "/wifi",
    },
    color: colors.blue,
  },
  {
    text: "Job Training",
    icon: BusinessCenterIcon,
    linkProps: {
      to: "/job-training",
    },
    color: colors.lavendar,
  },
  {
    text: "Social Services",
    icon: PeopleIcon,
    linkProps: {
      to: "/social-services",
    },
    color: colors.brown,
  },
];

const coordinatedEntryButton: THomeButtonAnchor = {
  text: "Coordinated Entry",
  href: "https://www.bouldercounty.org/homeless/",
  icon: DoorIcon,
  color: colors.rosewood,
  target: "_blank",
};

const styles = StyleSheet.create({
  twoColumn: {
    alignContent: "stretch",
    flex: 5,
    width: "100%",
  },
  oneColumn: {
    alignContent: "stretch",
    flex: 1,
    width: "100%",
    borderColor: "blue",
  },
});

const HomeButtons = function() {
  return (
    <>
      <View style={styles.twoColumn}>
        {routerLinkButtons.map((button, i, buttons) => {
          const leftButton = buttons[i - 1];
          const rightButton = buttons[i];
          if (i % 2 === 1) {
            return (
              <View
                key={button.text}
                style={{
                  alignContent: "stretch",
                  flexDirection: "row",
                  flex: 1,
                  marginBottom: 8,
                }}>
                <HomeButton
                  buttonColor={leftButton.color}
                  text={leftButton.text}
                  icon={leftButton.icon}
                />
                <View style={{ width: 8, flexDirection: "row" }} />
                <HomeButton
                  buttonColor={rightButton.color}
                  text={rightButton.text}
                  icon={rightButton.icon}
                />
              </View>
            );
          }
        })}
      </View>
      <View style={styles.oneColumn}>
        <View style={{ flex: 1, marginBottom: 8 }}>
          <HomeButton
            buttonColor={coordinatedEntryButton.color}
            text={coordinatedEntryButton.text}
            icon={coordinatedEntryButton.icon}
          />
        </View>
      </View>
    </>
  );
};

export default HomeButtons;
