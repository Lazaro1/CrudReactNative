import React from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import users from '../data/users'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                leftAvatar={{source: {uri: user.avatarUrl}}}
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}