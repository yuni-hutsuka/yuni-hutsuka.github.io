import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://yuni-hutsuka.github.io/",
  author: "Yuni Hutsuka",
  desc: "Yuni's website.",
  title: "YuniSanctorum",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["ja-JP"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:yuni.wille999@gmail.com",
    linkTitle: `Send an email to Yuni Hutsuka`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/466475544393941002",
    linkTitle: `Yuni Hutsuka on Discord`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/yuni-hutsuka",
    linkTitle: `Yuni Hutsuka on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yuni_hutsuka",
    linkTitle: `Yuni Hutsuka on Twitter`,
    active: true,
  },
];
