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

  updateDataSource({ movies }){      
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      console.log(this.dataSource);
      this.dataSource = ds.cloneWithRows(movies);   
  }

  renderRow(movie){
       return <ItemMovie movie={movie} />
  }

  renderFooter(){             
	   return <Spinner size='large' />;	   
  }

  loadMoreMovies(){
       this.updateDataSource(this.props);   
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
         renderFooter={this.renderFooter.bind(this)}
         onEndReached={this.loadMoreMovies.bind(this)}     
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