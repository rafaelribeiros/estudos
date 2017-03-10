import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Text, StyleSheet } from 'react-native';
import MoviesList from './components/MoviesList';

class TabIcon extends React.Component {
    render() {
        return (
			<Text style={{ color: this.props.selected ? '#009688' : '#757575' }}>{this.props.title}</Text>
        );
    }
}

const RouterComponent = () => {
   return (
   <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} >
       <Scene key="tabbar" tabs >
          <Scene icon={TabIcon}
           component={MoviesList} 
           title="Ver nos cinemas" 
           key="feed_1"
           sceneStyle={styles.navbarSpace} 
            initial />  
            <Scene icon={TabIcon}
           component={MoviesList} 
           title="Vistos" 
           key="feed_2"
           sceneStyle={styles.navbarSpace} 
             />                             
       </Scene>
   </Router>    
  );
};

const styles = StyleSheet.create({
	navBar: {
    backgroundColor:'#0D47A1',
},  
    navbarSpace: {
		paddingTop: 65,
		paddingBottom: 45
	},
    navBarTitle:{
    color:'#FFFFFF'
},

});

export default RouterComponent;