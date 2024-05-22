<template>
    <div class='calendar__header'>
      <div>Sun</div>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
    </div>
</template>

<style scoped>
.calendar__header {../../assets/factory.json
  display: flex;../../assets/dateText.json
  background: #F5F6FA;
  border-top: 1px solid #EAF0F4;
  border-left:1px solid #EAF0F4;
  border-right: 1px solid #EAF0F4;
}

.calendar__header div {
  flex: 1;
  margin: 1.5em 4.5em;
  font-size: 11px;
  font-weight: bold;
  color:#A3A6B4;
  text-transform: uppercase;
  text-align: center;
}
</style>