import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    // You would typically integrate with Maya's payment API here
    // For this example, we'll simulate a successful payment
    try {
      // Replace this with your actual payment logic
      const paymentResult = await simulateMayaPayment(amount);
      setPaymentStatus(`Payment successful. Transaction ID: ${paymentResult.transactionId}`);
    } catch (error) {
      setPaymentStatus('Payment failed. Please try again.');
    }
  };

  const simulateMayaPayment = (amount) => {
    return new Promise((resolve, reject) => {
      // Simulate a successful payment after a delay (replace with actual API call)
      setTimeout(() => {
        const transactionId = Math.floor(Math.random() * 1000000);
        resolve({ transactionId });
      }, 2000);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maya Secure Online Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <Button title="Make Payment" onPress={handlePayment} />
      {paymentStatus !== '' && (
        <Text style={styles.paymentStatus}>{paymentStatus}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentStatus: {
    fontSize: 16,
    marginTop: 20,
    color: 'green', // You can style the payment status differently based on success or failure
  },
});
