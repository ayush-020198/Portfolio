// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import './css/Form.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contact" style={{paddingTop: '3%'}}>
        <h1 style={{margin: '3% 0% 4% 5%'}}>Contact Me</h1>
      <div className="formdis" align="center">
      <form
        style={{paddingBottom: '5%'}}
        onSubmit={this.submitForm}
        action="https://formspree.io/xrgyyqky"
        method="POST"
      > 
      <div className="formcard">
          <fieldset className="fs-frm-inputs">
            <label htmlFor="full-name" style={{marginTop: '0.5em'}}>Full Name</label>
            <input type="text" name="name" className="inputform name" placeholder="" required="" />
            <label htmlFor="email-address">Email Address</label>
            <input type="email" name="_replyto" className="inputform mail" placeholder="" required="" />
            <label htmlFor="message">Message</label>
            <textarea rows="5" name="message" className="inputform message" placeholder="" required="">
            </textarea>
              <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          </fieldset>
        {status === "SUCCESS" ? <p style={{marginBottom: '3em'}} className="contact100-form-btn formbtn">Thanks for the Submission :)</p> : 
        <div className="container-contact100-form-btn">
        <button class="contact100-form-btn formbtn">
            <span>
            Submit
            <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
            </span>
            </button>
            </div>
            }
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </div>
      </form>
      </div>
      <hr />
      <div id="more" align="center" style={{padding: '10%'}}>
      <h2>Liked my Portfolio?</h2>
      <h3>You can checkout its source code here :)</h3>
      <a className="contact100-form-btn formbtn" style={{width: '2%'}} href="https://github.com/ayush-020198/Portfolio">Click Me</a>
      </div>
      <div align="center">
				<h3>© 2020 Copyright | Ayush Shrivastava</h3>
			</div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}