import React from 'react';
import { Sidebar } from '../component';

export function SidebarContainer() {
    return (
    <Sidebar.Container>
        <Sidebar.Button onClick={closeMenu}>X</Sidebar.Button>
            <Sidebar.Section>
            <Sidebar.Title>Shop by catagory</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                    <Link to="/" >All products</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/bar" params={{category: "bar"}}>Bars</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/face" category="face" >Face</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/bath" category="bath" >Bath</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/body" category="body" >Body</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/hair" category="hair" >Hair</Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
            <Sidebar.Section>
            <Sidebar.Title>About us.</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                    <Link to="/about">About</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/contact">Contact</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/faq">FAQ</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/privacy">Privacy Policy</Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Link to="/shippingPolicy">Shipping and Returns</Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
            <Sidebar.Section>
            <Sidebar.Title>About You.</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                <Link to="/profile">Edit Profile</Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
    </Sidebar.Container>
    );
}