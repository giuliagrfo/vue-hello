
const {
    createApp
} = Vue

createApp ({
    data() {
        return {
          title: 'Portfolio',
          image_left: ('https://i.pinimg.com/originals/92/bc/22/92bc2286a364beaa0fa91d4d0898aa44.png'),
          image_right: ('https://i.pinimg.com/originals/d0/9a/86/d09a864ae33c292b0ddf6d6d74afdc63.jpg'),
          image_down: ('https://i.shgcdn.com/b1a48b1e-d090-4a66-b200-d09d1ad7d0e4/-/format/auto/-/preview/3000x3000/-/quality/lighter/'),
        }
    }
   
}).mount('#app')



