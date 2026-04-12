"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Breadcrumb from "./BreadCrumb";
import * as db from "../../database";

export default function CourseNavigation() {

  const pathname = usePathname();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const course = db.courses.find((c) => c._id === cid);

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      <Breadcrumb course={course} />
      <hr />
      {links.map((link) => {
        const suffix = link === "People" ? "people" : link.toLowerCase();
        const href = `/courses/${cid}/${suffix}`;
        const isActive = pathname.toLowerCase().includes(link.toLowerCase());

        return (
          <Link
            key={link}
            href={href}
            className={`list-group-item border-0 ${
              isActive ? "active text-black border-start border-3 border-dark" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}