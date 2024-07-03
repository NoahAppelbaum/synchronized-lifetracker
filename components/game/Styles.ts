import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "aliceblue"
  },
  lifeBox: {
    width: "98%",
    height: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1%",
    borderRadius: 10,


    //TODO: Make this... work right for one person or the other
    //  i.e. must be dynamically inhereted based on whether it is player A or B
    backgroundColor: "red"
  },
  lifeTotal: {
    fontSize: 140,
    marginHorizontal: "5%",
    width: "50%",
    textAlign: "center",
  },
  adjustPaddle: {
    fontSize: 80
  },
})
