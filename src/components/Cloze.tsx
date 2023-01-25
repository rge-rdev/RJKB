import React, { useState } from "react";
import "./cloze.css";

//TODO: insert Cloze Component into make_str to

interface ClozeProps {
  text: string;
}

export default function Cloze({ text }: ClozeProps) {
  const [hide, setHide] = useState(true);

  return (
    <span
      className={hide ? "cloze--hidden" : "cloze--reveal"}
      onClick={(e) => setHide(!hide)}
    >
      {text}
    </span>
  );
}

//https://github.com/dazulu/react-spoiler-tag/blob/master/src/index.tsx
