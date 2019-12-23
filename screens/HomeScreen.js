import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Share
} from 'react-native';
import { connect } from 'react-redux';

import { loadNewQuote } from '../actions/apiActions';
import { addQuoteToFavs, loadFavQuotes } from '../actions/localStorageActions';
import { WELCOME_SENTENCE } from '../constants/Constants';

mapDispatchToProps = dispatch => {
  return {
    loadNewQuote: param => dispatch(loadNewQuote(param)),
    addQuoteToFavs: param => dispatch(addQuoteToFavs(param)),
    loadFavQuotes: param => dispatch(loadFavQuotes(param))
  };
}

class connectedHomeScreen extends Component {

  componentWillMount = async () => this.props.loadFavQuotes();

  addQuoteToFavs = async () => {
    if (this.props.lastQuote != WELCOME_SENTENCE){
      this.props.addQuoteToFavs(this.props.lastQuote);
    }

    else
      alert('Get a new quote before trying to save a quote !');
  }

  shareQuote = () => {
    if (this.props.lastQuote != WELCOME_SENTENCE){
      Share.share(
        { message: "I liked this quote : \"" +  this.props.lastQuote + "\" via YeApp" }
      )
    }
  }

  render() { // mettre la ScrollView uniquement sur le texte
    return (
      <View>
        <ScrollView>
          <View>
            <TouchableOpacity style={{marginTop: '10%'}} 
              onPress={this.props.loadNewQuote}
              onLongPress={this.addQuoteToFavs}
            >
              <Image
                source={ require('../assets/images/kanyeIcon.png')}

              />
            </TouchableOpacity>
            <Text style={styles.quoteText} onPress={this.shareQuote}>{this.props.lastQuote}</Text>
          </View>
        </ScrollView>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  quoteText: {
    fontFamily: 'quote',
    fontSize: 50,
    textAlign: 'center',
    marginTop: '2%'
  },
});

connectedHomeScreen.navigationOptions = {
  header: null
};

const mapStateToProps = state => {
  return { 
    lastQuote: state.lastQuote
  }
};

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(connectedHomeScreen);

export default HomeScreen;