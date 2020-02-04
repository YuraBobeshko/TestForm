import { useEffect } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

function Portal({ children, className }) {
  const el = document.createElement("div");
  el.className = className || "";

  useEffect(() => {
    document.body.appendChild(el);
    return () => document.body.removeChild(el);
  }, [el]);

  return ReactDOM.createPortal(children, el);
}

export default Portal;
