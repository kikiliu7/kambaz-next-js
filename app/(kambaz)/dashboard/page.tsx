import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link href="/courses/1000" className="wd-dashboard-course-link">
            <Image src="/cs1000.jpg" width={200} height={150} alt="cs1000" />
            <div>
              <h5> CS1000 Fundies </h5>
              <p className="wd-dashboard-course-title">
                Computer Science Fundamentals 1
              </p>
              <button> Go </button>
            </div>
          </Link>
     </div>

        <div className="wd-dashboard-course"> 

            <Link href="/courses/2000" className="wd-dashboard-course-link">
            <Image src="/cs2000.jpg" width={200} height={150} alt="cs2000" />
            <div>
              <h5> CS2000 Fundies 2 </h5>
              <p className="wd-dashboard-course-title">
                Computer Science Fundamentals 2
              </p>
              <button> Go </button>
            </div>
          </Link>
            
     </div>
        <div className="wd-dashboard-course"> 
            
            <Link href="/courses/3000" className="wd-dashboard-course-link">
            <Image src="/cs3000.jpg" width={200} height={150} alt="cs3000" />
            <div>
              <h5> CS3000 Systems </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems for Dummies 
              </p>
              <button> Go </button>
            </div>
          </Link>

     </div>
        <div className="wd-dashboard-course"> 

                
            <Link href="/courses/4000" className="wd-dashboard-course-link">
            <Image src="/cs4000.jpg" width={200} height={150} alt="cs4000" />
            <div>
              <h5> CS4000 OOD </h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Design  
              </p>
              <button> Go </button>
            </div>
          </Link>

            
     </div>
        <div className="wd-dashboard-course"> 
            
                    
            <Link href="/courses/5000" className="wd-dashboard-course-link">
            <Image src="/cs5000.jpg" width={200} height={150} alt="cs5000" />
            <div>
              <h5> CS5000 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms (Extra Difficult) 
              </p>
              <button> Go </button>
            </div>
          </Link>

            
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
      </div>
    </div>
);}
