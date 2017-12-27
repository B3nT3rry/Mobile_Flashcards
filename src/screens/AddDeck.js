import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {connect} from 'react-redux'
import createNewDeck from '../state/actions/decks/action.createNewDeck'
import getDeckIds from '../state/selectors/decks/selector.getDeckIds'
import {PrimaryButton} from '../components/Buttons'
import {color} from '../style/constants'

class AddDeckScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  state = {name: ''}

  onSubmit = () => {
    Keyboard.dismiss()
    const {name} = this.state
    this.setState({name: ''}, () => {

      this.props.createNewDeck({name: name});

      this.props.navigation.navigate('Deck', {title: name});
    })
  }

  render () {
    const empty = this.state.name === ''
    const duplicateName = this.props.deckIds.includes(this.state.name)
    const disabled = empty || duplicateName

    return (
      <KeyboardAwareScrollView
        style={{backgroundColor: color.white}}
        contentContainerStyle={styles.wrapper}
        resetScrollToCoords={{x: 0, y: 0}}
      >
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={name => this.setState({name})}
            value={this.state.name}
            keyboardAppearance='dark'
            returnKeyType='done'
          />
        </View>
        {duplicateName && (
          <View style={styles.errorWrapper}>
            <Text style={styles.errorText}>
              Deck with name `<Text style={{fontWeight: '600'}}>
                {this.state.name}
              </Text>` already exists.
            </Text>
            <Text style={styles.errorText}>Please choose another name</Text>
          </View>
        )}
        <PrimaryButton
          onPress={this.onSubmit}
          title='Create Deck'
          disabled={disabled}
        />
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = ({decks}) => ({deckIds: getDeckIds(decks)})
export default connect(mapStateToProps, {createNewDeck})(AddDeckScreen)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.white,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  inputWrapper: {
    marginBottom: 20
  },
  label: {
    fontSize: 24,
    paddingBottom: 10,
    color: color.darkGrey
  },
  input: {
    fontSize: 20,
    borderRadius: 5,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    backgroundColor: color.darkGrey,
    color: color.grey
  },
  errorWrapper: {
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: color.orange
  }
})
