import React, { useState } from 'react';
import { View, Text } from 'react-native';

function Layout() {
    return (
        <View style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap'}}>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
            <View className="item">
                <Text className="item-title">Title</Text>
                <Text className="item-text" >Paragraph</Text>
            </View>
        </View>
    );
}

export default Layout;
