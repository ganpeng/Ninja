import {Navigation} from 'react-native-navigation';

import HomeScreen from './HomeScreen'; 
import BlogScreen from './BlogScreen'; 
import Drawer from './Drawer';



export function registerScreens(store, Provider) {
    Navigation.registerComponent("ninja.HomeScreen", () => HomeScreen, store, Provider);
    Navigation.registerComponent("ninja.BlogScreen", () => BlogScreen, store, Provider);
    Navigation.registerComponent("ninja.Drawer", () => Drawer, store, Provider);
}