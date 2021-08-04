import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const style = StyleSheet.create({
  view: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  nextButton: {
    width: 90,
    position: "absolute",
    bottom: 25,
    right: 25,
  },

  //   Arrow     //

  nextArrowContainer: {
    backgroundColor: "rgba(193, 193, 193, 0.5)",
    height: 50,
    width: 80,
    borderRadius: 5,

    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  nextArrowLine: {
    backgroundColor: "#312152",
    borderTopColor: "#312152",
    borderBottomColor: "#312152",
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    width: "55%",
    height: 5,
    borderRadius: 3,
    position: "absolute",
  },
  nextArrowSlantOne: {
    backgroundColor: "#312152",
    borderTopColor: "#312152",
    borderBottomColor: "#312152",
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    transform: [{ rotate: "35deg" }],
    width: 25,
    position: "absolute",
    height: 5,
    right: 15.5,
    top: 17,
    borderRadius: 3,
  },
  nextArrowSlantTwo: {
    height: 5,
    backgroundColor: "#312152",
    borderTopColor: "#312152",
    borderBottomColor: "#312152",
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    transform: [{ rotate: "-35deg" }],
    width: 25,
    position: "absolute",
    right: 15.5,
    bottom: 17,
    borderRadius: 3,
  },

  //         Background Section         //
  //------------------------------------//

  background: {
    backgroundColor: `#312152`,
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },

  backgroundCircleBig: {
    backgroundColor: "rgba(196, 196, 196, 0.05)",
    height: 500,
    width: 500,
    position: "absolute",
    left: -250,
    top: 100,
    borderRadius: 500 / 2,
  },

  backgroundCircleLittle: {
    backgroundColor: "rgba(196, 196, 196, 0.05)",
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    position: "absolute",
    left: 125,
    top: 80,
  },

  //             Welcome View             //
  //--------------------------------------//

  welcomeText: {
    color: "white",
    fontSize: 58,
    alignItems: "center",
    zIndex: 1,
    marginBottom: 55,
  },

  welcomeQ: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 65,
  },

  logoContainer: {
    position: "relative",
    top: 60,
    left: 85,
  },

  logoBigCircle: {
    backgroundColor: "rgba(37, 211, 149, 1)",
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },

  logoLittleCircle: {
    backgroundColor: "rgba(222, 117, 117, 1)",
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    position: "relative",
    top: -35,
    left: -15,
  },
});

export default style;
