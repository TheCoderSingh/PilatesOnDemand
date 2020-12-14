import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Api from "./Api/Api";

export default function App() {
	return (
		<View>
			<Api />
			<StatusBar style="auto" />
		</View>
	);
}
