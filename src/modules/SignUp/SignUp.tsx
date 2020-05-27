import React from 'react';
import {Text} from '../../components/Texts';
import ImageCircle from '../../components/Images/ImageCircle';
import {Input} from '../../components/Inputs';
import {ScrollView, View} from "react-native";

export default React.memo(() => {
    return (<View>
        <ImageCircle
            width={200}
            height={200}
            source={{
                uri:
                    'https://i2.wp.com/allwomens.ru/uploads/posts/2018-03/1522150263_kogda-ramadan-2018-52.jpg',
            }}
        />
        <Text>Hello World!</Text>
        <Input selectionColor={'#f54e6a'}/>
        <Text>Password</Text>
        <Input selectionColor={'#f54e6a'}/>
    </View>);
});
