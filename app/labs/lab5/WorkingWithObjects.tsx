"use client"
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

  const [module, setModule] = useState({
    id: 2, name: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS", 
    course: "Web Development"
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects"> 
      <h3>Working With Objects</h3>

      <h4>Modifying Assignment</h4>
      <a id="wd-update-assignment-title" className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75 mb-2" defaultValue={assignment.title} 
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}/>

      <a id="wd-update-assignment-score" className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <FormControl type="number" className="w-75 mb-2" defaultValue={assignment.score} 
        onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}/>

      <a id="wd-update-assignment-completed" className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        <label className="form-check-label">Completed</label>
      </div>

      <hr />

      <h4>Modifying Module</h4>
      <a id="wd-update-module-name" className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <FormControl className="w-75 mb-2" defaultValue={module.name} 
        onChange={(e) => setModule({ ...module, name: e.target.value })}/>

      <a id="wd-update-module-description" className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Description
      </a>
      <FormControl className="w-75 mb-2" defaultValue={module.description} 
        onChange={(e) => setModule({ ...module, description: e.target.value })}/>

      <hr />
      
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary me-2" href={ASSIGNMENT_API_URL}>Get Assignment</a>
      <a className="btn btn-primary" href={MODULE_API_URL}>Get Module</a>
      
      <h4 className="mt-3">Retrieving Properties</h4>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}/title`}>Get Title</a>
      <a className="btn btn-primary" href={`${MODULE_API_URL}/name`}>Get Module Name</a>
    </div>
  );
}