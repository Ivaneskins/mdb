
'use strict';

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelector('.promo__adv'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoItem = document.querySelectorAll('.promo__interactive-item'),
      movieList = document.querySelector('.promo__interactive-list');

advertising.remove();
promoGenre.textContent = 'Драма';
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// console.log(promoItem);
// movieDB.movies.forEach(item => {
//     const a = String(item).toLowerCase();
//     movieDB.movies[i - 1] = a;
// });

movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((element, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">#${i + 1})${element}
            <div class="delete"></div>
        </li>
    `;
});

// console.log(promoBg.innerHTML);