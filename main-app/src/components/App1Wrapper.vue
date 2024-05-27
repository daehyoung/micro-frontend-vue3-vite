<template>
  <div>
    <h1>App1Wrapper</h1>
    <app1-element></app1-element>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isApp1ElementDefined: false,
    };
  },
  async mounted() {

    const url = '/app1/sub1/js/app.js';

    let script = document.querySelector('script[src="'+url+'"]')
    if(! script){
      script = document.createElement('script');
      script.src = url;

      script.type = 'module';
    }


    script.onload = async () => {
      console.log('Sub1 script loaded', script);

      try {
        // Wait for app1-element to be defined
        await customElements.whenDefined('app1-element');
        console.log('Sub1 element defined');
        this.isApp1ElementDefined = true;

        const sub1Element = document.querySelector('app1-element');
        console.log('Sub1 element:', window['subApp1']);
        console.log('Sub1 element:', sub1Element);
      } catch (error) {
        console.error('Error waiting for app1-element to be defined:', error);
      }
    };
    script.onerror = () => {
      console.error('Error loading Sub1 script');
    };
    document.head.appendChild(script);
  }
};
</script>