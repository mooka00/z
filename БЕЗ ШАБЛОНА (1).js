const inventory = [];
let room = "вход";
let money = 0
let x = 0
function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст.");
    } else {
        alert("В рюкзаке: " + inventory.join(", "));
    }
}

alert(
    "ЛАБИРИНТ ХРАНИТЕЛЯ\n\n" +
    "Найдите зал босса и соберите всё для победы:\n" +
    "ключ, магическую траву, магический меч и защитный амулет."
);

while (true) {
    
    if (room === "вход") {
        const choice = prompt(
            "ВЫ У ВХОДА\n" +
            "1 — Осмотреть коридор\n" +
            "2 — Кухня\n" +
            "3 — Зал\n" +
            "4 — Подвал\n" +
            "5 — Второй этаж\n" +
            "6 — Туалет\n" +
            "7 — Проверить рюкзак\n" +
            "0 — Завершить игру"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            room = "коридор"
        } else if ( choice === "2"){
            room = "кухня"
        } else if ( choice === "3"){
            room = "зал"
        } else if ( choice === "4"){
            room = "подвал"
        } else if ( choice === "5"){
            room = "второй этаж"
        } else if ( choice === "6"){
            inventory.forEach(el => {
                if (el == 'ключ'){
                room = "туалет"}
                else {
                    alert("Туалет закрыт")
                }
            });  
        } else if (choice === "7"){
            showInventory(); 
        } else{
            alert("Такого прохода нет.");
        }
    }
    else if(room === "коридор"){
        const choice = prompt(
            "ВЫ осматриваете коридор\n" +
            "1 — Осмотреть ящик\n" +
            "2 — Осмотреть шкаф\n" +
            "3 — Вернутся\n" +
            "4 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            money += 10;
            alert (`вы осмотрели ящик и нашли 10 монет`)
        } else if ( choice === "2"){
            money += 20;
            alert (`вы осмотрели ящик и нашли 20 монет`)
        } else if ( choice === "3"){
            room = "вход"
        } else if ( choice === "4"){
            showInventory();
        } else{
            alert("Такого прохода нет.");
        }   
    }
    else if(room === "кухня"){
        const choice = prompt(
            "Вы на кухне\n" +
            "1 — Осмотреть раковину\n" +
            "2 — Осмотреть плиту\n" +
            "3 — Осмотреть холодильник\n" +
            "4 — Осмотреть посудомойку \n" +
            "5 — Вернутся\n" +
            "6 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            money += 5;
            alert (`Вы осмотрели раковину и нашли 5 монет`)
        } else if ( choice === "2"){
            alert (`Вы осмотрели плиту и ничего не нашли`)
        } else if ( choice === "3"){
            alert(`Вы осмотрели холодильник и нашли магическую траву`)
            inventory.push("магическая трава")
        } else if ( choice === "4"){
            alert(`Вы осмотрели посудомойку и нашли 20 монет`)
            money += 20
        } else if (choice === "5"){
            room = "вход"
        } else if (choice === "6") {
            showInventory()
        } else{
            alert("Такого прохода нет.");
        }
    }
    else if(room === "зал"){
        const choice = prompt(
            "Вы в зале\n" +
            "1 — Осмотреть диван\n" +
            "2 — Осмотреть телевизор\n" +
            "3 — Осмотреть стол\n" +
            "4 — Осмотреть стулья \n" +
            "5 — Вернутся\n" +
            "6 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            money += 50;
            alert (`Вы осмотрели диван и нашли 50 монет`)
        } else if ( choice === "2"){
            alert (`Вы осмотрели телевизор и ничего не нашли`)
        } else if ( choice === "3"){
            alert(`Вы осмотрели стол и нашли дневник брата с двойкой`)
            inventory.push("дневник брата с двойкой")
        } else if ( choice === "4"){
            alert(`Вы осмотрели стулья и ничего не нашли`)
        } else if (choice === "5"){
            room = "вход"
        } else if (choice === "6") {
            showInventory()
        } else{
            alert("Такого прохода нет.");
        }
    }
    else if(room === "подвал"){
        const choice = prompt(
            "ВЫ осматриваете подвал\n" +
            "1 — Левая комната\n" +
            "2 — Правая комната\n" +
            "3 — Вернутся\n" +
            "4 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            room = "левая комната"
        } else if ( choice === "2"){
            room = "правая комната"
        } else if ( choice === "3"){
            room = "вход"
        } else if ( choice === "4"){
            showInventory();
        } else{
            alert("Такого прохода нет.");
        }   
    }
    else if (room === "левая комната") {
        const choice = prompt(
            "ВЫ зашли в левую комнату и нашли младшего брата\n" +
            "1 — Поговорить с младшим братом\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            room = "младший брат"
        } else if ( choice === "2"){
            room = "подвал"
        } else if ( choice === "3"){
            showInventory();
        } else{
            alert("Такого прохода нет.");
        }   
    }
    else if (room === "младший брат") {
        const choice = prompt(
            "Младший брат украл игрушку у младшей сестры и не хочет отдавать\n" +
            "1 — шантажировать его\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            inventory.forEach(el => {
                if (el === "дневник мл брата с двойкой"){
                    alert("вы сказали младшему брату что если он не даст украденное то вы покажете родителям его дневник")
                    alert("вы получили плюшевая игрушка сестры")
                    inventory.splice(x, 1)
                    inventory.push("плюшевая игрушка сестры")
                }
                else{
                    alert("вам нечем его уговаривать")
                }
                x += 1
            });
            x = 0
        } else if ( choice === "2"){
            room = "подвал"
        } else if ( choice === "3"){
            showInventory();
        } else{
            alert("Такого прохода нет.");
        }   
    }
    else if (room === "правая комната"){
        const choice = prompt(
            "ВЫ осматриваете правую комнату\n" +
            "1 — Осмотреть сундук\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            inventory.push("ключ")
            alert("в сундуке вы нашли ключ от туалета")
        } else if ( choice === "2"){
            room = "подвал"
        } else if ( choice === "3"){
            showInventory();
        } else{
            alert("Такого прохода нет.");
        }
    }
    else if(room === "второй этаж"){
        const choice = prompt(
            "ВЫ поднялись на второй этаж\n" +
            "1 — комната моя и брата\n" +
            "2 — комната сестры\n" +
            "3 — комната родителей\n" +
            "4 — Вернутся\n" +
            "5 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            room = "детская комната"
        } else if ( choice === "2"){
            room = "комната сестры"
        } else if ( choice === "3"){
            room = "комната родителей"
        } else if ( choice === "4"){
            room = "вход"
        } else if ( choice === "5"){
            showInventory();
        } else{
            alert("Такого прохода нет.");
        }   
    }
    else if(room === "детская комната"){
        const choice = prompt(
            "ВЫ вошли в свою комнату\n" +
            "1 — Обыскать кровать\n" +
            "2 — Обыскать шкаф\n" +
            "3 — Осмотреть тумбочку\n" +
            "4 — Вернутся\n" +
            "5 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if ( choice === "1"){
            alert('В кровате вы нашли 100 монет')
            money += 100
        } else if ( choice === "2"){
            alert('В шкафу вы нашли 25 монет')
            money += 25
        } else if ( choice === "3"){
            alert("В тумбочке вы нашли 10 монет")
            money += 10
        } else if ( choice === "4"){
            room = "второй этаж"
        } else if ( choice === "5"){
            showInventory();
        } else{
            alert("Такого прохода нет.");
        }   
    }
    // TODO: здесь добавляйте else if для своих комнат.
    // В готовых блоках можно подсмотреть переходы, возврат и сбор предмета.
}

alert("Игра завершена.")
