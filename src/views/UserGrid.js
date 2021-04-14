import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";


class Grid extends React.Component {
    state = {
        data: [
            { id: "00", name: "GRID 01 TESTE" },
            { id: "01", name: "GRID 02 TESTE" },
            { id: "02", name: "GRID 03 TESTE" },
            { id: "03", name: "GRID 04 TESTE" }
        ]
    };
    render() {
        const columns = 3;
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    numColumns={columns}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        );
                    }}
                />
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        );
                    }}
                />
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    numColumns={columns}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }


} const styles = StyleSheet.create({
    item: {
        flexBasis: 0,
        alignItems: "center",
        backgroundColor: "#696969",
        flexGrow: 1,
        margin: 4,
        padding: 20
    },
    text: {
        color: "#333333"
    }
}); export default Grid;