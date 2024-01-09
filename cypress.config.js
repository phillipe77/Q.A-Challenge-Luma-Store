const { defineConfig } = require('cypress');
const axios = require('axios');

module.exports = defineConfig({
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        async fetchRandomUser() {
          try {
            const response = await axios.get('https://randomuser.me/api/?password=upper,lower,number,special,8-16');
            const user = response.data.results[0];
            return {
              firstName: user.name.first,
              lastName: user.name.last,
              email: user.email,
              password: user.login.password
            };
          } catch (error) {
            console.error('Error fetching random user', error);
            return null;
          }
        }
      });
    },
  },
  env: {
    registerPageUrl: 'https://magento.softwaretestingboard.com/customer/account/create/',
    menPageUrl: 'https://magento.softwaretestingboard.com/men.html',
    homePageUrl: 'https://magento.softwaretestingboard.com',
  }
});
