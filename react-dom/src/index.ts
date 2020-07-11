import { ReactNode } from 'nano-react';

interface ReactDOMType {
    render: Function;
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
        console.log(
            JSON.stringify(nodeReact, null, 2)
        );

        const tree = reactNodeToHTML(nodeReact);

        $root.appendChild(tree);
    }
};

export default ReactDOM;