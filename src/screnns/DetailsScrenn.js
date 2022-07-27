import { StyleSheet, Text, ScrollView,Image,View } from 'react-native'
import React, { useEffect, useState } from 'react'

const DetailsScrenn = (props) => {
    const [movie,setMovie] = useState([])
    const requete = async () => {
      const requeteAPI = await fetch("https://api.themoviedb.org/3/movie/"+props.route.params.titre+"?api_key=8c60ae156391f5e53f062d6b588d4607&language=fr-FR");
      const json = await requeteAPI.json();
      console.log("Response du json", json);
      return json;
  }
    
  
  const movieinit = async () => {
    await requete().then(requete => {
        setMovie(requete);
       
  
    }
    )
    .catch(error => {
      
    }
    )
    
  }
    
  
    useEffect(() => {
      movieinit()
    },[],
    )


   
  return (
    <ScrollView style={{flex:1}}>
      <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:30,alignSelf:'center',marginBottom:50}}>{movie.title}</Text>
      <Image source={{uri:"https://image.tmdb.org/t/p/original/"+movie.poster_path}} style={{width:250,height:400,alignSelf:'center'}}/>
      <Text style={{alignSelf:'center'}}>{movie.popularity}</Text>
      <Text style={{fontSize:14,marginTop:20}}>{movie.overview}</Text>
      </View>
      
    </ScrollView>
  )
}

export default DetailsScrenn

const styles = StyleSheet.create({})

//https://api.themoviedb.org/3/movie/'+props.route.params.titre+'?api_key=8c60ae156391f5e53f062d6b588d4607&language=fr-FR