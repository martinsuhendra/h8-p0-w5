function kaliTerusRekursif(angka) {
    var stringNum = angka.toString();
    if (angka < 10) {
      return angka;
    } else {
      function kali(stringNum) {
        if (!stringNum.length) {
          return 1;
        } else {
          return stringNum[0] * kali(stringNum.slice(1));
        }
      }
      return kaliTerusRekursif(kali(stringNum));
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
