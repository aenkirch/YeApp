import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 10
    },
    title: {
        fontSize: 18,
    },
});