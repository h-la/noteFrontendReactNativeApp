import React from 'react';
import { Pressable } from 'react-native';
import { useHistory } from 'react-router-native';
import View from '../View'
import Text from '../Text'
import Image from '../Image'

import important from '../../../assets/star.png'

const NoteItem = props => {
    const history = useHistory();

    const toSingleRepositoryView = (id) => {
        history.push(`notelist/${id}`);
    };

    return (
        <Pressable onPress={() => toSingleRepositoryView(props.item.id)}>
            <View style='subContainer'>
                <View style='centralizeContainer'>
                    {props.item.important
                        ? <Image source={important} style='image' />
                        : <View />
                    }
                    <Text fontWeight="bold" fontSize="subheading">{props.item.title}</Text>
                    <Text color="textSecondary">{props.item.text}</Text>
                    <Text color="textSecondary">{props.item.url}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default NoteItem;