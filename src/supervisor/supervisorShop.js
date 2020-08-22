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

import example from './example';

enableScreens();

const shopData = [
    // ü����
    // {
    //     id: 'hyehwa_1f',
    //     title: '��ȭ �����ݸ�',
    //     location: '��ȭ�� 1��'
    // },
    {
        id: 'main_outdoor',
        title: '���´���',
        location: '���� �߿� �ް����',
    },
    {
        id: 'singong_1f',
        title: '�����л� 1�� ī��',
        location: '�Ű��а� 1��'
    },
    {
        id: 'hyehwa_roof',
        title: '��ȭ ����Ʈ ī��',
        location: '��ȭ�� ����'
    },
    //�����ƴѰ��� >> �ΰ���
    {
        id: 'economy_outdoor',
        title: '�׷��ͱ�',
        location: '�濵�� �߿�'
    },
    {
        id: 'munhwa_1f',
        title: 'ī��θ���',
        location: '�м���ȭ�� ����1��'
    },
    // ü����
    // {
    //     id: 'iphakcheo_outdoor',
    //     title: '����� : Ŀ�Ǹ� ���Ŵ�',
    //     location: '����ó �߿ܰ���'
    // },
    // �����ƴѰ���
    // {
    //     id: 'library_1f',
    //     title: '�ҵ��ν�',
    //     location: '�߾ӵ����� 1��'
    // }
];

class Item extends React.Component {

    _onPress = () => {
        if (this.props.id === 'hyehwa_roof') {
            if (this.props.navigation !== null) {
                console.log('fucking shit !');
                this.props.navigation.navigate('example');
            }
        }
        else
            this.props.onPressItem(this.props.id);


    };

        render() {

            var title = this.props.title;
            var location = this.props.location;

            return (
                <TouchableOpacity
                    style={{ width: 300 }}
                    onPress={this._onPress}
                >
                <View style={{ flexDirection: 'row', margin: 5, padding: 5, alignItems: 'center' }}>
                    <View style={
                    {
                        borderRadius: 25,
                        width: 25,
                        height: 25,
                        backgroundColor: 'cornflowerblue'
                       }
                    }
                />
                <View style={
                    {
                        backgroundColor: 'ghostwhite',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        marginStart: 20,
                        borderRadius: 12,
                        padding: 5
                    }
                }>
                    <Text style={
                        {
                            fontSize: 15,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }
                }>{title}</Text>
                </View>
            </View>
            <View>
                <Text style={{ textAlign: 'right', color: 'gray', fontSize: 10, marginEnd: 10 }}>{location}</Text>
            </View>
        </TouchableOpacity>
       );
     }
}

function supervisorShop({ navigation }) {

    const onPressItem = (id) => {

        switch (id) {
            case 'main_outdoor':
                alert('�غ����Դϴ�!');
                break;
            case 'singong_1f':
                alert('�غ����Դϴ�!');
                break;
            case 'hyehwa_roof':
                alert('��ȭ������Ʈī��');
                break;
            case 'economy_outdoor':
                alert('�غ����Դϴ�!');
                break;
            case 'munhwa_1f':
                alert('�غ����Դϴ�!');
                break;
        }
    }

    const renderItem = ({ item }) => (
            <Item id={item.id}
            title={item.title}
            location={item.location}
            onPressItem={onPressItem}
            navigation={navigation}
        />
    );

    const keyExtractor = (item) => item.id;



    signOut = () => {
        auth()
            .signOut()
                .then(() => console.log('User Signed Out !'));
    }

    return (
    <>
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.title}>DGTHRU supervisor</Text>
                <Text style={styles.subtitle}>�������б� CAFE LIST</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={shopData}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
            />
            </View>
        <View style={styles.footer}>
            <Button
                title='�α׾ƿ�'
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
        fontSize: 33,
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
export default supervisorShop;