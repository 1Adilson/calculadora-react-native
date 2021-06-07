import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import {ViewYellow, Title, InputCal, ButtonCal } from "./style"
import { Formik } from 'formik';
import { Alert, View, Button } from 'react-native';


export default function App() {
  return (
    <ViewYellow style={{paddingTop: Constants.statusBarHeight}}>
      <StatusBar style="auto" />
      <Title>CALCULADORA</Title>
      <Formik
        initialValues={{
          firstName: 0,
        }}
        onSubmit={(
          values: any,
        ) => {
          alert(values);
        }
      }
      >
        {props => (
          <View>
            <InputCal/>
            <ButtonCal color="black" title="1" onPress={() => Alert.alert("AQUI")}/>
            <ButtonCal color="black" title="2" onPress={() => Alert.alert("AQUI")}/>
            <ButtonCal color="black" title="3" onPress={() => Alert.alert("AQUI")}/>
            <ButtonCal  title="4" onPress={() => Alert.alert("AQUI")}/>
            <ButtonCal color="black" title="5" onPress={() => Alert.alert("AQUI")}/>
            <ButtonCal  title="6" onPress={() => Alert.alert("AQUI")}/>
          </View>
        )}
      </Formik>
    </ViewYellow>
  );
}


