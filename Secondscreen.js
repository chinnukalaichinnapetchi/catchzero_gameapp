/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SectionListComponent } from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Alert
} from 'react-native';




const Secondscreen = (props) => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <Text style={{ alignSelf: 'center', color: 'white', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 10 }}>Game Over!!</Text>
                <Text style={{ alignSelf: 'center', color: 'white', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 5 }}> Your Score {props?.route?.params?.score}</Text>
                <View style={{ borderColor: '#FAB913', borderWidth: 1, marginHorizontal: 30, paddingTop: 10, marginTop: 50 }}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: 'normal', paddingHorizontal: 20, paddingVertical: 15 }}> Total Number displayed:{"" + props?.route?.params?.totalcount}</Text>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: 'normal', paddingHorizontal: 20, paddingVertical: 15 }}> Total Number of 0’s displayed:{"" + props?.route?.params?.zerocount}</Text>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: 'normal', paddingHorizontal: 20, paddingVertical: 15 }}> Count of Zero  clicked:{"" + props?.route?.params?.clickzero}</Text>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: 'normal', paddingHorizontal: 20, paddingVertical: 15 }}> Count of Non-Zero clicked:{"" + props?.route?.params?.clicknonzero}</Text>

                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: 'normal', paddingHorizontal: 20, paddingVertical: 15 }}> Count of Skipped Zero:{"" + props?.route?.params?.skippedzero}</Text>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: 'normal', paddingHorizontal: 20, paddingVertical: 15 }}> Count of Skipped nonZero:{"" + props?.route?.params?.skippednonzero}</Text>




                </View>


            </View>
        </SafeAreaView>
    );
};



export default Secondscreen;
