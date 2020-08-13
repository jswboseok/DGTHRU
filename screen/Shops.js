import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';

import auth from '@react-native-firebase/auth';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

enableScreens();

const shopData = [
    // 체인점
    // {
    //     id: 'hyehwa_1f',
    //     title: '혜화 디초콜릿',
    //     location: '혜화관 1층'
    // },
    {
        id: 'main_outdoor',
        title: '가온누리',
        location: '본관 야외 휴게장소'
    },
    {
        id: 'singong_1f',
        title: '남산학사 1층 카페',
        location: '신공학관 1층'
    },
    {
        id: 'hyehwa_roof',
        title: '혜화 디저트 카페',
        location: '혜화관 옥상'
    },
    //생협아닌가봄 >> 인가봄
    {
        id: 'economy_outdoor',
        title: '그루터기',
        location: '경영관 야외'
    },
    {
        id: 'munhwa_1f',
        title: '카페두리터',
        location: '학술문화관 지하1층'
    },
    // 체인점
    // {
    //     id: 'iphakcheo_outdoor',
    //     title: '블루팟 : 커피를 마신다',
    //     location: '입학처 야외공간'
    // },
    // 생협아닌가봄
    // {
    //     id: 'library_1f',
    //     title: '팬도로시',
    //     location: '중앙도서관 1층'
    // }
];

const Item = ({ title, location, navigation }) => (
    <TouchableOpacity
        style={{ width: 300 }}
        onPress={() => alert('title' + { title } + 'location' + {location})}
    >
        <View style={{ flexDirection: 'row', margin: 5, padding: 5, alignItems:'center' }}>
            <View style={
                {
                    borderRadius: 25,
                    width: 25,
                    height: 25,
                    backgroundColor: 'deepskyblue'
                }
            }
            />
            <View style={
                {
                    backgroundColor: 'lightgray',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    marginStart: 20,
                    borderRadius: 12,
                    padding:5
                }
            }>
                <Text style={
                    {
                        fontSize: 15,
                        fontWeight: 'bold',
                        textAlign:'center'
                    }
                }>{title}</Text>
            </View>
        </View>
        <View>
            <Text style={{ textAlign: 'right', color: 'gray', fontSize: 10, marginEnd:10 }}>{location}</Text>
        </View>
    </TouchableOpacity>
);

function Shops({ navigation }) {

    const renderItem = ({ item }) => (
        <Item title={item.title} location={item.location} />
    );

    signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User Signed Out !'));
    }

    return (
        <>
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.title}>DGTRHU</Text>
                    <Text style={styles.subtitle}>동국대학교 CAFE LIST</Text>
                </View>

                <View style={styles.body}>
                    <FlatList
                        data={shopData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.footer}>
                    <Button
                        title='로그아웃'
                        onPress={() => signOut()}
                    />
                </View>



            </View>
        </>
    );
}
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '10%',
        flex: 1
    },
    header: {
        height: '20%',
        width: '100%'
    },
    body: {
        height: '60%',
        width: '100%'
    },
    footer: {
        height: '20%',
        width: '100%',
    },
    title: {
        fontSize: 44,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 22,
        color: 'gray',
        textAlign: 'center'
    },
    item: {

    },
});
export default Shops;