import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, FlatList, SafeAreaView, TextInput, Text } from 'react-native';
import styles from '../styles/dropdown';
import PropTypes from 'prop-types';

export const Dropdown = ({ value, onChange, options, itemSelected, onPress, renderListItem }) => {
    // checks if it should show dropdown
    const [show, setShow] = useState(false);
    // renders each dropdown option
    const renderItem = (item) => {
        return (<TouchableWithoutFeedback onPress={itemSelected}>
            <Text> Hello </Text>
        </TouchableWithoutFeedback>);
    };
    // main component with Input and dropdown list
    return <View>
        <TouchableWithoutFeedback>
            <View>
                <TextInput value={value} onTouchStart={() => setShow(true)} onChange={onChange} style={styles.input}></TextInput>
                {
                    (show && value.length) &&
                    (<View style={styles.list}>
                        <SafeAreaView style={{ flex: 1 }} horizontal nestedScrollEnabled>
                            <FlatList
                                horizontal
                                data={options}
                                renderItem={renderItem}
                            />
                        </SafeAreaView>
                    </View>)
                }
            </View>
        </TouchableWithoutFeedback>
    </View>;
};


Dropdown.propTypes = {
    options: PropTypes.array,
    itemSelected: PropTypes.func,
    onChange: PropTypes.func,
    onPress: PropTypes.func,
    value: PropTypes.string,
    renderListItem: PropTypes.func
};


Dropdown.defaultProps = {
    renderListItem: null,
    options: [],
    value: ''
};


export default Dropdown;