<template>
  <div class="menu">
    <div class="menu__header-wrapper">
      <div class="header__icon" @click="$emit('toggle-menu')">
        <span class="material-icons">close</span>
      </div>
      <div class="menu__header"> Oil and gas Calculator</div>
    </div>
    <div class="menu__main">
      <ul class="menu__list">
        <li v-for="(item, $index) in menuItems"
            :class="item.divider ? 'menu__list-item menu__list-item--divider' : 'menu__list-item'"
            class="menu__list-item"
            :key="$index">
          <a href="#" :class="item.active ? 'menu__link' : 'menu__link menu__link--disabled'">- {{item.item}}</a>
          <div v-show="item.showPrice" :class="item.active ? 'menu__price' : 'menu__price menu__price--disabled'">{{ item.price }}€ </div>
        </li>
      </ul>
    </div>
    <div class="menu__bottom">
      <ul class="menu__list">
        <li v-for="(item, $index) in bottomMenuItems"
            :class="item.divider ? 'menu__list-item menu__list-item--divider' : 'menu__list-item'"
            class="menu__list-item"
            :key="$index">
          <a href="#" :class="item.active ? 'menu__link' : 'menu__link menu__link--disabled'">- {{item.item}}</a>
          <div v-show="item.showPrice" :class="item.active ? 'menu__price' : 'menu__price menu__price--disabled'">{{ item.price }}€ </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  props: {
    msg: String
  },
  data() {
    return {
      menuItems: [
        {
          item: 'von Mises envelopes',
          active: true,
          price: '29',
          showPrice: true
        },
        {
          item: 'Lame equations',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'uniform axial stress',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'bending stress',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'tosianal stress',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'trixial yield limit',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'capped-end condition',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'collapse from buckling',
          active: false,
          price: '13',
          showPrice: true,
          divider: true,
        },
        {
          item: 'botled test cells',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'botled test cells',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'stub acme test cells',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'piston load & direct pressure',
          active: false,
          price: '13',
          showPrice: true,
          divider: true
        },
        {
          item: 'stress strain curves',
          active: false,
          price: '13',
          showPrice: true
        },
        {
          item: 'material dderating factors',
          active: false,
          price: '13',
          showPrice: true,
          divider: true
        },
        {
          item: 'unit converter',
          active: false,
          price: '4',
          showPrice: true,
          divider: true
        },
      ],
      bottomMenuItems: [
        {
          item: 'tutorials',
          active: false,
          price: '13',
          showPrice: true,
          link: '#'
        },
        {
          item: 'share',
          active: true,
          price: '13',
          showPrice: true,
          link: '#'
        },
        {
          item: 'feedback',
          active: true,
          price: '13',
          showPrice: true,
          link: '#'
        }
      ]

    }
  }
}
</script>
