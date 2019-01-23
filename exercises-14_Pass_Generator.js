var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';



function changeVocals (str) {
    var result = '';
    var vocals = 'aiueoAIUEO'

    for (var i = 0; i < str.length; i++) {
      var isVocal = false;
      for (var j = 0; j < vocals.length; j++) {
        if (str[i] === vocals[j]) {
          isVocal = true;
        }
      }
      if (isVocal) {
        for (var k = 0; k < alfabet.length; k++) {
          if (str[i] === alfabet[k]) {
            result += alfabet[k+1];
          }
        }
      } else {
        result += str[i];
      }
    }
    console.log(result);
    return result;
  }

  
  function reverseWord (str) {
    var reverse = ''

        for( var i = str.length - 1; i >= 0;i-- ){
            reverse += str[i]
        }
    return reverse;
  }
    
  
  function setLowerUpperCase (str) {  
    var result = '';

    for(var i = 0; i < str.length;i++){
        if(str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase();
        }else{
            result += str[i].toLowerCase();
        }
    }
    return result;
  }
  
  function removeSpaces (str) {
    var result = '';
    for( var i = 0; i < str.length;i++){
        if(str[i] !== ' '){
            result += str[i]
        }
    }

    return result;
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }else{
        var listChange = changeVocals(name);
        var listReverse = reverseWord(listChange);
        var listLowUp = setLowerUpperCase(listReverse);
        var finalResult = removeSpaces(listLowUp);
    
        return finalResult;
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'