import React          from 'react';
import classnames     from 'classnames';
import connectField   from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import injectName     from 'uniforms/injectName';
import joinName       from 'uniforms/joinName';

import AutoField from './AutoField';

const Nest = ({
    children,
    className,
    disabled,
    error,
    errorMessage,
    fields,
    itemProps,
    label,
    name,
    showInlineError,
    ...props
}) =>
    <div className={classnames(className, {disabled, error}, 'grouped fields')} {...filterDOMProps(props)}>
        {label && (
            <div className="field">
                <label>
                    {label}
                </label>
            </div>
        )}

        {!!(errorMessage && showInlineError) && (
            <div className="ui red basic label">
                {errorMessage}
            </div>
        )}

        {children ? (
            injectName(name, children)
        ) : (
            fields.map(key =>
                <AutoField key={key} name={joinName(name, key)} {...itemProps} />
            )
        )}
    </div>
;

export default connectField(Nest, {includeInChain: false});