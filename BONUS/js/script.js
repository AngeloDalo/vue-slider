const app = new Vue(
    {
      el: '#app',
      data: {
        counter: 0,
        imgs: [
            "image1.jpg",
            "image2.jpg",
            "image3.jpg",
            "image4.jpg"
        ]
      },

      methods: {
        nextPhoto: function() {
            this.counter += 1;
            if (this.counter == this.imgs.length) {
                this.counter = 0;
            }
        },
        prevPhoto: function() {
            this.counter -= 1;
            if (this.counter < 0) {
                this.counter = this.imgs.length-1;
            }
        },
        cirleClick: function(position) {
            console.log(position);
            this.counter = position;
        }
      }
    }
  );