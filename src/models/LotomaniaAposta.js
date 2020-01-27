const mongoose = require('mongoose');

const LotomaniaApostaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
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

mongoose.model('LotomaniaAposta', LotomaniaApostaSchema);