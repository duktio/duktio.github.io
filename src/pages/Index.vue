<template>
  <q-page>
    <div class="row q-gutter-lg">
      <div class="offset-1 col-4 flex flex-center" style="min-height: 500px;">
        <span class="text-h1">DUKT</span>
      </div>

      <div class="col-4  flex flex-center">
        <div>
          <span class="text-h6">No fuzz, just flows</span>
          <p class="q-mt-lg text-body1">
            DUKT is a data flow manager, where each flow is composed out of smaller tasks. Use it to create, operate and maintain your data flows with ease.
          </p>
          <q-btn unelevated stretch size="lg" color="black" class="q-mt-md" to="/me">Get Started</q-btn>
        </div>
      </div>
    </div>
    <q-separator></q-separator>

    <div class="row bg-grey-2" >
      <div class="offset-1 col-4 flex flex-center" style="min-height: 200px;">
        <span class="text-h6">Values</span>
      </div>
      <div class="col-4  flex flex-center q-my-xl">
        <div>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon name="center_focus_weak" size="lg"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>Focus</q-item-label>
                <q-item-label caption>We put our focus on doing one thing and doing it as well as we can.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="engineering" size="lg"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>From the trenches</q-item-label>
                <q-item-label caption>
                  We have been data engineers and scientists for a while and are aware of the pains the job brings.
                  That's one of the key motivators why we wanted to make dukt a reality.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <q-separator></q-separator>

    <div class="row">
      <div class="offset-1 col-4 flex flex-center" style="min-height: 200px;">
        <span class="text-h6">How It Works</span>
      </div>
      <div class="col-4  flex flex-center  q-my-xl">
          <img style="min-height: 300px;" src="../assets/HowItWorks.svg">
      </div>
    </div>
    <q-separator></q-separator>

    <div class="row bg-grey-2" style="min-height: 100px;" >
      <div class="col-auto flex flex-center full-width text-caption">
        <span>Created with passion by a team of wicked minded engineers</span>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  computed: {
  },
  methods: {}
}
</script>
