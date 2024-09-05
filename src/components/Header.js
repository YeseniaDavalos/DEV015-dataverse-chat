export const mainFilter = () => {
  const h1 = document.createElement('h1');
  h1.classList.add('heading');
  h1.id = 'filterSelect';
  h1.textContent = 'Our Animals';

  const main = document.createElement('main');

  const filterContainerDiv = document.createElement('div');
  filterContainerDiv.classList.add('filter-container');

  const h2 = document.createElement('h2');
  h2.classList.add('handle');
    
  const span = document.createElement('span');
  span.classList.add('label-style');
  span.textContent = 'I want to see:';

  h2.appendChild(span);

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  const filterSelectLabel = document.createElement('label');
  filterSelectLabel.setAttribute('for', 'filter-select');

  const filterSelect = document.createElement('select');
  filterSelect.id = 'filter-select';
  filterSelect.name = 'campo';

  const option1 = document.createElement('option');
  option1.value = '';
  option1.textContent = 'Select Pet';

  const option2 = document.createElement('option');
  option2.value = 'Dog';
  option2.textContent = 'Dog';

  const option3 = document.createElement('option');
  option3.value = 'Cat';
  option3.textContent = 'Cat';

  filterSelect.appendChild(option1);
  filterSelect.appendChild(option2);
  filterSelect.appendChild(option3);

  contentDiv.appendChild(filterSelectLabel);
  contentDiv.appendChild(filterSelect);

  const genderSelectLabel = document.createElement('label');
  genderSelectLabel.setAttribute('for', 'gender-select');

  const genderSelect = document.createElement('select');
  genderSelect.id = 'gender-select';
  genderSelect.name = 'campo1';
  genderSelect.setAttribute('data-testid', 'select-filter');

  const option4 = document.createElement('option');
  option4.value = '';
  option4.textContent = 'All gender';

  const option5 = document.createElement('option');
  option5.value = 'Female';
  option5.textContent = 'Female';

  const option6 = document.createElement('option');
  option6.value = 'Male';
  option6.textContent = 'Male';

  genderSelect.appendChild(option4);
  genderSelect.appendChild(option5);
  genderSelect.appendChild(option6);

  contentDiv.appendChild(genderSelectLabel);
  contentDiv.appendChild(genderSelect);

  const sizeSelectLabel = document.createElement('label');
  sizeSelectLabel.setAttribute('for', 'size-select');

  const sizeSelect = document.createElement('select');
  sizeSelect.id = 'size-select';
  sizeSelect.name = 'campo2';

  const option7 = document.createElement('option');
  option7.value = '';
  option7.textContent = 'Pet size';

  const option8 = document.createElement('option');
  option8.value = 'Small';
  option8.textContent = 'Small';

  const option9 = document.createElement('option');
  option9.value = 'Big';
  option9.textContent = 'Big';

  sizeSelect.appendChild(option7);
  sizeSelect.appendChild(option8);
  sizeSelect.appendChild(option9);

  contentDiv.appendChild(sizeSelectLabel);
  contentDiv.appendChild(sizeSelect);

  const sortSelectLabel = document.createElement('label');
  sortSelectLabel.setAttribute('for', 'ordenar');

  const sortSelect = document.createElement('select');
  sortSelect.setAttribute('data-testid', 'select-sort');
  sortSelect.name = 'sort';
  sortSelect.id = 'ordenar';

  const option10 = document.createElement('option');
  option10.value = '';
  option10.textContent = 'Order A-Z';

  const option11 = document.createElement('option');
  option11.value = 'asc';
  option11.textContent = 'A-Z';

  const option12 = document.createElement('option');
  option12.value = 'desc';
  option12.textContent = 'Z-A';

  sortSelect.appendChild(option10);
  sortSelect.appendChild(option11);
  sortSelect.appendChild(option12);

  contentDiv.appendChild(sortSelectLabel);
  contentDiv.appendChild(sortSelect);

  const buttonContainerDiv = document.createElement('div');
  buttonContainerDiv.id = 'button-container';

  const clearButton = document.createElement('button');
  clearButton.id = 'reset-button';
  clearButton.textContent = 'Clear';

  buttonContainerDiv.appendChild(clearButton);

  contentDiv.appendChild(buttonContainerDiv);

  filterContainerDiv.appendChild(h2);
  filterContainerDiv.appendChild(contentDiv);

  main.appendChild(filterContainerDiv);

  return [h1, main];
}
