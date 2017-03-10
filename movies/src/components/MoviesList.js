import React, { Component} from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ItemMovie from './ItemMovie';

class MoviesList extends Component{ 

  componentWillMount() {      
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.props.movies);       
  }

  renderRow(movie){
       return <ItemMovie movie={movie} />
  }
   
  render(){
     return(
         <ListView         
         dataSource={this.dataSource}  
         renderRow={this.renderRow}      
         />
     );
    }  
}

const mapStateToProps = state => {  
    return { movies: state.movies };  
}

export default connect(mapStateToProps)(MoviesList);