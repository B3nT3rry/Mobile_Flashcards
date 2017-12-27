import {StackNavigator} from 'react-navigation'
import {color} from '../style/constants'
import DeckListScreen from '../screens/DeckList'
import DeckScreen from '../screens/Deck'
import RenameDeck from '../screens/RenameDeck'
import NewCardScreen from '../screens/NewCard'
import QuizScreen from '../screens/Quiz'

const DeckStackNavigator = StackNavigator(
  {
    DeckList: {
      screen: DeckListScreen,
      path: 'decks',
      navigationOptions: () => ({
        title: `All Decks`
      })
    },
    Deck: {
      screen: DeckScreen,
      path: 'decks/:title',
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`
      })
    },
    RenameDeck: {
      screen: RenameDeck,
      path: 'decks/:title/rename',
      navigationOptions: ({navigation}) => ({
        title: `Rename`
      })
    },
    NewCard: {
      screen: NewCardScreen,
      path: 'decks/:title/new',
      navigationOptions: () => ({
        title: `New Card`
      }),
      mode: 'modal'
    },
    Quiz: {
      screen: QuizScreen,
      path: 'decks/:title/quiz',
      navigationOptions: () => ({
        title: `Quiz`
      })
    }
  },
  {
    initialRouteName: 'DeckList',
    navigationOptions: {
      headerTintColor: color.orange,
      headerStyle: {
        backgroundColor: color.darkBlue
      }
    }
  }
)

export default DeckStackNavigator
