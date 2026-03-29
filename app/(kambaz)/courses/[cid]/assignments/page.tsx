/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical, BsSearch, BsPlus } from "react-icons/bs";
import { FaCheckCircle, FaEllipsisV, FaRegEdit } from "react-icons/fa";
import { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const assignments = useSelector((state: RootState) => state.assignmentReducer?.assignments) || [];
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const filteredAssignments = assignments.filter((a: any) => 
    a.course === cid as string
  );

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
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((a: any) => (
                <li key={a._id} className="list-group-item p-3 d-flex align-items-center border-start border-success border-2">
                  <BsGripVertical className="me-2 fs-3 text-muted" />
                  <FaRegEdit className="text-success me-3 fs-4" />
                  
                  <div className="flex-grow-1">
                    <Link href={`/courses/${cid}/assignments/${a._id}`} className="fw-bold text-dark text-decoration-none fs-5">
                      {a.title}
                    </Link>
                    <div className="small">
                      <span className="text-danger">Multiple Modules</span> | 
                      <b> Not available until</b> {a.available || "May 6 at 12:00am"} | 
                      <br />
                      <b>Due</b> {a.due} | {a.pts} pts
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-3 fs-5" />
                    {isFaculty && (
                      <button 
                        onClick={() => window.confirm("Delete?") && dispatch(deleteAssignment(a._id))} 
                        className="btn text-danger p-0 me-3"
                      >
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