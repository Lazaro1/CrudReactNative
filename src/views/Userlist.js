import React, { useContext } from 'react'
import { Alert } from 'react-native'
import { View, Text, FlatList } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'


export default props => {

    const {state} = useContext(UsersContext)

    function confirmeUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: "sim",
                onPress(){
                    console.warn('entrou aqui' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ] )
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={20} color="orange" />}
                />
                <Button
                    onPress={() => confirmeUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={20} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider

            >
                <Avatar source={{ uri: user.avatarUrl }} onPress={() => props.navigation.navigate('UserForm', user)} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem>{getActions(user)}</ListItem>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}