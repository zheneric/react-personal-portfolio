import React from "react";

export default function MenuItem({ setMenuOpen, children }) {
  return <li onClick={() => setMenuOpen(false)}>{children}</li>;
}
