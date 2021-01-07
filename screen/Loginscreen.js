import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username : "",
            password : ""
        }
    }

  
    userLogin = (username, password)=>{
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(()=>{
          return alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage)
        })
      }
    
      userSignUp = (username, password) =>{
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((response)=>{
          return alert("User Added Successfully")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage)
        });
      }
    
    render(){
        return(
            <View style = {styles.container}>
           <TextInput
           placeholder = "Email"
           style = {styles.input1}
             onChangeText = {(text)=>{
               this.setState({
                   Email : text
               })
             }}
       >
           </TextInput>

           <TextInput 
           placeholder = "Password"
           style = {styles.input1}
           onChangeText = {(text)=>{
              this.setState({
                  Password : text
              })
           }}>
           </TextInput>

           <TouchableOpacity style = {styles.button}
           onPress = {()=>{
               this.login(this.state.Email, this.state.Password)
            } }>
             <Text style = {styles.text1}>Login</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {styles.button}
           onPress = {()=>{
               this.userSignUp(this.state.Email, this.state.Password)
            } }>
             <Text style = {styles.text1}>Sign Up</Text>
           </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContainer: {
          justifyContent : 'center',
          alignItems : 'center'
      },
    button:{
        backgroundColor:"lightpink",
        width:120,
        height:40,
        marginTop:20,
        marginBottom:30,
        textAlign : "center",
        justifyContent : "center",
        borderWidth:3,
        borderRadius:50,
        marginLeft:15
    },
    text1 :{
        fontSize:20,
        fontWeight:"bold"
    },
    input1 : {
        height:40,
        width:150,
        borderWidth:3,
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
       
    }
})