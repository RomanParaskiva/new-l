module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          title: "Wash the dishes",
          userId: 1,
          competed: true,
        },
        {
          id: 1,
          title: "Make the bed",
          userId: 1,
          competed: true,
        },
      ],
    });
  },
};
