import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import RootNavigator from "./src/Routes/rootNavigator";
import store from "./src/Public/redux/store"

const App = () => {
  // Axios.defaults.headers.common["authorization"] = "w3lc0meto4pp";
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar translucent backgroundColor="transparent" />
        <RootNavigator />
      </Fragment>
     </Provider>
  );
};

export default App;