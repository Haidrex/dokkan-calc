import { SAMultiplier } from "../models/SAMultiplier";

// export const SAMultipliers: SAMultiplier[] = [
//   {
//     name: "Supreme",
//     SA: [{ SA1: 2.5 }, { SA10: 4.3 }, { SA15: 5.3 }, { SA20: 6.3 }],
//   },
//   {
//     name: "Immense",
//     SA: [{ SA1: 2.8 }, { SA10: 5.05 }, { SA15: 6.3 }],
//   },
//   {
//     name: "Collosal",
//     SA: [
//       { SA1: 3 },
//       { SA10: 3.45 },
//       { SA15: 3.7 },
//       { SA20: 4.25 },
//       { SA25: 4.5 },
//     ],
//   },
//   {
//     name: "Mega-Collosal",
//     SA: [
//       { SA1: 3.5 },
//       { SA10: 4.4 },
//       { SA15: 4.9 },
//       { SA20: 5.7 },
//       { SA25: 6.3 },
//     ],
//   },
// ];

export const SAMultipliers: SAMultiplier[] = [
  {
    name: "Supreme",
    SA: [
      {
        name: "SA1",
        value: 2.5,
      },
      { name: "SA10", value: 4.3 },
      { name: "SA15", value: 5.3 },
      { name: "SA20", value: 6.3 },
    ],
  },
  {
    name: "Immense",
    SA: [
      {
        name: "SA1",
        value: 2.8,
      },
      { name: "SA10", value: 5.05 },
      { name: "SA15", value: 6.3 },
    ],
  },
  {
    name: "Collosal",
    SA: [
      {
        name: "SA1",
        value: 3,
      },
      { name: "SA10", value: 3.45 },
      { name: "SA15", value: 3.7 },
      { name: "SA20", value: 4.25 },
      { name: "SA25", value: 4.5 },
    ],
  },
  {
    name: "Mega-Collosal",
    SA: [
      {
        name: "SA1",
        value: 3.5,
      },
      { name: "SA10", value: 4.4 },
      { name: "SA15", value: 4.9 },
      { name: "SA20", value: 5.7 },
      { name: "SA25", value: 6.3 },
    ],
  },
];
