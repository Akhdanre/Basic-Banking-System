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
            throw new Error("input harus angka")
        }
        let numberValue = parseInt(value)

        if (numberValue <= 0) {
            throw new Error("input Harus lebih dari 0")
        }

        console.log("loading")

        this.#money += numberValue


        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Berhasil melakukan deposite sebesar Rp.${numberValue}, ${this.getMoneyInfo()}`)
            }, 3000)
        })
    }

    withdraw(value) {
        if (!this.#checkInputIsNumber(value)) {
            throw new Error("input bukan angka")


        }

        let numberValue = parseInt(value)

        if (numberValue <= 0) {
            throw new Error("input Harus lebih dari 0")
        }
        if (this.#money < numberValue) {
            throw new Error("saldo kamu kurang")
        }

        console.log("loading")

        this.#money -= numberValue

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Berhasil melakukan withdraw sebesar Rp.${numberValue}, ${this.getMoneyInfo()}`)
            }, 3000)
        })
    }

    getMoneyInfo() {
        return "saldo kamu saat ini sebesar Rp." + this.#money
    }
}


//rekursif function
function loopMenu(user, readline) {
    readline.question("\nPilih Opsi Menu\n1. deposite\n2. withdraw\n0. exit\n\nOption : ", option => {
        switch (parseInt(option)) {
            case 0:
                console.log("selamat tinggal")
                readline.close()
                break
            case 1:
                readline.question("\nMasukkan nilai untuk Deposite : ", value => {
                    try {
                        user.deposite(value).then(message => {
                            console.log(message)
                            loopMenu(user, readline)
                        }).catch(err => {
                            loopMenu(user, readline)
                            console.log(err.message)
                        })

                    } catch (err) {
                        console.log(err.message)
                        loopMenu(user, readline)
                    }
                })
                break
            case 2:
                readline.question("Masukkan nilai untuk withdraw : ", value => {
                    try {
                        user.withdraw(value).then(message => {
                            console.log(message)
                            loopMenu(user, readline)
                        }).catch(err => {
                            loopMenu(user, readline)
                            console.log(err.message)
                        })

                    } catch (err) {
                        console.log(err.message)
                        loopMenu(user, readline)

                    }
                })
                break
            default:
                console.log("opsi yang kamu masukkan tidak ada di menu")
                loopMenu(user, readline)
        }
    });
}





//exekusi
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Username : ", name => {
    let user = new BankAccount(name)
    loopMenu(user, readline)
});


