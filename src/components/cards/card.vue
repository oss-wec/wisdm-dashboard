<template>
  <div class="animal-card">
    <div class="card-left">
      <div class="ndow-id">{{ animal.ndow_id }}</div>
      <div class="dates">
        <div class="date">Jan 28</div>
        <div class="year">2017</div>
      </div>
    </div>
    <div class="card-right">
      <div class="right-top">
        <div class="species">{{ animal.species }}</div>
        <div class="project">{{ animal.project }}</div>
      </div>
      <div class="right-bottom">
        <div class="metric">
          <div class="field">Age</div>
          <div class="data">{{ animal.age }}</div>
        </div>
        <div class="metric">
          <div class="field">Sex</div>
          <div class="data">{{ animal.sex }}</div>
        </div>
        <div class="metric">
          <div class="field">Status</div>
          <div class="data">{{ animal.status }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimalCard',

  props: [ 'animal' ]
}
</script>

<style scoped>
.animal-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
/*   border: 1px solid #2B8B8F; */
  border-top: 6px solid #2B8B8F;
  border-radius: 4px;
  min-height: 100px;
  padding: 4px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.animal-card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  /* border: 1px solid red; */
  box-shadow: 10px 0px 3px -10px #bababa;
}

.ndow-id {
  color: #2B8B8F;
  font-size: 1.5em;
  /* text-align: center; */
  letter-spacing: .1em;
  font-weight: 600;
  transform: scale(1, 1.5) 
}

.year {
  color: #bababa;
  font-size: 1.125em;
  letter-spacing: .15em;
  font-weight: 600;
}

.date {
  color: #bababa;
  font-size: .875em;
  letter-spacing: .1em;
}

.card-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  /* border: 1px solid blue; */
}

.right-top {
  text-align: right;
}

.species {
  color: #2B8B8F;
  letter-spacing: .05em;
  font-weight: 600;
}

.project {
  color: #bababa;
  letter-spacing: .05em;
}

.right-bottom {
  display: flex;
  justify-content: space-around;
}

.metric {
  color: #bababa;
  font-size: .75em;
  letter-spacing: .08em;
  text-align: center;
}

.field {
  text-transform: uppercase;
  border-bottom: 1px solid #bababa;
  padding-bottom: 2px;
/*   font-size: .75em; */
}

.data {
  text-transform: capitalize;
  padding-top: 2px;
}
</style>
