import { useCallback, useEffect, useState, useRef } from 'react';
import { Calendar } from 'react-calendar';
import * as d3 from 'd3';

import HeatMap from '../Charts/HeatMap/HeatMap';

import './ContentSchedulingWithHeatMapAndDropdowns.css';

const ContentSchedulingWithHeatMapAndDropdowns = (props) => {

    const [selectedDropDownFilters, setSelectedDropDownFilters] = useState({
        channelGenre: '',
        channle: '',
        metric: '',
        tg: '',
        market: '',
    });

    const [isClickOnDropDownFilterApply, setIsClickOnDropDownFilterApply] = useState(false);

    let dropDownMenuForChannelGenre = {
        channelGenre: {
            id: 'channelGenre',
            label: 'Channel Genre',
            options: [
                'Kids',
                'Drama',
                'Entertainment',
            ],
        },
        channle: {
            id: 'channle',
            label: 'Channel',
            options: [
                'Zee TV',
                'Zee Cinema',
            ],
        },
        metric: {
            id: 'metric',
            label: 'Metric',
            options: [
                'Viewers',
                'Watchtime',
            ],
        },
        tg: {
            id: 'tg',
            label: 'TG',
            options: [
                'Viewers',
                'Watchtime',
            ],
        },
        market: {
            id: 'market',
            label: 'Market',
            options: [
                'Gujarat',
                'Maharashtra',
                'Punjab'
            ],
        },

    }

    let emptyOptions = {
        id: 'empty',
        label: 'empty',
        options: [],
    }


    const handleOnDropDownMenuSelectionChange = (filterName, value, event) => {
        setSelectedDropDownFilters({
            ...selectedDropDownFilters,
            [filterName]: value,
        });
    }

    return (
        <div className='content-scheduling-with-heatmap-dropdowns-container'>
            <div>
                <div className='content-scheduling-with-heatmap-dropdowns-dropdown-filters-container'>
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.channelGenre}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={selectedDropDownFilters.channelGenre ? dropDownMenuForChannelGenre.channle : { ...emptyOptions, label: 'Channel' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={selectedDropDownFilters.channle ? dropDownMenuForChannelGenre.metric : { ...emptyOptions, label: 'Metric' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={selectedDropDownFilters.metric ? dropDownMenuForChannelGenre.tg : { ...emptyOptions, label: 'TG' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={selectedDropDownFilters.tg ? dropDownMenuForChannelGenre.market : { ...emptyOptions, label: 'Market' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={selectedDropDownFilters.market ? dropDownMenuForChannelGenre.market : { ...emptyOptions, label: 'Date' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                        isCalendar={true}
                    />
                    <button className='dropdown-filers-apply-button' onClick={(event) => setIsClickOnDropDownFilterApply(true)}>Apply</button>
                </div>
                <div className='heatmap-container'>
                    <div className='heatmap-child-container'>
                        {/* {selectedDropDownFilters.channelGenre &&
                            selectedDropDownFilters.channle &&
                            selectedDropDownFilters.market &&
                            selectedDropDownFilters.metric &&
                            selectedDropDownFilters.tg &&
                            isClickOnDropDownFilterApply ?
                            < HeatMap /> :
                            <div className='empty-heatmap-container'>
                               Start to select the filters
                            </div>
                        } */}
                        
                        <HeatMap />
                    </div>
                </div>
            </div>
        </div>
    )
}

const DropDownMenu = (props) => {

    const { dropDownMenu, handleOnDropDownMenuSelectionChange, isCalendar = false } = props;

    const dropDownMenuRef = useRef(null);

    const [isShowDropDownMenu, setIsShowDropDownMenu] = useState(false);
    const [selectedDropDownOption, setSelectedDropDownOption] = useState('');
    const [selectedFilterDate, setSelectedFilterDate] = useState();

    let date = new Date();
    date.setDate(date.getDate() - 30);

    useEffect(() => {
        const handleOnClickOutSide = (event) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(event.target)) {
                setIsShowDropDownMenu(false)
            }
        };

        document.addEventListener('click', handleOnClickOutSide, true);

        return () => document.removeEventListener('click', handleOnClickOutSide, true);
    }, [isShowDropDownMenu]);

    return (
        <div className='drop-down-menu-contaier' ref={dropDownMenuRef} >
            {!isCalendar ?
                <label className='drop-down-menu-label'>{dropDownMenu.label}</label> :
                <label className='drop-down-menu-label'>Date</label>
            }
            <div className='drop-down-menu'>
                {
                    !isCalendar ?
                        <div className='drop-down-menu-selection-box'
                            onClick={(event) => {
                                setIsShowDropDownMenu(!isShowDropDownMenu);
                            }}
                        >
                            {dropDownMenu.options.length === 0 ? 'Select' :
                                selectedDropDownOption ?
                                    selectedDropDownOption :
                                    <p className='drop-down-menu-selection-box-placeholder'>Select</p>
                            }


                            {/* <p className='drop-down-menu-selection-box-placeholder'>{Select}</p> */}
                            <div className='drop-down-menu-selection-box-down-arrow-icon'>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00893 0L4 3.01432L0.991063 0L0 0.992838L4 5L8 0.992838L7.00893 0Z" fill="#808080" />
                                </svg>

                            </div>
                        </div>
                        :
                        <div className='drop-down-menu-selection-box'
                            onClick={(event) => {
                                setIsShowDropDownMenu(!isShowDropDownMenu);
                            }}
                        >
                            {/* {dropDownMenu.options.length === 0 ? '---' :
                                selectedDropDownOption ?
                                    selectedDropDownOption :
                                    <p className='drop-down-menu-selection-box-placeholder'>Select</p>
                            } */}
                            {
                                <p className='drop-down-menu-selection-box-placeholder'>Select</p>
                            }
                            <div className='drop-down-menu-selection-box-down-arrow-icon'>
                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3922 1.45452H9.65777V0.545476C9.65777 0.244143 9.4113 0 9.10731 0C8.80322 0 8.55684 0.244143 8.55684 0.545476V1.45452H4.15432V0.545476C4.15432 0.244143 3.90785 0 3.60386 0C3.29977 0 3.05339 0.244143 3.05339 0.545476V1.45452H2.31907C1.20433 1.45462 0.30107 2.34962 0.300781 3.45452V10C0.301157 11.1048 1.20416 11.9996 2.31907 12H10.3922C11.5072 11.9996 12.4101 11.1048 12.4105 10.0001V3.45462C12.4102 2.34952 11.507 1.45471 10.3922 1.45443L10.3922 1.45452ZM2.31902 2.54529H3.05344V2.7273C3.05344 3.02854 3.29982 3.27277 3.60391 3.27277C3.9079 3.27277 4.15437 3.02854 4.15437 2.7273L4.15428 2.54529H8.55704V2.7273C8.55704 3.02854 8.80341 3.27277 9.1075 3.27277C9.4115 3.27277 9.65797 3.02854 9.65797 2.7273V2.54529H10.3922C10.8987 2.54631 11.3086 2.95248 11.3096 3.4546V3.99802L1.40169 3.99812V3.45469C1.40263 2.95236 1.8126 2.5464 2.31905 2.54528L2.31902 2.54529ZM10.3922 10.9093H2.31902C1.81258 10.9083 1.40243 10.502 1.40166 10.0003V5.08886H11.3096V10.0003C11.3085 10.502 10.8986 10.9082 10.3921 10.9093H10.3922Z" fill="#808080" />
                                </svg>
                            </div>
                        </div>

                }

                {
                    isShowDropDownMenu &&
                    <div className='drop-down-menu-options-container'>
                        {!isCalendar ?
                            dropDownMenu.options.map((item, index) => {
                                return (
                                    <div className='drop-down-menu-option' key={item}
                                        onClick={(event) => {
                                            setSelectedDropDownOption(item);
                                            setIsShowDropDownMenu(!isShowDropDownMenu)
                                            handleOnDropDownMenuSelectionChange(dropDownMenu.id, item)
                                        }}
                                    >
                                        {item}
                                    </div>
                                )
                            }) :
                            <div className='dropdown-calender-container'>
                                <Calendar
                                    minDate={date}
                                    maxDate={new Date()}
                                    calendarType="US"
                                    locale="en"
                                    onChange={setSelectedFilterDate}
                                    value={selectedFilterDate}
                                />
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )

}

export default ContentSchedulingWithHeatMapAndDropdowns;