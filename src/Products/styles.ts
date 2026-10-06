import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import type { Product } from ".";

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const Header = styled.View`
    padding: 20px 16px 10px;
`;


export const DetailsContainer = styled.View`
    padding: 10px;
`;

export const ProductImage = styled.Image`
    border-radius: 12px;
    width: 40%;
    height: 100px;
    margin-bottom: 10px;
`;

export const ProductInfo = styled.View`
    flex: 1;
`;

export const CategoryList = styled(FlatList<string>)`
  margin-bottom: 6px;
`;

export const ProductGrid = styled(FlatList<Product>)`
  margin-bottom: 6px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  min-height: 42px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
`;

export const ProductRating = styled.Text`
    font-size: 14px;
    color: #ecffa5;
    margin-top: 8px;
`;

export const BottomBar = styled.View`
    height: 60px;
    flex-direction: row;
    background-color: #ffffff;
    border-top-width: 1px;
    border-top-color: #dddddd;
`;

export const BottomBarButton = styled.Pressable`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 14px;
    color: black;
`;

export const ProductCard = styled.Pressable`
    width: 48%;
    min-height: 330px;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 12px;
    margin-bottom: 14px;
`;

export const ScreenTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333333;
`;

export const SearchInput  = styled.TextInput`
    height: 50px;
    background-color: #e0d6d696;
    border-radius: 10px;
    padding: 0 16px;
    font-size: 14px;
    color: black;
    margin-bottom: 12px;
`;

export const CategoryText = styled.Text`
    font-size: 12px;
    font-weight: 500px;
    color: black;
`;

export const CategoryChip = styled.Pressable`
    padding: 10px 16px;
    border-radius: 20px;
    margin-right: 8px;
`;

export const ProductTittle = styled.Text`
font-size: 15;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: #25ff08;
`;

export const Category = styled.View`
  padding: 8;
  border: 1px solid #000;
  border-radius: 999px;
`;

export const Categorytext = styled.Text`
`;
