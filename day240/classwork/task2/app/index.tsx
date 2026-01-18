import { FlatList, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <FlatList
          data={Array.from({ length: 50 }).map((_, i) => ({ key: i }))}
          renderItem={({ item }) => <Text key={item.key}>Some content...</Text>}
        />
      </ScrollView>

      {/* 
        scrollview - ამას იმისთვის ვიყენებთ რომ ერთზე მეტი კომპონენტი ჩავდოთ და
        კომპონენტების ზომა ეკრანს აღემატებოდეს

        flatlist - ამას იმისთვის ვიყენებთ რომ დიდი რაოდენობის მონაცემები
        გამოვაჩინოთ და არ დავტვირთოთ ყველაფერი ერთდროულად
      */}
    </View>
  );
}
