const yup = require('yup');
const User = require('../models/User');


const userSchema = yup.object().shape({
    name: yup.string().required("Name required").min(3, "Minimum 3 characters"),
    email: yup.string().email("Invalid format email").required("Email required"),
    password: yup.string().required("Password required").min(4, "Minimum 4 characters"),
    cpf: yup.string().required("CPF obrigatório")
        .min(11, "Numbers only, minimum 11 digits").max(11, "Numbers only, maximum 11 digits"),
    date_of_birth: yup.date().required("Date of birth required"),
    gender: yup.string().required(
        'Gender required, valid formats: Male', 'Female', 'Masculino', 'Feminino', 'Other', 'Outro'),
    adress: yup.string().required("Adress required").min(3, "Minimum 3 characters"),
});

async function validating(req, res, next) {
    try {
        const user = await userSchema.validate(req.body);
        const cpf = user.cpf;
        const email = user.email;

        console.log(cpf);
        const existsCpf = await User.findOne({ where: { cpf: cpf } });
        console.log(existsCpf);
        if (existsCpf) {
            return res.status(400).json({ message: 'CPF already exists' });
        }
        const existsEmail = await User.findOne({ where: { email: email } });
        if (existsEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        next();
    } catch (error) {
        return res.status(400).json({ message: error.errors });
    }
}

module.exports = validating;