import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js';

createApp({
  data() {
    return {
      people: [],
    };
  },
  methods: {
    changeTitle(e) {
      console.log(e.currentTarget.dataset); // 當前 li 的 dataset

      const lis = e.currentTarget.parentNode.childNodes; // 全部移除 active 樣式
      lis.forEach((li) => {
        li.classList.remove('active');
      });
      e.currentTarget.classList.add('active');

      let dataset = e.currentTarget.parentNode.firstChild.dataset; // name 的 dataset，拿來做 title & bigTitle 變更的比對
      this.people.forEach((person) => {
        if (person.fullName === dataset.value) {
          person.title = e.currentTarget.dataset.title;
          person.bigTitle = e.currentTarget.dataset.value;
        }
      });
    },
    changePeople() {
      fetch('https://randomuser.me/api/?results=8')
        .then((response) => response.json())
        .then((json) => (this.people = json.results))
        .then(() => {
          console.log(this.people);
          this.people.forEach((person) => {
            person.title = 'Hi, My name is';
            person.fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
            person.bigTitle = person.fullName;
          });
        });
    },
  },
  mounted() {
    fetch('https://randomuser.me/api/?results=8')
      .then((response) => response.json())
      .then((json) => (this.people = json.results))
      .then(() => {
        console.log(this.people);
        this.people.forEach((person) => {
          person.title = 'Hi, My name is';
          person.fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
          person.bigTitle = person.fullName;
        });
      });
  },
}).mount('#app');
