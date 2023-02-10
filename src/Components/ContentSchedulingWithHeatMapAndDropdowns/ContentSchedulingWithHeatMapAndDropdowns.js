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
        tg: 'Viewers',
        market: 'Gujarat',
        date: new Date(),
    });

    const [isClickOnDropDownFilterApply, setIsClickOnDropDownFilterApply] = useState(false);

    let dropDownMenuForChannelGenre = {
        channelGenre: {
            id: 'channelGenre',
            label: 'Channel Genre',
            isMendatory: true,
            options: [
                'Kids',
                'Drama',
                'Entertainment',
            ],
        },
        channle: {
            id: 'channle',
            label: 'Channel',
            isMendatory: true,
            options: [
                'Zee TV',
                'Zee Cinema',
            ],
        },
        metric: {
            id: 'metric',
            label: 'Metric',
            isMendatory: true,
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
                        // isMendatory={true}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.channle}
                        // dropDownMenu={selectedDropDownFilters.channelGenre ? dropDownMenuForChannelGenre.channle : { ...emptyOptions, label: 'Channel' }}
                        // isMendatory={true}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    {/* <MultiSelectDropDownMenu /> */}
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.metric}
                        // dropDownMenu={selectedDropDownFilters.channle ? dropDownMenuForChannelGenre.metric : { ...emptyOptions, label: 'Metric' }}
                        // isMendatory={true}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.tg}
                        // dropDownMenu={selectedDropDownFilters.metric ? dropDownMenuForChannelGenre.tg : { ...emptyOptions, label: 'TG' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.market}
                        // dropDownMenu={selectedDropDownFilters.tg ? dropDownMenuForChannelGenre.market : { ...emptyOptions, label: 'Market' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.market}
                        // dropDownMenu={selectedDropDownFilters.market ? dropDownMenuForChannelGenre.market : { ...emptyOptions, label: 'Date' }}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                        isCalendar={true}
                    />
                    <button className='dropdown-filers-apply-button' onClick={(event) => {
                        selectedDropDownFilters.channelGenre &&
                            selectedDropDownFilters.channle &&
                            selectedDropDownFilters.market &&
                            selectedDropDownFilters.metric &&
                            selectedDropDownFilters.tg ?
                            setIsClickOnDropDownFilterApply(true) :
                            setIsClickOnDropDownFilterApply(false)
                    }}>Apply</button>
                </div>
                <div className='heatmap-container'>
                    <div className='heatmap-child-container'>
                        {
                            isClickOnDropDownFilterApply ?
                                < HeatMap /> :
                                <div className='empty-heatmap-container'>
                                    Start to select the filters
                                </div>
                        }

                        {/* <HeatMap /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const DropDownMenu = (props) => {

    const { dropDownMenu, handleOnDropDownMenuSelectionChange, isCalendar = false, isMendatory = false } = props;

    const dropDownMenuRef = useRef(null);

    const [isShowDropDownMenu, setIsShowDropDownMenu] = useState(false);
    const [selectedDropDownOption, setSelectedDropDownOption] = useState(dropDownMenu.isMendatory ? '' : dropDownMenu.options[0]);
    const [selectedFilterDate, setSelectedFilterDate] = useState(new Date());
    const [previousSelectedFilterDate, setPreviousSelectedFilterDate] = useState(new Date());

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
                <label className='drop-down-menu-label'>{dropDownMenu.label}{dropDownMenu.isMendatory && ' *'}</label> :
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
                            {
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
                                <p className='drop-down-menu-selection-box-placeholder'>{d3.timeFormat("%d/%m/%Y")(selectedFilterDate)}</p>
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
                                {/* <div className='dropdown-calender-action-buttons'>
                                    <button className='dropdown-calender-action-button-cancle'
                                        onClick={(event) => {
                                            setSelectedFilterDate(previousSelectedFilterDate);
                                            isShowDropDownMenu(!isShowDropDownMenu);
                                        }
                                        }
                                    >
                                        Cancle
                                    </button>

                                    <button className='dropdown-calender-action-button-ok'
                                        onClick={(event) => {
                                            setPreviousSelectedFilterDate(setSelectedFilterDate);
                                            isShowDropDownMenu(false);
                                        }
                                        }
                                    >
                                        OK
                                    </button>
                                </div> */}
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )

}

const MultiSelectDropDownMenu = (props) => {

    let initialStateObject = {};

    const multiSelectDropDownOptions = [
        "All",
        "Channle name 1",
        "Channle name 2",
        "Channle name 3",
        "Channle name 4",
        "Channle name 5",
    ]

    multiSelectDropDownOptions.forEach(element => initialStateObject[element] = false)


    const [selectedSelectOptions, setSelectedSelectOptions] = useState(initialStateObject);
    console.log('selectedSelectOptions', selectedSelectOptions);

    return (
        <div className='multiselect-dropwn-menu-container'>

            {multiSelectDropDownOptions.map((option, index) => {
                return (
                    <div className='multiselect-dropwn-menu-option-container' onClick={(event) => {
                        setSelectedSelectOptions({
                            ...selectedSelectOptions,
                            [option]: !option,
                        })
                    }} key={index}>
                        <div className='multiselect-dropwn-menu-option-checkbox'>
                            {
                                selectedSelectOptions.All ?
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="12" height="12" rx="2" fill="#6979F8" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17695 9.10517L10.166 4.03856C10.3264 3.87573 10.3264 3.61174 10.166 3.44891L9.62018 2.89458C9.45984 2.73175 9.19988 2.73175 9.03954 2.89458L4.88663 7.11203L2.96157 5.15705C2.80123 4.99422 2.54127 4.99422 2.38094 5.15705L1.8351 5.71137C1.67476 5.8742 1.67476 6.1382 1.8351 6.30103L4.04877 8.54911C4.04933 8.54969 4.0499 8.55027 4.05047 8.55085L4.59629 9.10513L4.59631 9.10517C4.75665 9.268 5.01661 9.268 5.17695 9.10517Z" fill="white" />
                                    </svg> :
                                    selectedSelectOptions[option] ?
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="12" height="12" rx="2" fill="#6979F8" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17695 9.10517L10.166 4.03856C10.3264 3.87573 10.3264 3.61174 10.166 3.44891L9.62018 2.89458C9.45984 2.73175 9.19988 2.73175 9.03954 2.89458L4.88663 7.11203L2.96157 5.15705C2.80123 4.99422 2.54127 4.99422 2.38094 5.15705L1.8351 5.71137C1.67476 5.8742 1.67476 6.1382 1.8351 6.30103L4.04877 8.54911C4.04933 8.54969 4.0499 8.55027 4.05047 8.55085L4.59629 9.10513L4.59631 9.10517C4.75665 9.268 5.01661 9.268 5.17695 9.10517Z" fill="white" />
                                        </svg>
                                        :
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="11" height="11" rx="1.5" fill="white" stroke="#D8D8D8" />
                                        </svg>
                            }
                        </div>
                        <div className='multiselect-dropwn-menu-option-option'>
                            {option}
                        </div>
                    </div>
                )
            })
            }

        </div>
    )
}

export default ContentSchedulingWithHeatMapAndDropdowns;