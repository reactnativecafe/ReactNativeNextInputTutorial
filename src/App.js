import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  AppRegistry,
} from 'react-native';

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
    return (
      <View style={styles.outerContainer}>
        <TextInput
          placeholder="one"
          blurOnSubmit={ false }
          onSubmitEditing={() => {
            this.focusNextField('two');
          }}
          returnKeyType={ "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['one'] = input;
          }}
        />
        <TextInput
          placeholder="two"
          blurOnSubmit={ false }
          onSubmitEditing={() => {
            this.focusNextField('three');
          }}
          returnKeyType={ "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['two'] = input;
          }}
        />
        <TextInput
          placeholder="three"
          blurOnSubmit={ false }
          onSubmitEditing={() => {
            this.focusNextField('four');
          }}
          returnKeyType={ "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['three'] = input;
          }}
        />
        <TextInput
          placeholder="four"
          blurOnSubmit={ true }
          returnKeyType={ "done" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['four'] = input;
          }}
        />
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
    alignSelf: 'stretch',
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
