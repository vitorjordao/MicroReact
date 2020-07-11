interface Props {
    className: string;
    children: ReactNode[] | string[];
}

export interface ReactNode { 
    tagName: string; 
    props: Props;
}

interface ReactType {
    createElement: (elementName: Function | object | string, style: object | null, ...chields: any[]) => ReactNode;
}

let React: ReactType = {
    createElement: (elementName, props, ...children) => {

        const virtualProps: object = {
            ...props,
            children
        }

        if (typeof elementName === 'function') {
            return elementName(virtualProps)
        }

        return {
            tagName: elementName,
            props: virtualProps
        };
    }
};

export default React;