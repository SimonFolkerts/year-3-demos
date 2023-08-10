<template>
  <div>
    <ul>
      <Todo v-for="todo in todos" :key="todo" :todo="todo" />
    </ul>

    <form @submit.prevent="addTodo">
      <input type="text" v-model="todoText">
      <input type="submit" value="Add Todo">
    </form>
  </div>
</template>

<script>
import Todo from './components/Todo.vue';
export default {
  name: "TodoList",
  components: {
    Todo,
  },
  data() {
    return {
      todos: [],
      todoText: '',
    }
  },
  methods: {
    addTodo: function () {
      this.todos.push(this.todoText);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  mounted() {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos) || []
  }
}
</script>

<style lang="scss" scoped></style>