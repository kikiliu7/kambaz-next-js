/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { BsGripVertical, BsSearch, BsPlus } from "react-icons/bs";
import { FaCheckCircle, FaEllipsisV, FaRegEdit } from "react-icons/fa";
import { RootState } from "../../../store";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const [assignments, setAssignments] = useState<any[]>([]);

  const fetchAssignments = async () => {
    const data = await client.findAssignmentsForCourse(cid as string);
    setAssignments(data);
  };

  const handleDelete = async (assignmentId: string) => {
    if (window.confirm("Delete?")) {
      await client.deleteAssignment(assignmentId);
      setAssignments(assignments.filter((a) => a._id !== assignmentId));
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0"><BsSearch /></span>
          <input className="form-control border-start-0" placeholder="Search..." />
        </div>
        <div className="d-flex">
          <button className="btn btn-light border me-1">+ Group</button>
          {isFaculty && (
            <Link href={`/courses/${cid}/assignments/new`} className="btn btn-danger">
              <BsPlus className="fs-4" /> Assignment
            </Link>
          )}
        </div>
      </div>

      <ul className="list-group rounded-0">
        <li className="list-group-item p-0 mb-5 border-gray bg-light">
          <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center border">
            <BsGripVertical className="me-2 fs-3" />
            <b className="flex-grow-1">ASSIGNMENTS</b>
            <div className="d-flex align-items-center">
              <span className="badge rounded-pill border border-dark text-dark fw-normal me-3 bg-white px-3 py-2">
                40% of Total
              </span>
              <BsPlus className="fs-3 me-2" />
              <FaEllipsisV />
            </div>
          </div>

          <ul className="list-group rounded-0 border-top-0">
            {assignments.length > 0 ? (
              assignments.map((a: any) => (
                <li key={a._id} className="list-group-item p-3 d-flex align-items-center border-start border-success border-2">
                  <BsGripVertical className="me-2 fs-3 text-muted" />
                  <FaRegEdit className="text-success me-3 fs-4" />
                  <div className="flex-grow-1">
                    <Link href={`/courses/${cid}/assignments/${a._id}`}
                      className="fw-bold text-dark text-decoration-none fs-5">
                      {a.title}
                    </Link>
                    <div className="small">
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not available until</b> {a.availableFrom || "May 6 at 12:00am"} |
                      <br />
                      <b>Due</b> {a.dueDate} | {a.points} pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-3 fs-5" />
                    {isFaculty && (
                      <button onClick={() => handleDelete(a._id)}
                        className="btn text-danger p-0 me-3">
                        Delete
                      </button>
                    )}
                    <FaEllipsisV className="text-muted" />
                  </div>
                </li>
              ))
            ) : (
              <li className="list-group-item p-4 text-center text-muted">
                No Assignments Found for course: {cid}
              </li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}