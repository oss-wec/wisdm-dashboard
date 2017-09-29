<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <p class="title is-4">{{ animal.ndow_id }}</p>
        </div>
        <div class="media-content has-text-right">
          <p class="title is-6">{{ animal.species }}</p>
          <p class="subtitle is-6 has-text-grey">{{ animal.project }}</p>
        </div>
      </div>

      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <!-- <p class="heading">Date</p> -->
            <p>2017-01-01</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <!-- <p class="heading">Age</p> -->
            <p>{{ animal.age }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <!-- <p class="heading">Sex</p> -->
            <p>{{ animal.sex }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <!-- <p class="heading">Status</p> -->
            <p>{{ animal.status }}</p>
          </div>
        </div>
      </nav>
    </div>

    <div class="under-card">
      <span class="icon"><i class="flaticon-worldwide"></i></span>
      <span class="icon"><i class="flaticon-scalpel"></i></span>
      <span class="icon"><i class="flaticon-construction"></i></span>
      <span class="icon"><i class="flaticon-tool"></i></span>
      <span class="icon"><i class="flaticon-blood-test"></i></span>
      <span class="icon"><i class="flaticon-bandage"></i></span>
      <span class="icon"><i class="flaticon-warning"></i></span>
      <span class="icon"><i class="flaticon-stethoscope"></i></span>
      <span class="icon"><i class="flaticon-syringe"></i></span>
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
.card {
  margin-bottom: 5px;
}

.card-content {
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.media-left > p {
  padding-left: 16px;
}

.level {
  margin-top: 4px;
}

.under-card {
  /* border-top: 1px solid grey; */
  background-color: rgba(0, 0, 0, .05)
  /* padding: 2px 8px; */
}
</style>
