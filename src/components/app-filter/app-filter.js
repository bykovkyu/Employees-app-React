import { Component } from 'react';
import cn from 'classnames';

import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFlt: 'all',
    };
  }

  changeActiveFlt = (e) => {
    const name = e.target.name;
    this.setState({ activeFlt: name });
    this.props.onFilter(name);
  };

  render() {
    const { activeFlt } = this.state;
    return (
      <div className='btn-group'>
        <button
          name='all'
          className={cn('btn', {
            'btn-light': activeFlt === 'all',
            'btn-outline-light': activeFlt !== 'all',
          })}
          type='button'
          onClick={this.changeActiveFlt}>
          Все сотрудники
        </button>
        <button
          name='rise'
          className={cn('btn', {
            'btn-light': activeFlt === 'rise',
            'btn-outline-light': activeFlt !== 'rise',
          })}
          type='button'
          onClick={this.changeActiveFlt}>
          На повышение
        </button>
        <button
          name='salary'
          className={cn('btn', {
            'btn-light': activeFlt === 'salary',
            'btn-outline-light': activeFlt !== 'salary',
          })}
          type='button'
          onClick={this.changeActiveFlt}>
          ЗП больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
