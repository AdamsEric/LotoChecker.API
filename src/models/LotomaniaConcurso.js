const mongoose = require('mongoose');

const LotomaniaConcursoSchema = new mongoose.Schema({
    concurso: {
        type: Number,
        required: true,
    },
    dezenas: {
        type: [String],
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('LotomaniaConcurso', LotomaniaConcursoSchema);