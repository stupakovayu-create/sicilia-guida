export const tabs = [
  {
    id: 1,
    title: "Палермо: Общая",
    icon: "🏛",
    content: `
      <h2>Палермо: Общая информация</h2>
      <div class="warning-box">
        <strong>⏰ Важное правило Палермо: Сиеста здесь священна.</strong><br>
        С <strong>13:30 до 16:30</strong> большинство церквей и локальных лавок закрыты.
        Музеи обычно работают без перерыва, но рестораны после 14:30 «засыпают» до вечера.
      </div>

      <h3>❌ Сюда ходить не нужно совсем</h3>
      <p>Эти районы находятся далеко от центра. В них нет достопримечательностей, зато есть проблемы с безработицей и наркоторговлей.</p>
      <div class="danger-box">
        <h4>• ZEN (Zona Espansione Nord):</h4>
        <p>Самый печально известный район. Комплекс бетонных многоэтажек на севере города. Даже полиция заезжает сюда с осторожностью. Туристу там делать абсолютно нечего, архитектурной ценности район не представляет.</p>
      </div>
      <div class="danger-box">
        <h4>• Brancaccio (Бранкаччо):</h4>
        <p>Промышленно-жилой район на востоке. Исторически считался «вотчиной» мафиозных кланов. Сейчас здесь просто неуютно, грязно и много подозрительных личностей.</p>
      </div>
      <div class="danger-box">
        <h4>• Villaggio Santa Rosalia:</h4>
        <p>Находится за университетом. Типичный бедный спальный район с повышенным уровнем уличной преступности.</p>
      </div>

      <h3>⚠ Районы в центре, где нужно быть начеку</h3>
      <h4>• Район Центрального вокзала (Stazione Centrale):</h4>
      <p>Площадь перед вокзалом и прилегающие улицы (особенно Via Lincoln и начало Via Roma) вечером превращаются в место сбора маргиналов. Ночью здесь лучше не гулять в одиночку.</p>
      <h4>• Vucciria ночью:</h4>
      <p>Днем это колоритный рынок, вечером – центр тусовок. Но если уйти вглубь узких переулков в сторону от толпы, можно наткнуться на очень темные и «глухие» места, где легко встретить карманников.</p>
      <h4>• Albergheria:</h4>
      <p>Район вокруг рынка Балларо. Самый старый, колоритный и бедный. Днем здесь безопасно (если следить за сумкой), но ночью многие переулки выглядят как декорации к фильму ужасов: заброшенные дома, отсутствие фонарей и странные компании.</p>
    `
  },
  {
    id: 2,
    title: "Туристический",
    icon: "🗺",
    content: `
      <h2>Палермо туристический</h2>

      <h3>1. <a href="https://maps.app.goo.gl/8BM4o2TbVTNeQn7s7" target="_blank" rel="noreferrer">Палермский собор (Cattedrale di Palermo)</a></h3>
      <p><strong>Зачем идти:</strong> Архитектурная «луковица», слои которой отражают смену эпох. Собор стоит на месте раннехристианской базилики, превращенной арабами в Великую мечеть, а затем – норманнами в крепость-собор.</p>
      <p><strong>На что смотреть:</strong> На южном фасаде найдите колонну с высеченным на ней текстом из Корана. Внутри изучите императорские саркофаги из редчайшего порфира, где покоится Фридрих II. Проложена латунная линия с зодиакальными созвездиями – это солнечные часы XVIII века (луч из купола точно указывает знак). Подъем на крышу обязателен: вы увидите, как купола соседних церквей и террасы складываются в силуэт «африканской» Италии.</p>
      <p><small>⏱ Время работы: Пн–Сб 09:30–13:25, Вс 09:00–12:25.</small></p>

      <h3>2. <a href="https://maps.app.goo.gl/3kqySMGCUsgW15AV6" target="_blank" rel="noreferrer"> Норманнский дворец</a> и <a href="https://maps.app.goo.gl/EuSgekEviq3a7Xv2A" target="_blank" rel="noreferrer"> Палатинская капелла</a></h3>
      <p><strong>Зачем идти:</strong> Высшая точка «сицилийского синкретизма». Личная церковь норманнских королей, созданная мастерами трех цивилизаций одновременно.</p>
      <p><strong>На что смотреть:</strong> Потолок выполнен в арабской технике «мукарны» (соты) – единственный случай в мире для христианского храма. Мозаики византийских греков на золотом фоне при свете свечей кажутся «живыми». Мозаика Христа Пантократора следит за вами из любой точки зала. Пол – сложнейшая инкрустация «косматеско» из мрамора, порфира и гранита.</p>
      <p><small>⏱ Время работы: Пн–Сб 08:30–16:30, Вс 08:30–13:00. По вт, ср, чт доступ в Зал Геркулеса может быть закрыт.</small></p>

      <h3>3. <a href="https://maps.app.goo.gl/rUEBbncFXZUX6KB38" target="_blank" rel="noreferrer"> Площадь Кватро Канти</a> и <a href="https://maps.app.goo.gl/kR3aj84Z9VzRur6r9" target="_blank" rel="noreferrer"> Фонтан Претория</a></h3>
      <p><strong>Зачем идти:</strong> Эпицентр испанского барочного «спектакля». Кватро Канти – театральная декорация, где каждый фасад вогнут, чтобы расширить пространство перекрестка.</p>
      <p><strong>На что смотреть:</strong> Иерархия снизу вверх: человеческий мир (времена года), мир власти (испанские короли) и мир божественный (святые девы). Сразу за углом находится Фонтан Претория («Фонтан стыда») с 48 обнаженными фигурами. В XVI веке его установили прямо перед окнами женского монастыря, и монахини в знак протеста отбивали статуям гениталии.</p>
      <p><small>⏱ Время работы: Круглосуточно.</small></p>

      <h3>4. <a href="https://maps.app.goo.gl/WTQJQ8mXn3Q5kJWKA" target="_blank" rel="noreferrer"> Театр Массимо (Teatro Massimo)</a></h3>
      <p><strong>Зачем идти:</strong> Памятник амбициям Палермо конца XIX века. Третий по величине оперный театр в Европе.</p>
      <p><strong>На что смотреть:</strong> Надпись над порталом: «Искусство обновляет народы и открывает им жизнь». Внутри изучите «Зал шепота» (Sala degli Specchi) — благодаря форме потолка вы услышите шепот человека с противоположного конца комнаты. Внешняя лестница — место, где Аль Пачино издал безмолвный крик в финале «Крестного отца».</p>
      <p><small>⏱ Время работы: 09:30–17:30.</small></p>

      <h3>5. <a href="https://maps.app.goo.gl/PXCGmDiqSxmGNFTe7" target="_blank" rel="noreferrer"> Катакомбы Капуцинов (Catacombe dei Cappuccini)</a></h3>
      <p><strong>Зачем идти:</strong> Уникальная антропологическая коллекция, сицилийское «Memento Mori». Тела разделены по сословиям: врачи, юристы, офицеры в мундирах.</p>
      <p><strong>На что смотреть:</strong> Стеклянный гроб Розалии Ломбардо, «самой красивой мумии мира». Благодаря секретному составу бальзамировщика Салафии, девочка выглядит спящей уже более 100 лет.</p>
      <p><small>⏱ Время работы: 09:00–12:30, 15:00–17:30.</small></p>

      <h3>6. <a href="https://maps.app.goo.gl/8MfZhtjdmE2d9kbz7" target="_blank" rel="noreferrer"> Квартал Кальса</a> и <a href="https://maps.app.goo.gl/8XtLJeBoB8uhoLoP8" target="_blank" rel="noreferrer"> Lo Spasimo</a></h3>
      <p><strong>Зачем идти:</strong> Увидеть, как руины становятся искусством.</p>
      <p><strong>На что смотреть:</strong> Церковь Санта-Мария-делло-Спазимо, где вместо сводов — открытое небо, а внутри растет огромное дерево. В квартале ищите огромный мурал с изображением судей Фальконе и Борселлино — борцов с мафией.</p>
      <p><small>⏱ Время работы: Круглосуточно.</small></p>
    `
  },
  {
    id: 3,
    title: "Инстаграмный",
    icon: "📸",
    content: `
      <h2>📸 Палермо инстаграмный</h2>

      <h3>• <a href="https://maps.app.goo.gl/sYSLrG2FWdQkTmXr6" target="_blank" rel="noreferrer"> Крыши Кафедрального собора (Tetti della Cattedrale)</a></h3>
      <p>Главная открытка города. Панорама куполов на фоне гор. Вы идете прямо по карнизу над главным нефом.</p>
      <p><strong>Как попасть:</strong> На кассе собора купите билет именно на «Tetti» (около 7€). Касса закрывается за 30–45 минут до конца работы.</p>
      <p class="tip-box">💡 <strong>Совет:</strong> Идите за час до заката («золотой час»), когда свет мягко ложится на камни и город окрашивается в розовый.</p>
      <p><small>⏱ Время работы: Пн–Сб 09:30–13:25, Вс 09:00–12:25.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/6r7Bf5NoqXYn97no7" target="_blank" rel="noreferrer"> Парадная лестница театра Массимо (Teatro Massimo)</a></h3>
      <p>Ракурс снизу вверх сидя на огромных ступенях между двумя бронзовыми львами подчеркивает величие колонн.</p>
      <p><strong>Как попасть:</strong> Piazza Verdi. Билет не нужен, лестница доступна всегда. Чтобы в кадре не было толп, приходите к 8–9 часам утра.</p>
      <p><small>⏱ Время работы: Круглосуточно.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/doeACTQGDTnfm4Rm8" target="_blank" rel="noreferrer"> Площадь Претория (Piazza Pretoria)</a></h3>
      <p><strong>Идеальный кадр:</strong> Встаньте на углу Via Maqueda и Piazza Pretoria. Фотографируйте через кованую решетку, чтобы в одном кадре были и статуи «Фонтана стыда», и купол церкви Сан-Джузеппе-деи-Театини.</p>
      <p><small>⏱ Время работы: Круглосуточно.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/PoHAwppjYq6wdcRQ8" target="_blank" rel="noreferrer"> Кваттро Канти (Quattro Canti)</a></h3>
      <p>Вертикальное фото одного из вогнутых фасадов. Если есть широкоугольный объектив, встаньте в самый центр перекрестка и снимите «восьмиугольник» неба. Осторожно: следите за повозками с лошадьми!</p>
      <p><small>⏱ Время работы: Круглосуточно.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/WHNddnJC1SYb251r5" target="_blank" rel="noreferrer"> Ботанический сад (Orto Botanico)</a></h3>
      <p>Огромный фикус (Ficus Macrophylla) с воздушными корнями выглядит как сказочный тропический лес. Также красив центральный корпус Gymnasium.</p>
      <p><strong>Как попасть:</strong> Via Lincoln, 2. Вход платный (около 6€).</p>
      <p><small>⏱ Время работы: Пн–Сб 09:00–20:00, Вс 10:00–20:00.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/bzWPHBXeca6pXAcdA" target="_blank" rel="noreferrer"> Секретный вид из бара: Seven Restaurant</a></h3>
      <p>Для фото с бокалом и видом на миллион. Вы сидите на террасе, а прямо перед вами на уровне глаз – купола церквей Марторана и Сан-Катальдо.</p>
      <p><strong>Как попасть:</strong> Via Roma, 111 (Hotel Ambasciatori). Поднимайтесь на лифте на последний этаж. Столик на аперитив лучше бронировать заранее.</p>
      <p><small>⏱ Время работы: Пн–ВС 18:00–23:30.</small></p>
    `
  },
  {
    id: 4,
    title: "Гастрономия",
    icon: "🍕",
    content: `
      <h2>🍝 Гастрономия Палермо</h2>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/bPFXtyE6ovBgapjJ7" target="_blank" rel="noreferrer">I Segreti del Chiostro</a></h4>
        <p>Кондитерская, спрятанная в стенах действующего монастыря. Здесь готовят сладости по старинным рецептам монахинь. Самый «духовный» способ съесть канноло или кассату.</p>
        <a href="https://isegretidelchiostro.com" target="_blank" rel="noreferrer">сайт</a>
        <p><small>⏱ Время работы: 10:00 – 17:30.</small></p>
      </div>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/LXbkovVSoJXQPH31A" target="_blank" rel="noreferrer">I Cuochini</a></h4>
        <p>Крошечная историческая лавка во внутреннем дворике (работает с 1826 года). Идите ради мини-закусок (pezzi di rosticceria): крошечных аранчини и панцеротти.</p>
        <a href="https://icuochini.com" target="_blank" rel="noreferrer">сайт</a>
        <p><small>⏱ Время работы: 08:30 – 14:30.</small></p>
      </div>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/pzAR83wAFveScfAZ9" target="_blank" rel="noreferrer">Bisso Bistrot</a></h4>
        <p>В здании старинного книжного магазина прямо у Кватро Канти. Высокие потолки, книжные полки и дух интеллигенции. Обязательно попробуйте классическую Pasta alla Norma.</p>
        <a href="https://www.facebook.com/bissobistrot/" target="_blank" rel="noreferrer">сайт</a>
        <p><small>⏱ Время работы: 12:30 – 15:30, 19:00 – 23:00.</small></p>
      </div>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/D3S3Kb4Duv2SJpDJA" target="_blank" rel="noreferrer">Rocky Basile (рынок Балларо)</a></h4>
        <p>Настоящая легенда уличной еды. Рокки мастерски готовит Pane con la Milza (булочка с селезенкой и лимоном) на глазах у публики.</p>
        <p><small>⏱ Время работы: 10:00 – 15:00.</small></p>
      </div>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/e96aQEfcNcwnq5F58" target="_blank" rel="noreferrer">Enoteca Picone</a></h4>
        <p>Историческая энотека, открытая в 1946 году. Тысячи бутылок вина. Лучшее место для серьезной дегустации вин Этны в сопровождении локальных сыров.</p>
        <a href="https://enotecapicone.com" target="_blank" rel="noreferrer">сайт</a>
        <p><small>⏱ Время работы: 09:30 – 13:30, 17:00 – 23:30 (Вс – выходной).</small></p>
      </div>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/GWithdCjrG7hxJjJ9" target="_blank" rel="noreferrer">Bar Touring</a></h4>
        <p>Заведение прославилось своими Arancina Bomba – огромными рисовыми шарами невероятных размеров. Отличный способ быстро вернуться к жизни.</p>
        <a href="https://bartouring.it" target="_blank" rel="noreferrer">сайт</a>
        <p><small>⏱ Время работы: 04:00 – 12:00.</small></p>
      </div>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/nXWBXs74ZkUMK1nBA" target="_blank" rel="noreferrer">Gagini Restaurant</a></h4>
        <p>Изысканный ресторан высокой кухни в оригинальной мастерской скульптора Антонио Гаджини (XVI век). Подают красную креветку из Мадзара-дель-Валло и мясо черного поросенка.</p>
        <a href="https://gaginirestaurant.com" target="_blank" rel="noreferrer">сайт</a>
        <p><small>⏱ Время работы: 19:30 – 22:30 (Пн – выходной).</small></p>
      </div>

      <div class="geo-item">
        <h4>• <a href="https://maps.app.goo.gl/bzWPHBXeca6pXAcdA" target="_blank" rel="noreferrer">Seven Restaurant</a></h4>
        <p>Ресторан на крыше отеля Ambasciatori. Обязательна бронь на вечер ради террасы с видом на купола Марторана и Сан-Катальдо.</p>
        <a href="https://sevenrestaurant.it" target="_blank" rel="noreferrer">сайт</a>
        <p><small>⏱ Время работы: 18:00 – 23:30 (Пн – выходной).</small></p>
      </div>
    `
  },
  {
    id: 5,
    title: "Чек-лист еды",
    icon: "✅",
    content: "<CheckList />"
  },
  {
    id: 6,
    title: "Рынки",
    icon: "🐟",
    content: `
      <h2>🐟 Палермские рынки</h2>
      <div class="danger-box" style="background: #fff3cd; border-left-color: #ffc107; color: #856404;">
        ⚠️ <strong>Важно: по воскресеньям рынки не работают!</strong>
      </div>

      <h3>1. <a href="https://maps.app.goo.gl/za3Z1XabLB758uuBA" target="_blank" rel="noreferrer"> Ballarò (Балларо) – Самый аутентичный и дешевый</a></h3>
      <p>Старейший шумный рынок. Сюда идут за продуктами «от фермера» и уличной едой. Сохранилась планировка арабского города с его тупиками.</p>
      <ul>
        <li><strong>Свежие овощи:</strong> Низкие цены на лимоны, помидоры черри из Пакино и гигантские баклажаны.</li>
        <li><strong>Стритфуд:</strong> Лучшее место для Pane con la Milza (булочка с селезенкой) или Panelle (нут во фритюре).</li>
        <li><strong>Специи:</strong> Огромный выбор орегано, чили и смесей для пасты.</li>
      </ul>
      <p><small>💡 Совет: Идите в первой половине дня (до 13:00). Это рынок «для своих».</small></p>

      <h3>2. <a href="https://maps.app.goo.gl/37d3kKKyKgNyArus9" target="_blank" rel="noreferrer"> Il Capo (Капо) – Самый красивый и «гурманский»</a></h3>
      <p>Тянется вдоль узких улочек за Кафедральным собором. Чище и эстетичнее, чем Балларо.</p>
      <ul>
        <li><strong>Вяленые томаты и оливки:</strong> Лучший выбор закусок, которые можно упаковать в вакуум и увезти домой.</li>
        <li><strong>Рыба:</strong> Если живете в апартаментах с кухней — вам сюда за креветками и рыбой-меч (pesce spada).</li>
        <li><strong>Сыры:</strong> Покупайте местный Пекорино Сичилиано с перцем или свежую рикотту.</li>
      </ul>

      <h3>3. <a href="https://maps.app.goo.gl/i28GWHCYMcMrDU2s9" target="_blank" rel="noreferrer"> Vucciria (Вуччирия) – Для вечеринок и аперитива</a></h3>
      <p>Днем рынок пустует, но после 20:00 оживает на площади Piazza Caracciolo как главная точка для уличного гриля.</p>
      <ul>
        <li><strong>Стиггьола (Stigghiola):</strong> Жареные на углях бараньи кишки с зеленью. Квинтэссенция Вуччирии.</li>
        <li><strong>Осьминог «Bollito»:</strong> Его варят в чанах прямо на улице и подают с лимоном.</li>
      </ul>

      <div class="warning-box">
        <h4> How to bargain: 5 золотых правил рынков Сицилии</h4>
        1. <strong>«Abbiabbiare» (Зазывание):</strong> Продавцы поют и кричат (abbanniata). Не пугайтесь, улыбнитесь в ответ.<br>
        2. <strong>Эффект «Своего»:</strong> Покупая несколько позиций у одного продавца, спросите: <em>«Mi faccia lo sconто?»</em> (Сделаете скидку?).<br>
        3. <strong>Округление:</strong> Здесь не любят мелочь. Если сумма 11.20€, смело предлагайте 11€ или 10.50€.<br>
        4. <strong>Комплимент:</strong> Вместо «дорого» скажите: <em>«È bellissimo, ma è un po’ caro»</em>.<br>
        5. <strong>Бонус:</strong> Попросите в подарок горсть маслин, пучок базилика или лишний лимон.
      </div>
    `
  },
  {
    id: 7,
    title: "Нетуристический",
    icon: "🕵",
    content: `
      <h2>🕵 Палермо нетуристический</h2>

      <h3>• <a href="https://maps.app.goo.gl/hDNrneRUvEvqsEZm9" target="_blank" rel="noreferrer"> Stanze al Genio (Музей плитки)</a></h3>
      <p>Частный дом-музей, где собрана самая большая в Европе коллекция старинной сицилийской майолики (более 5000 плиток), развешанных по стенам жилой квартиры градостроителя.</p>
      <p><small>⏱ Время работы: Вт: 16:00 – 18:30, Ср-Вс: 10:00-12:30, 16:00-18:30 (Пн – выходной).</small></p>

      <h3>• <a href="https://maps.app.goo.gl/DDexU2BSTb2gGsCb9" target="_blank" rel="noreferrer"> Camera delle Meraviglie (Комната чудес)</a></h3>
      <p>Крошечная комната в частной квартире, полностью расписанная арабской вязью на ярко-синем фоне, обнаруженная случайно во время ремонта под слоем штукатурки.</p>
      <p><small>⏱ Время работы: По договоренности по предварительной записи через <a href="https://terradamare.org/camera-delle-meraviglie-visite/" target="_blank" rel="noreferrer">  сайт.</a></small></p>

      <h3>• <a href="https://maps.app.goo.gl/Ve18ukGQC5sHceR97" target="_blank" rel="noreferrer"> Oratorio di San Lorenzo (Ораторий Сан-Лоренцо)</a></h3>
      <p>Снаружи неприметно, внутри – ослепительно белая лепнина Джакомо Серпотты, похожая на взбитые сливки. Здесь висит высокотехнологичная копия шедевра Караваджо, оригинал которого в 1969 году похитила мафия.</p>
      <p><small>⏱ Время работы: Ежедневно: 10:00 – 18:00.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/P24Hqoy3ZhyMMTyXA" target="_blank" rel="noreferrer"> •	I Tetti della Cattedrale (Крыши Собора)</a></h3>
      <p>Вы поднимаетесь на крышу по узким лестницам и идете прямо по карнизу. Отсюда лучший вид на «купольный» горизонт Палермо и гору Монте-Пеллегрино.</p>
      <p><small>⏱ Время работы: Пн–Сб 09:30–13:25, Вс 09:00–12:25.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/kDUPrAaP1yTqUHys8" target="_blank" rel="noreferrer"> Palazzo Conte Federico</a></h3>
      <p>Один из немногих дворцов, где до сих пор живет настоящая аристократическая семья – потомки Фридриха II. Рядом с доспехами стоят личные вещи графа, который сам иногда ведет экскурсию.</p>
      <p><small>⏱ Время работы: Чт-Вт: 11:00 – 15:00 (Ср – выходной).</small></p>

      <h3>• <a href="https://maps.app.goo.gl/r2eh5NVZFMRfgbqd9" target="_blank" rel="noreferrer"> Palazzo Butera</a></h3>
      <p>Огромный дворец на набережной, превращенный в центр современного искусства. Потрясающая терраса с видом на море и залы, где старина встречается с дерзким артом.</p>
      <p><small>⏱ Время работы: Вт-Вс: 10:00 – 20:00 (Пн – выходной).</small></p>
    `
  },
  {
    id: 8,
    title: "Пригород",
    icon: "🚌",
    content: `
      <h2>🚌 Пригороды Палермо</h2>

      <h3>• <a href="https://maps.app.goo.gl/DqfXmnxSDm2Mx4Hk8" target="_blank" rel="noreferrer"> Монреале (Monreale) – Золотая вершина</a></h3>
      <p>Вершина арабо-норманнского стиля в 10 км от Палермо. Внутри собора находится 2200 кг чистого золота в виде византийских мозаик. Обязательно зайдите в дворик монастыря (Chiostro): там 228 двойных колонн с уникальными узорами.</p>
      <p><small>⏱ Время работы: 08:30–12:45, 14:30–16:45. Сиеста: 12:45–14:30. Вс утром закрыто для туристов.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/4kj7ivj6MRyDh5b67" target="_blank" rel="noreferrer"> Монделло (Mondello) – Сицилийская Ривьера</a></h3>
      <p>Элитный курорт в стиле модерн (Liberty). Главный символ – Charleston, роскошное здание купальни на сваях прямо в центре лазурного залива. Рядом находится природный заповедник Капо Галло с чистейшей водой для снорклинга.</p>
      <p><small>⏱ Время работы: 08:00–20:00.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/1UbB3HjWt8YDkCvV7" target="_blank" rel="noreferrer"> Чефалу (Cefalù) – Кинематографичный город</a></h3>
      <p>Один из самых красивых малых городов Италии, зажатый между морем и скалой Ла-Рокка. Здесь снимали «Новый кинотеатр Парадизо». Посетите средневековую прачечную (Lavatoio Medievale), вырубленную в скале, и поднимитесь на скалу к руинам храма Дианы.</p>
      <p><small>⏱ Время работы: 08:30–12:30, 15:30–18:00. Прачечная открыта до 20:00.</small></p>
    `
  },
  {
    id: 9,
    title: "Сицилия: общее",
    icon: "🌋",
    content: `
      <h2>🌋 Сицилия в общем: Главные локации острова</h2>

      <h3>• <a href="https://maps.app.goo.gl/78qVDomT9h5mDVST9" target="_blank" rel="noreferrer"> Долина Храмов (Valle dei Templi, Агридженто)</a></h3>
      <p>Крупнейший археологический парк в мире. Храм Конкордии сохранился почти идеально с V века до н.э. Поужинать с видом на него можно в ресторане <a href="https://hotelvillaathena.it" target="_blank" rel="noreferrer">La Terrazza degli Dei</a>.</p>
      <p><small>⏱ Время работы: 08:30–19:00 (летом бывает открыто до полуночи).</small></p>

      <h3>• <a href="https://maps.app.goo.gl/jJ8ThXKLVseNK32s6" target="_blank" rel="noreferrer"> Скала-деи-Турки (Scala dei Turchi)</a></h3>
      <p>Ослепительно белая скала в форме лестницы, уходящей в море. Рядом расположен классный сырный бар <a href="https://loungebeach.it" target="_blank" rel="noreferrer">Lounge Beach</a>.</p>
      <p><small>⏱ Время работы: Круглосуточно </small></p>

      <h3>• <a href="https://maps.app.goo.gl/i5HDJqpX2KTHNfiv7" target="_blank" rel="noreferrer"> Лагуна делло Станьоне (Stagnone di Marsala)</a></h3>
      <p>Розовая вода, соляные мельницы и горы соли. Берите лодку до острова Моция. На закате загляните на террасу <a href="https://mammacaura.it" target="_blank" rel="noreferrer">Mamma Caura</a> пить вино Marsala Superiore.</p>
      <p><small>⏱ Время работы: Круглосуточно </small></p>

      <h3>• <a href="https://maps.app.goo.gl/NGKQroz5gVJdTB9Y9" target="_blank" rel="noreferrer"> Театр Андромеда (Teatro Andromeda)</a></h3>
      <p>Самый высокий мистический театр в мире (1000 м). 108 каменных сидений повторяют созвездие Андромеды. Переночевать или пообедать домашней рикоттой рядом можно на ферме <a href="https://agriturismoserramoneta.it" target="_blank" rel="noreferrer">Agriturismo Serra Moneta</a>.</p>
      <p><small>⏱ Время работы: 10:00–13:00, 14:30–17:30.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/ZkNo8HQkQGM7ALhCA" target="_blank" rel="noreferrer"> Театр Таормины (Teatro Antico di Taormina)</a></h3>
      <p>Единственный театр в мире, где декорацией служит действующий вулкан Этна. Обязательно загляните в Таормине в знаменитый <a href="https://bambar.it" target="_blank" rel="noreferrer">Bam Bar</a> на миндальную граниту со сливками и бриошью.</p>
      <p><small>⏱ Время работы: 10:00–20:00.</small></p>

      <h3>• <a href="https://maps.app.goo.gl/fDxG69qXYkTLGAv2A" target="_blank" rel="noreferrer"> Средневековый Эриче (Erice)</a></h3>
      <p>Город в облаках на высоте 750 м. Попробуйте пирожки с кремом Genovesi в легендарной кондитерской кондитера Марии <a href="https://mariagrammatico.it" target="_blank" rel="noreferrer">Maria Grammatico</a>.</p>
      <p><small>⏱ Время работы: Круглосуточно </small></p>

      <h3>• <a href="https://maps.app.goo.gl/LspSTm1g5FKLBKAV8" target="_blank" rel="noreferrer"> Вилла дель-Казале (Piazza Armerina)</a></h3>
      <p>Римская вилла IV века с мозаиками «девушки в бикини». Пообедать неподалеку можно в ресторане на старой ж/д станции <a href="https://alfogher.it" target="_blank" rel="noreferrer">Al Fogher</a>.</p>
      <p><small>⏱ Время работы: 09:00–18:00.</small></p>
    `
  },
  {
    id: 10,
    title: "Карты",
    icon: "📍",
    content: `
      <h2>📍 Интерактивные карты</h2>
      <p>Мы собрали все точки на Google Maps, чтобы вам было удобно ориентироваться прямо во время прогулки.</p>
      <a href="https://maps.app.goo.gl/SKRRPwnrdDhJHPJCA" target="_blank" rel="noreferrer" class="map-btn">🗺 Открыть карту Сицилии</a>
      <a href="https://maps.app.goo.gl/UcVNQCtAWGPk2oEs6" target="_blank" rel="noreferrer" class="map-btn style-food">🍝 Карта ресторанов и кафе</a>
    `
  },
  {
  id: 11,
  title: "Контакты",
  icon: "☎️",
  content: `
    <h2> <a href="https://t.me/darya_stupakova" target="_blank" rel="noreferrer" class="map-btn"> ☎️@darya_stupakova</a></h2>
    <a href="https://www.instagram.com/my_reflection_" target="_blank" rel="noreferrer" class="map-btn">📸 Смотреть фото</a>
    <p>По вопросам разработки гайда можно обращаться напрмую к автору</p>
    <p>Все материалы, представленные в данном туристическом гайде, являются результатом творческой работы автора и защищены законом об авторском праве</p>

    
  `
  }
];
