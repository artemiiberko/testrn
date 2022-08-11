import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import CalendarStrip from "react-native-calendar-strip"
import moment from "moment"
import { LinearGradient } from "expo-linear-gradient"
import {
  Button,
  ButtonGroup,
  RadioGroup,
  Radio,
  Input,
} from "@ui-kitten/components"
import FilterSvg from "./../../../content/filter.svg"
import DeleteCrossSvg from "./../../../content/deletecross.svg"
import LocateSvg from "./../../../content/locate.svg"
import LayoutMore from "../../Layouts/LayoutMore"
import TimeStrip from "../../Elements/timeStripComponent"
import DocsList from "../../Elements/docsList"

const docsData = [
  {
    name: "Потапов Ким Серапионович",
    id: 1,
    rating: 4.8,
  },
  {
    name: "Дементьев Кондрат Федорович",
    id: 2,
    rating: 4.7,
  },
  {
    name: "Герасимова Верона Иринеевна",
    id: 3,
    rating: 4.8,
  },
  {
    name: "Михеева Жасмин Петровна",
    id: 4,
    rating: 4.9,
  },
  {
    name: "Потапов Ким Серапионович",
    id: 5,
    rating: 4.8,
  },
  {
    name: "Дементьев Кондрат Федорович",
    id: 6,
    rating: 4.7,
  },
  {
    name: "Герасимова Верона Иринеевна",
    id: 7,
    rating: 4.8,
  },
  {
    name: "Михеева Жасмин Петровна",
    id: 8,
    rating: 4.9,
  },
]

let AvailableTimeItems = []
for (let i = 8; i < 17; i++) {
  AvailableTimeItems.push(`${i}:00`, `${i}:30`)
}
let AllTimeItems = []
for (let i = 8; i < 24; i++) {
  AllTimeItems.push(`${i}:00`, `${i}:30`)
}

