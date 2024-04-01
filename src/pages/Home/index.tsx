import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {PageHeader, Gap, Button} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withPhoto" />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Text style={styles.balanceText}>Your balance</Text>
        <Text style={styles.balanceAmount}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.subBalanceWrapper}>
          <Text style={styles.subBalanceTextLeft}>Cash on Hand</Text>
          <Text style={styles.subBalanceTextRight}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.subBalanceWrapper}>
          <Text style={styles.subBalanceTextLeft}>Cash on Bank</Text>
          <Text style={styles.subBalanceTextRight}>Rp. 6.000.000</Text>
          <Gap height={50} />
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <Text style={styles.transaction}> Add Transaction</Text>
        <Button
          label="Cash on Hand"
          backgroundColor="#02CF8E"
          textColor="#020202"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={20} />
        <Button
          label="Cash on Bank"
          backgroundColor="#02CF8E"
          textColor="#020202"
          onPress={() => navigation.navigate('CashOnBank')}
        />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  balanceText: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#000000',
    marginTop: 20,
    paddingLeft: 24,
  },
  balanceAmount: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginHorizontal: 16,
    marginTop: 10,
  },
  subBalanceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  subBalanceTextLeft: {
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  subBalanceTextRight: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  transaction: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    paddingBottom: 15,
    marginLeft: 24,
  },
});