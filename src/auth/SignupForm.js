import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false,
  });

  console.debug(
    "SignupForm",
    "signup=",
    typeof signup,
    "formData=",
    formData,
    "formErrors=",
    formErrors
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();

    //Check if the password and the repeatPassword fields match
    if (formData.password !== formData.repeatPassword) {
      setFormErrors(["Passwords don't match"]);
      return;
    }

    const userData = {
      username: formData.username,
      password: formData.password,
    };
    let result = await signup(userData);
    if (result.success) {
      console.log("sign up successful");
      history.push("/med_history");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  //Toggle password visibility
  function togglePasswordVisibility(field) {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  }

  return (
    <div className="SignupForm">
      <div className="container ">
        <h2 className="mb-3 display-4">Sign Up</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="text-secondary mb-3">Username :</label>
                <input
                  name="username"
                  className="form-control text-secondary mb-3 "
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="text-secondary mb-3">Password : </label>
                <div className="input-group">
                  <input
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    className="form-control mb-3"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => togglePasswordVisibility("password")}
                    >
                      <FontAwesomeIcon
                        icon={showPassword.password ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className=" text-secondary mb-3">
                  Repeat Password :
                </label>
                <div className="input-group">
                  <input
                    type={showPassword.repeatPassword ? "text" : "password"}
                    name="repeatPassword"
                    className="form-control   mb-3"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => togglePasswordVisibility("repeatPassword")}
                    >
                      <FontAwesomeIcon
                        icon={showPassword.repeatPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <button
                type="submit"
                className="btn btn-secondary float-right"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
