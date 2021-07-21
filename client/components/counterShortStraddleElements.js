import React from "react";

let getCounterShortStraddleElements = (instrumentSpot, strikePrice, stopLossPercent) => {
  const chartObject = [
    {
      id: "999",
      data: {
        label: (
          <>
            SHORT STRADDLE <br /> COUNTER
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
      id: "e1-33",
      source: "1",
      target: "33",
      type: "smoothstep",
      label: "PE",
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      type: "smoothstep",
      label: "CE",
    },

    /******************** CE Side ********************/
    {
      id: "3",
      data: {
        label: (
          <>
            CE <strong>{strikePrice}</strong>
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
      id: "4",
      data: {
        label: (
          <>
            CE Stoploss triggered at <strong>{stopLossPercent}% Premium</strong>
          </>
        ),
      },
      position: { x: 500, y: 200 },
      style: {
        color: "#333",
        border: "1px solid #333",
      },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      type: "smoothstep",
      label: "KEEP STOPLOSS AT " + stopLossPercent + "% of original CE " + strikePrice + " Premium",
    },
    {
      id: "5",
      data: {
        label: (
          <>
            WAIT IF YOU FEEL TREND CONTINUES
          </>
        ),
      },
      position: { x: 250, y: 300 },
      style: {
        color: "#333",
        border: "1px solid #333",
      },
    },
    {
      id: "6",
      data: {
        label: (
          <>
            IF THE TREND CONTINUES
          </>
        ),
      },
      position: { x: 600, y: 300 },
      style: {
        color: "#333",
        border: "1px solid #333",
      },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      type: "smoothstep",
    },
    {
      id: "e4-6",
      source: "4",
      target: "6",
      type: "smoothstep",
    },
    {
      id: "7",
      data: {
        label: (
          <>
            PE <strong>{strikePrice}</strong>
          </>
        ),
      },
      position: { x: 480, y: 450 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },
    {
      id: "8",
      data: {
        label: (
          <>
            CE <strong>{strikePrice + 800}</strong>
          </>
        ),
      },
      position: { x: 720, y: 450 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "e6-7",
      source: "6",
      target: "7",
      type: "smoothstep",
      label: "SHORT CE where PREMIUM",
    },
    {
      id: "e6-8",
      source: "6",
      target: "8",
      type: "smoothstep",
      label: `1/2 OF ${strikePrice} PE`,
    },
    {
      id: "9",
      data: {
        label: (
          <>
            IN CASE
          </>
        ),
      },
      position: { x: 600, y: 520 },
      style: {
        border: "none",
      },
    },
    {
      id: "e7-9",
      source: "7",
      target: "9",
      type: "smoothstep",
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      type: "smoothstep",
    },
    {
      id: "10",
      data: {
        label: (
          <>
            GOES FURTHER UP
          </>
        ),
      },
      position: { x: 480, y: 600 },
      style: {
        background: "#f0a3af",
        color: "#333",
        border: "1px solid #db1937",
      },
    },
    {
      id: "11",
      data: {
        label: (
          <>
            CONSOLIDATES
          </>
        ),
      },
      position: { x: 600, y: 650 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "12",
      data: {
        label: (
          <>
            COMES DOWN
          </>
        ),
      },
      position: { x: 720, y: 600 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e9-10",
      source: "9",
      target: "10",
      type: "smoothstep",
    },
    {
      id: "e9-11",
      source: "9",
      target: "11",
      type: "smoothstep",
    },
    {
      id: "e9-12",
      source: "9",
      target: "12",
      type: "smoothstep",
    },
    {
      id: "13",
      data: {
        label: (
          <>
            <strong>EXIT IN SOME LOSS</strong>
          </>
        ),
      },
      position: { x: 480, y: 800 },
      style: {
        background: "#f0a3af",
        color: "#333",
        border: "1px solid #db1937",
      },
    },
    {
      id: "e10-13",
      source: "10",
      target: "13",
      type: "smoothstep",
    },
    {
      id: "14",
      data: {
        label: (
          <>
            <strong>EXIT IN SOME PROFIT</strong>
          </>
        ),
      },
      position: { x: 600, y: 720 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e11-14",
      source: "11",
      target: "14",
      type: "smoothstep",
    },
    {
      id: "15",
      data: {
        label: (
          <>
            <strong>EXIT IN PROFIT</strong>
          </>
        ),
      },
      position: { x: 720, y: 800 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e12-15",
      source: "12",
      target: "15",
      type: "smoothstep",
    },

    /******************** PE Side ********************/
    {
      id: "33",
      data: {
        label: (
          <>
            PE <strong>{strikePrice}</strong>
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
      id: "44",
      data: {
        label: (
          <>
            PE Stoploss triggered at <strong>{stopLossPercent}% Premium</strong>
          </>
        ),
      },
      position: { x: 0, y: 200 },
      style: {
        color: "#333",
        border: "1px solid #333",
      },
    },
    {
      id: "e33-44",
      source: "33",
      target: "44",
      type: "smoothstep",
      label: "KEEP STOPLOSS AT " + stopLossPercent + "% of original PE " + strikePrice + " Premium",
    },
    {
      id: "66",
      data: {
        label: (
          <>
            IF THE TREND CONTINUES
          </>
        ),
      },
      position: { x: -100, y: 300 },
      style: {
        color: "#333",
        border: "1px solid #333",
      },
    },
    {
      id: "e44-5",
      source: "44",
      target: "5",
      type: "smoothstep",
    },
    {
      id: "e44-66",
      source: "44",
      target: "66",
      type: "smoothstep",
    },
    {
      id: "77",
      data: {
        label: (
          <>
            PE <strong>{strikePrice - 800}</strong>
          </>
        ),
      },
      position: { x: -200, y: 450 },
      style: {
        background: "#c39999",
        color: "#333",
        border: "1px solid #4a0000",
        outline: "4px inset #c39999",
        outlineOffset: "-4px"
      },
    },
    {
      id: "88",
      data: {
        label: (
          <>
            CE <strong>{strikePrice}</strong>
          </>
        ),
      },
      position: { x: 20, y: 450 },
      style: {
        background: "#b5b5bb",
        color: "#333",
        border: "1px solid #2a2a33",
        outline: "4px inset #b5b5bb",
        outlineOffset: "-4px"
      },
    },
    {
      id: "e66-77",
      source: "66",
      target: "77",
      type: "smoothstep",
      label: "SHORT PE where PREMIUM",
    },
    {
      id: "e66-88",
      source: "66",
      target: "88",
      type: "smoothstep",
      label: `1/2 OF ${strikePrice} CE`,
    },
    {
      id: "99",
      data: {
        label: (
          <>
            IN CASE
          </>
        ),
      },
      position: { x: -100, y: 520 },
      style: {
        border: "none",
      },
    },
    {
      id: "e77-99",
      source: "77",
      target: "99",
      type: "smoothstep",
    },
    {
      id: "e88-99",
      source: "88",
      target: "99",
      type: "smoothstep",
    },
    {
      id: "100",
      data: {
        label: (
          <>
            COMES DOWN
          </>
        ),
      },
      position: { x: -200, y: 600 },
      style: {
        background: "#f0a3af",
        color: "#333",
        border: "1px solid #db1937",
      },
    },
    {
      id: "111",
      data: {
        label: (
          <>
            CONSOLIDATES
          </>
        ),
      },
      position: { x: -100, y: 650 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "122",
      data: {
        label: (
          <>
            GOES UP
          </>
        ),
      },
      position: { x: 20, y: 600 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e99-100",
      source: "99",
      target: "100",
      type: "smoothstep",
    },
    {
      id: "e99-111",
      source: "99",
      target: "111",
      type: "smoothstep",
    },
    {
      id: "e99-122",
      source: "99",
      target: "122",
      type: "smoothstep",
    },
    {
      id: "133",
      data: {
        label: (
          <>
            <strong>EXIT IN SOME LOSS</strong>
          </>
        ),
      },
      position: { x: -200, y: 800 },
      style: {
        background: "#f0a3af",
        color: "#333",
        border: "1px solid #db1937",
      },
    },
    {
      id: "e100-133",
      source: "100",
      target: "133",
      type: "smoothstep",
    },
    {
      id: "144",
      data: {
        label: (
          <>
            <strong>EXIT IN SOME PROFIT</strong>
          </>
        ),
      },
      position: { x: -100, y: 720 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e111-144",
      source: "111",
      target: "144",
      type: "smoothstep",
    },
    {
      id: "155",
      data: {
        label: (
          <>
            <strong>EXIT IN PROFIT</strong>
          </>
        ),
      },
      position: { x: 20, y: 800 },
      style: {
        background: "#cee5ce",
        color: "#333",
        border: "1px solid #85bf85",
      },
    },
    {
      id: "e122-155",
      source: "122",
      target: "155",
      type: "smoothstep",
    },
    
  ];
  return chartObject;
};

export default getCounterShortStraddleElements;