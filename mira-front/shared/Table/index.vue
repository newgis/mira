<template>
  <section class="table">
    <h3 class="table__title">{{ tableTitle }}</h3>
    <div class="table__content">
      <ul
        class="table__header"
        :style="{'grid-template-columns': `repeat(${titles.length}, 1fr)`}"
      >
        <li
          v-for="title in titles"
          :key="title"
          class="table__item"
        >
          {{ title }}
        </li>
      </ul>
      <div class="table__body">
        <NuxtLink
          v-for="row in rows"
          :key="row.number"
          class="table__link"
          :to="`/dispatching/${ row.number }`"
        >
          <ul
            class="table__row"
            :style="{'grid-template-columns': `repeat(${titles.length}, 1fr)`}"
          >
            <li v-if="row.number" class="table__item order-number">{{ row.number }}</li>
            <li v-if="row.sendingDate" class="table__item">{{ row.sendingDate }}</li>
            <li v-if="row.from" class="table__item">{{ row.from }}</li>
            <li v-if="row.to" class="table__item">{{ row.to }}</li>
            <li v-if="row.gettingDate" class="table__item">{{ row.gettingDate }}</li>
            <li
              v-if="row.status"
              class="table__item"
              :class="{
                                'status--delivered': row.status == 'delivered',
                                'status--waiting': row.status == 'waiting',
                                'status--during': row.status == 'during'
                            }"
            >
              {{
                row.status == 'waiting' ? 'Ждет отправки' :
                  row.status == 'delivered' ? 'Доставлено' :
                    "В пути"
              }}
            </li>
            <li v-if="row.date" class="table__item">
              {{ row.date }}
            </li>
            <li v-if="row.position" class="table__item">
              {{ row.position }}
            </li>
          </ul>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TableBlock",
  props: {
    tableTitle: {
      type: String,
      default: "Мои отправления",
    },
    titles: {
      type: Array,
      default() {
        return [
          "№", "Дата отправления", "Откуда", "Куда", "Дата доставки", "Статус"
        ]
      }
    },
    rows: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style lang="scss">
.table {
  margin-top: 60px;

  &__content {
    background: white;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    margin-top: 10px;
  }

  &__title {
    font-size: 24px;
  }

  &__header,
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
  }

  &__header {
    font-weight: 600;
  }

  &__row {
    &:hover {
      background: rgb(250, 250, 250);
      cursor: pointer;
    }
  }

  &__item {
    padding: 20px;
    border-bottom: 1px solid #C5C5C5;
  }
}

.status {
  &--delivered {
    font-weight: 600;
    color: #00972A;
  }

  &--waiting {
    font-weight: 600;
    color: #E7B316;
  }

  &--during {
    font-weight: 600;
    color: #AEAEAE;
  }
}

.order-number {
  color: #2853C9;
  font-weight: 600;
}
</style>
