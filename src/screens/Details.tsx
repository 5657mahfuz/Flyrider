import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


// NAVIGATION
import { RootStackParamList } from '../navigation/StackNavigator'
import { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from '@react-navigation/native'

type ScreeProps = NativeStackScreenProps<RootStackParamList, 'Details'>


const Details = ({ route }: ScreeProps) => {
  const { productId } = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details Screen</Text>
      <Text style={styles.smallText}>Product {productId}</Text>
      <Button
        title='Go Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallText: {
    color: 'black',
    fontSize: 20
  }
})