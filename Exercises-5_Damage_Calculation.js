function attack (damage) {
    var result = damage - 2;
    return result;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var minDamage = attack(damagePerAttack);
    var result = numberOfAttacks * minDamage;

    return result
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90