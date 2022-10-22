import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const nav = useNavigation();
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter a valid email'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values =>
        Alert.alert(JSON.stringify(values)) &&
        setIsSignedIn(true) &&
        nav.navigate('Home')
      }>
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldTouched,
        isValid,
      }) => (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Email ID"
              placeholderTextColor="white"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.location && (
              <Text style={styles.et}>{errors.email}</Text>
            )}
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={{color: 'white'}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rgrBtn} onPress={handleSubmit}>
            <Text style={{color: 'black'}}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 300,
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: 'grey',
    borderRadius: 8,
    width: '90%',
    height: 45,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems: 'center',
  },

  forgot_button: {
    height: 30,
    marginBottom: 3,
    alignSelf: 'center',
    marginVertical: 15,
  },

  loginBtn: {
    width: '50%',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  rgrBtn: {
    width: '50%',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
