function evenNumber(array) {
    let a = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
       a.push(array[i]);
      }
    }
    return a;
  }

  