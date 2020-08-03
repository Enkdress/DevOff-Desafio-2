export default function Encode(req, res){
    if (req.method == 'POST') {
        // recibir el string y acomodarlo en la matriz inicial
        const initMatrix = [];
        const toEncodeMessage = req.body.mensaje;
        const L = req.body.vueltas;

        let counter = 0;
        for (let i = 0; i < toEncodeMessage.length; i++) {
            if (counter < toEncodeMessage.length) {;
                initMatrix.push([]); // create the rows
                for (let j = 0; j < L; j++) {
                    toEncodeMessage[counter] ? initMatrix[i].push(toEncodeMessage[counter]) : initMatrix[i].push(' '); // add the letter for each row
                    counter++;
                }
            }
        }

        // codificar la matriz
        const transpuestMatrix = [];

        for (let i = 0; i < initMatrix.length - 1; i++) {
            transpuestMatrix.push([]); // rows
        }
        
        for (let i = 0; i < initMatrix.length; i++) {
            for (let j = 0; j < L; j++) {
                transpuestMatrix[j].push(initMatrix[i][j]);
            }
        }

        // tomar la matriz y hacerla un string
        let messageEncoded = '';
        for (let i = 0; i < transpuestMatrix.length; i++) {
            for (let j = 0; j < transpuestMatrix[i].length; j++) {
                messageEncoded += transpuestMatrix[i][j];
            }
        }

        res.json({mensaje: messageEncoded})

    } else {
        res.status(400);
    }
}