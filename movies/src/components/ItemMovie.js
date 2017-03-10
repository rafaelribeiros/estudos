import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native' ;
import { CardSection, Card } from './common';

class ItemMovie extends Component{
    render(){
        const { movie } = this.props;
		const {imageStyle, textStyle, sectionStyle} = styles;
        return(
            <View>
					<Card>
						<CardSection style={sectionStyle}>
							<Text style={textStyle}>
								{movie.title}
							</Text>
						</CardSection>
						<CardSection>
							<Image  style={imageStyle}
							 source={{uri:movie.image}}
							/>								
						</CardSection>
					</Card>
				</View>			
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
		flex:1, 
		height: 300
	},
	textStyle:{
		fontSize: 16,
		color: 'white'		
	},
	sectionStyle:{
		backgroundColor:'#4CD964'
	}
});

export default ItemMovie;