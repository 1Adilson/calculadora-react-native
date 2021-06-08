import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import {ViewYellow, InputCal, ButtonCal, Num,NumEQual, ButtonEqual, Title} from "./style"
import { Formik } from 'formik';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, Container} from 'native-base';

export default function App() {
  return (
    <ViewYellow style={{paddingTop: Constants.statusBarHeight}}>
      <StatusBar  style="auto" />
      <Title>NATIVE CALCULATOR</Title>
      <Formik
        initialValues={{
          firstName: "0",
        }}
        onSubmit={(
          values: any,
          ) => {
            alert(values);
          }
        }
        >
        {({ values }: any) =>{
          console.log("values", values);
          
        return (
          <View> 
          <InputCal disabled={true} value={values.firstName}/>
          <Grid>
          <Col style={{ width:90,height: 400 }}>
            <Row style={{ height: 100 }}>
              <ButtonCal><Num>7</Num></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
              <ButtonCal><Num>4</Num></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
              <ButtonCal><Num>1</Num></ButtonCal>
            </Row>
          </Col>

          <Col style={{  width:90,height: 400 }}>
            <Row style={{ height: 100 }}>
            <ButtonCal><Num>8</Num></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Num>5</Num></ButtonCal>
            </Row>
            <Row style={{height: 100 }}>
            <ButtonCal><Num>2</Num></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Num>0</Num></ButtonCal>
            </Row>
          </Col>

          <Col style={{ width:100, height: 400 }}>
            <Row style={{height: 100 }}>
            <ButtonCal><Num>9</Num></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Num>6</Num></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
            <ButtonCal><Num>3</Num></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
            <ButtonCal><Num>,</Num></ButtonCal>
            </Row>
          </Col>

          <Col style={{ width:100, height: 400 }}>
            <Row style={{height: 100 }}>
            <ButtonCal><Num>x</Num></ButtonCal>
            </Row>
            <Row style={{ height: 100 }}>
            <ButtonCal><Num>-</Num></ButtonCal>
            </Row>
            <Row style={{ width:10, height: 100 }}>
            <ButtonCal><Num>+</Num></ButtonCal>
            </Row>
            <Row style={{  height: 100 }}>
            <ButtonEqual><NumEQual>=</NumEQual></ButtonEqual>
            </Row>
          </Col>
          
        </Grid>
          </View>
        )}}
      </Formik>
    </ViewYellow>
  );
}
