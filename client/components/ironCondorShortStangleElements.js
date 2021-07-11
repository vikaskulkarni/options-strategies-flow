import React from "react";

let getIronCondorShortStangleElements = (instrumentSpot, peStrike, ceStrike, peHedgelegOffset, ceHedgelegOffset, peExitOffset, ceExitOffset) => {
  const chartObject = [
    {
      id: "999",
      data: {
        label: (
          <>
            IRON CONDOR <br /> SHORT STRANGLE
          </>
        ),
      },
      position: { x: 225, y: -60 },
      style: {
        background: "#F2EFE4",
        color: "#333",
        border: "2px solid #c1bfb6",
        width: "200px",
        fontWeight: "700",
      },
    },
    {
      id: "1",
      data: {
        label: (
          <>
            SPOT <strong>{instrumentSpot}</strong>
          </>
        ),
      },
      position: { x: 250, y: 0 },
      style: {
        background: "#aeccfe",
        color: "#333",
        border: "1px solid #416bb1",
      },
    },
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      label: "OTM PE",
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      type: "smoothstep",
      label: "OTM CE",
    },

    /******************** CE Side ********************/
    {
      id: "3",
      data: {
        label: (
          <>
            CE <strong>{ceStrike}</strong>
          </>
        ),
      },
      position: { x: 500, y: 100 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "111",
      data: {
        label: (
          <>
            CE <strong>{ceStrike + ceHedgelegOffset}</strong>
          </>
        ),
      },
      position: { x: 650, y: 100 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        width: "90px",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },

    {
      id: "4",
      data: {
        label: (
          <>
            SPOT <strong>{">="} {ceStrike}</strong>
          </>
        ),
      },
      position: { x: 500, y: 180 },
      style: {
        background: "#aeccfe",
        color: "#333",
        border: "1px solid #416bb1",
      },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      type: "smoothstep",
    },
    {
      id: "5",
      data: {
        label: (
          <>
            EXIT PE <strong>{peStrike}</strong>
          </>
        ),
      },
      position: { x: 500, y: 300 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
      },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      type: "smoothstep",
      label: "KEEP HEDGE LEGS TILL EXIT",
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      type: "smoothstep",
      label: "SHORT AVG",
    },
    {
      id: "e5-7",
      source: "5",
      target: "7",
      type: "smoothstep",
      label: `(${peStrike} + ${ceStrike})/2=${Math.round((peStrike + ceStrike) / 2)}`,
    },
    {
      id: "6",
      data: {
        label: (
          <>
            PE <strong>{Math.round((peStrike + ceStrike) / 2)}</strong>
          </>
        ),
      },
      position: { x: 400, y: 400 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },
    {
      id: "7",
      data: {
        label: (
          <>
            CE <strong>{ceStrike}</strong>
          </>
        ),
      },
      position: { x: 600, y: 400 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "e7-8",
      source: "7",
      target: "8",
      type: "smoothstep",
      label: "SPOT < " + ceStrike,
    },
    {
      id: "e7-9",
      source: "7",
      target: "9",
      type: "smoothstep",
      label: "SPOT >= " + (ceStrike + ceExitOffset),
    },
    {
      id: "8",
      data: {
        label: (
          <>
            <strong>EXIT IN PROFIT</strong>
          </>
        ),
      },
      position: { x: 500, y: 500 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "9",
      data: {
        label: (
          <>
            EXIT PE <strong>{Math.round((peStrike + ceStrike) / 2)}</strong>
          </>
        ),
      },
      position: { x: 700, y: 500 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
      },
    },
    {
      id: "e9-10",
      source: "9",
      target: "10",
      type: "smoothstep",
      label: "CREATE SHORT STRADDLE",
    },
    {
      id: "e9-11",
      source: "9",
      target: "11",
      type: "smoothstep",
      label: "AT " + ceStrike,
    },
    {
      id: "10",
      data: {
        label: (
          <>
            PE <strong>{ceStrike}</strong>
          </>
        ),
      },
      position: { x: 530, y: 600 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },
    {
      id: "11",
      data: {
        label: (
          <>
            CE <strong>{ceStrike}</strong>
          </>
        ),
      },
      position: { x: 870, y: 600 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "e9-12",
      source: "9",
      target: "12",
      type: "smoothstep",
      label: "SPOT < " + ceStrike,
    },
    {
      id: "12",
      data: {
        label: (
          <>
            <strong>EXIT IN PROFIT</strong>
          </>
        ),
      },
      position: { x: 620, y: 660 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e9-13",
      source: "9",
      target: "13",
      type: "smoothstep",
      label: "SPOT >= " + (ceStrike + ceExitOffset),
    },
    {
      id: "13",
      data: {
        label: (
          <>
            <strong>EXIT IN LOSS</strong>
          </>
        ),
      },
      position: { x: 780, y: 700 },
      style: {
        background: "#f0a3af",
        color: "#333",
        border: "1px solid #db1937",
      },
    },

    /******************** PE Side ********************/
    {
      id: "2",
      data: {
        label:
          (
            <>
              PE <strong>{peStrike}</strong>
            </>
          ),
      },
      position: { x: 0, y: 100 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },
    {
      id: "222",
      data: {
        label: (
          <>
            PE <strong>{(peStrike - peHedgelegOffset)}</strong>
          </>
        ),
      },
      position: { x: -90, y: 100 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        width: "90px",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "44",
      data: {
        label: (
          <>
            SPOT <strong>{"<="}{peStrike}</strong>
          </>
        ),
      },
      position: { x: 0, y: 180 },
      style: {
        background: "#aeccfe",
        color: "#333",
        border: "1px solid #416bb1",
      },
    },
    {
      id: "e2-44",
      source: "2",
      target: "44",
      type: "smoothstep",
    },
    {
      id: "55",
      data: {
        label: (
          <>
            EXIT CE <strong>{ceStrike}</strong>
          </>
        ),
      },
      position: { x: 0, y: 300 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
      },
    },
    {
      id: "e44-55",
      source: "44",
      target: "55",
      type: "smoothstep",
      label: "KEEP HEDGE LEGS TILL EXIT",
    },
    {
      id: "e55-66",
      source: "55",
      target: "66",
      type: "smoothstep",
      label: "SHORT AVG",
    },
    {
      id: "e55-77",
      source: "55",
      target: "77",
      type: "smoothstep",
      label: `(${peStrike} + ${ceStrike})/2=${Math.round((peStrike + ceStrike) / 2)}`,
    },
    {
      id: "66",
      data: {
        label: (
          <>
            PE <strong>{peStrike}</strong>
          </>
        ),
      },
      position: { x: -100, y: 400 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },
    {
      id: "77",
      data: {
        label: (
          <>
            CE <strong>{Math.round((peStrike + ceStrike) / 2)}</strong>
          </>
        ),
      },
      position: { x: 100, y: 400 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "e66-88",
      source: "66",
      target: "88",
      type: "smoothstep",
      label: "SPOT > " + peStrike,
    },
    {
      id: "e66-99",
      source: "66",
      target: "99",
      type: "smoothstep",
      label: "SPOT <= " + (peStrike - peExitOffset),
    },
    {
      id: "88",
      data: {
        label: (
          <>
            <strong>EXIT IN PROFIT</strong>
          </>
        ),
      },
      position: { x: -200, y: 500 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "99",
      data: {
        label: (
          <>
            EXIT CE <strong>{Math.round((peStrike + ceStrike) / 2)}</strong>
          </>
        ),
      },
      position: { x: 0, y: 500 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
      },
    },
    {
      id: "e99-100",
      source: "99",
      target: "100",
      type: "smoothstep",
      label: "CREATE SHORT STRADDLE",
    },
    {
      id: "e99-1111",
      source: "99",
      target: "1111",
      type: "smoothstep",
      label: "AT " + peStrike,
    },
    {
      id: "100",
      data: {
        label: (
          <>
            PE <strong>{peStrike}</strong>
          </>
        ),
      },
      position: { x: -170, y: 600 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },
    {
      id: "1111",
      data: {
        label: (
          <>
            CE <strong>{peStrike}</strong>
          </>
        ),
      },
      position: { x: 200, y: 600 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "e99-122",
      source: "99",
      target: "122",
      type: "smoothstep",
      label: "SPOT > " + peStrike,
    },
    {
      id: "122",
      data: {
        label: (
          <>
            <strong>EXIT IN PROFIT</strong>
          </>
        ),
      },
      position: { x: -80, y: 700 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e99-133",
      source: "99",
      target: "133",
      type: "smoothstep",
      label: "SPOT <= " + (peStrike - peExitOffset),
    },
    {
      id: "133",
      data: {
        label: (
          <>
            <strong>EXIT IN LOSS</strong>
          </>
        ),
      },
      position: { x: 80, y: 660 },
      style: {
        background: "#f0a3af",
        color: "#333",
        border: "1px solid #db1937",
      },
    },
  ];
  return chartObject;
};

export default getIronCondorShortStangleElements;