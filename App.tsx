import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalIput from './components/GoalInput';

function App() {
  const [courseGoals, setCourseGoals] = useState<{text: string; key: string}[]>(
    [],
  );

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalIput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            itemData.index;
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          alwaysBounceHorizontal={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
