import React, { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';

import View from '../View'
import Text from '../Text'
import Image from '../Image'

import school from '../../../assets/school.png'
import book from '../../../assets/book.png'
import audioTrack from '../../../assets/audio_track.png'
import movie from '../../../assets/movie.png'

const AppBarBottom = () => {
    const [visible, setVisible] = useState(false);
    const [activated, setActivated] = useState('notes')
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/signin') {
            setVisible(false)
        } else {
            setVisible(true)
        }
    });

    const goTo = (location, activation) => {
        setActivated(activation)
        history.push(location);
    };

    const checkIfActivated = (view) => {
        if (activated == view) {
            return 'imageActivated'
        } else {
            return 'image'
        }
    }

    const checkIfActivatedText = (view) => {
        if (activated == view) {
            return 'theme'
        } else {
            return 'primary'
        }
    }

    return (
        <>
            {visible
                ? <View style='bottomNavigationBar'>
                    <Pressable onPress={() => goTo('/notelist', 'notes')}>
                        <View style='centralizeContainer'>
                            <Image source={school} style={checkIfActivated('notes')} />
                            <Text color={checkIfActivatedText('notes')}>Notes</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => goTo('/booklist', 'books')}>
                        <View style='centralizeContainer'>
                            <Image source={book} style={checkIfActivated('books')} />
                            <Text color={checkIfActivatedText('books')}>Books</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => goTo('/podcastlist', 'podcasts')}>
                        <View style='centralizeContainer'>
                            <Image source={audioTrack} style={checkIfActivated('podcasts')} />
                            <Text color={checkIfActivatedText('podcasts')}>Podcasts</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => goTo('/videolist', 'videos')}>
                        <View style='centralizeContainer'>
                            <Image source={movie} style={checkIfActivated('videos')} />
                            <Text color={checkIfActivatedText('videos')}>Videos</Text>
                        </View>
                    </Pressable>
                </View>
                : <View />
            }
        </>
    )
};

export default AppBarBottom;