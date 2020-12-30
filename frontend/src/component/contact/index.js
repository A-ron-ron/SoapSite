import React from 'react';
import { Container, Inner, Item, Title, Email } from './styles/contact';


export default function Contact({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

Contact.Container = function ContactContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Contact.Email = function ContactEmail({ children, ...restProps }) {
    return <Email {...restProps}>{children}</Email>;
}
