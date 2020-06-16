import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'
import Message from './src/components/Message'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      {/* <Container> */}
        <Header />
        {/* <Content> */}
          <Button>
            <Message />
            <Text style={styles.button}>Click Me!</Text>
          </Button>
        {/* </Content> */}
      {/* </Container> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
    // margin: 10,
  },
  button: {
    margin: 0,
    padding: 0,
    color: '#ffffff'
  }
});
