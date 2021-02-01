/* @flow */

import React, {useMemo, useRef} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import {Portal, PortalHost} from '@gorhom/portal';
const Tab = createBottomTabNavigator();

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna magna, pretium quis lacus vel, ullamcorper egestas odio. Proinaliquam sapien ut quam consequat, eget facilisis metus auctor. Duis varius blandit metus in tristique.';

const FirstScreen = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => [0, '50%'], []);
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Open"
          onPress={() => {
            bottomSheetRef.current?.expand();
          }}
        />
      </View>
      {/*<Portal>*/}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}>
        <BottomSheetScrollView style={styles.contentContainer}>
          <Text>{[...Array(8).keys()].map(() => text)}</Text>
        </BottomSheetScrollView>
      </BottomSheet>
      {/*</Portal>*/}
    </>
  );
};

const SecondScreen = () => null;

const App = () => {
  return (
    // <PortalHost>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // </PortalHost>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  contentContainer: {
    flex: 1,
  },
});

export default App;
