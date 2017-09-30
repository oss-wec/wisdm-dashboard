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

    <div class="under-card" v-if="animal.devices && animal.marks">
      <i class="flaticon-worldwide" v-if="animal.devices"></i>
      <!-- <i class="flaticon-scalpel"></i> -->
      <!-- <i class="flaticon-construction"></i> -->
      <i class="flaticon-tool" v-if="animal.marks"></i>
      <!-- <i class="flaticon-blood-test"></i> -->
      <!-- <i class="flaticon-bandage"></i> -->
      <!-- <i class="flaticon-warning"></i> -->
      <!-- <i class="flaticon-stethoscope"></i> -->
      <!-- <i class="flaticon-syringe"></i> -->
    </div>
  </div>
</template>

<script scoped>
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
  padding: 0 0 4px 0;
}

.media {
  padding: 4px 8px 0 12px;
  margin: 0 0 8px 0 !important;
  align-items: center;
}

.under-card {
  border-top: 1px solid rgba(0, 0, 0, .1);
  background-color: rgba(0, 0, 0, .05);
  padding: 2px 0;
}

[class^="flaticon-"]:before, [class*=" flaticon-"]:before,
[class^="flaticon-"]:after, [class*=" flaticon-"]:after {
  font-size: 1.1em;
  color: #b1b1b1;
  /* background-color: yellow; */
  line-height: 1.1;
}
</style>
