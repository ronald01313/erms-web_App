// customErrors.ts

class SomeSpecificError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'SomeSpecificError';
    }
  }
  
  class AnotherSpecificError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'AnotherSpecificError';
    }
  }
  
  export { SomeSpecificError, AnotherSpecificError };
  