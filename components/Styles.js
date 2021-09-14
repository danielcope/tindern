import { StyleSheet } from "react-native";

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

  scrollView: {
    height: "100%",
    width: "100%",
    flex: 1,
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

  //----------Auth Section------------//

  authTitle: {
    color: "white",
    fontSize: 36,
    alignItems: "center",
    textAlign: "center",
    zIndex: 1,
    marginBottom: 50,
  },

  authText: {
    fontSize: 24,
    color: "white",
    marginTop: 40,
    marginBottom: 30,
  },

  authInput: {
    height: 40,
    width: 250,
    backgroundColor: "white",
    paddingLeft: 25,
    fontSize: 24,
    borderRadius: 5,
    marginBottom: 25,
  },

  authI: {
    position: "absolute",
    right: 65,
    top: 440,
    backgroundColor: "rgba(196, 196, 196, 1)",
    height: 15,
    width: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15 / 2,
  },

  activePassMenu: {
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  greyedView: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 3,
  },

  passErrBox: {
    backgroundColor: "#E3DFE9",
    height: 200,
    width: 350,
    position: "absolute",
    borderRadius: 15,
    padding: 25,
    zIndex: 4,
    elevation: 10,
  },

  listLine: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  bulletPoint: {
    backgroundColor: "rgba(49, 33, 82, 1)",
    borderRadius: 5 / 2,
    height: 5,
    width: 5,
    marginRight: 12,
    marginLeft: 17,
  },

  fullText: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  //Transition Page View

  centeredText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    width: 300,
  },

  //Questions View

  questionBlock: {
    height: 200,
  },

  questionText: {
    color: "white",
    fontSize: 30,
    marginBottom: 45,
    textAlign: "center",
  },

  eachQ: {},

  separator: {
    backgroundColor: "white",
    height: 1,
    width: "80%",
    marginTop: 45,
    marginBottom: 45,
  },

  questionsInput: {
    backgroundColor: "white",
    height: 40,
    width: 120,
    paddingLeft: 25,
    borderRadius: 5,
  },

  calendarPressableContainer: {
    height: "50%",
  },

  calendarPressable: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    textAlign: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },

  calendarText: {
    fontSize: 20,
    color: "#312152",
  },

  //Down Arrow on the When is you birthday question

  downArrow: {
    width: "20%",
    height: "80%",
    justifyContent: "space-around",
    alignContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },

  topLineArrow: {
    borderColor: "#312152",
    borderWidth: 2,
    backgroundColor: "#312152",
    borderRadius: 5,
  },

  midLineArrow: {
    borderColor: "#312152",
    borderWidth: 2,
    backgroundColor: "#312152",
    borderRadius: 5,
    width: "66%",
    marginLeft: "17%",
  },

  botLineArrow: {
    borderColor: "#312152",
    borderWidth: 2,
    backgroundColor: "#312152",
    borderRadius: 5,
    width: "33%",
    marginLeft: "33%",
  },
});

export default style;
