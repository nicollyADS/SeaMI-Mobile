import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '1rem',
        backgroundColor: '#05273A',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    
    title: {
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '2rem',
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '1rem',
        marginBottom: '1rem',

    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        marginRight: '1rem',
    },
    text: {
        fontSize: '1rem',
        width: '130px',
        fontWeight: 'bolder',
        textAlign: 'center',
        color: '#00D2DF',
    }
});


export default { style }