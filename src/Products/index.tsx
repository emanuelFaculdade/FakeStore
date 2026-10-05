import { FlatList, TextInput } from "react-native";
import {
    Container,
    DetailsContainer,
    Price,
    ProductCard,
    ProductImage,
    Title
} from "./styles";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export function Products() {
    const [products, defProducts] = useState<Product[]>([]);
    const [categories, defCategories] = useState<string[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        async function loadProducts() {
            await fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => defProducts(data));
        }

        loadProducts();
    }, []);

    useEffect(() => {
        async function loadCategories() {
            await fetch("https://fakestoreapi.com/products/categories")
                .then(response => response.json())
                .then(data => defCategories(data));
        }

        loadCategories();
    }, []);

    const ProdutosFiltrados = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container>
            <TextInput
                value={search}
                onChangeText={(text) => setSearch(text)}
                placeholder="Buscar produto"
            />

            <FlatList
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TextInput value={item} />
                )}
                horizontal
            />

            <FlatList
                data={ProdutosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard>
                        <ProductImage
                            source={{ uri: item.image }}
                            resizeMode="cover"
                        />

                        <DetailsContainer>
                            <Title>{item.title}</Title>
                            <Price>{item.price}</Price>
                        </DetailsContainer>
                    </ProductCard>
                )}
                numColumns={2}
                columnWrapperStyle={{ gap: 12 }}
            />
        </Container>
    );
}
