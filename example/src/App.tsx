import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { calculate, Button, Card } from 'rn-marport-ui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setResult(calculate(3, 7));
  }, []);

  return (
    <View style={styles.container}>
      <Card>
        <Text>Result: {result}</Text>
      </Card>
      <Card>
        <Button />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
