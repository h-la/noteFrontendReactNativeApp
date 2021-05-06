import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { useHistory } from 'react-router-native';

import View from '../View'
import Text from '../Text'
import Image from '../Image'

import school from '../../../assets/school.png'
import book from '../../../assets/book.png'
import audioTrack from '../../../assets/audio_track.png'
import movie from '../../../assets/movie.png'

const AppBarBottom = () => {
    const [activated, setActivated] = useState('notes')
    const history = useHistory();

    const goTo = (location, activation) => {
        setActivated(activation)
        history.push(location);
    };

    const checIfActivated = (view) => {
        if (activated == view) {
            return 'imageActivated'
        } else {
            return 'image'
        }
    }

    const checIfActivatedText = (view) => {
        if (activated == view) {
            return 'theme'
        } else {
            return 'primary'
        }
    }

    return (
        <View style='bottomNavigationBar'>
            <Pressable onPress={() => goTo('/notelist', 'notes')}>
                <View style='centralizeContainer'>
                    <Image source={school} style={checIfActivated('notes')} />
                    <Text color={checIfActivatedText('notes')}>Notes</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => goTo('/booklist', 'books')}>
                <View style='centralizeContainer'>
                    <Image source={book} style={checIfActivated('books')} />
                    <Text color={checIfActivatedText('books')}>Books</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => goTo('/podcastlist', 'podcasts')}>
                <View style='centralizeContainer'>
                    <Image source={audioTrack} style={checIfActivated('podcasts')} />
                    <Text color={checIfActivatedText('podcasts')}>Podcasts</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => goTo('/videolist', 'videos')}>
                <View style='centralizeContainer'>
                    <Image source={movie} style={checIfActivated('videos')} />
                    <Text color={checIfActivatedText('videos')}>Videos</Text>
                </View>
            </Pressable>
        </View>
    )
};

export default AppBarBottom;