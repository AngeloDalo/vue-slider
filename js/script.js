const app = new Vue(
    {
      el: '#app',
      data: {
        counter: 0,
        image: [
            "image1.jpg",
            "image2.jpg",
            "image3.jpg",
            "image4.jpg"
        ]
      },

      methods: {
        miaFunzione: function() {
            this.counter += 1;
        }
      }
    }
  );