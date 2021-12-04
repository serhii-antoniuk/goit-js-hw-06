const categoriesItemsCount = document.querySelectorAll('.item h2');
console.log(`Number of categories: ${categoriesItemsCount.length}`);

categoriesItemsCount.forEach(ulCategories =>
  console.log(`Category: ${ulCategories.textContent}
Elements: ${ulCategories.nextElementSibling.children.length}`),
);
