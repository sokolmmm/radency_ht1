class Validator {
  static inputValidate(target) {
    const result = {
      isValid: false,
      errorMessage: '',
    };

    if (!target.value) {
      result.errorMessage = `${target.name} is required`;
    } else if (target.value.length <= 5) {
      result.errorMessage = `${target.name} length must be more than 5 characters`;
    } else {
      result.isValid = true;
    }
    return result;
  }
}

export default Validator;
