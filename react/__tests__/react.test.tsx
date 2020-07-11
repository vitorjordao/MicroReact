import React from '../src/index';

describe('React structure', () => {
    it('should recive a map with contains structure of virtual DOM', () => {
        expect(React.createElement("p", null, "Test ", React.createElement("code", null, "into"), " test"))
            .toEqual({"tagName":"p","props":{"children":["Test ",{"tagName":"code","props":{"children":["into"]}}," test"]}});

        expect(<p>Test <code>into</code> test</p>)
            .toEqual({"tagName":"p","props":{"children":["Test ",{"tagName":"code","props":{"children":["into"]}}," test"]}});

        
        expect(<p>Test <code className="mytest" style={{color: "red"}}>into</code> test</p>)
            .toEqual({"tagName":"p","props":{"children":["Test ",{"tagName":"code","props":{"children":["into"],"className": "mytest","style":{"color":"red"}}}," test"]}});
    });
})