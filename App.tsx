import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, Pressable} from 'react-native';

const bannerImage = require('./assets/pets.png'); 

const products = [
  {
    id: '1',
    name: 'Coleira P/ Gato e Cachorro',
    price: 'R$ 14.99',
    image: require('./assets/coleira.png'),
  },
  {
    id: '2',
    name: 'Bolinha Anti-Stress',
    price: 'R$ 4.99',
    image: require('./assets/Bolinha.jpg'), 
  },
 
  {
    id: '3',
    name: 'Caixa de Tranporte',
    price: 'R$ 49.99',
    image: require('./assets/casinha.png'),
  },
  {
    id: '4',
    name: 'Bebedouro P/ Gatos',
    price: 'R$ 27.50',
    image: require('./assets/bebedouro.png'), 
  },
 
  {
    id: '5',
    name: 'Ratinho de Borracha',
    price: 'R$ 3.99',
    image: require('./assets/ratinho.png'),
  },
  {
    id: '6',
    name: 'Osso de Borracha',
    price: 'R$ 11.99',
    image: require('./assets/osso.jpg'), 
  },
 
];

const App = () => {
  const handleBuy = (productName: string, productPrice: string) => {
    console.log(`Botão "Comprar" pressionado para o produto "${productName}"`);
    
    alert(`Compra realizada. Você comprou o produto "${productName}" por R$: ${productPrice}`);
  };

  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <View style={styles.product}>
      <Image source={item.image} style={styles.productImage} resizeMode="cover" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Pressable
        style={styles.buyButton}
        onPress={() => handleBuy(item.name, item.price)}
      >
        {({ pressed }) => (
          <Text style={[styles.buyButtonText, { color: pressed ? 'gray' : 'white' }]}>Comprar</Text>
        )}
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={bannerImage} style={styles.bannerImage} resizeMode="cover" />
      </View>
      <View style={styles.productList}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Exibe 2 produtos por linha
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  bannerContainer: {
    backgroundColor: 'black', 
    borderBottomWidth: 2, 
    borderBottomColor: 'yellow', 
    marginBottom: 16, 
  },
  bannerImage: {
    width: '100%',
    height: 200, 
  },
  productList: {
    paddingHorizontal: 16, 
  },
  product: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
    marginBottom: 16,
    marginRight: 8, 
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 150, 
    borderRadius: 8,
  },
  productName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8, 
  },
  productPrice: {
    color: 'white',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 12, 
    borderRadius: 8,
  },
  buyButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  columnWrapper: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
});

export default App;

