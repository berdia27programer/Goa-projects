import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useContext } from 'react';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Context
import { ProductsProvider, ProductsContext } from './ProductsContext.jsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Products = ({ navigation }) => {
  const { products } = useContext(ProductsContext);

  const render = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Product', { productId: item.id })}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        <View style={styles.cardContent}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.price}>${item.price}</Text>

          <Text style={styles.detailsBtn}>See details →</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {products.length !== 0 ? (
        <FlatList
          data={products}
          renderItem={render}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 16 }}
        />
      ) : (
        <Text style={styles.loading}>Products are loading...</Text>
      )}
    </View>
  );
};

const Product = ({ route }) => {
  const { productId } = route.params;
  const { products } = useContext(ProductsContext);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found xd</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.detailsContainer}>
      <Image source={{ uri: product.image }} style={styles.detailsImage} />

      <Text style={styles.detailsTitle}>{product.title}</Text>
      <Text style={styles.detailsPrice}>${product.price}</Text>
      <Text style={styles.detailsDescription}>
        {product.description || 'No description available.'}
      </Text>
    </ScrollView>
  );
};

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initalRouteName="Products"
      // screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <ProductsProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" />
          <Tab.Screen name="Shop" component={ShopNavigator} />
        </Tab.Navigator>
      </ProductsProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  loading: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
  },

  // Card
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3, // Android shadow
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2e7d32',
    marginBottom: 8,
  },
  detailsBtn: {
    color: '#2563eb',
    fontWeight: '600',
  },

  // Details Screen
  detailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  detailsImage: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  detailsPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2e7d32',
    marginBottom: 12,
  },
  detailsDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});