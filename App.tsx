import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import {ViewYellow, InputCal, ButtonCal, Num,NumEQual, ButtonEqual,Opera, Title, Row, Col} from "./style"
import { Formik } from 'formik';
import { View } from 'native-base';


export default function App() {
  return (
    <ViewYellow style={{paddingTop: Constants.statusBarHeight}}>
      <StatusBar  style="auto" />
      <Formik
        initialValues={{
          firstName: "",
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
            <InputCal /* rowSpan={20} */ disabled={true} value={values.firstName}/>
            <Row> 
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', values.firstName = "")}>
                  <Num>C</Num>
                </ButtonCal>
                <ButtonCal transparent  onPress={()=> setFieldValue('firstName', `${values.firstName}8`)}>
                  <Opera>DEL</Opera>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}%`)}>
                  <Opera>%</Opera>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}/`)}>
                  <Opera>/</Opera>
                </ButtonCal>
              </Col>
            </Row>
            <Row> 
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}9`)}>
                  <Num>9</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}8`)}>
                  <Num>8</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}7`)}>
                  <Num>7</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}x`)}>
                  <Opera>x</Opera>
                </ButtonCal>
              </Col>
            </Row>

            <Row>
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}6`)}>
                  <Num>6</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}5`)}>
                  <Num>5</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}4`)}>
                  <Num>4</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}-`)}>
                  <Opera>-</Opera>
                </ButtonCal>
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}3`)}>
                  <Num>3</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}2`)}>
                  <Num>2</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}1`)}>
                  <Num>1</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}+`)}>
                  <Opera>+</Opera>
                </ButtonCal>
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonCal transparent>
                  <Num></Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName}0`)}>
                  <Num>0</Num>
                </ButtonCal>
                <ButtonCal transparent onPress={()=> setFieldValue('firstName', `${values.firstName},`)}>
                  <Num>,</Num>
                </ButtonCal>
                <ButtonEqual onPress={()=> setFieldValue('firstName', `${values.firstName}=`)}>
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
