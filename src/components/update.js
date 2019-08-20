import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { updateText } from '../actions/actionType';
import { Global } from '@jest/types';

export class Update extends Component {

    state = {
        newText: '',
        index: 0
    }

    static navigationOptions = {
        title: 'Update',
    };

    updateText = (index, text) =>{
        // alert(this.state.newText);
        this.props.updateText(index, text);
        const {navigate} = this.props.navigation;
        navigate('Main');
    }

  render() {
    const {navigation} = this.props;
    const index = navigation.getParam('index', 'none');
    GLOBAL.data = index;
    const text = navigation.getParam('text','undefined');
    return (
      <View style= { styles.container }>
        <TextInput 
            style={ styles.updateInput }
            placeholder={ text }
            onChangeText= { (newData)=>{ this.setState({ index: index, newText: newData }) } }
        />
        <TouchableOpacity 
            style={ styles.updateButton }
            onPress={ ()=> this.updateText(this.state.index, this.state.newText) }><Text>Update</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = {
    container: {
        backgroundColor: '#0F87AA',
        height: '100%',
        fontSize: 20
    },
    updateButton: {
        backgroundColor: '#676D6E',
        fontSize: 22,
        marginTop: 30,
        height: 30,
        width: '30%',
        textAlign: 'center',
        color: '#fff'
    },
    updateInput: {
        backgroundColor: '#ffffff',
        fontSize: 20,
        marginTop: 30,
        width: '60%',
        height: 40
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateText: (index,text) => {
            dispatch(updateText(index,text))
        }
    }
}

export default connect(null, mapDispatchToProps)(Update)