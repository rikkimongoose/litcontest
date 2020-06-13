import React from "react";
import { IndexRoute, Route } from "react-router";
import App from "components/App";
import IndexPage from "components/IndexPage";
import LoginPage from "components/LoginPage";
import RegisterPage from "components/RegisterPage";
import StoryPage from "components/StoryPage";
import ContestPage from "components/ContestPage";
import ProfilePage from "components/ProfilePage";

export default (
  <Route component={App} path="/">
    <IndexRoute component={IndexPage} />
    <Route component={LoginPage} path="login" />
    <Route component={RegisterPage} path="register" />
    <Route component={StoryPage} path="story" />
    <Route component={ContestPage} path="contest" />
    <Route component={ProfilePage} path="profile" />x
  </Route>
);
