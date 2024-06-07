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
    sucessContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '13rem',
        marginBottom: '1rem',
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
        width: '19rem'

    },
    text: {
        fontSize: '0.8rem',
        fontWeight: '600',
        color: '#FBFBFB',
        marginBottom: '0.5rem',
        textAlign: 'center'
    },
    button: {
        marginTop: '1rem',
        marginBottom: '30rem',
        backgroundColor: '#00D2DF',
        padding: '0.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        width: '8rem',
        borderRadius: '16px',
    },
    sucessTittle: {
        fontSize: '1.5rem',
        marginTop: '6rem',
        width: '15rem',
        marginBottom: '7rem',
        fontWeight: '600',
        color: '#00D2DF',
        textAlign: 'center'
    }
});


export default { style }