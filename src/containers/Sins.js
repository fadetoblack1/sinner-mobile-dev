import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';

import SinsList from '../components/SinsList';

import { loadSins } from '../actions/';

class Sins extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('SINS');
        this.props.loadSins();
        console.log(this.props.sins);
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#222', flex: 1, paddingTop: 25, paddingLeft: 15, paddingRight: 15}} >
                <Text h4 style={{ color: '#fff', paddingBottom: 30 }}> Список ваших гріхів: </Text>
                { this.props.isLoading ? 
                    <ActivityIndicator size='large' /> : 
                    <SinsList 
                        sins={this.props.sins}
                        navigation={this.props.navigation}
                         /> }
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        sins: state.sins,
        isLoading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSins: () => {
            dispatch(loadSins())
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sins);