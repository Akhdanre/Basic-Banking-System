class BankAccount {
    #money;
    constructor(name) {
        this.name = name
        this.#money = 0
    }

    deposite(value) {
        this.#money += value
    }

    withdraw(value) {
        this.#money -= value
    }

    getMoneyInfo() {
        return "uang kamu saat ini sebesar" + this.money
    }
}