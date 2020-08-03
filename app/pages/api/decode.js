export default function Decode(req, res){
    if (req.method === 'POST') {
        // recibir el string y acomodarlo en la matriz inicial
        const encodeMessage = req.body.mensaje;
        const L = req.body.vueltas;
        const encodedMatrix = [];
        const decodedMatrix = [];

        let counter = 0;
        for (let i = 0; i < encodeMessage.length; i++) {
            if (counter < encodeMessage.length) {;
                encodedMatrix.push([]); // create the rows
                for (let j = 0; j < encodeMessage.length / L; j++) {
                    encodeMessage[counter] ? encodedMatrix[i].push(encodeMessage[counter]) : encodedMatrix[i].push(' '); // add the letter for each row
                    counter++;
                }
            }
        }

        for (let i = 0; i < encodedMatrix[0].length; i++) {
            decodedMatrix.push([]); // rows
        }
        
        // decode the encoded matrix
        for (let i = 0; i < encodedMatrix.length; i++) {
            for (let j = 0; j < encodeMessage.length / L; j++) {
                decodedMatrix[j].push(encodedMatrix[i][j]);
            }
        }

        // tomar la matriz y hacerla un string
        let messageDecoded = '';
        for (let i = 0; i < decodedMatrix.length; i++) {
            for (let j = 0; j < decodedMatrix[i].length; j++) {
                messageDecoded += decodedMatrix[i][j];
            }
        }

        res.json({mensaje: messageDecoded});

    } else {
        res.status(405);
    }
}