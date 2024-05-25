import { useEffect, useState } from "react"
import { Mail, KeyRound } from "lucide-react"
import { Link } from "react-router-dom"
import InputField from '../components/form/InputField'
import Button from "../components/form/Button"
import { useAuth } from "../customHooks/useAuth"

function Login() {
  const { loginAction, error, loading } = useAuth();
  const [isShow, setIsShow] = useState(false)
  const [inputType, setInputType] = useState('password')
  const [localError, setLocalError] = useState(error)
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleValues = (e) => {
    let { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginAction(values)
  }

  const handleShow = () => {
    setIsShow(!isShow)
    setInputType(isShow ? 'password' : 'text')
  }

  useEffect(() => {
    if (error) {
      setLocalError(error);
      const timer = setTimeout(() => {
        setLocalError('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);


  return (
    <div className="container_form_general">
      <div className="login container_form">
        <h3 className="title_form">Iniciar sesión</h3>
        <form id="login-signup-form" onSubmit={handleSubmit}>
          {
            localError &&
            <div className="error_dialog">
              <small className="error_dialog_text">{error}</small>
            </div>
          }
          <InputField type={"email"} name="email" value={values.email} placeholder="Correo electrónico" onChange={handleValues} icon={Mail} />

          <InputField classN="form_input_password" classInput="password" type={inputType} name="password" value={values.password} placeholder="Contraseña" onChange={handleValues} handleShow={handleShow} icon={KeyRound} isShow={isShow} login={true} />

          <div id="forgot_password">
            <a className="forgot_password_link" href="#" >Olvidé mi contraseña</a>
          </div>
          

          <Button loading={loading} title={'Entrar'} />
        </form>
        <p className="form_link_question">¿No tienes cuenta?
          <Link to={"/signup"} id="form_link_account">Registrarme</Link>
        </p>
      </div>
    </div>
  )
}

export default Login