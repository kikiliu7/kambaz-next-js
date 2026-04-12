/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import * as client from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [assignment, setAssignment] = useState<any>({
    title: "New Assignment",
    course: cid,
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  const fetchAssignment = async () => {
    if (aid && aid !== "new") {
      const data = await client.findAssignmentsForCourse(cid as string);
      const existing = data.find((a: any) => a._id === aid);
      if (existing) setAssignment(existing);
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [aid]);

  const handleSave = async () => {
    if (aid && aid !== "new") {
      await client.updateAssignment(assignment);
    } else {
      await client.createAssignment(cid as string, assignment);
    }
    router.push(`/courses/${cid}/assignments`);
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
            value={assignment.points || ""}
            readOnly={!isFaculty}
            onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
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
              type="date"
              value={assignment.dueDate || ""}
              readOnly={!isFaculty}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Available From</label>
            <input
              className="form-control"
              type="date"
              value={assignment.availableFrom || ""}
              readOnly={!isFaculty}
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Available Until</label>
            <input
              className="form-control"
              type="date"
              value={assignment.availableUntil || ""}
              readOnly={!isFaculty}
              onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <button
          onClick={() => router.push(`/courses/${cid}/assignments`)}
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