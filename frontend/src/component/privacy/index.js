import React from 'react';
import { Container, Inner, Item, Title, Text } from './styles/privacy';


export default function Privacy({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

Privacy.Container = function PrivacyContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Privacy.Title = function PrivacyTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Privacy.Text = function PrivacyText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
