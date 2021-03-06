const storage = {
  set(data) {
    localStorage.setItem('result', JSON.stringify(data));
  },
  get() {
    return localStorage.getItem('result') !== undefined &&
      localStorage.getItem('result') !== null
      ? JSON.parse(localStorage.getItem('result')).data
      : [];
  },
};

Vue.createApp({
  data() {
    return {
      num1: null,
      num2: null,
      isActive: '',
      result: 0,
      localStorage: storage.get(),
      style: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    };
  },
  methods: {
    compute() {
      const result = {
        id: new Date().getTime(),
        value: this.getResult(),
      };
      this.localStorage.unshift(result);
      if (this.localStorage.length > 10) this.localStorage.pop();
      storage.set(this.localStorage);
    },
    getResult() {
      console.log(this.num1, this.num2);
      if (
        this.num1 === null ||
        this.num1 === '' ||
        this.num2 === null ||
        this.num1 === ''
      )
        return '請輸入數字';
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
        default:
          s = '沒有選擇運算模式';
      }
      return s;
    },
    remove(id) {
      console.log(this.localStorage.find((item) => item.id === id));
      this.localStorage.splice(
        this.localStorage.indexOf(
          this.localStorage.find((item) => item.id === id)
        ),
        1
      );
      console.log(this.localStorage);
      storage.set(this.localStorage);
    },
    clear() {
      this.localStorage = [];
      storage.set(this.localStorage);
    },
  },
  mounted() {
    console.log(this.localStorage);
  },
}).mount('#app');
