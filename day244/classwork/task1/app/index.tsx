import { Text, View, FlatList, StyleSheet, Image } from "react-native";

export default function Index() {
  interface ItemData {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

  const DATA: ItemData[] = Array.from({ length: 40 }, (_, i) => ({
    id: (i + 1).toString(),
    title: `List Element ${i + 1}`,
    subtitle: `Sub-description for item #${i + 1}`,
    imageUrl: `https://picsum.photos/id/${i + 10}/200`,
  }));

  const renderItem = ({ item }: { item: ItemData }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('Fetch next 40 items...')}
        onEndReachedThreshold={0.5} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  image: { width: 50, height: 50, marginRight: 15, borderRadius: 25 },
  title: { fontWeight: 'bold', fontSize: 16 }
});