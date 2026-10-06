import { useEffect, useState } from "react";
import {
    BottomBar,
    BottomBarButton,
    ButtonText,
    CategoryChip,
    CategoryList,
    CategoryText,
    Container,
    Header,
    ProductCard,
    ProductGrid,
    ProductImage,
    ProductInfo,
    ProductPrice,
    ProductRating,
    ProductTitle,
    ScreenTitle,
    SearchInput,
} from "./styles";

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
}

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        async function loadProducts() {
            await fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => setProducts(data));
        }

        loadProducts();
    }, []);

    useEffect(() => {
        async function loadCategories() {
            await fetch("https://fakestoreapi.com/products/categories")
                .then(response => response.json())
                .then(data => setCategories(data));
        }

        loadCategories();
    }, []);

    const ProdutosFiltrados: Product[] = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container>
            <Header>
                <ScreenTitle>Loja</ScreenTitle>

                <SearchInput
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    placeholder="Buscar produtos"
                />

                <CategoryList
                    data={categories}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <CategoryChip>
                            <CategoryText>{item}</CategoryText>
                        </CategoryChip>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Header>

            <ProductGrid
                data={ProdutosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const imageSource = { uri: item.image };

                    return (
                        <ProductCard>
                            <ProductImage
                                source={imageSource}
                                resizeMode="cover"
                            />

                            <ProductInfo>
                                <ProductTitle>{item.title}</ProductTitle>

                                <ProductPrice>
                                    ${item.price.toFixed(2)}
                                </ProductPrice>

                                <ProductRating>
                                    {item.rating.rate} ({item.rating.count})
                                </ProductRating>
                            </ProductInfo>
                        </ProductCard>
                    );
                }}
                numColumns={2}
                columnWrapperStyle={{ gap: 12 }}
            />

            <BottomBar>
                <BottomBarButton>
                    <ButtonText>
                        Inicio
                    </ButtonText>
                </BottomBarButton>
                <BottomBarButton>
                    <ButtonText>
                        Buscar
                    </ButtonText>
                </BottomBarButton>
                <BottomBarButton>
                    <ButtonText>
                        Carrinho
                    </ButtonText>
                </BottomBarButton>
                <BottomBarButton>
                    <ButtonText>
                        Perfil
                    </ButtonText>
                </BottomBarButton>
            </BottomBar>
        </Container>
    );
}
