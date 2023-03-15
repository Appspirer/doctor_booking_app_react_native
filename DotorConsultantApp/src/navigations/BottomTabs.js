import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favorite, Book, Chat } from '../screens';
import Icons from '../themes/Icons';
import { View } from 'react-native'
import Colors from '../themes/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 85,
                    paddingTop: 15,
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20
                }
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            backgroundColor: focused ? Colors.green : Colors.white,
                            height: 48,
                            width: 48,
                            borderRadius: 24,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {Icons.Icons({ name: focused ? 'home_focus' : 'home', height: 20, width: 20 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Favorite" component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            backgroundColor: focused ? Colors.green : Colors.white,
                            height: 48,
                            width: 48,
                            borderRadius: 24,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {Icons.Icons({ name: focused ? 'heart_focus' : 'heart', height: 20, width: 22 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Book" component={Book}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            backgroundColor: focused ? Colors.green : Colors.white,
                            height: 48,
                            width: 48,
                            borderRadius: 24,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {Icons.Icons({ name: focused ? 'book_focus' : 'book', height: 20, width: 26 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Chat" component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            backgroundColor: focused ? Colors.green : Colors.white,
                            height: 48,
                            width: 48,
                            borderRadius: 24,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {Icons.Icons({ name: focused ? 'chat_focus' : 'chat', height: 20, width: 21 })}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}