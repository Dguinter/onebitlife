import React from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    handleNavHome,
    handleSetShowHome
  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function appExplanation() {
    function handleSetShowHome(){
            console.log("Botão clicado");
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Ante, deixa {"\n"} eu te explicar...</Text>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {"\n"} seus 4 hábitos
            individual.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            heigt={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 00.98)",
    },
    title:{
        fontSize: 30,
        fontWeigth: "bold",
        color: "whithe",
        textAlign: "center",
        marginVertical: 40, 
    },
    descriptionCta:{
        color: "whithe",
        fontWeigth: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBotton: 10,
    },
    description: {
        color: "white",
        textAlign:"center",
        marginBotton: 30,
    },

})