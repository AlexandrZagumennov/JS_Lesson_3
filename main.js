const imgData = {
	images: [
		{
			url: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
			title: "Харлей Девидсон",
		},
		{
			url: "https://images.unsplash.com/photo-1549915248-523e65cb5b04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
			title: "Харлей Девидсон на улице",
		},
		{
			url: "https://images.unsplash.com/photo-1490039655506-6be0f4c7b33c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
			title: "Мотоцикл в карьере",
		},
		{
			url: "https://images.unsplash.com/photo-1558980664-2506fca6bfc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
			title: "Харлей Девидсон в кэмпинге",
		},
		{
			url: "https://images.unsplash.com/photo-1574434997018-8047497f2587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=816&q=80",
			title: "Харлей Девидсон на фоне ЛЭП",
		},
		{
			url: "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
			title: "Харлей Девидсон на побережье",
		},
		{
			url: "https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
			title: "Харлей Девидсон и бородатый мужик",
		},
		{
			url: "https://images.unsplash.com/photo-1558980394-da1f85d3b540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			title: "Харлей Девидсон под мостом",
		}
	]
};

const body = document.querySelector('.body');
const div = document.createElement('div');
const ul = document.createElement('ul');

//Создание внутри body тега div с классом app
div.classList.add('app');
	// Стилизация 
	div.style.maxWidth = '1110px';
	div.style.backgroundColor = '#000';
	div.style.margin = '0 auto';
	div.style.paddingTop = '50px';
	div.style.paddingBottom = '50px';
	div.style.textAlign = 'center';

body.appendChild(div);

//Создание внутри div с классом app ul с классом list
ul.classList.add('list');
div.append(ul);

//Функция добавления на страницу списка <ul> с карточками <li>
const createList = imgData => {
	imgData.images.forEach(element => {
		let li = document.createElement('li');
		li.innerHTML = `
			<img src="${element.url}" width="300" height="300">
			<h2 class="list__item-title">${element.title}</h2>
		`;

		li.classList.add('list__item');

		ul.append(li);
	});
};

createList(imgData);

