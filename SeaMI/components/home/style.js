import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05273A',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    
    title: {
        fontSize: '2rem',
        fontWeight: '600',
        color: '#00D2DF',
    },
    title2: {
        fontSize: '2rem',
        fontWeight: '600',
        color: '#FBFBFB',
    },
    input: {
        backgroundColor: '#fbfbfb',
        padding: '0.6rem',
        borderRadius: '8px',
        width: '13rem'

    },button: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20rem',
        marginLeft: '1rem',
        marginBottom: '4rem',

    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008080',
        padding: '1rem',
        borderRadius: '3rem',
        marginRight: '1rem',
    },
    text: {
        fontSize: '1rem',
        width: '130px',
        marginLeft: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#008080',
    }
});


export default { style }