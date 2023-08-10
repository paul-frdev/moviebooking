import TabNavigator from './src/navigators/tabNavigator';
import MovieDetailsScreen from './src/screens/movieDetailsScreen';
import SeatBookingScreen from './src/screens/seatBookingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
interface AppProps {}

const App = (props: AppProps) => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Tab" component={TabNavigator} options={{ animation: 'slide_from_right' }} />
				<Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ animation: 'slide_from_bottom' }} />
				<Stack.Screen name="SeatBooking" component={SeatBookingScreen} options={{ animation: 'slide_from_bottom' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {},
});
