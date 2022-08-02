import React, { useState } from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import RecipeSvg from "./../../content/recipe.svg"

const DocComponent = ({
  name,
  rating,
  id,
  setChooseId,
  chooseId,
  navigation,
}) => {
  return (
    <View style={styles.card}>
      <View
        style={
          chooseId === id
            ? [styles.cardBody, { borderColor: "#00ABB9" }]
            : styles.cardBody
        }
      >
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.photoSection}>
          <Image
            source={require("./../../content/profile-photo.png")}
            style={
              chooseId === id
                ? [styles.photo, { borderColor: "#00ABB9" }]
                : styles.photo
            }
          />
        </View>
        <View style={styles.nameSection}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Therapist Info", { id })}
          >
            <RecipeSvg
              style={{ resizeMode: "contain", marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.name}>{name}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setChooseId(id)}>
          <View
            style={
              chooseId === id
                ? [styles.chosenSection, { backgroundColor: "#00ABB9" }]
                : styles.chosenSection
            }
          >
            <Text
              style={
                chooseId === id
                  ? [styles.chosenText, { color: "#fff" }]
                  : styles.chosenText
              }
            >
              {chooseId === id ? "Выбран" : "Выбрать"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const DocsList = ({ data, chooseId, setChooseId, navigation }) => {
  return (
    <View style={styles.listBody}>
      {data.map((i, index) => (
        <DocComponent
          key={index}
          name={i.name}
          rating={i.rating}
          id={i.id}
          setChooseId={setChooseId}
          chooseId={chooseId}
          navigation={navigation}
        />
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  listBody: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    height: 200,
    width: "50%",
    justifyContent: "flex-end",
  },
  cardBody: {
    backgroundColor: "green",
    height: "75%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#00abb90d",
    borderWidth: 1,
    borderColor: "transparent",
  },
  rating: {
    position: "absolute",
    top: "10%",
    backgroundColor: "#00ABB9",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  ratingText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 12,
  },
  photoSection: {
    marginTop: "-25%",
    alignSelf: "center",
    width: "50%",
    aspectRatio: 1 / 1,
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "transparent",
  },
  nameSection: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
  },
  name: {
    fontSize: 12,
    flex: 1,
  },
  chosenSection: {
    backgroundColor: "#d1e5e8",
    padding: 15,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  chosenText: {
    color: "#a8a8a8",
    fontWeight: "500",
  },
})

export default DocsList
