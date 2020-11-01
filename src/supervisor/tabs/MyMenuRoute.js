import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ImageBackgroundBase,
    Image
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { enableScreens } from 'react-native-screens';
import {myMenuStyle} from './styles';
import moment from 'moment';
enableScreens();

const shopData = [
    {
        id: 'main_outdoor',
        adminPhoneNumber : '+821033333333',
        title: '가온누리',
        location: '본관 야외 휴게장소',
    },
    {
        id: 'singong_1f',
        adminPhoneNumber : '+821022221111',
        title: '남산학사',
        location: '신공학관 1층',
    },
    {
        id: 'hyehwa_roof',
        adminPhoneNumber : '+821011112222',
        title: '혜화카페',
        location: '혜화관 옥상',
    },
    {
        id: 'economy_outdoor',
        adminPhoneNumber : '+821022222222',
        title: '그루터기',
        location: '경영관 야외',
    },
    {
        id: 'munhwa_1f',
        title: '카페두리터',
        adminPhoneNumber : '+821041282470',
        location: '학술문화관 지하1층',
    },
    {
        id: 'logout',
        title: '로그아웃',
        adminPhoneNumber : '+8200000000',
        location: '오늘 하루도 수고하셨어요 !',
    },
   
];


export default class MyMenuRoute extends React.Component {
// function MyMenuRoute({ navigation, props  }) {
    // const [pastList, setpastList] = useState(props.pastList);
    constructor(props){
        super(props);
        this.state = {
            pastList : this.props.pastList,
            todayList : [],
            totalAmount : 0,
            templist : [],
        };

    }

     _logOut(){
        auth()
        .signOut()
        .then(() => [ console.log('User Signed Out !'),])
        .catch(() => console.log('already signed out !'));
    }
     fetchData(){
         var templist = [];
         var tempTotal =0;
         
        for(var i =0; i<this.state.pastList.length; i++){
            if(new moment(this.state.pastList[i].date,'YYYY_MM_DD').format('YYYY_MM_DD') == new moment('2020_10_02','YYYY_MM_DD').format('YYYY_MM_DD')){
                templist.push(this.state.pastList[i]);
                tempTotal += this.state.pastList[i].cost;
            }
        }
        this.state.todayList = templist;
        this.state.totalAmount = tempTotal;
        return(templist.length)
    }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
    return (
        <>
            <View style={myMenuStyle.body}>
                    
                    <View style={myMenuStyle.contentArea}>
                        <View style ={myMenuStyle.contentArea_left}>
                        <Text style={{alignItems:'center'}}>
                            회원 정보
                        </Text>
                        <Text>
                            매장이름 :{shopData.find(d => d.adminPhoneNumber=== auth().currentUser.phoneNumber).title}
                           
                        </Text>
                        <Text>
                            
                            관리번호 :{shopData.find(d => d.adminPhoneNumber=== auth().currentUser.phoneNumber).adminPhoneNumber}
                          
                        </Text>
                        <Text>
                            
                            매장위치 :{shopData.find(d => d.adminPhoneNumber=== auth().currentUser.phoneNumber).location}
                        </Text>
                        </View>

                        <View style ={myMenuStyle.contentArea_right}>
                        <Text style={myMenuStyle.thinFont}>
                        오늘 주문된 총 건수는?
                          
                        </Text>
                        <Text style={myMenuStyle.thickFont}>
                          
                           {this.fetchData()
                            }건
                        </Text>


                        <Text style={myMenuStyle.thinFont}>
                           오늘 {shopData.find(d => d.adminPhoneNumber=== auth().currentUser.phoneNumber).title}
                           에서 주문된 총 금액은?
                          
                        </Text>
                        <Text style={myMenuStyle.thickFont}>
                        {this.numberWithCommas(this.state.totalAmount)}원
                        </Text>
                        
                        </View>
                    </View>
                
            </View>
            <View style={myMenuStyle.footer}>
                <View style ={myMenuStyle.logoutArea}>
                        <TouchableOpacity
                            onPress={this._logOut}
                            style={{alignSelf:'center',flexDirection:'column' , justifyContent:'flex-end'}}
                        >   
                            <ImageLinker
                                name={'logout'}
                                style={
                                    
                                {
                                        
                                        width: 50,
                                        height: 50,
                                        marginVertical : 2,
                                        marginTop: 15     
                                    
                                    } 
                                    } />
                                    <Text>로그아웃</Text>
                        </TouchableOpacity>

                    </View>
            </View>
           </>
    );
}
}   
