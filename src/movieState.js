//Import Images

import void1 from "./img/void1.jpg";
import goodtimes from "./img/goodtimes-small.png";

import omyt from "./img/omyt.png";

import void2 from './img/void2.jpg';

import omyt2 from './img/omyt2.jpg';
import heroin2 from './img/heroin2.jpg';

export const MovieState = () => {
  return [
    {
      title: "THE VOID",
      mainImg: void1,
      secondaryImg: void2,
      url: "/work/the-athlete",
      linkNumber: "413961598",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        }
      ]
    },
    {
      title: "Heroin",
      mainImg: goodtimes,
      url: "/work/good-times",
      linkNumber: "426968565",
      secondaryImg: heroin2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        }
      ]
    },
    {
      title: "OMYT",
      mainImg: omyt,
      url: "/work/the-racer",
      linkNumber: "397709899",
      secondaryImg: omyt2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
        }
      ]
    }
  ];
};
