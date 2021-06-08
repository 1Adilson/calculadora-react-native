import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import {ViewYellow, Title, InputCal, ButtonCal } from "./style"
import { Formik } from 'formik';
import { Alert, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View } from 'native-base';

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
          <Grid>
          <Col style={{ height: 400 }}>
            <Row style={{ height: 100 }}>
              <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>7</Text></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
              <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>4</Text></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
              <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>1</Text></ButtonCal>
            </Row>
          </Col>

          <Col style={{  height: 400 }}>
            <Row style={{ height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>8</Text></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>5</Text></ButtonCal>
            </Row>
            <Row style={{height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>2</Text></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>0</Text></ButtonCal>
            </Row>
          </Col>

          <Col style={{ height: 400 }}>
            <Row style={{height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>9</Text></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>6</Text></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>3</Text></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>,</Text></ButtonCal>
            </Row>
          </Col>

          <Col style={{ height: 400 }}>
            <Row style={{height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>x</Text></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>-</Text></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
            <ButtonCal><Text style={{color: "#000", textAlign: "center"}}>+</Text></ButtonCal>
            </Row>
          </Col>
          
        </Grid>
          </View>
        )}
      </Formik>
    </ViewYellow>
  );
}
