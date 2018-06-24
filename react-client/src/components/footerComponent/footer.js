import React, { Component } from 'react';
import GitLogo from '../../resources/GitHub-Mark-32px.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
            <div className = "links">
                <a href = "https://github.com/maxCut">Github</a>
                <a href = "mailto:max.mesirow@gmail.com">Email</a>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
