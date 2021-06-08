
import { Button } from "native-base";
import {View, Text, TextInput} from 'react-native';
import styled from "styled-components/native";

export const ViewYellow = styled(View)`
    flex: 1;
    background-color: #fff;
`;

export const Title = styled(Text)`
    top: 100px;
    color: black;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`;

export const InputCal = styled(TextInput)`
    left: 50px;
    top: 200px;
    background-color: #fff;
    color: black;
    border-width: 1px;
    border-color: black;
    padding: 10px;
    width: 300px;
`;

export const ButtonCal = styled(Button)`
    width: 65px; 
    height: 65px;
    justify-content: center;
    border-radius: 10px;
    left: 20px;
    top: 300px;
    background-color: #fff;
    border-width: 2px;
`;

