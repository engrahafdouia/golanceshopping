<template>


  <!-- start about  -->
  <section  class="bg-grey-lighten-5 mt-1 w-100" id="about" >
<!-- <v-parallax src="../assets/images/about-bg.jpg" default max-height="600px" > -->



    <v-container>
    <v-row >
      <v-col  cols="12" >
      <h1 class="text-h5 font-weight-bold mb-4 ">
        {{ $t('message.Who I') }} ?

          </h1>
          <h3 class="text-h7 subheading font-weight-light">
            {{$t('message.bodyabout')}}

          </h3>

            <v-list-item >
             <h1 class="text-h6">{{ $t('message.Contact Me') }}
               <v-btn icon href="https://github.com/engrahafdouia/" target="_blank">
                 <v-icon>
                    mdi-github
                  </v-icon>
               </v-btn>
               <v-btn icon href="www.linkedin.com/in/rahaf-douair-
              5923001bb " target="_blank">
                     <v-icon>
                                     mdi-linkedin
                                   </v-icon>
                   </v-btn>
             </h1>
              </v-list-item>
              <v-list-item >
                 <h1 class="text-h6">{{ $t('message.Download') }}:
                  <a href="/assets/Rahaf Douair ().pdf" download>{{ $t('message.Download link') }}</a><br>

                 </h1>
              </v-list-item>

    </v-col>

    </v-row>
    </v-container>


<!-- </v-parallax> -->
  </section>


  <!-- end sabout section  -->

</template>

<script></script>

<style>
#about{
  /* background-image: url('../assets/arrival-bg.jpg'); */
  background-size: cover;
  max-height:400px;
}

</style>




