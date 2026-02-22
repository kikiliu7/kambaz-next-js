/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const assignment = db.assignments.find((a: any) => a._id === aid);

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input 
          id="wd-name" 
          className="form-control" 
          defaultValue={assignment?.title} 
        />
      </div>

      <div className="mb-3">
        <textarea 
          id="wd-description" 
          className="form-control" 
          rows={10}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application hosted on Netlify. The landing page should include the following: Your name and ASURITE, a link to your GitHub repository, a link to the Kanban application..."
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-points" className="col-form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input 
            id="wd-points" 
            className="form-control" 
            defaultValue={assignment?.pts} 
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label className="col-form-label">Assign</label>
        </div>
        <div className="col-md-9 border p-3 rounded">
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
            <input 
              type="date" 
              id="wd-due-date" 
              className="form-control" 
              defaultValue="2024-05-13" 
            />
          </div>

          <div className="row">
            <div className="col-6">
              <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
              <input 
                type="date" 
                id="wd-available-from" 
                className="form-control" 
                defaultValue="2024-05-06" 
              />
            </div>
            <div className="col-6">
              <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
              <input 
                type="date" 
                id="wd-available-until" 
                className="form-control" 
                defaultValue="2024-05-20" 
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <Link 
          href={`/Kambaz/Courses/${cid}/Assignments`} 
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Link 
          href={`/Kambaz/Courses/${cid}/Assignments`} 
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}