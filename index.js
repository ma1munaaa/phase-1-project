document.getElementById('get-started-btn').addEventListener('click', () => {
    // Fetch book data from JSON file
    fetch('https://api.npoint.io/71750a0484adf2965d61')
      .then(response => response.json())
      .then(data => {
        document.getElementById('welcome-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
  
        const bookListContainer = document.getElementById('book-list');
  
        data.books.forEach(book => {
          const bookElement = createBookElement(book); 
          bookListContainer.appendChild(bookElement);  
        });
      });
  });
  
  function createBookElement(book) {
    const bookElement = document.createElement('div'); 
    bookElement.classList.add('book');
  
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.classList.add('book-image');
    bookElement.appendChild(bookImage);
  
    const bookInfoContainer = document.createElement('div');
    bookInfoContainer.classList.add('book-info-container');
    bookElement.appendChild(bookInfoContainer);
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.title;
    bookInfoContainer.appendChild(titleElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = book.description;
    bookInfoContainer.appendChild(descriptionElement);
  
    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${book.price}`;
    bookInfoContainer.appendChild(priceElement);
  
    const copiesElement = document.createElement('p');
    copiesElement.textContent = `Copies: ${book.copies}`;
    bookInfoContainer.appendChild(copiesElement);
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    bookInfoContainer.appendChild(buttonContainer);
  
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.classList.add('buy-button');
    buttonContainer.appendChild(buyButton);
    buyButton.addEventListener('click', () => {
      if (book.copies > 0) {
        book.copies--;
        copiesElement.textContent = `Copies: ${book.copies}`;
      }
    });
  
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Return';
    returnButton.classList.add('return-button');
    buttonContainer.appendChild(returnButton);
    returnButton.addEventListener('click', () => {
      book.copies++;
      copiesElement.textContent = `Copies: ${book.copies}`;
    });
  
    return bookElement;
  }
