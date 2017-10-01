import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';


import {iconsMap, iconsLoaded} from './utils/appIcon';
import global from './constants/global';
import store from './store/';

registerScreens(store, Provider);

const tabs = [{
    label: 'HomeScreen',
    screen: 'ninja.HomeScreen',
    icon: iconsMap['ios-person--active'],
    title: 'HomeScreen',
}, {
    label: 'BlogScreen',
    screen: 'ninja.BlogScreen',
    icon: iconsMap['ios-people'],
    title: 'BlogScreen',
}];

Navigation.startTabBasedApp({
    tabs,
    animationType: 'fade',
    tabsStyle: {
        tabBarBackgroundColor: global.themeColor,
        tabBarButtonColor: global.textColor,
        tabBarSelectedButtonColor: global.tabBarSelectedButtonColor,
        tabFontFamily: 'BioRhyme-Bold',
    },
    appStyle: {
        tabBarBackgroundColor: global.themeColor,
        navBarButtonColor: global.textColor,
        tabBarButtonColor: global.textColor,
        navBarTextColor: global.textColor,
        tabBarSelectedButtonColor: global.tabBarSelectedButtonColor,
        navigationBarColor: global.themeColor,
        navBarBackgroundColor: global.themeColor,
        statusBarColor: global.themeColor,
        tabFontFamily: 'BioRhyme-Bold',
    },
    drawer: {
        left: {
            screen: 'ninja.Drawer'
        }
    }
});