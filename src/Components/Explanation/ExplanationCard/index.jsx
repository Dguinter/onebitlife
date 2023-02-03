import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ExplanationCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Através deste APP vocÊ vai consolidar {"\n"} 4 hábitos de áreas
        fundamentais:
      </Text>
      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/educationIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.mind}>Mente:</Text> Hábitos para melhorar sua
          inteligência/sabedoria.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/moneyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.money}>Finança:</Text> Hábitos para te ajudar no
          controle financeiro.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/bodyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.body}>Corpo:</Text> Hábitos para te deixar mais
          saudável e forte.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/funIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.fun}>Humor:</Text> Hábitos para controlar o stress{" "}
          {"\n"} e aumentar a felicidade.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    width: 350,
    borderRadius: 25,
    padding: 30,
  },

  title: {
    fontWeigth: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

  explanationContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },

  mind: {
    color: "#98B7F3",
    fontWeigth: "bold",
  },

  money: {
    color: "#85BB65",
    fontWeigth: "bold",
  },

  body: {
    color: "#FF0044",
    fontWeigth: "bold",
  },

  fun: {
    color: "#FE7F23",
    fontWeigth: "bold",
  },

  description: {
    color: "white",
  },
});
