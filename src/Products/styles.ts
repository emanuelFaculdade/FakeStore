import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ProductCard = styled.View`
    flex: 1;
    background-color: gray;
`;

export const DetailsContainer = styled.View`
    padding: 10px;
`;

export const ProductImage = styled.Image`
    border-radius: 12px;
    width: 130px;
    height: 100px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333333;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: #25ff08;
`;