import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem",
  textAlign: "center",
  height: "100vh",
});

const title = style({
  marginBottom: "1rem",
});

export const smartSt = {
  container,
  title,
};
