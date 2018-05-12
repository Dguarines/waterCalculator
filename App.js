import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class App extends Component {

  constructor(props){
      super(props);

      this.state ={
          consumed:0,
          status:'Bad...',
          percentage:0
      };

      this.addGlass = this.addGlass.bind(this);
      this.update   = this.update.bind(this);
  }

  update(){
      let localState = this.state;
      localState.percentage = Math.floor((localState.consumed/2000)*100);

      if(localState.percentage >= 100){
        
        localState.status = "Perfect!"
      
      }else if(localState.percentage > 75 && localState.percentage < 100){

        localState.status = "Getting better =D"
      }else if(localState.percentage >= 25 &&  localState.percentage <= 75){
        
        localState.status = "Keep going";
      }else{
        localState.status = "Bad..."
      }

      this.setState(localState);
  }

  addGlass(){
      let localState = this.state;
      localState.consumed +=200;
      this.setState(localState);

      this.update();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground style={styles.bgimage} source={require('./images/waterbg.png')}>
            <View>
              <View style={styles.infoArea}>
                <View style={styles.area}>
                    <Text style={styles.areaTitle}> Goal </Text>
                    <Text style={styles.areaData}> 2000ml </Text>
                </View>
                <View style={styles.area}>
                    <Text style={styles.areaTitle}> Consumed </Text>
                    <Text style={styles.areaData}> {this.state.consumed}ml </Text>
                </View>
                <View style={styles.area}>
                    <Text style={styles.areaTitle}> Status </Text>
                    <Text style={styles.areaData}> {this.state.status} </Text>
                </View>
              </View>

              <View style={styles.areaPercentage}>
                  <Text style={styles.textPercentage}> {this.state.percentage}% </Text>
              </View>

              <View style={styles.areaButton}>
                  <Button title="Drink 200ml" color='#45b2fc' onPress={this.addGlass}/>
              </View>
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        paddingTop:20
    },
    bgimage:{
        flex:1,
        width:null
    },
    infoArea:{
        flex:1,
        flexDirection:'row',
        marginTop:70
    },
    area:{
        flex:1,
        alignItems:'center',

    },
    areaTitle:{
        color:'#45b2fc'
    },
    areaData:{
        color:'#2b4274',
        fontSize:15,
        fontWeight:'bold'
    },
    areaPercentage:{
        marginTop:170,
        alignItems:'center'
    },
    textPercentage:{
        fontSize:50,
        color:'#FFFFFF',
        backgroundColor:'transparent'
    },
    areaButton:{
        marginTop: 30,
        alignItems:'center'
    }
});
