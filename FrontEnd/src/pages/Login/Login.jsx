import './login.scss'
import PropTypes from 'prop-types'
import { useState} from "react" 
import { Navigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { getLogin } from '../../utils/api.js'
import { getToken } from '../../redux/features/token.js'
import { selectToken } from '../../redux/selectors'
 // Console log with the provided information
 console.log(`
 - First Name: Tony
 - Last Name: Stark
 - Email: tony@stark.com
 - Password: password123
 
 - First Name: Steve
 - Last Name: Rogers
 - Email: steve@rogers.com
 - Password: password456
 `)
 export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [loginErreur, setLoginErreur] = useState("")
    const [loginStatus, setLoginStatus] = useState(0)

    const token = useSelector(selectToken)

    const dispatch = useDispatch()
    const tokenAdd = (token) => {
        if(remember === true) {
           localStorage.setItem("token", token)
        }
        dispatch(getToken(token))
    }
    tokenAdd.prototype = {
        token: PropTypes.string.isRequired,
    }

     const handleRemember = (event) => {
        setRemember(event.target.checked)
    }
    handleRemember.prototype = {
        event: PropTypes.object.isRequired,
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const login = getLogin({"email": email, "password": password})       
        login.then(obj => {
            if((obj.status !== 400) && (obj.status !== 401) && (obj.status !== 500)) {
                setLoginStatus(obj.status)
                tokenAdd(obj.token)
            } else {
                setLoginErreur(obj.message)
            }
        },)
    }
    handleSubmit.prototype = {
        event: PropTypes.object.isRequired,
    }
    if( (token !== null) ||(loginStatus === 200) ) {
        return <Navigate to="/profil" /> 
    } 

    return(
        <div className="container">
          <main className="main bgDark">
            <section className= "signInContent">
              <i className="fa fa-user-circle"></i>
              <h1 className="title">Sign In</h1>
              <form onSubmit={handleSubmit}>
                <div className="inputWrapper">
                    <label className="bold" htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="inputWrapper">
                    <label className="bold" htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="inputRemember">
                    <input type="checkbox" id="remember-me" onChange={handleRemember}  />
                    <label className="labelRemember" htmlFor="remember-me">Remember me</label>
                </div>
                <div className="error"> {loginErreur}</div>
                <button type="submit" className="signInButton" >Sign In</button> 
              </form>            
            </section>
          </main>
        </div>
    )
}