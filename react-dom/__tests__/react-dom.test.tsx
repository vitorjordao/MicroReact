import ReactDOM from '../src/index';
import { ReactNode } from 'nano-react';

describe('ReactDOM structure', () => {
    it('should ', () => {
        const vitualDOM: ReactNode = { "tagName": "p", "props": { "children": ["Test ", { "tagName": "code", "props": { "children": ["into"] } }, " test"] } };

        expect(document.body.innerHTML).toEqual("");

        ReactDOM.render(
            vitualDOM,
            document.getElementsByTagName("body")[0]
        );
        
        expect(document.body.innerHTML).toEqual("<p>Test <code>into</code> test</p>");
    });
})