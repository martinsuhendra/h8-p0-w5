function kaliTerusRekursif(angka) {
  var string = String(angka)

  if (string.length === 1) {
      return Number(angka)
  } else {
      var result = 1
      for (i = 0; i < string.length; i++) {
          result *= Number(string[i])
      }
  return kaliTerusRekursif(result)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
