import React from 'react';
import PropTypes from 'prop-types';
import { LanrzipUtilsComponents as RealComponent } from '../LazyLoader';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const LanrzipUtilsComponents = (props) => {
    return (
        <React.Suspense fallback={null}>
            <RealComponent {...props}/>
        </React.Suspense>
    );
};

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

export const defaultProps = LanrzipUtilsComponents.defaultProps;
export const propTypes = LanrzipUtilsComponents.propTypes;
