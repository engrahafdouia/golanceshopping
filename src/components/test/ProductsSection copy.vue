<template>
  <!-- <section>
    <v-container>
      <h2 class="text-h4 text-center py-12">Products</h2>



          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search products"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
          <div class="mx-4 hidden-sm-and-down"></div>

<v-menu transition="slide-y-reverse-transition">
  <template v-slot:activator="{ props }">
    <v-btn
   color="purpleme"
      class="ma-2"
      v-bind="props"
    >
    Filter By Category
    </v-btn>
  </template>
  <v-list>
    <v-list-item
      v-for="n in categories"
      :key="n"
      link
    >
      <v-list-item-title ></v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>

      <v-row class="pt-6">
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          md="4"

        >
          <ProductCard v-bind="product" />
        </v-col>
      </v-row>
    </v-container>
  </section> -->
  <div></div>
</template>

<script>
// import  {useProductStore}  from '@/store/Product'
// import { mapStores } from 'pinia';
import { useProductStore } from '@/store/Product'
import { mapStores } from 'pinia';

export default {

  data() {
    return {

          loaded: false,
      loading: false,
      Products: this.ProductsStore,

categories:['all','groceries','laptops','home-decoration','skincare']

    };
  },
  created() {
    this.loadProducts();
  },
  computed: {

       ...mapStores(useProductStore),

    },

  methods: {

    onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
      loadProducts() {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products => this.products = products);
    }
    // loadProducts() {
    //  fetch('https://dummyjson.com/products')
    //   .then(res => res.json())

    //   .then(products =>  this.products =products.data)
    // }

  }
}
</script>

<style>

</style>
