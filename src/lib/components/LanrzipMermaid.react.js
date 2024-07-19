import React, { useEffect,useRef } from 'react';
import PropTypes from 'prop-types';

import mermaid from 'mermaid';


mermaid.initialize({ startOnLoad: false });

// const LanrzipMermaid = (props) => {
//     let {id, value, setProps} = props;
//     const graphDivRef = useRef(null);

//     useEffect(() => {
//         const drawDiagram = async () => {
//         const element = graphDivRef.current;
//         const graphDefinition = 'graph TB\na-->b';
//         const { svg } = await mermaid.render('graphDiv', graphDefinition);
//         element.innerHTML = svg;
//         };

//         drawDiagram();
//     }, [value]);

//     return <div id="graphDiv" ref={graphDivRef}></div>;
//     };

const LanrzipMermaid = (props) => {
    let {id, value, setProps} = props;

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
  
    return <div ref={chartRef} />;


    // useEffect(() => {
    //     mermaid.initialize({ startOnLoad: true });
    //     mermaid.contentLoaded();
    //     console.log(value)
    // }, [value]);

    // const renderElement = (
    //     <div>
    //         {/* <h1>{label}</h1>
    //         <p>{tip}</p> */}
    //         <pre className="mermaid">
    //           {value}
    //         </pre>
    //     </div>
    // );
    // return renderElement;

  };
  

LanrzipMermaid.propTypes = {
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


export default LanrzipMermaid;