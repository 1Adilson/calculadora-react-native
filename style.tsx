
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


export const InputCal = styled(Textarea)`
    flex: 3;
    background-color:  #1F1F1F;
    color: #fff;
    font-size: 50px;
    text-align: right;
    border:#1F1F1F;

`;


export const ButtonCal = styled(Button)`
    width: ${widthButtonSize};
    height: ${heightButtonSize};
    justify-content: center;
    border-radius: 10px;
    background-color: #1F1F1F;
    padding: 15px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ButtonEqual = styled(Button)`
    flex: 1;
    height: 100%;
    justify-content: center;
    background-color:#f22613;
    margin-left: 1px;
    margin-right: 0px;
`;

export const Num = styled(Text)`
    color: #fff;
    font-size: 25px;
`;
export const Opera = styled(Text)`
    color: #22a7f0;
    font-size: 25px;
`;

export const NumEQual = styled(Text)`
    color: white;
    font-size: 40px;
`;

export const Row = styled(View)`
    flex: 1;
    background-color: #1F1F1F;
    position: relative;
    flex-direction: column;
`;

export const Col = styled(View)`
    flex: 1;
    flex-direction: row;
`;

