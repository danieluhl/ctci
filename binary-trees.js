const balanced = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
  right: {
    value: 10,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

const unbalanced = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 6,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 10,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

module.exports = { balanced, unbalanced };
