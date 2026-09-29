import { FlatList, Text, View } from "react-native";
import { Container, DetailsContainer, Price, ProductCard, ProductImage, Title } from "./styles";

const PRODUCTS = [
    {
        id: '1',
        title: 'Tenis Esportivo',
        price: 'R$ 250,95',
        image: 'https://tfdfjz.vteximg.com.br/arquivos/ids/371835/tenis-esportivo-new-balance-feminino-520v9-preto-520v9-1.jpg?v=639072015197630000',
    },
    {
        id: '2',
        title: 'Fone de ouvido Hyper x Cloud 3',
        price: 'RS 300,90',
        image: 'https://m.media-amazon.com/images/I/71pz2njkNRL._AC_UF894,1000_QL80_.jpg'
    },
        {
        id: '3',
        title: 'Memoria ram',
        price: 'RS 300,90',
        image: 'https://cdn.awsli.com.br/2500x2500/2179/2179851/produto/316493988/memoria-ddr3-4gb-pc--5--ileqoq1oi9.jpeg'
    },
        {
        id: '4',
        title: 'Placa de video',
        price: 'RS 2000',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfgEQaiYp1IfXbPfvjw8H3I1lMNbX8FM09_JXA4PFgIp3E1Jhnlh4mNsc&s=10'
    }
]

export function Products(){
    return(
        <Container>
            <Text>Produtos</Text>
            <FlatList
            data={PRODUCTS}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <ProductCard>
                    <ProductImage
                        source={{
                            uri: item.image,
                        }}
                        resizeMode="cover"
                    />

                    <DetailsContainer>
                        <Title>{item.title}</Title>
                        <Price>{item.price}</Price>
                    </DetailsContainer>
                </ProductCard>
            )}
        />
        </Container>
    );
}