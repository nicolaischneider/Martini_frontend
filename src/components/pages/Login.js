import axios from 'axios';
import React from 'react';
import mail from '../layout/mail.png';
import lock from '../layout/lock.png';

class Login extends React.Component {
    state = {
        email:"",
        password:""
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {
            email: this.state.email,
            pw: this.state.password
        }
        console.log(data)

        //axios.post ('http://46.101.237.138/login/', data)
        axios.post('http://127.0.0.1:8000/login/', data)
            .then( res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return(
            <form className="p-3 mt-5 w-25 mx-auto bg-dark rounded-lg" onSubmit={this.handleSubmit}>
                    <h1 class="text-light" >Welcome!</h1>   
                    <h5 class="text-light">Please log in to your Martini account.</h5>  
                        <div className="input-group-prepend pb-2 pt-2" >
                            <span class="input-group-text text-dark" style={{background: 'grey', border: 'grey'}}><img src={mail} alt="Mail" className="mail" /></span>
                            <input type="email" class="form-control" name="email" placeholder="email" required onChange={this.handleChange}/>
                        </div>
                        <div className="input-group-prepend pb-2 pt-2" >
                            <span class="input-group-text text-dark" style={{background: 'grey', border: 'grey'}}><img src={lock} alt="Lock" className="lock" /></span>
                            <input type="password" class="form-control" name="password" placeholder="password" required onChange={this.handleChange}/>
                        </div>
                        <div className="form-group pt-2">
                            <button className= "btn btn-primary btn-block" style={{background: 'grey', border: 'grey'}} type="submit" onSubmit={this.handleSubmit}>Log in</button>
                        </div>
                    </form>
                    
            
        )
    }
}

export default Login;