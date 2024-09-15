import { globalStyle, style } from "@vanilla-extract/css";

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
});

const box = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: "24px",
  border: "2px solid #F3F4F5",
});

const collapse = style({
  marginLeft: "37px",
});

globalStyle(`${collapse} > div`, {
  marginLeft: "-21px",
});

const radioCheck = style({
  maxWidth: "272px",
});

globalStyle(`${radioCheck} > span > span:first-child`, {
  fontWeight: "500",
});

const radioSmart = style({
  maxWidth: "296px",
});

globalStyle(`${radioSmart} > span > span:first-child`, {
  fontWeight: "500",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  collapse,
  radioSmart,
  radioCheck,
};
