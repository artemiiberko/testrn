import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { Button, CheckBox, Popover, useTheme } from "@ui-kitten/components"
import LayoutMin from "../../Layouts/LayoutMin"
import { LinearGradient } from "expo-linear-gradient"
import { BlurView } from "expo-blur"
import ArrowBackSvg from "./../../../content/arrow-back.svg"
import ArrowBottomSvg from "./../../../content/arrow-bottom.svg"

const remindertime = ["15 min", "30 min", "1 hour", "2 hour", "1 day"]

const SettingsNotification = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState()
  const [scrollHeight, setScrollHeight] = useState({})
  const [cardHeight, setCardHeight] = useState()
  const [isNotification, setIsNotification] = useState(true)
  const [isReminder, setIsReminder] = useState(true)
  const [selectVisible, setSelectVisible] = useState(false)
  const [selectedReminder, setSelectedReminder] = useState("30 min")
  const theme = useTheme()

  return (
    <LayoutMin
      title=" "
      setHeaderHeight={setHeaderHeight}
      navigation={navigation}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: headerHeight,
          marginBottom: Platform.OS === "ios" ? 90 : 60,
        }}
      >
        <LinearGradient
          colors={[theme["color-primary-100"], theme["color-warning-600"]]}
          style={styles.card}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            setCardHeight(height)
          }}
        >
          <BlurView intensity={100}>
            <View
              style={[
                styles.backHeader,
                {
                  backgroundColor:
                    scrollHeight + 70 > cardHeight
                      ? "#e9f5f6FA"
                      : "transparent",
                },
              ]}
            >
              <View style={styles.backHeaderLeft}>
                <Button
                  style={styles.backButton}
                  appearance="ghost"
                  size="giant"
                  accessoryLeft={() => (
                    <ArrowBackSvg fill={theme["color-primary-500"]} />
                  )}
                  onPress={() => {
                    navigation.goBack()
                  }}
                />
                <Text style={styles.headerText}>Settings / Notification</Text>
              </View>
              <LinearGradient
                colors={[
                  theme["color-primary-500"],
                  theme["color-primary-100"],
                ]}
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: 1 }}
              />
            </View>
            <ScrollView
              scrollEnabled={scrollHeight + 70 > cardHeight ? true : false}
              contentContainerStyle={{
                paddingTop: 70,
              }}
            >
              <View
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout
                  setScrollHeight(height)
                }}
              >
                <View style={styles.section}>
                  <Text style={styles.sectionH}>
                    Following notifications are obligatory:
                  </Text>
                  <Text style={styles.firstSectionI}>
                    ~ Your booking is confirmed
                  </Text>
                  <Text style={styles.firstSectionI}>
                    ~ Your booking is canceled
                  </Text>
                  <Text style={styles.firstSectionI}>
                    ~ Messages from a therapist
                  </Text>
                </View>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={styles.section}>
                  <Text style={styles.sectionH}>
                    You may choose if you would like to receive following
                    notifications
                  </Text>
                  <CheckBox
                    checked={isNotification}
                    onChange={(nextChecked) => {
                      setIsNotification(nextChecked)
                    }}
                    style={styles.checkbox}
                  >
                    {() => (
                      <Text style={styles.checkboxText}>
                        Messages from Saluderia Team
                      </Text>
                    )}
                  </CheckBox>
                </View>
                <LinearGradient
                  colors={[
                    theme["color-primary-500"],
                    theme["color-primary-100"],
                  ]}
                  start={{ x: -1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 1 }}
                />
                <View style={styles.thirdSection}>
                  <CheckBox
                    checked={isReminder}
                    onChange={(nextChecked) => setIsReminder(nextChecked)}
                    style={styles.checkbox}
                  >
                    {() => (
                      <Text style={styles.checkboxText}>Session reminder</Text>
                    )}
                  </CheckBox>
                  <Popover
                    fullWidth={true}
                    placement="bottom"
                    visible={selectVisible}
                    anchor={() => (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={[
                          styles.selector,
                          { borderColor: theme["color-primary-500"] },
                        ]}
                        onPress={() => setSelectVisible(true)}
                      >
                        <Text
                          style={[
                            styles.selectedText,
                            { color: theme["color-primary-500"] },
                          ]}
                        >
                          {selectedReminder}
                        </Text>
                        <ArrowBottomSvg
                          fill={theme["color-primary-500"]}
                          height={12}
                        />
                      </TouchableOpacity>
                    )}
                    onBackdropPress={() => setSelectVisible(false)}
                    style={styles.popover}
                  >
                    <View
                      style={[
                        styles.popoverBody,
                        { backgroundColor: theme["color-warning-500"] },
                      ]}
                    >
                      {remindertime.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          activeOpacity={0.5}
                          onPress={() => {
                            setSelectedReminder(item)
                            setSelectVisible(false)
                          }}
                        >
                          <Text
                            style={[
                              styles.selectItemText,
                              { color: theme["color-primary-500"] },
                            ]}
                          >
                            {item}
                          </Text>
                          {index + 1 !== remindertime.length ? (
                            <LinearGradient
                              colors={[
                                theme["color-primary-500"],
                                theme["color-primary-100"],
                              ]}
                              start={{ x: -1, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={{ height: 1 }}
                            />
                          ) : (
                            true
                          )}
                        </TouchableOpacity>
                      ))}
                    </View>
                  </Popover>
                </View>
              </View>
            </ScrollView>
          </BlurView>
        </LinearGradient>
      </View>
    </LayoutMin>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e5f6fb",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  backHeader: {
    justifyContent: "flex-start",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  backHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#454545",
  },
  backHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  section: {
    padding: 20,
  },
  sectionH: {
    fontSize: 20,
    color: "#454545",
    paddingBottom: 20,
  },
  firstSectionI: {
    fontSize: 20,
    color: "#454545",
    paddingLeft: 10,
  },
  checkbox: { paddingBottom: 10 },
  checkboxText: {
    fontSize: 20,
    color: "#454545",
    paddingLeft: 10,
  },
  thirdSection: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selector: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    width: 120,
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedText: {
    fontSize: 18,
  },
  popover: {
    marginTop: -44,
    borderRadius: 3,
    borderWidth: 0,
  },
  popoverBody: {
    borderRadius: 3,
  },
  selectItemText: {
    fontSize: 18,
    padding: 10,
  },
})

export default SettingsNotification
