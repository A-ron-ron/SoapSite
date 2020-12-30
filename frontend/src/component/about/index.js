import React from 'react';
import { Container, Inner, Item, Title, Text } from './styles/about';


export default function About({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

About.Container = function AboutContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

About.Title = function AboutTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

About.Text = function AboutText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
