import express from 'express';
import { Request, Response } from 'express';
import { isCPF, isCNPJ, isCNH } from 'validation-br';
import 'dotenv/config.js';

const app = express()

app.use(express.json());

app.get('/valida-cpf/:cpf', (req: Request<{ cpf: string | number }>, res: Response) => {
    if (isCPF(req.params.cpf)) {
        return res.send('CPF válido.');
    } else {
        return res.send('CPF inválido');
    }
});

app.get('/valida-cnpj/:cnpj', (req: Request<{ cnpj: string | number }>, res: Response) => {
    if (isCNPJ(req.params.cnpj)) {
        return res.send('CNPJ válido.');
    } else {
        return res.send('CNPJ inválido');
    }
});

app.get('/valida-cnh/:cnh', (req: Request<{ cnh: string | number }>, res: Response) => {
    if (isCNH(req.params.cnh)) {
        return res.send('CNH válido.');
    } else {
        return res.send('CNH inválido');
    }
});
    
app.listen(process.env.API_PORT, () => {
    console.log(`Server running at port ${process.env.API_PORT}.`);
});