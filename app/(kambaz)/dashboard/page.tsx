/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as client from "../courses/client";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { RootState } from "../store";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState(false);
const [course, setCourse] = useState<any>({
  name: "New Course",
  description: "New Description",
}); 
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      dispatch(setCourses(myCourses));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllCourses = async () => {
    const all = await client.fetchAllCourses();
    setAllCourses(all);
  };

  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
  }, [currentUser]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => (c._id === course._id ? course : c))));
  };

  const onEnroll = async (courseId: string) => {
    await client.enrollIntoCourse("current", courseId);
    fetchCourses();
  };

  const onUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse("current", courseId);
    dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
  };

  const displayedCourses = enrolling ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr />
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end" onClick={onAddNewCourse}>Add</button>
            <button className="btn btn-warning float-end me-2" onClick={onUpdateCourse}>Update</button>
          </h5><br />
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        </>
      )}
      <button className="btn btn-primary float-end"
        onClick={() => setEnrolling(!enrolling)}>
        {enrolling ? "My Courses" : "All Courses"}
      </button>
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2><hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c) => {
            const isEnrolled = courses.some((mc) => mc._id === c._id);
            return (
              <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link href={`/courses/${c._id}/home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                    <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                    <CardBody>
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {c.name}
                      </CardTitle>
                      <CardText className="overflow-hidden" style={{ height: "100px" }}>
                        {c.description}
                      </CardText>
                      <Button variant="primary">Go</Button>
                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button onClick={(e) => { e.preventDefault(); onDeleteCourse(c._id); }}
                            className="btn btn-danger float-end">Delete</button>
                          <button onClick={(e) => { e.preventDefault(); setCourse(c); }}
                            className="btn btn-warning me-2 float-end">Edit</button>
                        </>
                      )}
                      {currentUser?.role === "STUDENT" && (
                        isEnrolled
                          ? <button onClick={(e) => { e.preventDefault(); onUnenroll(c._id); }}
                              className="btn btn-danger float-end">Unenroll</button>
                          : <button onClick={(e) => { e.preventDefault(); onEnroll(c._id); }}
                              className="btn btn-success float-end">Enroll</button>
                      )}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}