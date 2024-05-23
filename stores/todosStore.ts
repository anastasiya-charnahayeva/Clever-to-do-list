// import firebase from "firebase/app";
// import {
//   addDoc,
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   getFirestore,
//   setDoc,
//   updateDoc
// } from "firebase/firestore";

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([ {
    name: "Task 1", 
    description: "blbalbla",
    date: new Date(),
    done: true,
    userId: "1",
    id: "0"
  },
  {
    name: "Task 2", 
    description: "blbalbla",
    date: new Date().getMonth() -  Math.floor(Math.random()*10),
    done: false,
    userId: "2",
    id: "1"
  },
  {
    name: "Task 3", 
    description: "blbalbla",
    date: new Date().getMonth() -  Math.floor(Math.random()*10),
    done: false,
    userId: "1",
    id: "3"
  }]);

  // const listTodos = ref([]);

  // const db = firebase.firestore();


  // const { $firebaseApp } = useNuxtApp();
  // const db = getFirestore($firebaseApp);
  // const todosRef = db.collection("todos");

  const changeStatus = (e: boolean, id: string) => {
    const idx = todos.value.findIndex(todo => todo.id === id);
    todos.value[idx].done = e;
    //изменить в сторе
    // await setDoc(doc())
  }

  const remove = async (e: any, id: string) => {
    const idx = todos.value.findIndex(todo => todo.id === id);
    todos.value.splice(idx, 1);
    // await deleteDoc(doc(db, "todos", idx));
  }

  const saveData = async (data) => {
    const userId = localStorage.getItem('uid');
    const newObj = {
      done: data.done ? true : false,
      name: data.name || "",
      description: data.description || "",
      date: data.date || new Date(),
      userId
    }
    console.log("ll", data)
    if (data?.id) {
      // todos.value[data?.id] = {...todos.value[data?.id], ...newObj};
      todos.value[data?.id].done = data.done ? true : false;
      todos.value[data?.id].name = data.name || '';
      todos.value[data?.id].description = data.description || "";
      todos.value[data?.id].date = data.date || new Date();
      todos.value[data?.id].id = data.id || Math.random();

      // await updateDoc(doc(db, "todos"), newObj);
    } else {
      todos.value.push({...newObj, id: Math.random().toString()});
      // await addDoc(collection(db, "todos"), newObj);
    }
  }

  const getTodos = async () => {
      // const results: any[] = [];
      // const snap = await getDocs(collection(getFirestore(), "todos"));
      // snap.forEach((doc) => {
      //   results.push({ id: doc.id, ...doc.data() });
      // });
      // return results;

    // console.log(localStorage.getItem('uid'))
    // const q = query(collection(db, "todos"), where("userId", "==", localStorage.getItem('uid')));

// const querySnapshot = await getDocs(q);

// const doc = querySnapshot.docs.map(i => i)


// const querySnapshot = await getDoc(collection(db, "todos"));
// if (querySnapshot.exists()) console.log("YEES")
// querySnapshot.forEach((doc) => {
//   let _doc = doc.data();
//   _doc.id = doc.data();
//   listTodos.value.push(_doc);
//   console.log(`${doc.id} => ${doc.data()}`);})

// const arr = [];
// querySnapshot.forEach((doc) => {
//   arr.push(doc.data());
//   console.log(doc.id, " => ", doc.data);
// })
    // return JSON.stringify(querySnapshot);



    // todosRef.where("userId", "==", localStorage.getItem('uid')).get()
    // .then((querySnapshot: any) => {
    //     querySnapshot.forEach((doc: any) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         let _doc = doc.data();
    //         console.log(doc.id, " => ", doc.data());
    //         listTodos.value.push(_doc);
    //     });
    // })
    // .catch((error: any) => {
    //     console.log("Error getting documents: ", error);
    // });
    
// console.log("ARR", listTodos.value);

  }
  
  return {
    todos,
    changeStatus,
    remove,
    saveData,
    // listTodos
  }
}, {
  persist: true,
})
