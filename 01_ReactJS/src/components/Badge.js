import React from 'react'; // Importante para usar RXJS
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {
    return <div className="badge">
        <div className="badge_header">
          <img src={ confLogo } alt="Logo de la conferencia"/>
        </div>
        <div className="badge_section-name">
          <Gravatar className="badge_avatar" email={this.props.email}/>
          {/* <img className="badge_avatar" src={this.props.avatar} alt="Avatar"/> */}
          <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
        </div>
        <div className="badge_section-info">
          <p>{this.props.jobTitle}</p>
        </div>
        <div className="badge_footer">
          @{this.props.twitter}
        </div>
      </div>
  }
}

export default Badge;