import { ReactNode } from 'nano-react';

interface ReactDOMType {
    render: (nodeReact: ReactNode, $root: HTMLElement) => void;
}

function reactNodeToHTML(nodeReact: ReactNode): HTMLElement {
    let rootElement = document.createElement(nodeReact.tagName);

    for(let styleTag in nodeReact.props.style) {
        (rootElement.style as { [key: string]: any })[styleTag] = (nodeReact.props.style as { [key: string]: any })[styleTag];
    }

    if(nodeReact.props.className)
        rootElement.className = nodeReact.props.className;

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
    render: (nodeReact: ReactNode, $root: HTMLElement) => {

        const tree = reactNodeToHTML(nodeReact);

        $root.appendChild(tree);
    }
};

export default ReactDOM;