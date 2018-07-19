const data = ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'];
const dest = 'status';

class Ticket {
    destination: string
    price: number
    status: string

    constructor(destination, price, status) {
        this.destination = destination
        this.price = price
        this.status = status
    }
}

let ticketsProgram = (tickets, criteria) => {
    let myArray = []
    tickets.forEach(ticket => {
        let tokens = ticket.split('|')
        let [destination, price, status] = tokens

        myArray.push(new Ticket(destination, Number(price), status))
    });

    myArray = sortByProperty(myArray, criteria)

    console.log(myArray)
}

let sortByProperty = (array, propertyName) => {
    return array.sort(function (a, b) {
        if (typeof propertyName === 'string') {
        return a[propertyName].localeCompare(b[propertyName])
        } else {
            return a[propertyName] - b[propertyName]
        }
    })
}

ticketsProgram(data, dest);

export { };