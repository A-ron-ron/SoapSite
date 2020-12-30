import React from 'react';
import { Container, Inner, Item, Title, Section, UL, Button, LI } from './styles/sidebar';


export default function Sidebar({ children, ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

Sidebar.Container = function SidebarContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Sidebar.Button = function SidebarButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

Sidebar.Section = function SidebarSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>;
}

Sidebar.Title = function SidebarTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Sidebar.LI = function SidebarLI({ children, ...restProps }) {
    return <LI {...restProps}>{children}</LI>;
}

Sidebar.UL = function SidebarUL({ children, ...restProps }) {
    return <UL {...restProps}>{children}</UL>;
}