
let room = "вход";
let money = 0
let x = 0
const inventory = [];
let balance = { "ящик1": 10, "шкаф1": 20, "раковина": 5, "посудомойка": 20, "диван": 50, "кровать1": 100, "шкаф2": 25, "тумбочка": 10, "кровать2": 10, "комод": 30 }
function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст.");
    } else {
        alert(`В рюкзаке: ${inventory.join(", ")}`);
    }
}
let pass = []
alert(
    "ВЫ ШКОЛЬНИК\n\n" +
    "Родители вас не выпускают гулять\n" +
    "найди способ уговорить батю отпустить вас гулять"
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
        } else if (choice === "1") {
            room = "коридор"
        } else if (choice === "2") {
            room = "кухня"
        } else if (choice === "3") {
            room = "зал"
        } else if (choice === "4") {
            room = "подвал"
        } else if (choice === "5") {
            room = "второй этаж"
        } else if (choice === "6") {
            if (inventory.includes("ключ")) {
                room = "туалет"
            }
            else {
                alert("Туалет закрыт")
            }
        } else if (choice === "7") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "коридор") {
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
        } else if (choice === "1") {
            if (balance["ящик1"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["ящик1"]
            delete balance["ящик1"]
            alert(`вы осмотрели ящик и нашли 10 монет`)
        } else if (choice === "2") {
            if (balance["шкаф1"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["шкаф1"]
            delete balance["шкаф1"]
            alert(`вы осмотрели ящик и нашли 20 монет`)
        } else if (choice === "3") {
            room = "вход"
        } else if (choice === "4") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "кухня") {
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
        } else if (choice === "1") {
            if (balance["раковина"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["раковина"]
            delete balance["раковина"]
            alert(`Вы осмотрели раковину и нашли 5 монет`)
        } else if (choice === "2") {
            alert(`Вы осмотрели плиту и ничего не нашли`)
        } else if (choice === "3") {
            if (inventory.includes("сушёная рыба")) {
                alert("в холодильнике нету ничего полезного")
            }
            else {
                alert(`Вы осмотрели холодильник и нашли сушёную рыбу`)
                inventory.push("сушёная рыба")
            }
        } else if (choice === "4") {
            if (balance["посудомойка"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["посудомойка"]
            delete balance["посудомойка"]
            alert(`Вы осмотрели посудомойку и нашли 20 монет`)
        } else if (choice === "5") {
            room = "вход"
        } else if (choice === "6") {
            showInventory()
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "зал") {
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
        } else if (choice === "1") {
            if (balance["диван"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["диван"]
            delete balance["диван"]
            alert(`Вы осмотрели диван и нашли 50 монет`)
        } else if (choice === "2") {
            alert(`Вы осмотрели телевизор и ничего не нашли`)
        } else if (choice === "3") {
            if (inventory.includes("дневник брата с двойкой")) {
                alert("стол пуст")
            } else {
                alert(`Вы осмотрели стол и нашли дневник брата с двойкой`)
                inventory.push("дневник брата с двойкой")
            }
        } else if (choice === "4") {
            alert(`Вы осмотрели стулья и ничего не нашли`)
        } else if (choice === "5") {
            room = "вход"
        } else if (choice === "6") {
            showInventory()
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "подвал") {
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
        } else if (choice === "1") {
            room = "левая комната"
        } else if (choice === "2") {
            room = "правая комната"
        } else if (choice === "3") {
            room = "вход"
        } else if (choice === "4") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "левая комната") {
        const choice = prompt(
            "ВЫ в левой комнате и видете младшего брата\n" +
            "1 — Поговорить с младшим братом\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "младший брат"
        } else if (choice === "2") {
            room = "подвал"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "младший брат") {
        const choice = prompt(
            "Младший брат украл плюшевую игрушку у младшей сестры и не хочет отдавать\n" +
            "1 — шантажировать его\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("дневник брата с двойкой")) {
                inventory.splice(inventory.indexOf("дневник брата с двойкой"), 1)
                inventory.push("плюшевая игрушка сестры")
                alert("вы показали дневник младшему брату и если он не отдаст игрушку то вы покажете дневник родителям")
                alert("вы получили плюшевую игрушку сестры")
                pass.push("брат")
            }
            else if (pass.includes("брат")) {
                alert("брат говорит вам чтобы вы его не донимали")
            }
            else {
                alert("вам нечем шантажировать брата")
            }
        } else if (choice === "2") {
            room = "подвал"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет")
        }
    }
    else if (room === "правая комната") {
        const choice = prompt(
            "ВЫ осматриваете правую комнату\n" +
            "1 — Осмотреть сундук\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("ключ")) {
                alert("Сундук уже пуст.")
            } else {
                inventory.push("ключ")
                alert("в сундуке вы нашли ключ от туалета")
            }
        } else if (choice === "2") {
            room = "подвал"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет")
        }
    }
    else if (room === "второй этаж") {
        const choice = prompt(
            "ВЫ на втором этаже\n" +
            "1 — комната моя и брата\n" +
            "2 — комната сестры\n" +
            "3 — комната родителей\n" +
            "4 — Вернутся\n" +
            "5 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "детская комната"
        } else if (choice === "2") {
            room = "комната сестры"
        } else if (choice === "3") {
            room = "комната родителей"
        } else if (choice === "4") {
            room = "вход"
        } else if (choice === "5") {
            showInventory();
        } else {
            alert("Такого выбора нет")
        }
    }
    else if (room === "детская комната") {
        const choice = prompt(
            "ВЫ в своей комнате\n" +
            "1 — Обыскать кровать\n" +
            "2 — Обыскать шкаф\n" +
            "3 — Осмотреть тумбочку\n" +
            "4 — Вернутся\n" +
            "5 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {

            if (balance["кровать1"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["кровать1"]
            alert('В кровате вы нашли 100 монет')
            delete balance["кровать1"]
        } else if (choice === "2") {

            if (balance["шкаф2"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["шкаф2"]
            alert('В шкафу вы нашли 25 монет')
            delete balance["шкаф2"]
        } else if (choice === "3") {

            if (balance["тумбочка"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["тумбочка"]
            alert("В тумбочке вы нашли 10 монет")
            delete balance["тумбочка"]
        } else if (choice === "4") {
            room = "второй этаж"
        } else if (choice === "5") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "комната сестры") {
        const choice = prompt(
            "ВЫ в комнате сестры и видете младшую сестру\n" +
            "1 — Поговорить с сестрой\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "сестра"
        } else if (choice === "2") {
            room = "второй этаж"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "сестра") {
        const choice = prompt(
            "ВЫ просите сестру пропустить вас на чердак\n" +
            "она отвечает что пропустит если вернешь её игрушку\n" +
            "1 — вернуть игрушку\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("плюшевая игрушка сестры")) {
                inventory.splice(inventory.indexOf("плюшевая игрушка сестры"), 1)
                room = "чердак"
                alert("сестра пропустила вас на чердак")
                pass.push("сестра")
            }
            else if (pass.includes("сестра")) {
                room = "чердак"
            }
            else {
                alert("у вас нету плюшевой игрушки сестры")
            }
        } else if (choice === "2") {
            room = "второй этаж"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "чердак") {
        const choice = prompt(
            "ВЫ на чердаке и видете маму которая убирается на чердаке\n" +
            "1 — Поговорить с мамой\n" +
            "2 — Вернутся\n" +
            "3 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("пароль от сейфа 0905")) {
                alert("вам неочем говорить с мамой")
                continue
            }
            else {
                inventory.push("пароль от сейфа 0905")
                alert("мама дала вам пароль от сейфа")
            }
        } else if (choice === "2") {
            room = "второй этаж"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "комната родителей") {
        const choice = prompt(
            "ВЫ в комнуте родителей\n" +
            "1 — Обыскать кровать\n" +
            "2 — обыскать сейф\n" +
            "3 — обыскать комод\n" +
            "4 — обыскать тумбочку\n" +
            "5 — Вернутся\n" +
            "6 — Посмотреть инвентарь\n" +
            "0 — Выйти"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (balance["кровать2"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["кровать2"]
            alert('В кровати вы нашли 10 монет')
            delete balance["кровать2"]
        } else if (choice === "2") {
            room = "сейф"
        } else if (choice === "3") {
            if (balance["комод"] === undefined) { alert("Уже обыскано"); continue }
            money += balance["комод"]
            alert('В комоде вы нашли 30 монет')
            delete balance["комод"]
        } else if (choice === "4") {
            if (inventory.includes("чекушка")) {
                alert("тумбочка пустая")
            }
            else {
                inventory.push("чекушка")
                alert("вы нашли чекушку")
            }
        } else if (choice === "5") {
            room = "второй этаж"
        } else if (choice === "6") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "сейф") {
        const choice = prompt(
            "перед собой вы видете сейф с паролем состоящий из 4 цифр\n" +
            "1 - написать код\n" +
            "2 - вернутся\n" +
            "3 - посмотреть инвентарь\n" +
            "0 - выйти"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            const password = prompt("введите код")
            if (password === "0905") {
                if (inventory.includes("пароль от акаунта бати в WORLD OF TANKS")) {
                    alert("сейф пуст")
                }
                else {
                    inventory.push("пароль от акаунта бати в WORLD OF TANKS")
                    alert("вы получили пароль от акаунта бати в WORLD OF TANKS")
                }
                room = "комната родителей"
            }
            else {
                alert("пароль не тот")
            }
        } else if (choice === "2") {
            room = "комната родителей"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    else if (room === "туалет") {
        const choice = prompt(
            "ВЫ в туалете в ктором сидел твой батя\n" +
            "1 - попросится погулять\n" +
            "2 - вернутся\n" +
            "3 - посмотреть инвентарь\n" +
            "0 - выйти\n"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {

            if (inventory.includes("чекушка") && inventory.includes("сушёная рыба")) {
                alert("вы смогли подкупить батю спомощью чекушки и сушёной рыбы")
                break
            }
            else if (inventory.includes("пароль от акаунта бати в WORLD OF TANKS")) {
                alert("вы смогли уговорить батю выпустить вас на улицу угрожая удалением его акаунта в WORLD OF TANKS")
                break
            }
            else {
                alert("вы не смогли договорится с батей")
            }
        } else if (choice === "2") {
            room = "вход"
        } else if (choice === "3") {
            showInventory();
        } else {
            alert("Такого выбора нет");
        }
    }
    inventory.splice(inventory.indexOf(money), 1)
    inventory.push(money)
    x += 1
}
if (money === 280) {
    alert("Игра завершена. Вы подобрали максимальное возможное количество монет - 280")
} else if (x < 14) {
    alert(`Игра завершена. Вы прошли оптимальным способом`)
}
else {
    alert(`Игра завершенаю. Вы не выполнили ни одного доп задания (на максимально количество монет, ваши монеты - ${money}) и (вы прошли не оптимальным способом)`)
}


