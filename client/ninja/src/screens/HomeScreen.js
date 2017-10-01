import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    render() {
        const { movie } = this.props;

        const movieList = movie.map((movieItem) => {
            return <View key={movieItem.id}>
                <Text>{movieItem.name}</Text>
                <Text>{movieItem.desc}</Text>
            </View>
        });

        return (
            <View>
                <Text>HomeScreen</Text>
                {movieList}
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, {})(HomeScreen);

