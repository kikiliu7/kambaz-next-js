"use client";
import Link from "next/link";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md"; 
import { FaCheckCircle } from "react-icons/fa"; 
import { IoEllipsisVertical } from "react-icons/io5"; 

export default function Assignments() {
  const assignments = [
    { id: "123", title: "A1", available: "May 6 at 12:00am", due: "May 13 at 11:59pm", pts: 100 },
    { id: "124", title: "A2", available: "May 13 at 12:00am", due: "May 20 at 11:59pm", pts: 100 },
    { id: "125", title: "A3", available: "May 20 at 12:00am", due: "May 27 at 11:59pm", pts: 100 },
  ];

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between mb-4">
        <input id="wd-search-assignment" className="form-control w-25" placeholder="Search for Assignments" />
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-1">+ Group</button>
          <button id="wd-add-assignment" className="btn btn-danger">+ Assignment</button>
        </div>
      </div>

      <ListGroup className="rounded-0 border-0" id="wd-assignments-list">
        <ListGroupItem className="p-3 ps-2 bg-light border-bottom-0 d-flex align-items-center justify-content-between">
          <div>
            <BsGripVertical className="me-2 fs-3" />
            <b className="fs-5">ASSIGNMENTS</b>
          </div>
          <div className="d-flex align-items-center">
            <span className="border rounded-pill p-2 py-1 me-3 text-secondary" style={{fontSize: "0.8rem"}}>40% of Total</span>
            <button className="btn text-dark p-0">+</button>
            <IoEllipsisVertical className="ms-3 fs-5" />
          </div>
        </ListGroupItem>

        <ListGroup className="rounded-0">
          {assignments.map((a) => (
            <ListGroupItem key={a.id} className="wd-assignment-list-item d-flex align-items-center p-3 ps-1">
              <BsGripVertical className="me-2 fs-3 text-secondary" />
              <MdAssignment className="me-3 fs-4 text-success" />
              
              <div className="flex-grow-1">
                <Link href={`/courses/1234/assignments/${a.id}`} className="text-dark fw-bold text-decoration-none fs-5">
                  {a.title}
                </Link>
                <div className="text-secondary" style={{ fontSize: "0.9rem" }}>
                  <span className="text-danger">Multiple Modules</span> | 
                  <b> Not available until</b> {a.available} |
                </div>
                <div className="text-secondary" style={{ fontSize: "0.9rem" }}>
                  <b>Due</b> {a.due} | {a.pts} pts
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-3 fs-5" />
                <IoEllipsisVertical className="fs-5 text-secondary" />
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </ListGroup>
    </div>
  );
}