/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addNewAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const assignments = useSelector((state: RootState) => state.assignmentReducer?.assignments) || [];
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  
  const isFaculty = currentUser?.role === "FACULTY";
  const existing = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(existing || {
    title: "New Assignment",
    course: cid,
    pts: "100",
    due: "",
    available: ""
  });

  const handleSave = () => {
    if (existing) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addNewAssignment({ ...assignment, _id: new Date().getTime().toString() }));
    }
    router.push(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input 
          className="form-control" 
          value={assignment.title}
          readOnly={!isFaculty}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} 
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label className="col-form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input 
            className="form-control" 
            value={assignment.pts || ""} 
            readOnly={!isFaculty}
            onChange={(e) => setAssignment({ ...assignment, pts: e.target.value })}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3 text-end">
          <label className="col-form-label">Assign</label>
        </div>
        <div className="col-md-9 border p-3 rounded">
          <div className="mb-3">
            <label className="form-label fw-bold">Due</label>
            <input 
              className="form-control" 
              placeholder="e.g. May 13 at 11:59pm"
              value={assignment.due || ""} 
              readOnly={!isFaculty}
              onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Available</label>
            <input 
              className="form-control" 
              placeholder="e.g. May 6 at 12:00am"
              value={assignment.available || ""} 
              readOnly={!isFaculty}
              onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <button 
          onClick={() => router.push(`/Kambaz/Courses/${cid}/Assignments`)} 
          className="btn btn-secondary me-2"
        >
          Cancel
        </button>
        {isFaculty && (
          <button onClick={handleSave} className="btn btn-danger">
            Save
          </button>
        )}
      </div>
    </div>
  );
}