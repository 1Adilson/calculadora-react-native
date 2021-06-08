
import { Button, Header, Textarea } from "native-base";
import {View, Text} from 'react-native';
import styled from "styled-components/native";

export const ViewYellow = styled(View)`
    border-color: orange;
`;



export const Title = styled(Text)`
top: 15px;
    color: orange;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`;

export const InputCal = styled(Textarea)`
    left: 50px;
    top: 170px;
    background-color: #fff;
    color: black;
    border-width: 1px;
    border:none;
    width: 300px;
    font-size: 50px;
    text-align: right;
`;

export const ButtonCal = styled(Button)`
    width: 65px; 
    height: 65px;
    justify-content: center;
    border-radius: 10px;
    left: 25px;
    top: 300px;
    background-color: #fff;
`;

export const ButtonEqual = styled(Button)`
    width: 65px; 
    height: 65px;
    justify-content: center;
    border-radius: 100px;
    left: 25px;
    top: 300px;
    background-color: orange;
    border-color: orange;
    border-width: 2px;
`;

export const Num = styled(Text)`
color: black;
font-size: 25px;
`;

export const NumEQual = styled(Text)`
color: white;
font-size: 40px;
`;


