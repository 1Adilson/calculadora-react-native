import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import {
  ViewYellow, 
  InputCal, 
  ButtonCal, 
  Num,
  NumEQual, 
  ButtonEqual,
  Opera, 
  Row, 
  Col,
} from "./style"
import { Formik } from 'formik';
import { View } from 'native-base';


export default function App() {
  return (
    
    <ViewYellow style={{paddingTop: Constants.statusBarHeight}}>
      <StatusBar style="light" backgroundColor="#1F1F1F" />
      <Formik
        initialValues={{
          numCal: "\n\n\n\n\n",
        }}
        values={("\n\n\n\n\n")}
        onSubmit={(
          values: any,
          ) => {
            alert(values);
          }
        }
        >
        {({ values,  setFieldValue}: any) =>{
          return (
            <View style={{flex: 1}}>
              <InputCal  disabled={true} value={values.numCal.toString().replace("*","x").replace(".",",")}/>
            <Row> 
              <Col>
                <ButtonCal transparent onPress={()=> setFieldValue('numCal', "\n\n\n\n\n")}>
                  <Opera>c</Opera>
                </ButtonCal>
                <ButtonCal transparent  onPress={()=> {
                  setFieldValue('numCal', `${substring(values.numCal)}`)
                }}>
                  <Opera>Del</Opera>
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
                  setFieldValue('numCal', `${values.numCal}\n=${valid(selectLastCal[selectLastCal.length - 1]).toString().replace(".",",").replace("*","x")}`);
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
function substring(value:string){
  return value.slice(0, -1);    
   
}   

function valid(value: string) : string {
  if (isCall(value.toString())) {
    return eval(value.toString().replace('=', '').replace(',', '.').replace("\n", ''));
  }
  return "invalido";
}
