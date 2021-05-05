import React from 'react';
import { Pressable, Image } from 'react-native';
import { Link } from 'react-router-native';
import { useHistory } from 'react-router-native';

import View from '../View'
import Text from '../Text'

import school from '../../../assets/school.png'
import book from '../../../assets/book.png'
import audioTrack from '../../../assets/audio_track.png'
import movie from '../../../assets/movie.png'

const AppBarBottom = () => {
    const history = useHistory();

    const goTo = (location) => {
        history.push(location);
    };

    /*
 <Link to='/notelist'>
                <>
                    <Image source={audioTrack} style={{ width: 30, height: 30 }} />
                    <Text color="theme">Podcasts</Text>
                </>
            </Link>
    */

    return (
        <View style='bottomNavigationBar'>
             <Pressable onPress={() => goTo('/notelist')}>
                <>
                    <Image source={school} style={{ width: 30, height: 30 }} />
                    <Text color="theme">Notes</Text>
                </>
            </Pressable>
            <Pressable onPress={() => goTo('/booklist')}>
                <>
                    <Image source={book} style={{ width: 30, height: 30 }} />
                    <Text color="theme">Books</Text>
                </>
            </Pressable>
            <Pressable onPress={() => goTo('/podcastlist')}>
                <>
                    <Image source={audioTrack} style={{ width: 30, height: 30 }} />
                    <Text color="theme">Podcasts</Text>
                </>
            </Pressable>
            <Pressable onPress={() => goTo('/videolist')}>
                <>
                    <Image source={movie} style={{ width: 30, height: 30 }} />
                    <Text color="theme">Videos</Text>
                </>
            </Pressable>
        </View>
    )
};

export default AppBarBottom;