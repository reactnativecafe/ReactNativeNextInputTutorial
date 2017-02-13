import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  AppRegistry,
} from 'react-native';

const NUMBER_OF_INPUTS = 4;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    let textInputs = [];
    for (let i = 1; i <= NUMBER_OF_INPUTS; i++) {
      textInputs.push(
        <TextInput
          key={i}
          placeholder={ `${i}` }

          blurOnSubmit={ i === NUMBER_OF_INPUTS ? true : false }
          onSubmitEditing={() => {
            if(i !== NUMBER_OF_INPUTS) {
              this.focusNextField(i + 1)
            }
          }}
          returnKeyType={ i === NUMBER_OF_INPUTS ? "done" : "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs[i] = input;
          }}
        />
      );
    }

    return (
      <View style={styles.outerContainer}>
        { textInputs }
      </View>
    );
  };
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    flexDirection: 'column',
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default App;

AppRegistry.registerComponent('NextInput', () => App);
