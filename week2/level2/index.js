Vue.createApp({
  data() {
    return {
      num1: null,
      num2: null,
      isActive: '',
      result: 0,
      localStorage:
        localStorage.getItem('result') !== null
          ? localStorage.getItem('result').split(',')
          : [],
    };
  },
  methods: {
    compute() {
      let s = '';
      switch (this.isActive) {
        case 'add':
          this.result = isNaN(this.num1 + this.num2)
            ? 'Math Error'
            : this.num1 + this.num2;
          s = `${this.num1} + ${this.num2} = ${this.result}`;
          break;
        case 'sub':
          this.result = isNaN(this.num1 - this.num2)
            ? 'Math Error'
            : this.num1 - this.num2;
          s = `${this.num1} - ${this.num2} = ${this.result}`;
          break;
        case 'multiply':
          this.result = isNaN(this.num1 * this.num2)
            ? 'Math Error'
            : this.num1 * this.num2;
          s = `${this.num1} * ${this.num2} = ${this.result}`;
          break;
        case 'divide':
          this.result = isNaN(this.num1 / this.num2)
            ? 'Math Error'
            : this.num1 / this.num2;
          s = `${this.num1} / ${this.num2} = ${this.result}`;
          break;
      }
      this.localStorage.push(s);
      if (this.localStorage.length > 10) this.localStorage.shift();
      localStorage.setItem('result', this.localStorage);
    },
  },
  mounted() {},
}).mount('#app');
