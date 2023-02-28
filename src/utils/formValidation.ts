import { object, string } from 'yup';

const FormValidation = object({
  name: string().required('Todos os campos devem ser preenhidos, incluindo o campo nome.'),
  lastName: string().required('Todos os campos devem ser preenhidos, incluindo o campo sobrenome.'),
  email: string().email('Deve ser fornecido um email válido para enviar a mensagem.').required('Todos os campos devem ser preenhidos, incluindo o campo email.'),
  subject: string().required('Todos os campos devem ser preenhidos, incluindo o campo assunto.'),
  message: string().required('Todos os campos devem ser preenhidos, incluindo o campo mensagem.'),
});

export default FormValidation;