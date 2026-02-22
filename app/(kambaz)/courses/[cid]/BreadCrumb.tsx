"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";

export default function Breadcrumb({ course }: { course: { name: string; number: string } | undefined; }) {
  const pathname = usePathname();
  
  const lastSegment = pathname.split("/").pop() || "";
  const formattedSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  return (
    <div className="d-flex align-items-center">
      <FaAlignJustify className="text-danger me-3 fs-4" />
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 fs-4" style={{ "--bs-breadcrumb-divider": "'>'" } as React.CSSProperties}>
          <li className="breadcrumb-item">
            <span className="text-danger">
              {course?.number || "Course"}
            </span>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {formattedSegment}
          </li>
        </ol>
      </nav>
    </div>
  );
}