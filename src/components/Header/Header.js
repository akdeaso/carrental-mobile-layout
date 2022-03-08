import { StyleSheet, Image } from 'react-native'

const Header = StyleSheet.create({
    bg: {
        position: 'absolute',
        height: 176,
        width: '100%',
        backgroundColor: '#D3D9FD',
    },
    avatar: {
        width: 28,
        height: 28,
        marginRight: 16
    },
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Header

const styles = StyleSheet.create({})