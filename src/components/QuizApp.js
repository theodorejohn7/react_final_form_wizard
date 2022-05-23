/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import Styles from "./Styles";
import { Field } from "react-final-form";
import Wizard from "./Wizard";
// import database from './firebase';
import database from "../database/Firebase";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  database
    .ref(values.firstName + "_" + values.lastName)
    .set({
      values,
    })
    .catch(alert);
  window.alert("Successfully Registerd your details");
};

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const required = (value) => (value ? undefined : "Required");

const QuizApp = () => (
  <Styles>
    <h1>User Details registration App</h1>

    <Wizard
      initialValues={{ employed: true, stooge: "larry" }}
      onSubmit={onSubmit}
    >
      <Wizard.Page
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }

          return errors;
        }}
      >
        <div>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
          <Error name="email" />
        </div>
        {/* <div>
          <label>Quiz Name</label>
          <Field
            name="quizName"
            component="input"
            type="text"
            placeholder="Quiz Name"
            validate={required}
          />
          <Error name="quizName" />
        </div> */}
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            validate={required}
          />
          <Error name="firstName" />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            validate={required}
          />
          <Error name="lastName" />
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={(values) => {
          const errors = {};

          if (!values.mobileNumber) {
            errors.mobileNumber = "Required";
          } else if (values.mobileNumber.length <10) {
            errors.mobileNumber = "Input 10 digits";
          }

          if (!values.favoriteColor) {
            errors.favoriteColor = "Required";
          }
          return errors;
        }}
      >
        <div>
          <label>Favorite Color</label>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="#ff0000"> Red</option>
            <option value="#00ff00"> Green</option>
            <option value="#0000ff"> Blue</option>
          </Field>
          <Error name="favoriteColor" />
        </div>
        <div>
          <label>Website</label>
          <Field
            name="website"
            component="input"
            type="url"
            placeholder="Website"
            validate={required}
          />
          <Error name="website" />
        </div>
        <div>
          <label>Mobile Number</label>
          <Field
            name="mobileNumber"
            component="input"
            type="number"
            placeholder="mobileNumber"
            validate={required}
          />
          <Error name="mobileNumber" />
        </div>
      </Wizard.Page>

      <Wizard.Page
        validate={(values) => {
          const errors = {};
          if (!values.sports) {
            errors.sports = "Required";
          } else if (values.sports.length < 2) {
            errors.sports = "Choose more";
          }
          return errors;
        }}
      >
        <div>
          <label>Interested Sports</label>
          <Field name="sports" component="select" multiple>
            <option value="cricket">Cricket </option>
            <option value="volleyball">Volleyball</option>
            <option value="football">Football</option>
            <option value="badmiton">Badmiton</option>
            <option value="tennis">Tennis</option>
          </Field>
          <Error name="sports" />
        </div>
        <div>
          <label>Hooby</label>
          <Field
            name="hobby"
            component="input"
            type="text"
            placeholder="Hobby"
            validate={required}
          />
          <Error name="hobby" />
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={(values) => {
          const errors = {};
          if (!values.notes) {
            errors.notes = "Required";
          }
          return errors;
        }}
      >
        <div>
          <label>Actively Interested in...</label>
          <div>
            <label>
              <Field
                name="activeInterest"
                component="input"
                type="radio"
                value="readingBooks"
              />{" "}
              Reading Books
            </label>
            <label>
              <Field
                name="activeInterest"
                component="input"
                type="radio"
                value="listeningSongs"
              />{" "}
              Listening Songs
            </label>
            <label>
              <Field
                name="activeInterest"
                component="input"
                type="radio"
                value="sports"
              />{" "}
              Sports
            </label>
          </div>
        </div>
        <div>
          <label>Memorable incident</label>
          <Field
            name="notes"
            component="textarea"
            placeholder="Memorable incident"
          />
          <Error name="notes" />
        </div>
      </Wizard.Page>
    </Wizard>
  </Styles>
);

export default QuizApp;
