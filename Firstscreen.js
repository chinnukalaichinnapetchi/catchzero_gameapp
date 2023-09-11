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
    NativeModules

} from 'react-native';

import CountDown from 'react-native-countdown-component';



const Firstscreen = (props) => {
    const [second, setSecond] = useState(120);
    const [second1, setSecond1] = useState(false);
    const [timer, setTimer] = useState('1');
    const [randomnumber, setrandomNumber] = useState(0);
    const [score, setscore] = useState(0);
    const [missedclick, setmissedclick] = useState(false);
    const [blackscreen, setblankscreen] = useState(false)
    const [zerocount, setZerocount] = useState(0)
    const [nonzerocount, setNonzerocount] = useState(0)
    const [pressstate, setPressState] = useState(false)
    const [clickzero, setclickZero] = useState(0)
    const [clicknonzero, setclicknonZero] = useState(0)
    const [skippedzero, setskippedZero] = useState(0)

    const [skippednonzero, setskippednonZero] = useState(0)

    const { ReactOneCustomMethod } = NativeModules;
    console.log("NativeModules", NativeModules);

    useEffect(() => {
        let interval = setInterval(function () {

            setSecond1(true)
            console.log("120")

        }, 120000);

    }, [])
    useEffect(() => {
        console.log("second");
        setSecond(120)
    }, [pressstate == true])
    const trimerfinishfunction = () => {
        clearInterval()
        clearTimeout()
        setPressState(false)

        // props.navigation.navigate("Secondscreen", { zerocount: zerocount, nonzerocount: nonzerocount, totalcount: zerocount + nonzerocount, score: score, clicknonzero: clicknonzero, clickzero: clickzero, skippedzero: skippedzero, skippednonzero: skippednonzero })


        // Alert.alert('Catch-Zero', 'Game Over', [
        //     {
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel',
        //     },
        //     { text: 'OK', onPress: () => setTimer('2') },
        // ]);

    }
    const getnumber = () => {
        ReactOneCustomMethod.number()
            .then((res) => {
                setrandomNumber(res)
                // console.log("NativeModulesNativeModules", res);

            })
            .catch((err) => {
                console.error(err);
            });
    }
    useEffect(() => {
        if (pressstate == true) {
            setSecond(120)
            let interval = setInterval(function () {
                setblankscreen(true)
                let timeout = setTimeout(function () {
                    setblankscreen(false)
                    getnumber()
                }, 1000);
                return () => {
                    clearTimeout(timeout);

                };
            }, 2000);
            return () => {
                clearInterval(interval);

                setPressState(false)
            };
        }


    }, [pressstate == true]);





    const randomnumberfunction = (number) => {
        setmissedclick(true);
    }

    useEffect(() => {
        if (randomnumber == 0) {
            setZerocount(zerocount + 1)
        } else if (randomnumber != 0) {
            setNonzerocount(nonzerocount + 1)
        }



        if (missedclick == true && randomnumber == 0) {
            setscore(score + 5);
            setclickZero(clickzero + 1)
        } else if (missedclick == true && randomnumber != 0) {
            setscore(score - 2.5);
            setclicknonZero(clicknonzero + 1)
        } else if (missedclick == false && randomnumber == 0) {
            setscore(score - 3);
            setskippedZero(skippedzero + 1)

        } else if (missedclick == false && randomnumber != 0) {
            setscore(score + 1);
            setskippednonZero(skippednonzero + 0)
        }

    }, [randomnumber])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 10 }}>Live Score :{score}</Text>
                <TouchableOpacity onPress={() => {
                    setmissedclick(true),
                        randomnumberfunction(randomnumber)
                }} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', paddingVertical: "50%" }}>
                    <Text style={{ color: '#FAB913', fontSize: 120, fontWeight: 'bold', paddingHorizontal: 20, }}>{blackscreen == true ? '' : randomnumber}</Text>

                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 30 }}>
                    <CountDown
                        id={timer}
                        timeToShow={['M', 'S']}
                        until={second}
                        onFinish={() => { trimerfinishfunction() }}
                        size={15}
                        timeLabels={{ m: 'MM', s: 'SS' }}
                        timeLabelStyle={{ color: 'white', fontSize: 18 }}
                    />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>

                    <TouchableOpacity onPress={() => {
                        setSecond(120),
                            setPressState(true),
                            setscore(0)

                    }} style={{ width: '50%', borderColor: '#FAB913', borderWidth: 2, borderRadius: 5, marginStart: 20 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 30, paddingVertical: 10 }}>Start Game</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};



export default Firstscreen;
