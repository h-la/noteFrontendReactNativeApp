import * as React from 'react';
import { Pressable } from 'react-native';
import { Drawer } from 'react-native-paper';

import View from '../View'
import Image from '../Image'

import MenuImage from '../../../assets/menu.png'

const MyComponent = () => {
    const [active, setActive] = React.useState('');

    const [expanded, setExpanded] = React.useState(false);

    const open = () => {
        setExpanded(!expanded)
    }

    return (
        <View>
            <View>
                {expanded
                    ? <Pressable onPress={open}>
                        <Image source={MenuImage} style='topAppBarImage' />
                    </Pressable>
                    : <Drawer.Section title="Menu">
                        <Drawer.Item
                            label="hide menu"
                            onPress={open}
                        />
                        <Drawer.Item
                            label="Second Item"
                            active={active === 'second'}
                            onPress={() => setActive('second')}
                        />
                    </Drawer.Section>
                }
            </View>
        </View>
    );
};

export default MyComponent;

