import React from 'react';
import { render } from '@testing-library/react';

import Title from 'components/text-elements/Title';

describe('Title', () => {
    test('renders the Title component', () => {
        render(
            <Title title="Title" />
        );
    });
});