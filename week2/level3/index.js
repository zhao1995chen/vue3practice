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
      style: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    };
  },
  methods: {
    compute() {
      let s = '';
      switch (this.isActive) {
        case 'add':
          this.result = this.num1 + this.num2;
          s = `${this.num1} + ${this.num2} = ${this.result}`;
          break;
        case 'sub':
          this.result = this.num1 - this.num2;
          s = `${this.num1} - ${this.num2} = ${this.result}`;
          break;
        case 'multiply':
          this.result = this.num1 * this.num2;
          s = `${this.num1} * ${this.num2} = ${this.result}`;
          break;
        case 'divide':
          this.result = this.num1 / this.num2;
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

// BUG Error for NaN
// BUG 先乘除後加減導致的運算錯誤
// TODO 大數運算
// TODO alert close and remove from localStorage
// TODO localStorage 正確的儲存型態
