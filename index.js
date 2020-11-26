function superbowlWin(arr) {
  let winner;

  arr.find(function(record){
    if (record.result === "W") {
      winner = record.year
    }
  })
  console.log(winner)
  return winner
};