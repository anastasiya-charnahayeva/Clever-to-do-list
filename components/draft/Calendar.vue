<template>
  <div>
    <table class="days">
      <tr>
        <th v-for="(week,weekIndex) in DAY" :key="weekIndex">{{firstThree(week)}}</th>
      </tr>
    </table>
    <table class="dates">
      <tr v-for="(week,weekIndex) in DDs" :key="weekIndex" class="dateTR">
        <td v-for="(date,dayIndex) in week" :key="dayIndex"
          :class="{nowDate:date.DD===now.DD&&now.MM===viewDate.MM&&now.YYYY===viewDate.YYYY , notThisMontth:date.MM!==viewDate.MM}"
          
          >
          <!-- @click="changeSelectedDate(date)" -->
          <div>
            <span>{{date.DD}}</span>
          </div>
          <div class="eventContainer">
            <ul class="eventItemArea">
              <li v-for="(item, index) in getEventByDate(date)" :key="item.guid" :class="{doneEvnet:item.done}">
                <!-- <p v-if="index<=maxContainIndex" > -->
                    <abbr :title="item.note">{{item.title}}</abbr>
                <!-- </p> -->
              </li>
            </ul>
          </div>
          <div>
            <span v-if="getEventByDate(date).length>maxContainIndex">More</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
    
</template>

<script setup lang="ts">
import factoryEvent from "../../assets/factory.json";
import dateText from "../../assets/dateText.json";
const todosStore = useTodosStore();
const todos = todosStore.getTodos;
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
const events = ref<object>(factoryEvent);
const interval = ref<any>();
const maxContainIndex = ref<number>(99);
const DAY = ref<any>(dateText?.DAY);
// const newData = ref<Object>();
const now = computed(() => {
      const d = new Date();
      return {
        YYYY: d.getFullYear(),
        MM: d.getMonth(),
        DD: d.getDate(),
        DAY: d.getDay()
      };
});

const DDs = computed(() => {
      let ret = [];
      if (viewDate?.YYYY !== null && viewDate?.MM !== null) {
        const d = new Date(viewDate?.YYYY, viewDate?.MM, 1);
        const dayOfMonthStart = d.getDay();
        const d_ofThisMonth = new Date(
          viewDate?.YYYY,
          viewDate?.MM + 1,
          0
        );
        const DDDD_ofThisMonth = d_ofThisMonth.getDate();

        ret.push([]);
        let weekCount = 0; //週數
        //add rest date that before start of this month and need to show in this month.
        const d_ofLastMonth = new Date(viewDate?.YYYY, viewDate?.MM, 0);
        const DDDD_ofLastMonth = d_ofLastMonth.getDate();
        for (let i = 0; i < dayOfMonthStart; i++) {
          let YYYY = d_ofLastMonth.getFullYear();
          let MM = d_ofLastMonth.getMonth();
          let DD = DDDD_ofLastMonth - dayOfMonthStart + i + 1;
          let DAY = ret[weekCount].length; //DAY same as index of this array's position
          ret[weekCount].push({ YYYY: YYYY, MM: MM, DD: DD, DAY: DAY.value });
        }

        //start date of this month
        let v = 1;
        do {
          let YYYY = viewDate?.YYYY;
          let MM = viewDate?.MM;
          let DD = v;
          let DAY = ret[weekCount].length; //DAY same as index of this array's position
          ret[weekCount].push({ YYYY: YYYY, MM: MM, DD: DD, DAY: DAY.value });
          if (ret[weekCount].length === 7) {
            ret.push([]);
            weekCount += 1;
          }
          v += 1;
        } while (v <= DDDD_ofThisMonth);

        //add rest date after end of this month
        v = 1;
        do {
          let YYYY = viewDate?.YYYY;
          let MM = viewDate?.MM + 1;
          let DD = v;
          let DAY = ret[weekCount].length; //DAY same as index of this array's position
          ret[weekCount].push({ YYYY: YYYY, MM: MM, DD: DD, DAY: DAY.value });
          v += 1;
        } while (ret[weekCount].length < 7);
      }
    
      return ret;
})

const firstThree = (v: string) => {
      return v.substring(0, 3);
    }

const changeSelectedDate = (dataObj: any) => {
      const YYYYMMDD =
        selectedViewDate.YYYY +
        ("0" + (selectedViewDate.MM + 1)).slice(-2) + //need+1; because:"20180808"={YYYY:2018,MM:7,DD:8}
        ("0" + selectedViewDate.DD).slice(-2);
      if (events[YYYYMMDD]) {
        for (let i = 0; i < events[YYYYMMDD].length; i++) {
          if (events[YYYYMMDD][i]?.selected === true) {
            events[YYYYMMDD][i].selected = false;
          }
        }
      }
      selectedViewDate.value = dataObj;
    }

watch(
  () => viewDate.value,
  (viewDateValue) => {
    console.log(`Count is: ${viewDateValue}`)
    calcEventHeight();
  }
)

const getEventByDate = (dateObj: any) => {
      let ret = [];
      const YYYYMMDD =
        dateObj.YYYY +
        ("0" + (dateObj.MM + 1)).slice(-2) + //need+1; because:"20180808"={YYYY:2018,MM:7,DD:8}
        ("0" + dateObj.DD).slice(-2);
      ret = events[YYYYMMDD] || [];
      console.log(dateObj)
      return ret;
    };
    const calcEventHeight = () => {
      if (interval.value) {
        clearInterval(interval.value);
      }
      interval.value = setInterval(() => {
        let container = document.querySelector(".eventContainer");
        let event = document.querySelector(".eventItemArea>li");
        if (container && event) {
          maxContainIndex.value =
            container.offsetHeight / event.offsetHeight - 1;
          clearInterval(interval.value);
        }
      }, 250);
    }
  

// onMounted(() => {
//     if (data) {
//         name.value = data?.name;
//         description.value = data?.description;
//         done.value = data?.done;
//         date.value = data?.date;
//     }
// })
</script>
<style scoped>
.main {
  float: left;
  height: 85vh;
  width: 77.5%;
}
table {
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  &.days {
    height: 5%;
  }
  &.dates {
    height: 95%;
  }
  th {
    border-top: 0px;
    border-right: 1px solid #e0e0e0;
    border-left: 0px;
  }
  tr {
    vertical-align: top;
    max-height: 20%;
  }
  td {
    border-top: 0px;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    border-left: 0px;
  }
  .dateTR {
    td span {
      margin: 5px;
    }
  }
  .nowDate {
    span {
      background: #23ce7b;
      padding: 2px;
      border-radius: 50%;
      color: white;
    }
  }
  td.notThisMontth {
    opacity: 0.3;
  }
  td > div:first {
    height: 20px;
  }
  td > div:nth-child(2) {
    overflow: hidden;
    height: calc(100% - 42px);
  }
  td > div:last-child {
    height: 20px;
    text-align: center;
    color: #a4a4a4;
    font-size: 0.8em;
  }

  .eventItemArea {
    display: block;
    margin-top: 2%;
    height: 40px;
    li {
      color: white;
      font-size: 0.8em;
      border-radius: 5px;
      padding: 0px 15px;
      text-align: end;
      &.doneEvnet {
        text-decoration: line-through;
      }
    }
  }
}
</style>