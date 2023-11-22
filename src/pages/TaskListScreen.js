import React, {useState} from 'react';
import {Text, View} from 'react-native';

export default function TaskListScreen() {
  const [searchText, setSearchText] = useState('');
  const [tasks, setTask] = useState([]);
  return (
    <View>
      <Text>TaskListScreen</Text>
    </View>
  );
}
