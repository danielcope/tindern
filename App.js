import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Welcome from "./components/Welcome";
import Auth from "./components/Auth/Auth";
import Login from "./components/Login/Login";
import TransitionPage from "./components/TransitionPage";
import InitQs from "./components/InitQs/InitQs";
import Availability from "./components/Availability/Availability";

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="welcome"
          component={Welcome}
          title="Welcome"
          hideNavBar={true}
          initial
        />
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
