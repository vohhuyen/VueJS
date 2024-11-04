export default {
    install(app) {
      app.config.globalProperties.$greet = (name) => `Hello, ${name}!`;
    },
  };
  