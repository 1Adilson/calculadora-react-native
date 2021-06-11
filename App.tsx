import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import {ViewYellow, InputCal, ButtonCal, Num,NumEQual, ButtonEqual,Opera, Title, Row, Col,InputCalEqual  } from "./style"
import { Formik } from 'formik';
import { Icon, View } from 'native-base';

export default function App() {
  return (
    <ViewYellow style={{paddingTop: Constants.statusBarHeight}}>
      <StatusBar  style="auto" />
      <Icon name="menu"/>
      <Formik
        initialValues={{
          numCal: "",
        }}
        onSubmit={(
          values: any,
          ) => {
            alert(values);
          }
        }
        >
        {({ values,  setFieldValue}: any) =>{
          console.log("values", values);
          
          return (
            <View style={{flex: 1}}>
            <InputCal  disabled={true} value={values.numCal}/>
            {/* <InputCalEqual  disabled={true} value={values}/> */}
            <Row> 
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', "")}>
                  <Opera>c</Opera>
                </ButtonCal>
                <ButtonCal transparent  onPress={()=> {
                  setFieldValue('numCal', `${values.numCal }8`)
                }}>
                  <Opera>del</Opera>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}%`)}>
                  <Opera>%</Opera>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}/`)}>
                  <Opera>/</Opera>
                </ButtonCal>
              </Col>
            </Row>
            <Row> 
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}7`)}>
                  <Num>7</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}8`)}>
                  <Num>8</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}9`)}>
                  <Num>9</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}*`)}>
                  <Opera>x</Opera>
                </ButtonCal>
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}4`)}>
                  <Num>4</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}5`)}>
                  <Num>5</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}6`)}>
                  <Num>6</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}-`)}>
                  <Opera>-</Opera>
                </ButtonCal>
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}1`)}>
                  <Num>1</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}2`)}>
                  <Num>2</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}3`)}>
                  <Num>3</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}+`)}>
                  <Opera>+</Opera>
                </ButtonCal>
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonCal transparent>
                  <Num></Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}0`)}>
                  <Num>0</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', `${values.numCal}.`)}>
                  <Num>,</Num>
                </ButtonCal>
                <ButtonEqual onPress={()=> {
                  const selectLastCal = values.numCal.toString().split('=');
                  setFieldValue('numCal', `${values.numCal}\n=${valid(selectLastCal[selectLastCal.length - 1])}`);
                 }}>
                  <NumEQual>=</NumEQual>
                </ButtonEqual>
              </Col>
            </Row>
          </View>
        )}}
      </Formik>
    </ViewYellow>
  );
}

function isCall(value: string): boolean {
  return /\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/.test(value);
}

function valid(value: string) : string {
  if (isCall(value.toString())) {
    return eval(value.toString().replace('=', '').replace(',', '.').replace("\n", ''));
  }
  return "invalido";
}
