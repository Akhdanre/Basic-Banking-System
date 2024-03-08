class BankAccount {
    #money;
    constructor(name) {
        this.name = name
        this.#money = 0
    }

    #checkInputIsNumber(value) {
        if (!Number(value)) {
            return false
        }
        return true
    }

    deposite(value) {
        if (!this.#checkInputIsNumber(value)) {
            throw new Error("input not Number")
        }
        this.#money += value

    }

    withdraw(value) {
        if (!this.#checkInputIsNumber(value)) {
            throw new Error("input not Number")
        }
        this.#money -= value
    }

    getMoneyInfo() {
        return "uang kamu saat ini sebesar " + this.#money
    }
}



let user = new BankAccount("akhdan")
console.log(user.name)
try {

    user.deposite("jkjdf")
} catch (err) {
    console.log(err.message)
}

console.log(user.getMoneyInfo())