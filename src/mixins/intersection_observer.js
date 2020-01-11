export default function ({targets, animation}) {
  return {
    data() {
      return {
        observer: null
      }
    },
    mounted () {
      console.log(targets, animation);

      const elements = [];
      
      targets.forEach(target => {
        this.$el.querySelectorAll(target).forEach(target_element => {
          elements.push(target_element);
        })
      });

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

          if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `${animation} 1s forwards ease-out`
          } else {
            entry.target.style.animation = 'none';
          }
        })
      });

      elements.forEach(element => {
        this.observer.observe(element);
      })

    }
  }
}