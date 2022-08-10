import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import axios from "axios";

export default class DetailsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            details: {},
            url: `http://127.0.0.1:5000/star?name=${this.props.navigation.getParam("star_name")}`
        }
    }

    componentDidMount(){
        this.getDetails();
    }

    getDetails=()=>{
        const {url} = this.state
        axios.get(url).then(response=>{
            this.setState({details: response.data.data});
        })
        .catch(error=>{alert(error.message)})
    }

    render(){
        const {details} = this.state;
        return(
            <View style={styles.container}>
                <Card>
                    <Card.Title>{details.name}</Card.Title>
                    <Card.Divider />
                    <View style={{flexDirection:"column"}}>
                        <View>
                            <Text style={styles.text}>
                                Distance from Earth: 
                                <Text style={{fontWeight:"bold"}}> {details.distance} </Text>
                                lightyears
                            </Text>
                            <Text style={styles.text}>
                                Gravity: 
                                <Text style={{fontWeight:"bold"}}> {details.gravity} </Text>
                                m/s
                                <Text style={{fontSize: 14, textAlignVertical: 'top'}}>2</Text>
                            </Text>
                            <Text style={styles.text}>
                                Star Mass:
                                <Text style={{fontWeight:"bold"}}> {details.mass} </Text>solar masses
                            </Text>
                            <Text style={styles.text}>
                                Star Radius:
                                <Text style={{fontWeight:"bold"}}> {details.radius} </Text>
                                solar radii
                            </Text>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        color:"#6A71A5", 
        alignSelf:"flex-start",
        fontSize: 20,
        marginBottom: 10
    }
});
