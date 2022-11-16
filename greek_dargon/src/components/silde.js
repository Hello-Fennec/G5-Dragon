import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from './yourItem';

function slidee() {
    return {
        ReactDOM.render(
            <Carousel>
                <Item />
                <Item />
                <Item />
                <Item />
            </Carousel>,
            document.getElementById('root'),
        );
    };
}
