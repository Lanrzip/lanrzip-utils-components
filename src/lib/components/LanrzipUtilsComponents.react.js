import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { AiEditor } from 'aieditor';
import mermaid from 'mermaid';
import "aieditor/dist/style.css";
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const LanrzipUtilsComponents = (props) => {
    const {id, label, setProps, value} = props;

    // Editor
    const divRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    //初始化 AiEditor
    useEffect(() => {

        if (divRef.current) {
            
            const aiEditor = new AiEditor({
                element: divRef.current,
                placeholder: "点击输入内容...",
                content: 'AiEditor 是一个面向 AI 的开源富文本编辑器。 ',
                contentRetention: true,
                toolbarKeys: ["undo", "redo", "brush", "eraser",
                "|", "heading", "font-family", "font-size",
                "|",
                {
                    icon: "<svg .....>",
                    // html:"<div ...>",
                    onClick: (event, editor) => {
                        //点击事件
                        // console.log(editor.getHtml())  // AiEditor API
                        // console.log(event.target.value)
                        showModal();
                    },
                    tip: "鼠标移动上去的提示内容",
                },
                "printer", "fullscreen", "ai"
            ],
                ai: {
                    models: {
                        spark: {

                        }
                    },
                },
                image: {
                    customMenuInvoke: (editor) => {
                        showModal();  
                        // Dash中的使用方式：设置一个`nClicksUploadImage`参数，setProps({nClicksUploadImage: nClicksUploadImage+1})
                        // 再从Dash中的回调函数里捕获`nClicksUploadImage`参数，设置相应回调
                    },
                }
            })
            return ()=>{
                aiEditor.destroy();
            }
        }
    }, [])
    // Mermaid
    const chartRef = useRef(null);
    const renderChart = async () => {
        if (chartRef.current) {
          try {
            const { svg, bindFunctions } = await mermaid.render('mermaidChart', value);
            chartRef.current.innerHTML = svg;
            if (bindFunctions) {
              bindFunctions(chartRef.current);
            }
          } catch (error) {
            console.error('Error rendering Mermaid chart:', error);
          }
        }
      };
    useEffect(() => {
      renderChart();
    }, [value]);
    return (
        <div id={id}>
            ExampleComponent: {label}&nbsp;
            <input
                value={value}
                onChange={
                    /*
                        * Send the new value to the parent component.
                        * setProps is a prop that is automatically supplied
                        * by dash's front-end ("dash-renderer").
                        * In a Dash app, this will update the component's
                        * props and send the data back to the Python Dash
                        * app server if a callback uses the modified prop as
                        * Input or State.
                        */
                    e => setProps({ value: e.target.value })
                }
            />
            <div ref={divRef} style={{height: "600px"}} />
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <div ref={chartRef} />
        </div>
    );
}

LanrzipUtilsComponents.defaultProps = {};

LanrzipUtilsComponents.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default LanrzipUtilsComponents;
