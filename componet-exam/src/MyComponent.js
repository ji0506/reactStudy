import PropTypes from 'prop-types'
import { Component } from 'react';

class MyComponent extends Component {
  render() {
    const {name, fanum,children} = this.props;
    return (
      <div>
        안녕하세요, 제이름은{name}입니다.<br></br>
        children 값은 {children} 입니다.
        <br></br>
        제가 좋아하는 숫자는 {fanum}  입니다.
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name : '기본이름'
};

MyComponent.propTypes = {
  name : PropTypes.string,
  fanum : PropTypes.number.isRequired
};


export default MyComponent;