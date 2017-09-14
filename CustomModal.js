import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions, 
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

const propTypes = {
  style: PropTypes.object,
};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: 'green',
    width,
    height: height,
  }
});

export default class CustomModal extends React.Component {

  constructor(props) {
    super(props);
    this.toggleValue = new Animated.Value(height* 0.8);
    this.spin = this.spin.bind(this);
    this.state = { popupToggled: false }
  }

  spin() {
    const toValue = this.state.popupToggled ? 0.8 : 0.2;
    const fromValue = height * this.state.popupToggled ? 0.2 : 0.8;
    Animated.timing(
      this.toggleValue,
      {
        toValue: height * toValue,
        duration: 1150,
        easing: Easing.linear
      }
    ).start(() => {
      const { popupToggled } = this.state;
      this.setState({ popupToggled: !popupToggled });  
    });
  }
  render() {
    return (
      <Animated.View style={[styles.absolute, { top: this.toggleValue}]} >
        <TouchableOpacity onPress={this.spin}>
          <Text>Press me, till I can get my top position </Text>
          </TouchableOpacity>
      </Animated.View>
    );
  }
}

CustomModal.propTypes = propTypes;

