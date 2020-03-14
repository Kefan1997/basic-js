module.exports = function createDreamTeam(members) {
  if (!members || members.length === 0) return false;

  let arr = [];
  let strNameDreamTeam;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      let regexp = /[a-z]/i;
      arr.push(members[i].match(regexp));
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] == "string") {
        arr[i] = arr[i][j].toUpperCase();
      }
    }
  }

  arr.sort();
  strNameDreamTeam = arr.join("");
  return strNameDreamTeam;
};
