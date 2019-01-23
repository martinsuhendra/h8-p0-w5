function sorting(arrNumber) {
    arrNumber.sort();

    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    var count = 0;
    var maxNum = arrNumber[arrNumber.length - 1];

        if(arrNumber.length > 0){
            for( var i = arrNumber.length; i >= 0 ;i--){
                if(arrNumber[i] === maxNum){
                    count++
                }
            }
        }else{
            return ''
        }
        
    return 'angka paling besar adalah ' + arrNumber[arrNumber.length - 1] + ' dan jumlah kemunculan sebanyak ' + count + ' kali';
  }
  
  function mostFrequentlargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  sorting([2, 8, 4, 6, 8, 5, 8, 4]);

  console.log(mostFrequentlargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentlargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentlargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentlargestNumbers([]));
  //''