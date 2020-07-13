import ReactDOM from '../src/index';
import { ReactNode } from 'nano-react';

describe('ReactDOM structure', () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });
      
    it('should created an elements in the body', () => {
        const vitualDOM: ReactNode = { "tagName": "p", "props": { "children": ["Test ", { "tagName": "code", "props": { "children": ["into"] } }, " test"] } };

        expect(document.body.innerHTML).toEqual("");

        ReactDOM.render(
            vitualDOM,
            document.getElementsByTagName("body")[0]
        );
        
        expect(document.body.innerHTML).toEqual("<p>Test <code>into</code> test</p>");
    });

    it('should created a styled element in the body', () => {
        const vitualDOM: ReactNode = { "tagName": "p", "props": { "className": "class1", "style": {"backgroundColor": "black"} , "children": ["Test ", { "tagName": "code", "props": { "children": ["into"] } }, " test"] } };

        expect(document.body.innerHTML).toEqual("");

        ReactDOM.render(
            vitualDOM,
            document.getElementsByTagName("body")[0]
        );
        
        expect(document.body.innerHTML).toEqual("<p style=\"background-color: black;\" class=\"class1\">Test <code>into</code> test</p>");
    });
})