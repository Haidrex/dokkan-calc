import { SAEffect } from "../models/SAEffect";

export const SAEffects: Array<SAEffect> = [
  {
    value: 0,
    name: "None",
    boost: 0,
  },
  {
    value: 1,
    name: "Raises ATK",
    boost: 0.3,
    activatesOnSameTurn: false,
  },
  {
    value: 2,
    name: "Raises DEF",
    boost: 0.3,
    activatesOnSameTurn: false,
  },
  {
    value: 3,
    name: "Raises ATK & DEF",
    boost: 0.2,
    activatesOnSameTurn: false,
  },
  {
    value: 4,
    name: "Greatly raises ATK",
    boost: 0.5,
    activatesOnSameTurn: false,
  },
  {
    value: 5,
    name: "Greatly raises DEF",
    boost: 0.5,
    activatesOnSameTurn: false,
  },
  {
    value: 6,
    name: "Greatly raises ATK & DEF",
    boost: 0.5,
    activatesOnSameTurn: false,
  },
  {
    value: 7,
    name: "Raises ATK for 1 turn",
    boost: 0.3,
    activatesOnSameTurn: true,
  },
  {
    value: 8,
    name: "Raises DEF for 1 turn",
    boost: 0.3,
    activatesOnSameTurn: true,
  },
  {
    value: 9,
    name: "Raises ATK & DEF for 1 turn",
    boost: 0.3,
    activatesOnSameTurn: true,
  },
  {
    value: 10,
    name: "Greatly raises ATK for 1 turn",
    boost: 0.5,
    activatesOnSameTurn: true,
  },
  {
    value: 11,
    name: "Greatly raises DEF for 1 turn",
    boost: 0.5,
    activatesOnSameTurn: true,
  },
  {
    value: 12,
    name: "Greatly raises ATK & DEF for 1 turn",
    boost: 0.5,
    activatesOnSameTurn: true,
  },
];
