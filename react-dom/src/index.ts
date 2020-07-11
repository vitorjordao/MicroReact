import { ReactNode } from 'nano-react';

interface ReactDOMType {
    render: (nodeReact: ReactNode, $root: HTMLElement) => void;
    reactNodeToHTML: Function;
}

function reactNodeToHTML(nodeReact: ReactNode) {
    let rootElement = document.createElement(nodeReact.tagName);

    nodeReact.props.children.forEach((elementChildren: ReactNode | string) => {
        if(typeof elementChildren === 'string') {
            rootElement.appendChild(document.createTextNode(elementChildren));
        } else {
            rootElement.appendChild(reactNodeToHTML(elementChildren))
        }
    })

    return rootElement;
}

let ReactDOM: ReactDOMType = {
    reactNodeToHTML,
    render: (nodeReact: ReactNode, $root: HTMLElement) => {

        const tree = reactNodeToHTML(nodeReact);

        $root.appendChild(tree);
    }
};

export default ReactDOM;