"use client"
import React from "react";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function QueryParameters() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      
      <FormControl 
        id="wd-query-parameter-a"
        className="mb-2"
        defaultValue={a} 
        type="number"
        onChange={(e) => setA(Number(e.target.value))} 
      />

      <FormControl 
        id="wd-query-parameter-b"
        className="mb-2"
        defaultValue={b} 
        type="number"
        onChange={(e) => setB(Number(e.target.value))} 
      />

      <div className="mt-3">
        <a id="wd-query-parameter-add"
           className="btn btn-primary me-2"
           href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
          Add {a} + {b}
        </a>

        <a id="wd-query-parameter-subtract"
           className="btn btn-danger me-2"
           href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
          Subtract {a} - {b}
        </a>

        <a id="wd-query-parameter-multiply"
           className="btn btn-warning me-2"
           href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
          Multiply {a} * {b}
        </a>

        <a id="wd-query-parameter-divide"
           className="btn btn-success"
           href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
          Divide {a} / {b}
        </a>
      </div>

      <hr />
    </div>
  );
}