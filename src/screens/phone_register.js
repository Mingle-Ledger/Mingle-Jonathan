 
import React, { useState, useRef } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableHighlight } from "react-native";
import PhoneInput from "react-native-phone-input";
 
const PhoneRegister = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
   const phoneInput = useRef<PhoneInput>(null);
 
 
  const handleSubmit = () => {
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (isValid) {
        console.log("SUBMITTED! ", phoneNumber)
    } 
    else {
        console.log("INVALID NUMBER.", phoneNumber)
    }
  }
  return (
    <SafeAreaView>
          <PhoneInput
               style={styles.phoneInput}
               initialValue={phoneNumber}
               initialCountry="us"
               onChangePhoneNumber={(text) => {
                   setPhoneNumber(text);
               }}
               withShadow
               autoFocus
           />
      <TouchableHighlight onPress={handleSubmit}>
         <Text>Submit</Text>
      </TouchableHighlight>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
   phoneInput: {
       borderWidth: 1,
       borderRadius: 25,
       width: 250,
       height: 50,
       padding: 5,
       bottom:-100
   },
  button: {
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 15,
      marginTop: 25,
      padding: 10,
      alignItems: 'center'
  },
});

export default PhoneRegister