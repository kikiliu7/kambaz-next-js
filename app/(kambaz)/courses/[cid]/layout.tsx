import { courses } from "../../database";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";


export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = courses.find((c) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        <FaAlignJustify className="me-4 fs-4" />
        {course?.name || "Course Not Found"}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="flex-fill ps-4">
          {children}
        </div>
      </div>
    </div>
  );
}