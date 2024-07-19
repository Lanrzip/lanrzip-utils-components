import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { AiEditor } from 'aieditor';
import "aieditor/dist/style.css";

const LanrzipAiEditor = (props) => {
    // let {id, label, value, tip} = props;

    //定义 ref
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
                "|", "heading", "font-family", "font-size", "image",
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

    return (
        <>
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
        </>
    );
}

LanrzipAiEditor.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

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


export default LanrzipAiEditor;