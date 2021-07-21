Vue.createApp({
  data() {
    return {
      fetchConfig: {
        amount: 8,
        gender: 'male',
        nation: 'US',
      },
      nations: [
        'AU',
        'BR',
        'CA',
        'CH',
        'DE',
        'DK',
        'ES',
        'FI',
        'FR',
        'GB',
        'IE',
        'IR',
        'NO',
        'NL',
        'NZ',
        'TR',
        'US',
      ],
      gender: ['male', 'female'],
      form: {
        nations: [],
        gender: [],
        amount: 0,
      },
      people: [],
    };
  },
  methods: {
    fetchPeople() {
      const url = `https://randomuser.me/api/?results=${this.fetchConfig.amount}&nat=${this.fetchConfig.nation}&gender=${this.fetchConfig.gender}`;
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((json) => (this.people = json.results))
        .then(() => {
          console.log(this.people);
          this.people.forEach((person) => {
            person.fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
          });
        });
    },
    setConfig() {
      this.fetchConfig.amount = this.form.amount;
      this.fetchConfig.nation = this.form.nations.join(',');
      this.fetchConfig.gender = this.form.gender.join(',');
    },
    submit() {
      this.setConfig();
      if (this.fetchConfig.amount === 0) this.people = [];
      else this.fetchPeople();
    },
  },
  mounted() {
    this.fetchPeople();
  },
}).mount('#app');
