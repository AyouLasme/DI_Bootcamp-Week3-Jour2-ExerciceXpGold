
// selection de la div qui comporte l'id root
const root = document.getElementById('root');

// creation d'un tableau vide
const shoppingList = [];

// creation d'un formulaire
const form = document.createElement('form');

// Creation d'un input
const input = document.createElement('input');
input.type = 'text';

// Creation du boutton ADD Item
const addItemButton = document.createElement('button');
addItemButton.textContent = 'Add Item';

// Ajout de l'input et du boutton dans le formulaire
form.appendChild(input);
form.appendChild(addItemButton);

// Ajout du formulaire dans la div qui a pour id root
root.appendChild(form);

// Ajout d'un evenement sur le formulaire
form.addEventListener('submit', event => {
  // empecher la soumission du formulaire
  event.preventDefault();

  // obtenir la valeur de l'input
  const item = input.value;

  // ajouter le item dans la shopping list
  shoppingList.push(item);

  // reinitialiser le input
  input.value = '';

  // Afficher le shopping list dans la console
  console.log(shoppingList);
});


// creation du boutton clear pour la reinitialisation
const clearAllButton = document.createElement('button');
clearAllButton.textContent = 'Clear All';

// Ajout du boutton Clear All dans le formulaire
form.appendChild(clearAllButton);

// Ajout d'un evenement sur le boutton Clear All 
clearAllButton.addEventListener('click', () => {
  // reinitialiser le shopping list
  shoppingList.length = 0;

  // afficher le shopping list dans la console
  console.log(shoppingList);
});