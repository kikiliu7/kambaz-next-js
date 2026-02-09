"use client";
import Link from "next/link";
import { Form } from "react-bootstrap";
import { FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="mx-left" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4">Profile</h3>
      
      <FormControl id="wd-username" defaultValue="alice" 
                    placeholder="username" className="mb-2"/>
      
      <FormControl id="wd-password" defaultValue="123" 
                    type="password" placeholder="password" className="mb-2"/>
      
      <FormControl id="wd-firstname" defaultValue="Alice" 
                    placeholder="First Name" className="mb-2"/>
      
      <FormControl id="wd-lastname" defaultValue="Wonderland" 
                    placeholder="Last Name" className="mb-2"/>
      
      <FormControl id="wd-dob" defaultValue="mm-dd-yyyy" 
                    type="date" className="mb-2"/>
      
      <FormControl id="wd-email" defaultValue="alice@wonderland.com" 
                    type="email" className="mb-2"/>
      
      <FormControl id="wd-type" defaultValue="User" 
                    type="type" className="mb-2"/>

      <Link href="/Kambaz/Account/Signin" 
            className="btn btn-danger w-100 mb-2">
        Sign out
      </Link>
    </div>
  );
}