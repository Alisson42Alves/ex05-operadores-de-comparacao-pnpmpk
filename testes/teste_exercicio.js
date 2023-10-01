function realizaOperacao() {
  try {
    if (verificacao1 !== false)
      throw new Error('verificacao1 não está com o valor correto');

    if (verificacao2 !== true)
      throw new Error('verificacao2 não está com o valor correto');

    if (verificacao3 !== false)
      throw new Error('verificacao3 não está com o valor correto');

    if (verificacao4 !== true)
      throw new Error('verificacao4 não está com o valor correto');

    return [
      'correct',
      '<h4 class="correct-heading">Exercício correto!</h4><p>As verificações estão corretas!</p>',
    ];
  } catch (e) {
    return [
      'incorrect',
      `<h4 class="incorrect-heading">Exercício incorreto!</h4><p>${e.message}</p>`,
    ];
  }
}

document.querySelector('.click-btn').addEventListener('click', () => {
  const [classResult, result] = realizaOperacao();
  const resultDisplay = document.querySelector('.result');

  resultDisplay.className = `result ${classResult}`;
  resultDisplay.innerHTML = result;
});
