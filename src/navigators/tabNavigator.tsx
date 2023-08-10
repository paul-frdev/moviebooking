import customIcon from '../components/ui/customIcon';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import TicketScreen from '../screens/ticketScreen';
import UserAccountScreen from '../screens/userAccountScreen';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={SearchScreen} />
			<Tab.Screen name="Ticket" component={TicketScreen} />
			<Tab.Screen name="User" component={UserAccountScreen} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default TabNavigator;
