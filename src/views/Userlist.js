import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'

import users from '../data/users'

export default props => {
    
    function getActions(user) {
        return(
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider rightElement={getActions(user)}>
                <Avatar source={{ uri: user.avatarUrl }} onPress={() => props.navigation.navigate('UserForm')} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>      
            </ListItem>
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