const ExampleConfig = {
  // Credentials
    BASE_URL: process.env.BASEURL,

    // Selectors
    selectors: {
        inputEmail: 'input[name="email"]',
        inputPassword: 'input[name="password"]',
    },

    item: {
        name: "example item",
        description: "this is an example",
    }
};

export default ExampleConfig;