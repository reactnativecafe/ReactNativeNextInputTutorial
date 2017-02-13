# React Native Next Input Tutorial
This is tutorial code showing how to automatically transition to the next TextInput in React Native.

```
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
```
