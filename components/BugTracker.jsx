import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addBug, removeBug, resolveBug } from '../Store/actions';

import AddIcon from './Icons/AddIcon';
import DeleteIcon from './Icons/DeleteIcon'
import BugIcon from './Icons/BugIcon'


export default function BugTracker() {
  const [newBug, setNewBug] = useState(' ');
  const dispatch = useDispatch();
  const createId = () => Math.random().toString(36).substr(2, 4);
  const bugs = useSelector((state) => state);
  const totalBugs = useSelector((state) => state.length);
  const unresolvedBugs = bugs.filter((bug) => !bug.resolved);
  const resolvedBugs = bugs.filter((bug) => bug.resolved);

  const handleSubmit = () => {
    const id = createId();
    const description = newBug.trim();
    if (!description) return null;
    dispatch(addBug(id, description));
    setNewBug(' ');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}>Bug Tracker</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Add a new bug here..."
          style={styles.formInput}
          underlineColorAndroid="transparent"
          allowFontScaling={true}
          value={newBug}
          onChangeText={(e) => setNewBug(e.target.value)}
        />
        <AddIcon onSubmit={handleSubmit} />
      </View>
      <View style={styles.bugs}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.unresolvedBugs}>
            <Text style={styles.bugOption}>Unresolved</Text>

            {unresolvedBugs.length ? (
              unresolvedBugs.map((bug) => (
                <View key={bug.id} style={styles.bug}>
                  <BugIcon onPress={() => dispatch(resolveBug(bug.id))} />
                  <Text style={[styles.bugText, { color: 'red' }]}>
                    {bug.description}
                  </Text>
                  <DeleteIcon onPress={() => dispatch(removeBug(bug.id))} />
                </View>
              ))
            ) : (
              <Text style={styles.empty}>List Empty</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical: 'center',
  },
  form: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  formInput: {
    flex: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 2,
    marginRight: 5,
    paddingHorizontal: 8,
    borderRadius: 3,
    fontSize: 17, 
  },
  bugs: {
    flex: 1,
    marginVertical: 12,
    paddingHorizontal: 15,
    paddingRight: 20
  },
  unresolvedBugs: {
    marginVertical: 4,
  },
  bugOption: {
    textDecoration: 'underline',
    paddingBottom: 10,
    fontSize: 18
  },
});
