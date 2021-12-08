import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    const rawTodos = await AsyncStorage.getItem(key);

    if (!rawTodos) {
      throw new Error('No saved todos');
    }

    const savedTodos = JSON.parse(rawTodos);
    return savedTodos;
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },
};

export default todosStorage;
