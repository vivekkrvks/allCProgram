import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const IndexScreen = ({ route,navigation }) => {

    return (
        <>
            <Text style={ styles.header }>{route.params.value1}</Text>
            <Button 
                title="Go To HomeScreen"
                onPress={ ()=>navigation.navigate('Home') }
            />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 32
    }
});

export default IndexScreen;