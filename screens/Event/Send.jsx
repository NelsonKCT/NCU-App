import React, { useState, useEffect } from 'react';
import {
  Text, View, SafeAreaView, RefreshControl, Dimensions,
  ScrollView, TouchableOpacity, Image, Button, TouchableHighlight,
} from 'react-native';
import {
  Ionicons, FontAwesome5, AntDesign, Feather,
} from '@expo/vector-icons';
import { Card, TextInput, Title } from 'react-native-paper';
import {
  NativeBaseProvider, Box, Divider, VStack, HStack, FlatList,
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style_folder/Styles_Message';
import ActiveController from '../../controller/Active';

function Send({ navigation }) {
  const [data, setData] = useState({});
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    if (data.from === undefined && data.to === undefined) {
      data.from = '110303987';
      data.to = '110303876';
    }
    ActiveController.getMessage(data.from, data.to).then((res) => {
      setGetData(res);
    }).then().catch((err) => {
      throw err;
    });
  }, []);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    if (data.from === undefined && data.to === undefined) {
      data.from = '110303987';
      data.to = '110303876';
    }
    ActiveController.getMessage(data.from, data.to).then((res) => {
      setGetData(res);
    }).then().catch((err) => {
      throw err;
    });
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <ScrollView
          Vertical
          style={{ flex: 1 }}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
  )}
        >
          <LinearGradient
            colors={['#1784B2', '#28527A']}
            start={[1, 2]}
            end={[1, 0]}
          >
            <Box style={styles.header}>
              <HStack style={{ flex: 1 }}>
                <Box style={styles.headerArrowBox}>
                  <AntDesign
                    name="arrowleft"
                    size={28}
                    color="#fff"
                    onPress={() => { navigation.navigate('message', { prepage: 'Send' }); }}
                  />
                </Box>
                <Box style={styles.title}>
                  <FontAwesome5
                    name="comment"
                    size={25}
                    color="#fff"
                  >
                    <Text>&ensp;私訊中心</Text>
                  </FontAwesome5>
                </Box>
              </HStack>
            </Box>
          </LinearGradient>
          <View style={{ margin: 50, borderWidth: 1 }}>
            <Text>from</Text>
            <TextInput
              placeholder="學號"
              value={data.from}
              onChangeText={(text) => setData({ ...data, from: text })}
              selectionColor="#ccc"
            />
            <Text>to</Text>
            <TextInput
              placeholder="學號"
              value={data.to}
              onChangeText={(text) => setData({ ...data, to: text })}
              selectionColor="#ccc"
            />
            <Text>message</Text>
            <TextInput
              value={data.message}
              onChangeText={(text) => setData({ ...data, message: text })}
              selectionColor="#ccc"
            />
            <Button
              title="傳送"
              onPress={() => {
                data.uploadTime = new Date();
                ActiveController.addMessage(data);
              }}
            />
          </View>
          <View>

            <View>
              {getData.map(({
                id, from, to, message,
              }) => (
                <Card
                  key={id}
                >
                  <Card.Content>
                    <Text>
                      from:
                      {from}
                    </Text>
                    <Text>
                      to:
                      {to}
                    </Text>
                    <Text>
                      message:
                      {message}
                    </Text>
                  </Card.Content>
                </Card>
              ))}
            </View>
            <Button
              title="讀取"
              onPress={() => {
                ActiveController.getMessage(110303987, 110303876);
              }}
            />

          </View>
        </ScrollView>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
export default Send;