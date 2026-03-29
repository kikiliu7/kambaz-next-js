/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import { FaAlignJustify } from "react-icons/fa6";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  return (
    <div id="wd-courses">
      <div className="d-flex align-items-center p-3">
        <FaAlignJustify className="me-3 fs-4 text-danger" />
        <h2 className="mb-0 fs-4 text-danger">
          {course?.name} &gt;
        </h2>
      </div>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block" style={{ width: "160px" }}>
          <CourseNavigation /> 
        </div>
        <div className="flex-fill p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
