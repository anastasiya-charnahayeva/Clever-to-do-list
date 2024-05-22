<template>
    <div class="my-6">
        <div class="container m-auto">
        <h1 class="text-xl font-semibold">{{today ? "Today's" : "All"}} tasks</h1>
        </div>
        <AddButton :showModal="showModal"  @click="showModal=true"/>
        <TodoModal :showModal="showModal" v-if="showModal" @close="showModal=false" :data="modalData" @saveData="(e, data, id) => saveData(e, data, id)"/>
        <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @toggleChanging="(e) => changeStatus(e, todo.id)" @openModal="(e) => edit(e, todo.id)" @removeItem="(e) => remove(e, todo.id)" @saveData="(e, data, id) => saveData(e, data, id)"/>
    </div>
</template>

<script setup lang="ts">
const todosStore = useTodosStore();
const todos = todosStore.getTodos;
const filteredTodos = ref<any>(todos);
const showModal = ref<Boolean>(false);
const modalData = ref<Object>({
  name: null,
  description: null,
  done: null,
  date: null
});
const props = defineProps({
  today: {
    type: Boolean,
    required: true,
  },

});
const { today } = props;

const changeStatus = (e: boolean, id: string) => {
  console.log("e", e, id);
  const idx = todos.findIndex(todo => todo.id === id);
  console.log("idx",idx);
  todos[idx].done = e;
  //изменить в сторе
  updateFilteredTodos();
}

const edit = (e: any, id: string) => {
  showModal.value = true;
  modalData.value = todos.find(todo => todo.id === id);
  console.log("m", modalData.value);
  updateFilteredTodos();
  
  //изменить в сторе
}

const remove = (e: any, id: string) => {
  const idx = todos.findIndex(todo => todo.id === id);
  todos.splice(idx,1);
  console.log("m", modalData.value);
  updateFilteredTodos();
  
  //изменить в сторе
}

const saveData = (data: any) => {
  showModal.value = false;
  console.log("ada", data);
  if (data?.id) {
    todos[data?.id].done = data.done??false;
    todos[data?.id].name = data.name;
    todos[data?.id].description = data.description;
    todos[data?.id].date = data.date;
  } else {
    todos.push({...data, id: Math.random()});
  }
  modalData.value = {};
  updateFilteredTodos();
}

const updateFilteredTodos = () => {
    if (today) {
      const startDate = new Date();
      filteredTodos.value = todos.filter((todo) => {
        const todoDate = new Date(todo.date);
        if ( todoDate.getFullYear() == startDate.getFullYear() &&
         todoDate.getMonth() == startDate.getMonth() &&
         todoDate.getDate() == startDate.getDate())
          return todo
        }
        );
      modalData.value['date'] = startDate;
    }
}

onMounted(() => {
    updateFilteredTodos();
})
</script>