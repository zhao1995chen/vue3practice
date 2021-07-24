const storage = {
  set(data) {
    localStorage.setItem('result', JSON.stringify({data}));
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
      const result = {
        id: new Date().getTime(),
        value: s,
      };
      this.localStorage.push(result);
      if (this.localStorage.length > 10) this.localStorage.shift();
      storage.set(this.localStorage);
    },
    delete(id) {
      this.localStorage.splice(
        this.localStorage.find((item) => item.id === id),
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
