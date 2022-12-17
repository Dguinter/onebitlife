import { NavigationContainer } from "@react-navigation/native";
import { cretNatitveStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";

const Stack = createNativeStackNavigator();

export default function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigatior
        screnOptions={{
          headerShown: false,
        }}
      >
    <Stack.Screen name="Start" component={Start}/>
    </Stack.Navigatior>
    </NavigationContainer>
  );
}
