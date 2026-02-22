/* eslint-disable @typescript-eslint/no-explicit-any */
// app/courses/[cid]/assignments/page.tsx
"use client";
import { useParams } from "next/navigation";
import * as db from "../../../database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsCaretDownFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a: any) => a.course === cid);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between mb-4">
        <input className="form-control w-50" placeholder="Search..."/>
        <div>
          <button className="btn btn-secondary me-1">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>

      <ListGroup className="rounded-0 shadow-sm">
        <ListGroupItem className="bg-light p-3 border-bottom-0 d-flex justify-content-between align-items-center">
          <div className="fw-bold">
            <BsGripVertical className="me-2 fs-3" />
            <BsCaretDownFill className="me-2" />
            ASSIGNMENTS
          </div>
          <div className="d-flex align-items-center">
            <span className="border rounded-pill px-3 py-1 text-muted me-3">40% of Total</span>
            <span className="fs-4 me-3">+</span>
            <IoEllipsisVertical className="fs-5" />
          </div>
        </ListGroupItem>

        {assignments.map((a: any) => (
          <ListGroupItem key={a._id} className="d-flex align-items-center p-3 border-start border-success wd-assignment">
            <BsGripVertical className="me-2 fs-3 text-muted" />
            <MdAssignment className="me-3 fs-3 text-success" />
            
            <div className="flex-grow-1">
              <Link href={`/courses/${cid}/assignments/${a._id}`} className="text-dark fw-bold text-decoration-none fs-5">
                {a.title}
              </Link>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {a.available} |
                <br />
                <b>Due</b> {a.due} | {a.pts} pts
              </div>
            </div>

            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3 fs-5" />
              <IoEllipsisVertical className="fs-5 text-muted" />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}