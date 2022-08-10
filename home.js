import React from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";


export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            list_data: [],
            url: "http://127.0.0.1:5000/"
        }
    }

    componentDidMount(){
        this.getStars();
    }

    getStars=()=>{
        const {url} = this.state
        axios.get(url).then(response=>{
            return this.setState({list_data:response.data.data})
        })
        .catch(error=>{alert(error.message)})
    }

    renderItem=({item, index})=>{
        return(
            <View style={styles.container}>
                <View style={styles.left_container}>
                    <Text style={styles.left_text}>
                        Star Name: <Text style={{fontWeight:"bold"}}> {item.name} </Text>
                    </Text>
                    <Text style={styles.left_text}>
                        Distance from Earth: 
                        <Text style={{fontWeight:"bold"}}> {item.distance} </Text>
                        lightyears
                    </Text>
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate("Details",{ star_name: item.name })
                    }}
                >
                    <Text style={styles.button_text}>Details</Text>
                </TouchableOpacity>
            </View>
        );
    }

    keyExtractor=(item, index)=>index.toString();

    render(){
        return(
            <View>
                <FlatList
                    data={this.state.list_data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row", 
        padding:10, 
        flex:1, 
        justifyContent:"space-between",
        borderBottomWidth:2,
        borderColor:"#FFEC9C"
    },
    left_container:{
        flexDirection:"column", 
        padding:10, 
        justifyContent:"center", 
        alignSelf:"center"
    },
    left_text:{
        color:"#FFEC9C", 
        alignSelf:"flex-start",
        fontSize:20
    },
    button:{
        backgroundColor:"#6A71A5",
        width:120,
        height:60,
        justifyContent:"center",
        borderRadius:10,
        borderColor:"#FFEC9C",
        borderWidth:2,
        alignSelf:"center"
    },
    button_text:{
        color:"#FFEC9C",
        alignSelf:"center",
        fontSize:20
    }
});
