function userCard(number) {
    let user = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    };
    let options = {
        getCardOptions: function () {
            console.log(user)
        },
        putCredits: function (addCredits) {
            user.balance = user.balance + addCredits;
            let putDate = {
                operationType: 'Received Credits',
                credits: user.balance,
                operationTime: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            }
            //let date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            user.historyLogs.push(putDate)
        },
        taKeCredits: function (takeCredits) {
            if (takeCredits <= user.balance || takeCredits <= user.transactionLimit) {
                user.balance = user.balance - takeCredits;
                let putDate = {
                    operationType: 'Withdrawal of credits',
                    credits: user.balance,
                    operationTime: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                }
                user.historyLogs.push(putDate)
            } else console.error('You don`t have enough money on your balance or you exceed transaction limit')
        },
        setTransactionLimit: function (TransactionLimit) {
            user.transactionLimit = TransactionLimit;
            let putDate = {
                operationType: 'Transaction limit change',
                credits: user.balance,
                operationTime: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            }
            user.historyLogs.push(putDate)
        },
        transferCredits: function (enterTransferAmount, enterCardKey) {
            if (enterTransferAmount <= user.balance || enterTransferAmount <= user.transactionLimit) {
                user.balance = user.balance - enterTransferAmount;
                enterCardKey.putCredits((enterTransferAmount - (enterTransferAmount * 0.005)))
            } else console.error('You don`t have enough money on your balance or you exceed transaction limit')
        }
    }
    return options;
}

// const card3 = userCard(3);
// const card1 = userCard(1);
// card3.getCardOptions()
// card3.putCredits(150)
// card3.getCardOptions()
// card3.taKeCredits(100)
// card3.getCardOptions()
// card3.taKeCredits(250)
// card3.getCardOptions()
// card3.setTransactionLimit(5000)
// card3.getCardOptions()
// card1.getCardOptions()
// card3.transferCredits(50, card1)
// card3.getCardOptions()
// card1.getCardOptions()

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard(EnterNumberFrom1to3) {
        if (this.cards.length <= 2) {
            this.cards.push(userCard(EnterNumberFrom1to3))
        } else console.error('You trying to exceed allowed number of cards (3)');

    }

    getCardByKey(cardKey) {
        return userBob.cards[cardKey-1]
    }
}

const userBob = new UserAccount('Bob');

userBob.addCard('1');
userBob.addCard('2');
let card1 = userBob.getCardByKey(1);
let card2 = userBob.getCardByKey(2);

card1.getCardOptions();
card1.putCredits(500)
card1.setTransactionLimit(800)
card1.getCardOptions()
card2.getCardOptions()
card1.transferCredits(300,card2)
card1.getCardOptions()
card2.getCardOptions()
card2.taKeCredits(50)
card2.getCardOptions()

