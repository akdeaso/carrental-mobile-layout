import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Helvetica from '../../components/Helvetica/Helvetica'

const Home = () => {
    return (
        <View style={Header.bg}>
            <Helvetica marginTop={12}>Hi, Nama</Helvetica>
            <View style={Header.parent}>
                <Helvetica type='Bold' fontSize={14}>
                    Your Location
                </Helvetica>
                <Image source={require('../../assets/Images/avatar.png')} style={Header.avatar} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})