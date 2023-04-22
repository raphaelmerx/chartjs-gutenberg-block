import { useState } from '@wordpress/element';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { data } = attributes;

    // Sample data format: "10,20,30,40,50"
    const [dataString, setDataString] = useState(data.join(','));

    const updateData = (newDataString) => {
        setDataString(newDataString);
        const newDataArray = newDataString
            .split(',')
            .map((value) => parseInt(value.trim()))
            .filter((value) => !isNaN(value));
        setAttributes({ data: newDataArray });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Bar Chart Data">
                    <TextControl
                        label="Data (comma-separated numbers)"
                        value={dataString}
                        onChange={updateData}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="chartjs-block">
                <p>Bar Chart Placeholder</p>
                <p>Data: {dataString}</p>
            </div>
        </>
    );
}
