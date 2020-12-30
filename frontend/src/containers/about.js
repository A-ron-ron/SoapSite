import React from 'react';
import { About } from '../component';

export function AboutContainer() {
    return (
        <About.Container>
            <About.Title>
                About Title
            </About.Title>
            <About.Text>
                About Text
            </About.Text>
        </About.Container>
    );
}