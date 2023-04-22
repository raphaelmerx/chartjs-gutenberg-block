import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import './editor.css';
import './style.css';


registerBlockType('chartjs-gutenberg-block/bar-chart', {
    title: __('Bar Chart', 'chartjs-gutenberg-block'),
    description: __('A bar chart block using ChartJS.', 'chartjs-gutenberg-block'),
    icon: 'chart-bar',
    category: 'widgets',
    attributes: {
        data: {
            type: 'array',
            default: [],
        },
    },
});
