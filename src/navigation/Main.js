import React from 'react'
import {TabNavigator} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'
import DeckStackNavigator from './Deck'
import AddDeckScreen from '../screens/AddDeck'
import SettingsScreen from '../screens/Settings'
import {color} from '../style/constants'

const IndexSection = TabNavigator(
  {
    AddDeck: {
      screen: AddDeckScreen,
      navigationOptions: {
        title: 'Add Deck',
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='pencil' size={30} color={tintColor} />
        )
      }
    },
    DeckList: {
      screen: DeckStackNavigator,
      navigationOptions: {
        title: 'Deck List',
        tabBarLabel: 'Deck List',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='clone' size={30} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name='cogs' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    animationEnabled: true,
    initialRouteName: 'DeckList',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: color.orange,
      style: {
        height: 56,
        backgroundColor: color.darkBlue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default IndexSection
