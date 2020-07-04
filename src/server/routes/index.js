const { Router } = require('express');

const db = require('../models');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Server is working...');
});

router.get('/api/clients', async (req, res) => {
    await db.Client
        .find({})
        .exec((err, clients) => {
            if(err) res.send(Error);
            res.status(200).send(clients);
        });
});

router.get('/api/clients/:id', (req, res) => {
    const id = Number(req.params.id);
    db.Client.findOne({ id: id }, (err, client) => {
        if(err) res.send(Error);
        res.status(200).send(client);
    });
});

router.post('/api/create', async (req, res, next) => {
    const card = new  db.Card({
        clientId: req.body.clientId,
        balance: req.body.balance,
        number: req.body.number,
        expiryDate: req.body.expiryDate,
        cvc: req.body.cvc
    });

    await card.save();
    res.status(201).send(card);
    // const { id, password, name, phone, email, dateOfRegistry, card } = req.body;
    // db.Card.create({ id, password, name, phone, email, dateOfRegistry, card }, (err, client) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     res.status(201).send(client);
    // });
});

router.post('/api/become-client', async (req, res, next) => {
    const { id, password, name, phone, email, card } = req.body;
    await db.Client.create({ id, password, name, phone, email, card }, (err, client) => {
        if(err) {
            console.log(err);
        }
        res.status(201).send(client);
    });
});

router.get('/api/transactions/:id', (req, res) => {
    const id = Number(req.params.id);
    db.Transaction
        .find({ id: id })
        .exec((err, transaction) => {
            if(err) res.send(Error);
            res.status(200).send(transaction);
        });
});

router.post('/api/transactions/:id', (req, res) => {
    const clientId = Number(req.params.id);
    db.Client.findOne({ id: clientId }, (err, client) => {
        if(err) res.send(Error);

        //update history
        const { id, expenseAmount, cashbackPercentage, balanceAfter, name, category } = req.body;
        db.Client.card.history.push({ id, expenseAmount, cashbackPercentage, balanceAfter, name, category }, (err, transaction) => {
            if(err) {
                console.log(err);
            }
            res.status(201).send(transaction);
        });
    });

});

router.post('/api/transfer/:id', (req, res) => {
    const id = Number(req.params.id);
    const { expenseAmount, cashbackAmount, balanceAfter, name, category, created } = req.body;
    db.Transaction.create({ id, expenseAmount, cashbackAmount, balanceAfter, name, category, created }, (err, transaction) => {
        if(err) {
            console.log(err);
        }
        res.status(201).send(transaction);
    });
});

router.get('*', (req, res) => {
    // res.redirect('/');
    res.status(404).send('not found');
});

module.exports = router;
