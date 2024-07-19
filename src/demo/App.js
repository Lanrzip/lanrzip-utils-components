/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';
import Button from 'antd/es/button';

import {
    LanrzipUtilsComponents,
    LanrzipMermaid,
    LanrzipAiEditor,
    LanrzipXRender,
    LanrzipSelectPopup,
    LanrzipSlick
} from '../lib';
import './App.css';

const App = () => {
    const mermaidGraph = `
        flowchart TD
            A[fa:fa-user How] -->|输入网址| B(打开Mermaid在线编辑器)
            B --> C[编辑流程图脚本]
            C --> D1{输出图片}
            C --> D2{拷贝脚本}
            D1 -->|下载| E1[fa:fa-image PNG文件]
            D1 -->|下载| E2[fa:fa-image SVG文件]
            D1 -->|跳转| E3[fa:fa-external-link PNG图片本域网址]
            D1 -->|跳转| E4[fa:fa-external-link SVG图片本域网址]
            D1 -->|跳转| E5[fa:fa-external-link SVG图片Kroki网址]
            D2 -->|嵌入到| F1[fa:fa-code HTML]
            D2 -->|集成到| F2[fa:fa-code 其他应用]
            D2 -->|保存到| F3[fa:fa-file-code mmd文件]
            F3 -->|输入文件| G{mermaid-cli处理}
            G -->|输出图片| H1[fa:fa-image PNG文件]
            G -->|输出图片| H2[fa:fa-image SVG文件]
            G -->|输出图片| H3[fa:fa-file-pdf PDF文件]
      `;
    const [state, setState] = useState({ value: mermaidGraph, label: 'Type Here' });
    const setProps = (newProps) => {
        setState(newProps);
    };


    const [chart, setChart] = useState({ value: mermaidGraph, label: 'Mermaid 流程图测试', tip: '这是一个 mermaid 流程图:' });
    const updateGraph = (e) => {
        setChart(
            {
                ...chart,
                value: e.target.value
            }
        );
    }
    return (
        <div>
            <LanrzipUtilsComponents
                setProps={setProps}
                {...state}
            />
            {/* <textarea
                value={chart.value}
                onChange={updateGraph}
            /> */}
            {/* <LanrzipMermaid
                {...chart}
                value={chart.value}
            /> */}
            {/* <LanrzipMermaid
                chart={chart.value}
            /> */}
            {/* <Editor /> */}
            {/* <LanrzipXRender/> */}

            <LanrzipSelectPopup
                setProps={setProps}
            >
                <Button type="primary">点击弹出</Button>
            </LanrzipSelectPopup>

            <LanrzipSlick>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </LanrzipSlick>

        </div>
    )
};


export default App;
