import { ROUTES } from "../enums/routes";
import { validatePassword } from "../helper";
import { UserCredentialType } from "../types/auth";
import * as yup from 'yup';

const isRequiredText = 'Campo requerido';

export const initialValues: UserCredentialType = {
  username: '',
  password: ''
}

export const validationSchema: yup.AnyObjectSchema = yup.object({
  username: yup.string().matches(/^[a-z]+$/,{ message: 'Solo minusculas'}).required(isRequiredText),
  password: yup.string().required(isRequiredText).test({ test: validatePassword, message: 'Formato incorrecto'}).matches(/^[a-zA-Z0-9\s]*$/,{ message: 'No caracteres especiales'})
})

export const BUTTONSNAVIGATE = [{ text:'Inicio', path: ROUTES.HOME },{ text:'Mis Imagenes', path: ROUTES.USERGALLERY }]

export const RADIUS = 4;
export const BORDER_COLOR = '#e5e5e5';
export const LOREM_TEXT_DESCRIPTION = 'Aenean id porttitor mi. Curabitur sollicitudin molestie ligula. Nullam consectetur eget libero eget rhoncus. Suspendisse elementum quam in dui tristique pellentesque. Nunc porta leo vel libero tristique, vitae iaculis nulla molestie. Ut placerat, lorem eu semper aliquet, enim nunc varius turpis, sit amet sollicitudin metus tellus venenatis lorem.'
