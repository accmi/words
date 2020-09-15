import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

export const AuthScreen = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
            style={styles.container}
        >
            <View style={styles.inputsContainer}>
                <TextInput
                    placeholder="@email"
                    style={styles.input}
                    value={email}
                    autoCorrect={true}
                    onChangeText={changeEmail}
                />
                <TextInput
                    placeholder="@password"
                    password={true}
                    style={styles.input}
                    value={password}
                    autoCorrect={true}
                    onChangeText={changePassword}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Sign In" styles={styles.button} />
                <Text> / </Text>
                <Button title="Sign Up" styles={styles.button} />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputsContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        fontSize: 28,
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 10,
    },
    buttonsContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        fontSize: 28,
    }
});
