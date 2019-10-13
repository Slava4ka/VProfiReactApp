const nameMass = ["Руслан", "Денис", "Ибрагим", "Ильшат", "Людовик", "Орест", "Ростислав", "Умар", "Шарль", "Агап", "Александра",
    "Анастасия", "Агриппина", "Муслим", "Мадина", "Хеда", "Рашид", "СУЛУМБЕК"];

const surnameMass = ["Кононов", "Андрухович", "Лукашенко", "Павлов", "Стегайло", "Журавлёв", "Ларионов", "Темченко", "Гришин",
    "Андрухович", "Большаков", "Хамзатов", "Мугамаев"];

const patronymicMass = ["Петрович", "Максимович", "Иванович", "Григорьевич", "Михайлович", "Евгеньевич",
    "Львович", "Анатолиевич", "Валерьевич", "Алексеевич", "Ахматович", "Юнусбекович", "Ашотович"];

const categoryMass = [
    {
        categoryName: "Репетиторы",
        professions: ["Английский язык ", "Математика", "Русский язык", "Начальная школа", "Музыка"]
    },
    {
        categoryName: "Мастера по ремонту",
        professions: ["Сантехники", "Электрики", "Плиточники", "Штукатуры", "Ремонт под ключ"]
    },
    {
        categoryName: "Мастера красоты",
        professions: ["Макияж", "Маникюр", "Причёски", "Эпиляция", "Стилисты"]
    },
    {
        categoryName: "Спортивные тренеры",
        professions: ["Йога", "Бокс", "Фитнес", "Плавание", "Бодибилдинг"]
    },
    {
        categoryName: "Врачи",
        professions: ["Гинекологи", "Дерматологи", "Отоларингологи", "Педиатры", "МРТ"]
    }
];

const avatarMass = ["avatars/2Z9k75SIbYU.jpg", "avatars/1525374264_7f85e7b.jpeg", "avatars/ariana_grande.jpg",
    "avatars/avatar2700.jpg", "avatars/avatar-zabavnogo-malisha-v-ochkah.jpg", "avatars/boy.jpg", "avatars/gomer.jpg",
    "avatars/skvidvart.jpg", "avatars/tomInLow.jpg", "avatars/unnamed.jpg", "avatars/youloveit.jpg"];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const getRandomFromMass = (mass) => {
    return mass[getRandomInt(mass.length - 1)]
};

const getFIO = () => {
    return [getRandomFromMass(surnameMass), getRandomFromMass(nameMass), getRandomFromMass(patronymicMass)]
};

const getRating = () => {
    return (3 + Math.random() * (4 + 1 - 3)).toFixed(1)
};

const getAvatar = () => {
    return getRandomFromMass(avatarMass)
};

const getCategory = (id) => {
    return categoryMass[id].categoryName
};

const getProfession = (id) => {
    return getRandomFromMass(categoryMass[id].professions)
};

function createIdForKey(str) {
    return str.split('').reduce((prevHash, currVal) =>
        (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
}

const createMassOfPersons = (number, id) => {
    let persons = [];
    for (let i = 0; i < number; i++) {
        const [surname, name, patronymic] = getFIO();
        persons.push({
            id: createIdForKey(surname + "^" + name),
            surname: surname,
            name: name,
            patronymic: patronymic,
            rating: getRating(),
            profession: getProfession(id),
            avatar: getAvatar()
        })
    }
    return persons
};

export const getMassOfPersonsForIndexPage = () => {
    let mass = [];
    for (let categoryId = 0; categoryId < categoryMass.length; categoryId++) {
        mass.push({
            category: getCategory(categoryId),
            members: createMassOfPersons(5, categoryId)
        })
    }
    return mass
};

export const getMassOfCategoriesForIndexPage = () => {
    let mass = ["Репетиторы и курсы","Мастера по ремонту","Мастера красоты","Спортивные тренеры","Автоинструкторы",
        "Артисты","ИТ-фрилансеры","Домашний персонал","Ветеринары","Бухгалтеры и юристы","Врачи", "Ищете кого-то ещё?"];
    /*
    for (let categoryId = 0; categoryId < categoryMass.length; categoryId++) {
        mass.push(getCategory(categoryId))
    }*/
    return mass
};