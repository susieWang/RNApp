import {StackNavigator} from "react-navigation";
import BankCardList from "./BankCardList";
import AddBankCrad from "./AddBankCrad";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

const BankCard = StackNavigator({
  BankCardList:{screen:BankCardList},
  AddBankCrad:{screen:AddBankCrad},
}, {
    initialRouteName: 'BankCardList',
    navigationOptions: {
      header: null
    },
     transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
  })

export default BankCard;