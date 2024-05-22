<template>
  <div class="border-b-2">
  <button @click="move(false)" class="buttonLeft">&#9754;</button>
  <button @click="move(true)" class="buttonRight">&#9755;</button>
  <span class="displayYear">{{viewDate.YYYY}}</span>
  <div class="monthSwitcher">
    <div v-for="(item,index) in MMs" :key="index" :class="{selected:index===viewDate.MM}">{{firstThree(item)}}</div>
  </div>
  </div>
</template>

<script setup lang="ts">
import factoryEvent from "../../assets/factory.json";
import dateText from "../../assets/dateText.json";
const viewDate = ref<object>({
          YYYY: new Date().getFullYear(),
          MM: new Date().getMonth(),
          DD: new Date().getDay()
});
const selectedViewDate = ref<object>({
        YYYY: null,
        MM: null,
        DD: null,
        DAY: null
});
const selectedViewEvent = ref<object>({
        title: null,
        type: null,
        note: null
});
const events = ref<object>(factoryEvent);
const MMs = ref<any>(dateText.MM);
const now = computed(() => {
      const d = new Date();
      return {
        YYYY: d.getFullYear(),
        MM: d.getMonth(),
        DD: d.getDate(),
        DAY: d.getDay()
      };
});

const firstThree = (v: string) => {
      return v.substring(0, 3);
};

const move = (goNext: boolean) => {
      if (goNext) {
        if (viewDate.MM === 11) {
          viewDate.MM = 0;
          viewDate.YYYY = viewDate.YYYY + 1;
        } else {
          viewDate.MM += 1;
        }
      } else {
        if (viewDate.MM === 0) {
          viewDate.MM = 11;
          viewDate.YYYY = viewDate.YYYY - 1;
        } else {
          viewDate.MM -= 1;
        }
      }
}
</script>

<style scoped>
* {
  margin: 0px;
}
.main {
  box-sizing: border-box;
  float: left;
  height: 15vh;
  width: 77.5%;
  border-bottom: 1px solid #23ce7b;
  position: relative;
}
  .buttonLeft,
  .buttonRight {
    border: none;
    background: transparent;
    font-size: 2.2em;
    margin: 1% 2%;
    cursor: pointer;
  }
  .todayDate {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.5% 275px;
    border: 1px solid #23ce7b;
    padding: 5px;
 
  }
  .todayDate p {
      color: #23ce7b;
  }
  .optionDate {
    position: absolute;
    right: 0;
    margin: 2% 150px;
  }
  .displayYear {
    font-size: 2.5em;
    position: absolute;
    right: 0;
    margin: 1% 30px;
  }

.monthSwitcher {
  text-align: center;
  display: flex;
  width: 100%;
}
.monthSwitcher > div {
  font-weight: bold;
  flex: 1;
}
.selected {
  color: #23ce7b;
}
</style>