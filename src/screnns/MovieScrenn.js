import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const MovieScrenn = () => {
  const [movie,setMovie] = useState([])
  const navigation = useNavigation()


  const requete = async () => {
    const requeteAPI = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=8c60ae156391f5e53f062d6b588d4607&language=fr-FR&page=1");
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
   let poster = movie.results?.[0].poster_path
   
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection:'row',flex:1}}>
        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[0].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[0].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[0].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
          
      <Text style={{textAlign:'center'}}>{movie.results?.[0].vote_average}/10</Text>
        </View>

        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[1].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[1].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[1].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{movie.results?.[1].vote_average}/10</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',flex:1}}>
        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[2].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[2].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[2].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{movie.results?.[2].vote_average}/10</Text>
        </View>

        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[3].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[3].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[3].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{movie.results?.[3].vote_average}/10</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',flex:1}}>
        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[4].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[4].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[4].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{movie.results?.[4].vote_average}/10</Text>
        </View>

        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[5].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[5].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[5].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{movie.results?.[5].vote_average}/10</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',flex:1}}>
        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[6].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[6].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[6].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{movie.results?.[6].vote_average}/10</Text>
        </View>

        <View style={{flex:0.5,justifyContent:'center'}}>
       <Text style={{textAlign:'center'}}>{movie.results?.[7].title}</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Details", {titre: movie.results?.[7].id})}>
        <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.results?.[7].poster_path}} style={{width:200,height:300,alignSelf:'center'}}/>
       </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{movie.results?.[7].vote_average}/10</Text>
        </View>
      </View>
    
    </ScrollView>
  )
}

export default MovieScrenn

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

})