import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { setAuthHeader } from "../utils/functions";
import Vimeo from "@u-wave/react-vimeo";

const Api = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		setAuthHeader();

		axios
			.get("https://api.vimeo.com/me/videos")
			.then((response) => {
				setVideos(response.data.data);
			})
			.catch((error) => console.error(error));
	}, []);

	const styles = StyleSheet.create({
		container: {
			textAlign: "center",
		},
		head: {
			fontSize: "1.2em",
			backgroundColor: "green",
			padding: 10,
			height: 50,
			color: "white",
		},
		description: {
			fontFamily: "sans-serif",
		},
		videos: {
			marginTop: 20,
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.head}>Pilates on Demand</Text>
			{videos.map((video) => {
				// if (
				// video.privacy.embed === "public" &&
				// video.duration !== 0
				// video.privacy.view !== "nobody"
				// ) {
				return (
					<View key={video.uri.substring(8)} style={styles.videos}>
						<Vimeo video={video.uri.substring(8)} width="350" />
					</View>
				);
				// }
			})}
		</View>
	);
};

export default Api;
