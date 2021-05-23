import React, { useState, useEffect } from 'react';
import { Drawer } from 'react-native-paper';

import View from './View'

const PickerSelect = () => {
    const [active, setActive] = useState('Latest First');

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(true)
    }, []);

    const open = () => {
        setExpanded(!expanded)
    }

    const sort = (activate) => {
        setExpanded(!expanded)
        setActive(activate)
    }

    return (
        <View>
            {expanded
                ? <Drawer.Item
                    label={`Sort: ${active}`}
                    onPress={open}
                />
                : <View >
                    <Drawer.Section title="Select an item...">
                        <Drawer.Item
                            label="Importants First"                    
                            onPress={() => sort("Importants First")}
                        />
                        <Drawer.Item
                            label="Not Impotants First"                  
                            onPress={() => sort("Not Impotants First")}
                        />
                        <Drawer.Item
                            label="Latest First"                          
                            onPress={() => sort("Latest First")}
                        />
                        <Drawer.Item
                            label="Latest Last"                          
                            onPress={() => sort("Latest Last")}
                        />
                    </Drawer.Section>
                </View>
            }
        </View>
    );
};

export default PickerSelect;