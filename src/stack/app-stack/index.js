// import React from "react";
// import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
// import MineScreen from "../App/Staff/MineScreen";
// import ReservationStack from "./AppTabStack/ReservationStack";
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import IconWithBadge from "../Component/IconWithBadge";
// import RoomDetailScreen from "../App/Staff/Reservation/RoomDetailScreen";
// import ScannerScreen from "../App/ScannerScreen";
// import Meeting from "./AppTabStack/Meeting";
// import PersonListScreen from "../App/PersonListScreen";
// import HistoryPersonScreen from "../App/HistoryPersonScreen";
// import NoInternetScreen from "../App/NoInternetScreen";
// import MessageScreen from "../App/MessageScreen";
// import GroupStack from "./AppTabStack/GroupStack";
// import FaceVerifyScreen from "../App/FaceVerifyScreen";
// import MyGroupDetailScreen from "../App/Group/MyGroupDetailScreen";
// import AlterPswScreen from "../App/AlterPswScreen";
// import MyAppointmentScreen from "../App/MyAppointmentScreen";
// import InviteScreen from "../App/InviteScreen";
// import NotificationScreen from "../App/NotificationScreen";
// import MessageDetailScreen from "../App/MessageDetailScreen";
// import MessageStack from "./AppTabStack/MessageStack";
// import Global from "../Global";
// import BookingScreen from "../App/Staff/Reservation/BookingScreen";

// const tabName = {
//     Message: "通知",
//     Mine: "我的",
//     Reservation: "预约",
//     Group:"群组",
// }
// const HomeIconWithBadge = props => {
//     // return <IconWithBadge {...props} badgeCount={3} />;
//     return <IconWithBadge {...props} />;
// };

// const RootTabStack = createBottomTabNavigator(
//     {
//         预约: ReservationStack,
//         通知: MessageStack,
//         群组: GroupStack,
//         我的: MineScreen,
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, horizontal, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 let IconComponent = Ionicons;
//                 let iconName;
//                 badge=0;
//                 if (routeName === tabName.Message) {
//                     iconName = "ios-mail";
//                     Global.messages.map((message)=>{
//                         (!message.isRead)&&badge++
//                     })
//                 } else if (routeName === tabName.Mine) {
//                     iconName = "md-person";
//                 } else if (routeName === tabName.Reservation) {
//                     iconName = 'ios-search';
//                 }else if (routeName === tabName.Group) {
//                     iconName = 'md-people';
//                 }

//                 // You can return any component that you like here!
//                 return <IconWithBadge name={iconName} size={25} color={tintColor} badgeCount={badge} />
//                 // return <IconComponent name={iconName} size={25} color={tintColor} />;
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//         },
//         initialRouteName: tabName.Reservation,
//     },
// );
// const TabNavigator_Staff = createStackNavigator({
//     Main: {
//         screen: RootTabStack,
//     },
//     Scanner: {
//         screen: ScannerScreen,
//     },
//     RoomDetail: {
//         screen: RoomDetailScreen,
//     },
//     PersonList: {
//         screen: PersonListScreen,
//     },
//     NoInternet: {
//         screen: NoInternetScreen,
//     },
//     MessageInScanner: {
//         screen: MessageScreen,
//     },
//     FaceVerify:{
//         screen:FaceVerifyScreen,
//     },
//     MyGroupDetail:{
//         screen:MyGroupDetailScreen,
//     },
//     AlterPsw:{
//         screen:AlterPswScreen,
//     },
//     MyAppointment:{
//         screen:MyAppointmentScreen,
//     },
//     Invite:{
//         screen:InviteScreen,
//     },
    
//     Meeting:{
//         screen:Meeting,
//     },
//     Booking:{
//         screen:BookingScreen,
//     }
// },
//     {
//         mode: 'modal',
//         headerMode: 'none',
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             header: null,
//         })
//     }
// )
// export default TabNavigator_Staff;
// export { tabName };