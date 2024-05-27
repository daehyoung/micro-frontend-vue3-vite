<template>
  <div>
    <h1>App2Wrapper</h1>
    <app2-element></app2-element>
  </div>
</template>

<script>
export default {
  async mounted() {

    const url = '/app2/sub2/js/app.js';

    let script = document.querySelector('script[src="'+url+'"]')
    if(! script){
      script = document.createElement('script');
      script.src = url;
      script.type = 'module';
    }


    script.onload = async () => {
      console.log('Sub1 script loaded', script);

      try {
        // Wait for app2-element to be defined
        await customElements.whenDefined('app2-element');
        console.log('Sub1 element defined');

        const sub2Element = document.querySelector('app2-element');
        console.log('Sub1 element:', sub2Element);
      } catch (error) {
        console.error('Error waiting for app2-element to be defined:', error);
      }
    };
    script.onerror = () => {
      console.error('Error loading Sub1 script');
    };
    document.head.appendChild(script);
  }
};
</script>