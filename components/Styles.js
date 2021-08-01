import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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
});

export default style;
