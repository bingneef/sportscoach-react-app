import React, { memo } from 'react';
import styled from 'styled-components'

import { hoc } from '../../contexts/person';

const Div = styled.div`
  background-color: purple;
`

export const Item = memo((props) => {
  return (
    <Div>
      <button onClick={props.removeAll}>
        { props.label }
      </button>
    </Div>
  )
});

export default hoc((store, props) => ({
  label: store.ids,
  removeAll: store.someActions.removeAll,
}))(Item);
