import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schemaMap = Joi.object({
    username: Joi.string().required().label('Username field'),
    password: Joi.string().required().label('Password field')
  });
  schema = Joi.object(this.schemaMap)

  doSubmit = () => {
    console.log("Submitted")
  }

  render() {
    

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
