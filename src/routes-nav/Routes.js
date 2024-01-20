import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";

import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";
import JournalList from "../journal/JournalList";
import EditJournal from "../journal/EditJournal";
import DeleteJournal from "../journal/DeleteJournal";
import AddJournal from "../journal/AddJournal";
import ActivitySelection from "../activities/ActivitySelection";
import Calendar from "react-calendar";
import AddActivity from "../activities/AddActivity";
import Resources from "../resources/Resources";
/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
  // console.debug(
  //   "Routes",
  //   `login=${typeof login}`,
  //   `register=${typeof register}`
  // );

  return (
    <div className="pt-5">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>
        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>
        <PrivateRoute path="/profile">
          <ProfileForm />
        </PrivateRoute>
        <PrivateRoute exact path="/journal">
          <JournalList />
        </PrivateRoute>
        <PrivateRoute exact path="/journal/delete/:id">
          <DeleteJournal />
        </PrivateRoute>
        <PrivateRoute exact path="/journal/add">
          <AddJournal />
        </PrivateRoute>
        <PrivateRoute exact path="/journal/edit/:id">
          <EditJournal />
        </PrivateRoute>
        <PrivateRoute exact path="/activities">
          <ActivitySelection />
        </PrivateRoute>
        <PrivateRoute exact path="/activities/add">
          <AddActivity />
        </PrivateRoute>
        <PrivateRoute exact path="/calendar">
          <Calendar />
        </PrivateRoute>
        <PrivateRoute exact path="/resources">
          <Resources />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
