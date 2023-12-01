import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";

import { signUpSchema } from "../schemas/signUpSchema";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirm: "",
  framework: "",
  terms: false,
};

const SingUp = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h3>Welcome, join us!</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="fullName">Full name</label>
              <Field name="fullName" id="fullName" type="text" autoFocus />
              <ErrorMessage
                name="fullName"
                component="p"
                className="error_message"
              />
              {/* <p className="error_message">Required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="email">email</label>
              <Field name="email" id="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="error_message"
              />
              {/* <p className="error">Valid email required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="password">password</label>
              <Field name="password" id="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className="error_message"
              />
              {/* <p className="error">Password is required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">Confirm password</label>
              <Field name="confirm" id="confirm" type="password" />
              <ErrorMessage
                name="confirm"
                component="p"
                className="error_message"
              />
              {/* <p className="error">required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="framework">Favorite Framework</label>
              <Field name="framework" id="framework" as="select">
                <option value="">Select your framework</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
              </Field>
              <ErrorMessage
                name="framework"
                component="p"
                className="error_message"
              />
              {/* <p className="error">required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="terms">
                <Field name="terms" id="terms" type="checkbox" />
                Accept terms and conditions
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="error_message error_message_terms"
              />
              {/* <p className="error error_terms">required</p> */}
            </fieldset>
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
      <p>
        Already have an account?{" "}
        <span onClick={() => setStep("signin")}>Sign Up</span>
      </p>
    </main>
  );
};

export default SingUp;
