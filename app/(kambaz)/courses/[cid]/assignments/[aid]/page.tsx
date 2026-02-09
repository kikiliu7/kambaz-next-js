"use client";
import { FormGroup, FormLabel, FormControl, FormSelect, FormCheck } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">

      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue="A1 - ENV + HTML" />
      </FormGroup>

      <FormGroup className="mb-4" controlId="wd-description">
        <FormControl
          as="textarea"
          rows={4}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application hosted on a remote server like Vercel or Netlify."
        />
      </FormGroup>

      <FormGroup as={Row} className="mb-3" controlId="wd-points">
        <FormLabel column sm={3} className="text-end">
          Points
        </FormLabel>
        <Col sm={9}>
          <FormControl defaultValue={100} />
        </Col>
      </FormGroup>

      <FormGroup as={Row} className="mb-3" controlId="wd-group">
        <FormLabel column sm={3} className="text-end">
          Assignment Group
        </FormLabel>
        <Col sm={9}>
          <FormSelect>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </FormSelect>
        </Col>
      </FormGroup>


      <FormGroup as={Row} className="mb-3" controlId="wd-display-grade-as">
        <FormLabel column sm={3} className="text-end">
          Display Grade as
        </FormLabel>
        <Col sm={9}>
          <FormSelect>
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </FormSelect>
        </Col>
      </FormGroup>


      <FormGroup as={Row} className="mb-3">
        <FormLabel column sm={3} className="text-end">
          Submission Type
        </FormLabel>
        <Col sm={9} className="border p-3 rounded">
          <FormSelect className="mb-3" id="wd-submission-type">
            <option value="Online">Online</option>
          </FormSelect>

          <FormLabel className="fw-bold">Online Entry Options</FormLabel>
          <FormCheck type="checkbox" label="Text Entry" id="wd-text-entry" />
          <FormCheck type="checkbox" label="Website URL" id="wd-website-url" defaultChecked />
          <FormCheck type="checkbox" label="Media Recordings" id="wd-media-recordings" />
          <FormCheck type="checkbox" label="Student Annotation" id="wd-student-annotation" />
          <FormCheck type="checkbox" label="File Uploads" id="wd-file-uploads" />
        </Col>
      </FormGroup>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Assign
        </Form.Label>
        <Col sm={9} className="border p-3 rounded">
          <Form.Group className="mb-3" controlId="wd-assign-to">
            <Form.Label className="fw-bold">Assign to</Form.Label>
            <Form.Control defaultValue="Everyone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-due-date">
            <Form.Label className="fw-bold">Due</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-13" />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group controlId="wd-available-from">
                <Form.Label className="fw-bold">Available from</Form.Label>
                <Form.Control type="date" defaultValue="2024-05-06" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="wd-available-until">
                <Form.Label className="fw-bold">Until</Form.Label>
                <Form.Control type="date" defaultValue="2024-05-20" />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Form.Group>

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}