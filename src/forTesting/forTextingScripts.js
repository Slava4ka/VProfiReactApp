const a = {wew: 23};
console.log(Object.values(a)[0]);


const string = 'ome@mail.ru';

const numbers = ['+79282795792', '89282795792', '79282795792', '+7-928-279-57-92', '8-928-279-57-92'
    , '792827957922', '79282795792', '2541', '7-928-2795-792', '7-928-279-57-92', "8-928-279-57@92", "mr-93@mail.ru",
    "yandex@yandex.ru", "keigen@gmail.com", "sdad23dacwrf23easd2@e2W@"
];

const validation = emailOrNumber => {
    let error = '';
    if (!emailOrNumber) {
        error = "пустота";
    } else if ((/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,12}$/i.test(emailOrNumber))) {
        console.log(emailOrNumber);
        const validNumber = emailOrNumber.replace(/[^\d]/g, '');
        if (11 !== validNumber.length) {
            error = "неверный номер телефона";
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailOrNumber)) {
        console.log(emailOrNumber);
        error = "неверный номер телефона или адрес электронной почты";
    }

    return error
};

const normalizeUsersIdent = (usersIdent) => {
    switch (true) {
        case ((/^((8)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,12}$/i.test(usersIdent))):
            let validNumber = usersIdent.replace(/[^\d]/g, '');
            return validNumber.replace('8','7');
        case ((/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,12}$/i.test(usersIdent))):
            return usersIdent.replace(/[^\d]/g, '');
        default:
            return usersIdent
    }
};

for (let number = 0; number < numbers.length; number++) {

    const emailOrNumber = numbers[number];

    console.log(normolizeTelephoneNumber(emailOrNumber));
}