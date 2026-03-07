import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function App() {
 return (
   <SafeAreaProvider>
      <Test />
    </SafeAreaProvider>
 );
};

const Test = () => {
  const instes = useSafeAreaInsets();
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', paddingTop: instes.top }}
        >
      <Text>Make sure I stay visible on the screen!</Text>
    </View>
  )
}