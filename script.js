function getResult() {
  let education = document.querySelector("#education");
  let condition = document.querySelector("#condition");
  let dombra = document.querySelector("#dombra");
  let cook = document.querySelector("#cook");
  let character = document.querySelector("#character");
  let sing = document.querySelector("#sing");
  let sParents = document.querySelector("#s-parents");
  let sCharacter = document.querySelector("#s-character");
  let sNem = document.querySelector("#s-nem");
  let result = document.querySelector(".result");
  let aAge = document.getElementsByName("age");
  let age;

  for (const key in aAge) {
    if (aAge[key].checked) {
      age = +aAge[key].value;
    }
  }

  vDombra = dombra.checked ? +dombra.value : 0;
  vCook = cook.checked ? +cook.value : 0;
  vCharacter = character.checked ? +character.value : 0;
  vSing = sing.checked ? +sing.value : 0;
  vSParents = sParents.checked ? +sParents.value : 1;
  vSCharacter = sCharacter.checked ? +sCharacter.value : 1;
  vSNem = sNem.checked ? +sNem.value : 0;
  vAge = age !== undefined ? age : 1;

  let vResult =
    500 * +education.value * +condition.value * vSParents * vSCharacter * vAge +
    vDombra +
    vCook +
    vCharacter +
    vSing -
    vSNem;

  result.innerHTML = `Groom's cost is $${vResult}`;
}
