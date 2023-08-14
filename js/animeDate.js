const date = [
    {
        id: 1,
        name: 'Чёрный клевер',
        link: 'https://jut.su/black-clouver/?ysclid=llax8aebk720091129',
        image: 'https://holy-animero.com/wp-content/uploads/2020/09/BK.jpg',
        description: 'Их свела общая судьба. Аста и Юно - двое сирот, мечтающих найти своё место под солнцем и когда-нибудь прославиться как великие маги. Однако общая судьба - не общий дар, и, как это часто бывает, пока один достигает определённых успехов, другой вынужден плестись позади,...',
    },
    {
        id: 2,
        name: 'Магическая битва',
        link: 'https://jut.su/jujutsu-kaisen/',
        image: 'https://avatars.mds.yandex.net/get-entity_search/6244532/667193092/S134x201_2x',
        description: 'Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепочке и любой ничего не подозревающий обыватель при известной доле невезения может оказаться съеденным демоном.',
    },
    {
        id: 3,
        name: 'Ванпанчмен',
        link: 'https://jut.su/onepunchman/',
        image: 'https://media.kg-portal.ru/anime/o/onepunchman/posters/onepunchman_1.jpg',
        description: 'Данная история повествует о юноше Саитаме, которому приходится жить в мире, так иронично похожем на наш. Ему 20 с небольшим лет. Он лысый и прекрасный. А, ну да, к тому же главный герой настолько силен, что с одного удара.',
    },
    {
        id: 4,
        name: 'Бездомный Бог',
        link: 'https://jut.su/noragaami/',
        image: 'https://sun6-21.userapi.com/s/v1/if1/cfeCIPc5_Om6vdx6PznauaEOfHpSR63s8s3U1kVlFJwcZz7W5-s9v9WRH4o5qtyMSQ-ktTJt.jpg?size=720x720&quality=96&crop=0,0,720,720&ava=1',
        description: 'Бродячего бога Ято можно считать самым никудышным божеством, ведь у него даже нет своего святилища... Но у него есть свой коварный план, как сделать так, чтобы все люди стали ему поклоняться.',
    },
    {
        id: 5,
        name: 'Сага о Винланде',
        link: 'https://jut.su/vinland-saga/',
        image: 'https://media.kg-portal.ru/anime/v/vinlandsaga/production/vinlandsaga_2.jpg',
        description: 'Сюжет основан на исландском фольклоре, повествующем об истории Скандинавских народов. В ту далекую пору Властителями северных морей были Викинги. Насколько много в аниме исторической достоверности вы можете судить и сами...',
    },
    {
        id: 6,
        name: 'Токийский Гуль',
        link: 'https://jut.su/tokushu/',
        image: 'https://sun9-77.userapi.com/impf/c837239/v837239443/23a85/I_wghnoKvmw.jpg?size=610x863&quality=96&sign=bcb60d10b973d0ac6a9a8a8e24f56c50&c_uniq_tag=lAZ0viGJwdZlaxjziCUy8RBaAoAm5CtALuh89iRhKzY&type=album',
        description: 'Студент университета Канеки Кен в результате несчастного случая попадает в больницу, где ему по ошибке пересаживают органы одного из гулей - чудовищ, питающихся человеческой плотью. Теперь он сам становится одним из них, а...',
    },
    {
        id: 7,
        name: 'Доктор Стоун',
        link: 'https://jut.su/dr-stoune/',
        image: 'https://i.pinimg.com/originals/ee/c7/75/eec775ee4bce0ffffd86505f493dd615.jpg',
        description: 'Внезапное астрономическое явление странным образом подействовало на живых существ всей планеты. Животные, птицы, люди стали камнем. Во сне, на бегу, во время крика… застыли вечным изваянием и люди.',
    },
    {
        id: 8,
        name: 'Семь смертных грехов',
        link: 'https://jut.su/nanatsu-taizai/',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/81b3f9cd-4d32-488a-82e0-2a233d7f601c/300x450',
        description: 'Несколько лет назад группа нечеловечески сильных рыцарей-преступников, известных как «Семь Смертных Грехов», предприняли попытку государственного переворота..',
    },
    {
        id: 9,
        name: 'Синий экзорцист',
        link: 'https://jut.su/ao-exorcist/',
        image: 'https://media.kg-portal.ru/anime/a/aonoexorcist2/production/aonoexorcist2_2.jpg',
        description: 'Окумура Рин, на первый взгляд, самый обычный 15-летний подросток, но с раннего детства он отличался физической силой, скверным характером и упрямством в отстаивании своих понятий.',
    },
    {
        id: 10,
        name: 'Реинкарнация безработного',
        link: 'https://jut.su/mushoku-tensei/',
        image: 'https://media.kg-portal.ru/anime/m/mushokutensei/posters/mushokutensei_3.jpg',
        description: 'Бывает в жизни невезение. Только тридцатичетырёхлетний безработный отаку-бездельник доходит до точки и решает, что пора взяться за ум и изменить свою в общем-то никчёмную жизнь...',
        favorite: true
    },
    {
        id: 11,
        name: 'Токийские мстители',
        link: 'https://jut.su/tokyo-reveengers/',
        image: 'https://wallpapers.com/images/hd/tokyo-revengers-iphone-wallpaper-tokyo-manji-gang-08szujwn0k4xl5ya.jpg',
        description: 'Сложно исправить ошибки прошлого. Некоторые — невозможно. Когда жизнь начинает идти под откос ещё со средней школы, стоило бы бороться, но прогнуться и плыть по течению проще и безопаснее.',
    },
    {
        id: 12,
        name: 'Клинок, рассекающий демонов',
        link: 'https://jut.su/kime-no-yaiba/',
        image: 'https://sun6-22.userapi.com/s/v1/ig2/y5GxYgubcLDM-FKdk2DM6U3KqZ1Bmh3DV7120GPZz3J0EdjydHcKcuMrRvWYE7b4jaGXIHZb2SDhagmpWq9UnxDJ.jpg?size=1566x2017&quality=96&crop=71,71,1566,2017&ava=1',
        description: 'Ещё с древних времён ходят слухи о демонах-людоедах, что скрываются в лесах. Из-за чего местные жители боятся выходить на улицу ночью, дабы не пасть их жертвой.',
    },
    {
        id: 13,
        name: 'Дороро',
        link: 'https://jut.su/douroro/',
        image: 'https://media.kg-portal.ru/anime/d/dororo/production/dororo_2.jpg',
        description: 'В стране царит смута, и один из генералов жаждет во что бы то ни стало одержать победу в решающей битве, которая ни много ни мало сулит ему трон всей страны. Для этого он решается на страшный грех и...',
    },
    {
        id: 14,
        name: 'Тетрадь смерти',
        link: 'https://jut.su/bookofd/',
        image: 'https://media.kg-portal.ru/anime/d/deathnote/posters/deathnote_13.jpg',
        description: 'Уставший от ухудшающегося мира и от немногословных собратьев, синигами Рюук отправляет на Землю Тетрадь Смерти, наблюдая за тем, что же интересное из этого получится. Его план начинает исполняться',
    },
    {
        id: 15,
        name: 'Стальной алхимик',
        link: 'https://jut.su/full-metal-alchemist/',
        image: 'https://i.pinimg.com/originals/a3/4b/c0/a34bc056bacada93f5f90d947943ef77.jpg',
        description: 'В альтернативном мире, где технология уживается рядом с распространённым таинством алхимии, два брата Эдвард и Альфонс мечтают о возвращении своей погибшей матери.',
    },
    {
        id: 16,
        name: 'Атака титанов',
        link: 'https://jut.su/shingekii-no-kyojin/',
        image: 'https://i.pinimg.com/originals/80/bf/3b/80bf3bbd22eed39d0c36a30323d94137.jpg',
        description: 'Загнанное в угол человечество доживает свои последние дни под гнётом титанов - таинственных созданий, терроризирующих человеческую расу. Выжившие ютятся за стенами крупного поселения с собственным правительством,',
    },
    {
        id: 17,
        name: 'Невероятные приключения ДжоДжо',
        link: 'https://jut.su/jojo-bizarre-adventure/',
        image: 'https://sun6-20.userapi.com/s/v1/ig2/1qKGJKIRuPWSl9EFc3QRVsC1jdWzqFovbpOV1bqLd214l8Jo6D4sczpPRf5LZEbALKdR5g0872dtnzEqB_AWkSIb.jpg?size=736x913&quality=96&crop=32,32,736,913&ava=1',
        description: 'Англия, конец XIX века. Богатый аристократ Джордж Джостар, верный некогда данному слову, принимает в семью осиротевшего бедного парня Дио и теперь относится к нему как к сыну. Родной же сын Джорджа Джонатан совсем не рад новому...',
    },
    {
        id: 18,
        name: 'Берсерк',
        link: 'https://jut.su/berserk/',
        image: 'https://i.pinimg.com/736x/16/8a/1a/168a1af5f6d637b7c217e9da7eaf231f--berserk-anime-berserk-guts.jpg',
        description: 'Через предательство и кровь к власти пришел новый король. Его демоны-подручные чинят несправедливости до тех пор, пока в город однажды ночью не приходит тяжело вооруженный воин. Весь покрытый оружием, броней и шрамами он называет себя Чёрным…',
    },
    {
        id: 19,
        name: 'Человек бензопила',
        link: 'https://jut.su/chensoman/',
        image: 'https://animaru.net/posters/573/ba6e7ebee4d341d18919d8b25b015563/orig.jpg',
        description: 'Подросток Дэндзи всего лишь хотел жить обычной жизнью и есть досыта, но оставшиеся после смерти отца долги вынуждают парня влачить полуголодное существование и жить в халупе. Чтобы расплатиться с якудза, он уже продал некоторые свои органы и даже…',
    },
    {
        id: 20,
        name: 'Величайший Повелитель демонов перерождается как типичное ничтожество',
        link: 'https://jut.su/shijou-saikyou/',
        image: 'https://anitokyo.org/uploads/posters/2022-04/poster_1649343505953.jpg',
        description: 'Повелитель демонов, самое могущественное существо во всём мире, думает, что его жизнь довольна скучна. Чтобы как-то разнообразить повседневность, он решает переродиться — уменьшает...',
    },
    {
        id: 21,
        name: 'Класс превосходства',
        link: 'https://jut.su/shugi-no-kyoushitsu/',
        image: 'https://kinojump.com/uploads/posts/2022-07/dobro-pozhalovat-v-klass-prevoshodstva-2.webp',
        description: 'Старшая школа Кодо Икусэи — престижное учебное заведение, практически 100% выпускников которого впоследствии поступают в университеты или устраиваются на солидную высокооплачиваемую работу.',
    },
    {
        id: 22,
        name: 'О моём перерождении в слизь',
        link: 'https://jut.su/slime-datta-ken/',
        image: 'https://media.kg-portal.ru/anime/t/tenseishitaraslimedattaken/production/tenseishitaraslimedattaken_1.jpg',
        description: 'Обычный служащий финансовой компании Сатору Миками погибает, защищая коллегу от грабителя с ножом. После смерти Сатору попадает в фэнтезийный мир, в котором он предстаёт в виде комка слизи средних размеров по имени Римуру, наделённой немалым разумом…',
        favorite: true,
    },
    {
        id: 23,
        name: 'Адский рай',
        link: 'https://jut.su/jigokuraku/',
        image: 'https://sun9-71.userapi.com/impg/mCcG7RsDBrZ3ui-KbGt6m-AwESxCfD2nMrSrPw/9SBEAOuR-rE.jpg?size=708x990&quality=96&sign=e43b48f26a63d5b23303f9985b9a0eb6&c_uniq_tag=hVc3mTqD36pCp5jrBfwgfsqTpYAfgz1di--n1tqEtes&type=album',
        description: 'Времена правления династии Токугава были непростыми. В руках каждого из наследников великого рода была сосредоточена огромная власть. Одиннадцатый сёгун пожелал править вечно, но для этого было необходимо отыскать эликсир бессмертия',
    },
    {
        id: 24,
        name: 'Теперь я читер в двух мирах',
        link: 'https://jut.su/iseleve/',
        image: 'https://avatars.mds.yandex.net/get-entity_search/9707519/677870581/S134x201_2x',
        description: 'Сказать, что жизнь Юя Тэндзё — не мед и не сахар, было бы преуменьшением. С самого раннего возраста у мальчика никогда не было хороших отношений со сверстниками и одноклассниками. Постоянные издевательства, оскорбления и унижения довели его до грани…',
    },
    {
        id: 25,
        name: 'Повесть о конце света',
        link: 'https://jut.su/shuumatsu-no-walkure/',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/c6ce4f17-ff65-4c2b-bca7-3b79297a687f/1920x',
        description: 'Все семь миллионов лет человечество существует на Земле, но пришло время великих перемен. Последнее собрание богов Вселенной было тысячу лет назад. На конференции по выживанию людей пришло время принимать очередное решение.',
    },
    {
        id: 26,
        name: 'Боец Баки',
        link: 'https://jut.su/baki/',
        image: 'https://i.pinimg.com/736x/c9/7f/a3/c97fa3fb0fc36df6dff9e22dccaee5c7.jpg',
        description: 'В мире боевых искусств существует легендарный титул "Король ринга" и он принадлежит безжалостному бойцу по имени Юдзиро Ханма. Мужчина всю жизнь посвятил тренировкам, а потому он стал...',
    },
]