// script.js

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const genreFilter = document.getElementById("genreFilter");
  const bookList = document.getElementById("bookList");

  function renderBooks(filterText = "", filterGenre = "all") {
    bookList.innerHTML = "";
    const filtered = books.filter(book => {
      const matchText = book.title.toLowerCase().includes(filterText.toLowerCase());
      const matchGenre = filterGenre === "all" || book.genre === filterGenre;
      return matchText && matchGenre;
    });

    if (filtered.length === 0) {
      bookList.innerHTML = "<p>Tidak ada buku ditemukan.</p>";
    } else {
      filtered.forEach(book => {
        const div = document.createElement("div");
        div.className = "book-card";
        div.textContent = book.title;
        bookList.appendChild(div);
      });
    }
  }

  if (searchInput && genreFilter) {
    searchInput.addEventListener("input", () => {
      renderBooks(searchInput.value, genreFilter.value);
    });

    genreFilter.addEventListener("change", () => {
      renderBooks(searchInput.value, genreFilter.value);
    });

    renderBooks();
  }
});
