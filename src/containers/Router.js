import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { Icon, Text } from 'react-native-elements';

//components
import Home from './Home';
import Sins from './Sins';
import AddSins from './AddSins';
import Calendar from './Calendar';
import SinsPage from './SinsPage';
import CalendarSins from './CalendarSins';

const SinsTab = StackNavigator({
    Sins: {
        screen: Sins,
        path: '/sins',
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='view-list'
                    color={ tintColor }
                />
            ),
        },
    },
    SinsPage: {
        screen: SinsPage,
        path: '/sins/:id',
        navigationOptions: {
            title: 'Деталі',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='view-list'
                    color={ tintColor }
                />
            ),
        },
    }
});

const CalendarTab = StackNavigator({
    Calendar: {
        screen: Calendar,
        path: '/calendar',
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='date-range'
                    color={ tintColor }
                />
            ),
        },
    },
    CalendarSins: {
        screen: CalendarSins,
        path: '/calendar/sins',
        navigationOptions: {
            title: 'Перегляд по даті',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='date-range'
                    color={ tintColor }
                />
            ),
        },
    }
});

const Tabbar = TabNavigator({
    Home: { 
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='home'
                    color={ tintColor }
                />
            ),
        },
    },
    SinsTab: { 
        screen: SinsTab 
    },
    AddSins: { 
        screen: AddSins,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='add-circle'
                    color={ tintColor }
                />
            ),
        },
    },
    Calendar: { 
        screen: CalendarTab
    }
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#e22d22',
        inactiveTintColor: '#fff',
        style: {
            backgroundColor: '#000',
            borderTopWidth: 1,
            borderTopColor: '#e22d22'
        },
        indicatorStyle: {
            backgroundColor: '#e22d22'
        }
    },
});

export default class Router extends React.Component {
    render() {
        return <Tabbar />;
    }
}
