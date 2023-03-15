import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerCustom } from '../screens';
import BottomTabs from './BottomTabs';
import {Dimensions} from 'react-native'

var {height, width} = Dimensions.get('window')

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerCustom {...props} />}
            screenOptions={{ 
                headerShown: false,
                drawerStyle:{width:width}
             }}
        >
            <Drawer.Screen name="BottomTabs" component={BottomTabs} />
        </Drawer.Navigator>
    );
}