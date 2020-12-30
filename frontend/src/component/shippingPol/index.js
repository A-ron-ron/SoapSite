import React from 'react';
import { Container, Inner, Item, Title, Text } from './styles/shippingPol';


export default function ShippingPol({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

ShippingPol.Container = function ShippingPolContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

ShippingPol.Title = function ShippingPolTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

ShippingPol.Text = function ShippingPolText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
