export function createClassName(names, def) {

    let result = [];

    if (typeof names === "object")
        Object.keys(names).map(key=> {
            if (names[key])
                result.push(key);
        });
    else
        result = names;

    return [def, (typeof names === "object" ? result.join(" ") : result)].join(" ");
}

export const addZero = (num)=> num.toString().length < 2 ? `0${ num }` : num.toString();
export function createDateFromArray(array) {
    if (!array[0] || !array[1] || !array[2]) return null;
    return `${ addZero(array[0]) }.${ addZero(array[1]) }.${ array[2] }`;
}
export function buildName(user, full) {
    return `${ user.firstName } ${ user.lastName } ${ full ? user.middleName : "" }`
}
export function compareId(id1, id2) {
    return (id1 || 1).toString() === (id2 || 0).toString();
}

export const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];
export function dateToString(date) {
    const d = new Date(date);
    console.log(d);
    return `${ d.getDay() } ${ months[d.getMonth()] } ${ d.getFullYear() }`;
}