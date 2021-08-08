import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

import Welcome from "./components/Welcome";
import Other from "./components/Other";
import Auth from "./components/Auth";

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
      </Stack>
    </Router>
  );
}
