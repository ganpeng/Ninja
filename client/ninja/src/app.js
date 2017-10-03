import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/appIcon';
import global from './constants/global';
import store from './store/';

registerScreens(store, Provider);

iconsLoaded.then(() => {
    startApp();
});

function startApp() {
    Navigation.startSingleScreenApp({
        screen: {
            title: '登录',
            screen: 'ninja.LoginContainer',
            navigatorStyle: {
                navBarButtonColor: global.textColor,
                navBarTextColor: global.textColor,
                navigationBarColor: global.themeColor,
                navBarBackgroundColor: global.themeColor,
                statusBarColor: global.themeColor,
            },
            animationType: 'fade',
        },
        drawer: {
            left: {
                screen: 'ninja.Drawer'
            }
        }
    });

}

