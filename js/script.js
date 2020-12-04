var root = new Vue({
 el: '#root',
 data: {
   message: '',
   img: 'https://encrypted-tbn0.gstatic.com/  images?q=tbn:ANd9GcSHAWS68hw2kThcTds5SkHh5rN_welak0ZYyw&usqp=CAU',
  },
  methods: {
     miaFunzione: function () {
     alert(this.message)
     }
   }
});
