import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,FlatList} from 'react-native';
import { connect } from 'react-redux';
import { addText } from '../actions/actionType';
import { deleteText } from '../actions/actionType';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            textArray: []
        }
    }

    addText= (data) =>{
        this.setState({text: data});
    }

    addTextToStore() {
        this.props.add(this.state.text)
    }

    deleteText = (index) => {
        this.props.delete(index)
    }
    
    renderData(){
        const {navigate} = this.props.navigation;
            return(
                <FlatList style = { styles.listContainer }
                data = { this.props.textArray }
                keyExtractor={(item, index) => index.toString()}
                renderItem = { info => (
                    <TouchableOpacity>
                    { info.item.value ?
                    <View style = { styles.listItem }>
                    <Text style = {{ width: '60%' }}>{info.item.value}</Text>
                    <TouchableOpacity onPress={ ()=>this.deleteText(info.index)}>
                        <Text style= {{ fontSize: 20, width: 30 }} >{ '\u2421' }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Update', {index: info.index, text: info.item.value })}>
                        <Text style={{ fontSize: 20, width:30 }}>{'\u270E'}</Text>
                    </TouchableOpacity>
                    </View> :
                    <View></View>
                    }
                    </TouchableOpacity>
                )}
              />
            )
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.inputContainer }>
                    <TextInput
                        value = { this.state.text }
                        onChangeText= {this.addText}
                        placeholder = 'Enter your task'
                        style = { styles.textInput }
                        
                    />
                    <TouchableOpacity onPress={()=>this.addTextToStore()} style={ styles.addButton }>
                        <Text style={{ color: '#ffffff', fontSize: 20, textAlign: 'center' }}>{'\u002B'}</Text>
                    </TouchableOpacity>
                </View>
                {this.renderData()}
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        textArray: state.text.textArray,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (data) => {
            dispatch(addText(data))
        },
        delete: (data) => {
            dispatch(deleteText(data))
        }
    }
}

const styles = StyleSheet.create({
    listContainer: {
      width: '90%',
      margin: 10
    },
    listItem: {
        width: '100%',
        margin: 10,
        marginBottom: 10,
        backgroundColor: '#eee',
        flex: 1,
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 16,
        backgroundColor: '#ffffff',
        marginTop: 30,
        width: '80%',
        marginLeft: 30,
        height: 40
    },
    addButton: {
        backgroundColor: '#676D6E',
        marginTop: 30,
        marginRight: 20,
        height: 40,
        textAlign: 'center',
        width: 30
    },
    container: {
        backgroundColor: '#0F87AA',
        flex: 2,
        flexDirection: 'column',
        height: 50
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row'
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Main)