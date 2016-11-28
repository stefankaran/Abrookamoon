$("#w-form--contact").validate({
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    subject: {
      required: true
    },
    topic: {
      required: true
    },
    message: {
      required: true
    }
  },
  messages: {
    name: {
      required: "field1 is required"
    },
    email: {
      required: "field2 is required",
      email: "incorrect mail"
    },
    subject: {
      required: "field3 is required",
    },
    topic: {
      required: "field4 is required",
    },
    message: {
      required: "field5 is required",
    }
  }
});