const NewBooking = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [filterList, setFilterList] = useState([
    "General massage",
    "Therapeutic back massage",
  ])
  const [adressList, setAdressList] = useState([
    "Город, улица Название 15 дом 2",
    "Город, улица Название 19 дом 4",
  ])
  const [timeButtonGroup, setTimeButtonGroup] = useState(1)
  const [placeButtonGroup, setPlaceButtonGroup] = useState(2)
  const [adressRadioIndex, setAdressRadioIndex] = useState(0)
  const [addAdress, setAddAdress] = useState("")
  const [selectedDate, setSelectedDate] = useState()
  const [selectedTime, setSelectedTime] = useState("8:00")
  const [chooseId, setChooseId] = useState()

  return (
    <LayoutMore
      navigation={navigation}
      setHeaderHeight={setHeaderHeight}
      button={false}
      white={true}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "none"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1, width: "100%", paddingTop: headerHeight }}
        >
          <View
            style={
              headerHeight
                ? {
                    paddingBottom:
                      Platform.OS === "ios"
                        ? headerHeight + 90
                        : headerHeight + 60,
                  }
                : {}
            }
          >
            <View style={styles.filterSection}>
              <Button
                style={styles.button}
                size="medium"
                accessoryRight={() => (
                  <FilterSvg
                    height="16px"
                    style={{ marginLeft: 10, resizeMode: "contain" }}
                  />
                )}
                onPress={() => {
                  navigation.navigate("Therapy Filter")
                }}
              >
                {() => <Text style={styles.buttonText}>Therapy</Text>}
              </Button>
              <View style={styles.filterItemsContainer}>
                {filterList.map((i) => (
                  <View style={styles.filterItem} key={i}>
                    <Text style={styles.filterItemText}>{i}</Text>
                    <Button
                      style={styles.deleteButton}
                      size="medium"
                      accessoryRight={() => (
                        <DeleteCrossSvg
                          height="16px"
                          style={{ resizeMode: "contain" }}
                        />
                      )}
                      onPress={() => {
                        console.log("delete filter")
                      }}
                    ></Button>
                  </View>
                ))}
              </View>
            </View>
            <LinearGradient
              colors={["#00ABB9FF", "#00ABB900"]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <View style={styles.timePlaceSection}>
              <View style={styles.timeWhereContainer}>
                <Text style={styles.timeWhereText}>Длительность</Text>
                <ButtonGroup style={styles.buttonGroup} appearance="outline">
                  <Button
                    style={
                      timeButtonGroup === 1
                        ? styles.selectedButton
                        : styles.unseletedButton
                    }
                    onPress={() => setTimeButtonGroup(1)}
                  >
                    {() => (
                      <Text
                        style={
                          timeButtonGroup === 1
                            ? styles.selectedButtonGroupText
                            : styles.unselectedButtonGroupText
                        }
                      >
                        1 час
                      </Text>
                    )}
                  </Button>
                  <Button
                    style={
                      timeButtonGroup === 2
                        ? styles.selectedButton
                        : styles.unseletedButton
                    }
                    onPress={() => setTimeButtonGroup(2)}
                  >
                    {() => (
                      <Text
                        style={
                          timeButtonGroup === 2
                            ? styles.selectedButtonGroupText
                            : styles.unselectedButtonGroupText
                        }
                      >
                        1,5 часа
                      </Text>
                    )}
                  </Button>
                  <Button
                    style={
                      timeButtonGroup === 3
                        ? styles.selectedButton
                        : styles.unseletedButton
                    }
                    onPress={() => setTimeButtonGroup(3)}
                  >
                    {() => (
                      <Text
                        style={
                          timeButtonGroup === 3
                            ? styles.selectedButtonGroupText
                            : styles.unselectedButtonGroupText
                        }
                      >
                        2 часа
                      </Text>
                    )}
                  </Button>
                </ButtonGroup>
              </View>
              <View style={styles.timeWhereContainer}>
                <Text style={styles.timeWhereText}>Место</Text>
                <ButtonGroup style={styles.buttonGroup} appearance="outline">
                  <Button
                    style={
                      placeButtonGroup === 1
                        ? styles.selectedButton
                        : styles.unseletedButton
                    }
                    onPress={() => setPlaceButtonGroup(1)}
                  >
                    {() => (
                      <Text
                        style={
                          placeButtonGroup === 1
                            ? styles.selectedButtonGroupText
                            : styles.unselectedButtonGroupText
                        }
                      >
                        к себе
                      </Text>
                    )}
                  </Button>
                  <Button
                    style={
                      placeButtonGroup === 2
                        ? styles.selectedButton
                        : styles.unseletedButton
                    }
                    onPress={() => setPlaceButtonGroup(2)}
                  >
                    {() => (
                      <Text
                        style={
                          placeButtonGroup === 2
                            ? styles.selectedButtonGroupText
                            : styles.unselectedButtonGroupText
                        }
                      >
                        к терапевту
                      </Text>
                    )}
                  </Button>
                </ButtonGroup>
              </View>
            </View>
            <LinearGradient
              colors={["#00ABB9FF", "#00ABB900"]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <View style={styles.adressSection}>
              <RadioGroup
                selectedIndex={adressRadioIndex}
                onChange={(index) => setAdressRadioIndex(index)}
              >
                {adressList.map((i, index) => (
                  <Radio key={i} style={{ alignItems: "flex-start" }}>
                    {() => (
                      <View>
                        <Text style={styles.adressRadioTextTop}>
                          Адрес {index + 1}
                        </Text>
                        <Text style={styles.adressRadioTextBottom}>{i}</Text>
                      </View>
                    )}
                  </Radio>
                ))}
              </RadioGroup>
              <View style={styles.newAdress}>
                <Input
                  style={styles.input}
                  textStyle={{ fontSize: 18 }}
                  size="large"
                  color="rgba(69, 69, 69, 1)"
                  value={addAdress}
                  onChangeText={(nextValue) => {
                    setAddAdress(nextValue)
                  }}
                  placeholder="Укажите другой адрес"
                />
                <Button
                  style={styles.locateButton}
                  size="medium"
                  accessoryLeft={() => (
                    <LocateSvg
                      height="22px"
                      style={{ resizeMode: "contain" }}
                    />
                  )}
                  onPress={() => {
                    console.log("find me")
                  }}
                />
              </View>
            </View>
            <LinearGradient
              colors={["#00ABB9FF", "#00ABB900"]}
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 1 }}
            />
            <View style={styles.dateSection}>
              <LinearGradient
                colors={["rgba(216,237,239,1)", "rgba(216,237,239,0)"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  height: 500,
                  zIndex: 1,
                  width: 30,
                  position: "absolute",
                  left: 0,
                }}
              />
              <LinearGradient
                colors={["rgba(216,237,239,0)", "rgba(216,237,239,1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0 }}
                style={{
                  height: 500,
                  zIndex: 1,
                  width: 30,
                  position: "absolute",
                  right: 0,
                }}
              />
              <View>
                <CalendarStrip
                  scrollable
                  numDaysInWeek={7}
                  style={styles.calendarStrip}
                  calendarColor={"transparent"}
                  calendarHeaderStyle={{
                    color: "#454545",
                    alignSelf: "flex-start",
                    paddingLeft: 30,
                    fontSize: 18,
                    fontWeight: "500",
                  }}
                  dateNumberStyle={{ color: "#454545" }}
                  dayContainerStyle={{
                    flexDirection: "column-reverse",
                  }}
                  highlightDateContainerStyle={{
                    backgroundColor: "#00ABB9",
                    borderRadius: 5,
                  }}
                  iconStyle={{ display: "none" }}
                  dateNameStyle={{ color: "#A8A8A8" }}
                  selectedDate={moment()}
                  onDateSelected={(date) => setSelectedDate(date)}
                />
              </View>
              <View>
                <View style={styles.timeHeader}>
                  <Text style={styles.timeH}>Time</Text>
                  <Text style={styles.timesub}>
                    {moment(selectedDate).format("MMMM Do")}
                  </Text>
                  <Text style={styles.timesub}>
                    {selectedTime}-
                    {
                      AllTimeItems[
                        AllTimeItems.findIndex((e) => e === selectedTime) +
                          (timeButtonGroup === 3
                            ? 4
                            : timeButtonGroup === 2
                            ? 3
                            : 2)
                      ]
                    }
                  </Text>
                </View>
                <TimeStrip
                  timeButtonGroup={timeButtonGroup}
                  setSelectedTime={setSelectedTime}
                  AvailableTimeItems={AvailableTimeItems}
                />
              </View>
            </View>
            <View style={styles.docsHeader}>
              <Text style={styles.docsHeaderText}>Терапевты</Text>
              <Button
                style={styles.button}
                size="medium"
                accessoryRight={() => (
                  <FilterSvg
                    height="16px"
                    style={{ marginLeft: 10, resizeMode: "contain" }}
                  />
                )}
                onPress={() => {
                  navigation.navigate("Therapist Filter")
                }}
              >
                {() => <Text style={styles.buttonText}>Filter</Text>}
              </Button>
            </View>
            <View>
              <LinearGradient
                colors={["#00ABB9FF", "#00ABB900"]}
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  height: 1,
                  position: "absolute",
                  width: "50%",
                  left: 0,
                }}
              />
              <LinearGradient
                colors={["#00ABB9FF", "#00ABB900"]}
                start={{ x: 2, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{
                  height: 1,
                  position: "absolute",
                  width: "50%",
                  right: 0,
                }}
              />
            </View>
            <View style={styles.docsSection}>
              <DocsList
                setChooseId={setChooseId}
                chooseId={chooseId}
                data={docsData}
                navigation={navigation}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {chooseId ? (
        <Button
          size="large"
          style={[
            styles.confirmButton,
            { bottom: Platform.OS === "ios" ? 110 : 80 },
          ]}
          onPress={() =>
            navigation.navigate("Confirm Booking", {
              /* generated booking */
              name: "Kim Potapov",
              date: "13 June",
              starttime: "15:00",
              endtime: "16:30",
              where: "at the therapist",
              price: 130,
            })
          }
        >
          Confirm
        </Button>
      ) : (
        true
      )}
    </LayoutMore>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  blurContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    paddingHorizontal: 30,
    position: "absolute",
    zIndex: 1,
  },
  blurContainerTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "65%",
    alignItems: "center",
  },
  blurContainerBottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "35%",
  },
  logo: {
    marginTop: -15,
    width: "50%",
    resizeMode: "contain",
  },
  filterSection: {
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
  },
  button: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  filterItemsContainer: {
    paddingVertical: 15,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A8A8A8",
    marginVertical: 5,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  filterItemText: { paddingLeft: 15, color: "#A8A8A8", fontSize: 18 },
  deleteButton: { backgroundColor: "transparent", borderWidth: 0 },
  timePlaceSection: {
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  timeWhereContainer: {
    marginBottom: 15,
  },
  timeWhereText: {
    fontSize: 18,
    color: "#454545",
    paddingBottom: 8,
    fontWeight: "500",
  },
  buttonGroup: {
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    borderRadius: 6,
  },
  selectedButton: {
    backgroundColor: "#00ABB9",
  },
  unseletedButton: { backgroundColor: "transparent" },
  selectedButtonGroupText: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 5,
    fontWeight: "500",
  },
  unselectedButtonGroupText: {
    color: "#00ABB9",
    fontSize: 16,
    paddingHorizontal: 5,
    fontWeight: "500",
  },
  adressSection: {
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  adressRadioTextBottom: {
    color: "#222222",
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: "500",
  },
  adressRadioTextTop: {
    color: "#A8A8A8",
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  newAdress: {
    flexDirection: "row",
    paddingTop: 10,
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "#A8A8A8",
    flexGrow: 1,
    maxWidth: "75%",
  },
  locateButton: {
    flexShrink: 1,
    width: 50,
    height: "auto",
    marginLeft: 20,
  },
  dateSection: {
    paddingVertical: 20,
    overflow: "hidden",
  },
  calendarStrip: {
    height: 100,
  },
  timeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  timeH: {
    color: "#454545",
    fontSize: 18,
    fontWeight: "500",
  },
  timesub: {
    color: "#454545",
    fontSize: 18,
    fontWeight: "400",
  },

  docsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  docsHeaderText: {
    fontSize: 20,
    color: "#222222",
    fontWeight: "700",
    alignSelf: "center",
  },
  docsSection: {
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  confirmButton: {
    position: "absolute",
    alignSelf: "center",
    width: "60%",
  },
})
export default NewBooking
