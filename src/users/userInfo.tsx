import * as React from 'react';
import { User } from './state/user.model';
import { ChangeEvent, FormEvent } from 'react';

interface Props {
  active: User | null;
  onSave: Function;
}

interface State {
  active: User | null;
}

/**
 * In real-life you'll use form library
 */
export class UserInfo extends React.PureComponent<Props, State> {
  state: { active: User | null } = { active: this.props.active };

  handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.updateEmail(event.target.value);
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSave({ email: this.state.active!.email });
  };

  componentWillReceiveProps({ active }: Props) {
    if (active) {
      this.updateEmail(active.email);
    }
  }

  updateEmail(email: string) {
    this.setState({
      active: {
        email
      }
    } as State);
  }

  render() {
    const { email } = this.state.active || {};
    return !this.state.active ? null : (
      <div style={{padding:"50px"}}> 
        <form onSubmit={this.handleSubmit}>
          <input type="email" onChange={this.handleEmailChange} value={email} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
