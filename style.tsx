
import { Button, Textarea } from "native-base";
import {View, Text, Dimensions} from 'react-native';
import styled from "styled-components/native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const div = Number((height/width).toFixed(0));

const widthButton = width*0.1*div;
const heightButton = height*0.1;

const widthButtonSize = `${widthButton}px`
const heightButtonSize = `${heightButton}px`


export const ViewYellow = styled(View)`
    flex: 1;
`;

export const Title = styled(Text)`
    color: orange;
    text-align: center;
    font-size: 30px;
`;

export const InputCal = styled(Textarea)`
    flex: 3;
    margin: 10px;
    background-color: #fff;
    color: #37474f;
    border:none;
    font-size: 50px;
    text-align: right;
    border-color: #fff;
    border-bottom-color: #f0f0f0;
    border-width: 1px;
`;
export const InputCalEqual = styled(Textarea)`
    flex: 3;
    margin: 10px;
    background-color: #fff;
    color: #37474f;
    border:none;
    font-size: 50px;
    text-align: right;
    border-color: #fff;
    border-bottom-color: #f0f0f0;
    border-width: 1px;
`;


export const ButtonCal = styled(Button)`
    width: ${widthButtonSize};
    height: ${heightButtonSize};
    justify-content: center;
    border-radius: 10px;
    background-color: #fff;
    padding: 15px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ButtonEqual = styled(Button)`
    flex: 1;
    height: 80%;
    justify-content: center;
    border-radius: 100px;
    background-color:#ff7043 ;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Num = styled(Text)`
    color: black;
    font-size: 25px;
`;
export const Opera = styled(Text)`
    color: #ff7043;
    font-size: 25px;
`;

export const NumEQual = styled(Text)`
    color: white;
    font-size: 40px;
`;

export const Row = styled(View)`
    flex: 1;
    background-color: #fff;
    position: relative;
    flex-direction: column;
`;

export const Col = styled(View)`
    flex: 1;
    flex-direction: row;
`;

