import * as React from 'react';
import { User } from './state/user.model';

interface Props {
  user: User;
  onEdit: Function;
}

export class UserDetails extends React.PureComponent<Props> {
  render() {
    const { avatar, username, email, id } = this.props.user;

    return (
      <li className="collection-item avatar">
        <img src={avatar} className="circle" />
        <span className="title">{username}</span>
        <p>{email}</p>
        <span className="secondary-content">
          <i
            className="material-icons"
            onClick={this.props.onEdit.bind(null, id)}
          >
            edit
          </i>
        </span>
      </li>
    );
  }
}

interface UsersProps {
  users: User[];
  onSelect: Function;
}

export class Users extends React.PureComponent<UsersProps> {
  render() {
    console.log('Users - rerender');
    const users = this.props.users.map((user: any) => {
      return (
        <UserDetails key={user.id} user={user} onEdit={this.props.onSelect} />
      );
    });

    return <ul className="collection">{users}</ul>;
  }
}
