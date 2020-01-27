const mongoose = require('mongoose');

const Concurso = mongoose.model('LotomaniaConcurso');
const Aposta = mongoose.model('LotomaniaAposta');

module.exports = {
    async listarConcursos(req, res) {
        try {
            const concurso = await Concurso.find();
            return res.status(200).json(concurso);
        }
        catch (err) {
            return res.status(400).json(err);
        }
    },
    async dadosConcurso(req, res) {
        try {
            const concurso = await Concurso.findById(req.params.id);
            return res.status(200).json(concurso);
        }
        catch (err) {
            return res.status(400).json(err);
        }
    },
    async incluirConcurso(req, res) {
        try {
            const concurso = await Concurso.create(req.body);
            return res.status(201).json(concurso);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async atualizarConcurso(req, res) {
        try {
            const concurso = await Concurso.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(concurso);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async deletarConcurso(req, res) {
        try {
            await Concurso.findByIdAndDelete(req.params.id);
            return res.status(204).send();
        }
        catch (err) {
            return res.status(400).json(err);
        }
    },
    async listarApostas(req, res) {
        try {
            const apostas = await Aposta.find();
            return res.status(200).json(apostas);
        }
        catch (err) {
            return res.status(400).json(err);
        }
    },
    async dadosAposta(req, res) {
        try {
            const aposta = await Aposta.findById(req.params.id);
            return res.status(200).json(aposta);
        }
        catch (err) {
            return res.status(400).json(err);
        }
    },
    async incluirAposta(req, res) {
        try {
            const aposta = await Aposta.create(req.body);
            return res.status(201).json(aposta);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async atualizarAposta(req, res) {
        try {
            const aposta = await Aposta.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(aposta);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async deletarAposta(req, res) {
        try {
            await Aposta.findByIdAndDelete(req.params.id);
            return res.status(204).send();
        }
        catch (err) {
            return res.status(400).json(err);
        }
    },
    async conferirAposta(req, res) {
        try {
            const aposta = req.query.aposta;
            const concurso = req.query.concurso;
            const dezenas_concurso = (await Concurso.findOne({concurso: concurso})).dezenas;
            const dezenas_aposta = (await Aposta.findOne({codigo: aposta})).dezenas;
            const dezenas_acerto = dezenas_concurso.filter(e => dezenas_aposta.includes(e));
            const total_acertos = dezenas_acerto.length;

            const resultado = {
                aposta,
                concurso,
                dezenas_concurso,
                dezenas_aposta,
                dezenas_acerto,
                total_acertos
            }
            return res.status(200).json(resultado);
        } catch (err) {
            return res.status(400).json(res);
        }
    }
}