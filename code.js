const players = [
    {
        name: 'Гео́ргій Микола́йович Буща́н',
        status: 'Воротар',
        description: 'Український футболіст, воротар київського «Динамо» та збірної України. Вихованець футбольних шкіл одеського «Чорноморця» та «Динамо».' +
            'Виступав за юнацькій збірні України різного віку. 24 квітня 2013 року, у матчі проти однолітків з Греції, дебютував за юнацьку збірну України. Цю гру його команда програла 1:2.' +
            'Дебют у молодіжної збірної відбувся 13 листопада 2014 року, у грі проти Туреччини. Зустріч завершилася перемогою з рахунком 2:0.' +
            'Дебютував Бущан за національну збірну 7 жовтня 2020 у товариській грі проти французів',
        img: 'https://s.ill.in.ua/i/news/630x373/417/417228.png'

    },
    {
        name: 'Сергі́й Олекса́ндрович Сидорчу́к',
        status: 'Oпорний півзахисник',
        description: 'Український футболіст, опорний півзахисник збірної України, капітан київського «Динамо».' +
            '21 грудня 2012 року, разом із своїм партнером по команді Андрієм Цуріковим, підписав п\'ятирічний контракт з київським «Динамо»[1]. На відміну від нього Сергій влився до складу команди. У «Динамо» дебютував 10 березня 2013 року в виїзній грі 20-го туру чемпіонату України проти «Волині», яка закінчилася перемогою киян 0:2. 29 вересня 2015 року Сидорчук дебютував у Лізі чемпіонів УЄФА у другому матчі групового етапу проти ізраїльського клубу «Маккабі» (Тель-Авів) удома, де «Динамо» виграло 2:0.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Serhiy_Sydorchuk2018.jpg'

    },
    {
        name: 'Віта́лій Казими́рович Буя́льський',
        status: 'Півзахисник ',
        description: 'Український футболіст, півзахисник збірної України та київського «Динамо».' +
            'У київське «Динамо» запросили у віці 16 років. Пройшовши період адаптації і засвоївши стиль динамівського футболу, 8 липня 2010 року дебютував у молодіжній першості у матчі з «Оболонню». Віталій вийшов у другому таймі за переможного рахунку, але в підсумку «Динамо» поступилося 1:2. Незважаючи на це, тренер повідомив, що дебют футболіста виявився доволі успішним.\n',
        img: 'https://33kanal.com/wp-content/uploads/2020/09/118603813_1002627806834057_5467972383155868584_n.jpg'
    },
    // {
    //     name: '',
    //     status: '',
    //     description: '',
    //     img: ''
    //
    // },
];

const createPlayerDiv = (name, status, description, imgRef) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('player');

    const imgS = document.createElement('div');
    imgS.classList.add('imgS');

    const img = document.createElement('img');
    img.src = imgRef;
    img.alt = name;

    imgS.appendChild(img)

    const bio = document.createElement('div');
    bio.classList.add('bio');

    const nameDiv = document.createElement('h3');
    nameDiv.classList.add('name');
    nameDiv.innerText = name;

    const statusDiv = document.createElement('div');
    statusDiv.classList.add('status');
    statusDiv.innerText = status;

    const desc = document.createElement('div');
    desc.classList.add('desc')
    desc.innerText = description;

    bio.appendChild(nameDiv);
    bio.appendChild(statusDiv);
    bio.appendChild(desc);

    wrapper.appendChild(imgS);
    wrapper.appendChild(bio);
    return wrapper;
}

const playersDiv = document.getElementById('p');

players.forEach(player => {
    playersDiv.appendChild(createPlayerDiv(player.name, player.status, player.description, player.img))
})