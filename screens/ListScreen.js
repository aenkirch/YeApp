import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Item from '../components/Item';
import FlatListItemSeparator from '../components/FlatListItemSeparator'

mapDispatchToProps = dispatch => {
  return {
  };
}

class connectedListScreen extends Component {

  render() {
    return (
      <View>
        <SafeAreaView>
            <FlatList
              ItemSeparatorComponent={FlatListItemSeparator}
              style={styles.list}
              data={this.props.favouriteQuotes}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
        </SafeAreaView>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 50
  },
});

connectedListScreen.navigationOptions = {
  header: null
};

const mapStateToProps = state => {
  return {
    favouriteQuotes: state.favouriteQuotes
  }
};

const ListScreen = connect(mapStateToProps, mapDispatchToProps)(connectedListScreen);

export default ListScreen;