import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Item } from '../components/example/context';

storiesOf('Item', module).add('Item', () => <Item label={'Epic'} removeAll={action('removeAll')} />);
