import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, Button, CardTitle, CardText } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">


        <div className="wd-dashboard-course">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/reactjs.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1000/"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/cs1000.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1000 Fundies</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Computer Science Fundamentals 1</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/2000/"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/cs2000.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2000 Fundies 2</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Computer Science Fundamentals 2</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/3000/"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/cs3000.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3000 Systems</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Computer Systems for Dummies </CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/4000/"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/cs4000.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4000 OOD</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Object Oriented Design </CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/5000/"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/cs5000.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5000 Algorithms</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Algorithms </CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/6000/"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/ryan.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">HS6000 Ryan James Houlahan</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Everything you need to know about Ryan James Houlahan </CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>


   </Row>

   </div>
   </div>


{/* 

            

            
     </div>
        <div className="wd-dashboard-course"> 
            
                    
            <Link href="/courses/6000" className="wd-dashboard-course-link">
            <Image src="/ryan.jpg" width={200} height={150} alt="ryan" />
            <div>
              <h5> hs6000 History of Ryan James Houlahan </h5>
              <p className="wd-dashboard-course-title">
                Everything you need to know about Ryan James Houlahan
              </p>
              <button> Go </button>
            </div>
          </Link>
    
        
         </div>
      </div> */}
    </div>
);}
