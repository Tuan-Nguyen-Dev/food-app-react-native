import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPrepairing = () => {
    const navigation = useNavigation();
    // hiệu ứng delivery git
    useEffect(() => {
        setTimeout(() => {
            //move to delivery screen
            navigation.navigate('Delivery');
        }, 3000)
    }, [])

    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
        </View>
    )
}

export default OrderPrepairing