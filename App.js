import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Welcome from "./components/Welcome";
import Other from "./components/Other";
import Auth from "./components/Auth";
import Login from "./components/Login";
import TransitionPage from "./components/TransitionPage";
import InitQs from "./components/InitQs";
import Availability from "./components/Availability";

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="welcome"
          component={Welcome}
          title="Welcome"
          initial
          hideNavBar={true}
        />
        <Scene key="other" component={Other} title="Other" hideNavBar={true} />

        <Scene key="auth" component={Auth} title="Auth" hideNavBar={true} />

        <Scene key="login" component={Login} title="Login" hideNavBar={true} />
        <Scene
          key="transitionPage"
          component={TransitionPage}
          title="TransitionPage"
          hideNavBar={true}
        />
        <Scene
          key="initqs"
          component={InitQs}
          title="InitQs"
          hideNavBar={true}
        />
        <Scene
          key="availability"
          component={Availability}
          title="Availability"
          hideNavBar={true}
        />
      </Stack>
    </Router>
  );
}
