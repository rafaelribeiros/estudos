import React, { Component} from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { loadMovies } from '../actions';
import { Spinner } from './common';
import ItemMovie from './ItemMovie';

class MoviesList extends Component{ 

  componentWillMount() {      
     this.props.loadMovies();       
     this.createDataSource(this.props);     
  }

  componentWillReceiveProps(nextProps){
      console.log(nextProps);
   this.createDataSource(nextProps);
  }

  createDataSource({ movies }){      
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(movies);   
  }

  renderRow(movie){
       return <ItemMovie movie={movie} />
  }

  loadMoreMovies(){
      return console.log('entrou');
  }
   
  render(){
      if (this.props.loading) {
			return <Spinner size='large' />;
		}
     return(
         <ListView
         onEndReachedThreshold={300}
         enableEmptySections         
         dataSource={this.dataSource}  
         renderRow={this.renderRow} 
         onEndReached={this.loadMoreMovies}     
         />
     );
    }  
}

const mapStateToProps = state => {  
    const { movies, loading } = state.movies;
    console.log(state.movies);
    return { movies, loading };  
}

export default connect(mapStateToProps, { loadMovies })(MoviesList);