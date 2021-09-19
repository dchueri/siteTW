module.exports = app => {
    app.get('/dicas', (req, res) => res.send('Rodando ok'))

    app.post('/dicas', (req, res) => res.send('Post da rota dicas'))
}