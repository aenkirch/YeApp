import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { removeQuoteFromFavs } from '../actions/localStorageActions';

mapDispatchToProps = dispatch => {
    return {
      removeQuoteFromFavs: param => dispatch(removeQuoteFromFavs(param)),
    };
}

class connectedItem extends Component {

    deleteQuote = (param) => {
        Alert.alert(
            'Deleting a quote',
            'Do you want to delete this quote from your favs list ?',
            [
                {
                  text: 'Cancel',
                  style: 'cancel'
                },
                {text: 'Delete', onPress: () => this.props.removeQuoteFromFavs(param)},
            ],
            {cancelable: false},
        )
    }

    render () {
        return (
            <View style={styles.item}>
                <Text onPress={this.deleteQuote.bind(this, this.props.title)} style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 10
    },
    title: {
        fontSize: 18,
    },
});

const Item = connect(null , mapDispatchToProps)(connectedItem);

export default Item;