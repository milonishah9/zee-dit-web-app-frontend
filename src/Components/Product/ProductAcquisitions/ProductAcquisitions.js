import { useCallback, useEffect, useState, useRef } from 'react';
import { Calendar } from 'react-calendar';
import * as d3 from 'd3';
import HeatMap from '../../Charts/HeatMap/HeatMap';

import './productAcquisitions.css';
import ContentAcquisitionsToggle from '../ContentAcquisitionsToggle/ContentAcquisitionsToggle';
import ProductAcquisitionsFunnelMetrics from './ProductAcquisitionsFunnelMetrics';
import { Border } from 'devextreme-react/bar-gauge';

const ProductAcquisitions = (props) => {
    const multiSelectDropDownOptions = [
        "All",
        "Channel name 1", "Channel name 2", "Channel name 3", "Channel name 4", "Channel name 5", "Channel name 6", "Channel name 7",
        "Channel name 8", "Channel name 9", "Channel name 10", "Channel name 11", "Channel name 12", "Channel name 13", "Channel name 14", "Channel name 15",
        "Channel name 16", "Channel name 17", "Channel name 18", "Channel name 19", "Channel name 20", "Channel name 21", "Channel name 22", "Channel name 23",
        "Channel name 24", "Channel name 25", "Channel name 26",
    ]

    let initialStateObject = {};

    // multiSelectDropDownOptions.forEach(element => element === 'All' ? initialStateObject[element] = true : initialStateObject[element] = false);
    multiSelectDropDownOptions.forEach(element => initialStateObject[element] = true);

    const [selectedSelectOptions, setSelectedSelectOptions] = useState(initialStateObject);
    const [previousSelectedSelectOptions, setPreviousSelectedSelectOptions] = useState(initialStateObject);

    const handleMultiDropDownSelectionChange = (action, state) => {
        // console.log('state', state);
        setSelectedSelectOptions(state)
        // if (action === "cancle") {
        //     setSelectedSelectOptions(state);
        // }
        // else {
        //     setPreviousSelectedSelectOptions(state);
        // }
    }

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
        platform: {
            id: 'platform',
            label: 'Platform',
            isMendatory: true,
            options: [
                'xx',
            ],
        },
        usertype: {
            id: 'usertype',
            label: 'User Type',
            isMendatory: true,
            options: [
                'xx',
            ],
        },
        region: {
            id: 'region',
            label: 'Region',
            isMendatory: true,
            options: [
                'xx',
            ],
        },
        tier: {
            id: 'tier',
            label: 'Tier',
            options: [
                'xx',
            ],
        },
        gender: {
            id: 'gender',
            label: 'Gender',
            options: [
                'xx',
            ],
        },

        devicetype: {
            id: 'devicetype',
            label: 'Device Type/Player',
            options: [
                'xx',

            ],
        },

        appversion: {
            id: 'appversion',
            label: 'App Version',
            options: [
                'xx',
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
            <div className='drop-down-menu-contaier-product-syn' ref={dropDownMenuRef} >
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
    
                    {/* {
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
                                    <div className='dropdown-calender-action-buttons'>
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
                                    </div>
                                </div>
                            }
                        </div>
                    } */}
    
                    {
                        isShowDropDownMenu && !isCalendar ?
                            <div className='drop-down-menu-options-container'>
                                {
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
                                    })
                                }
                            </div> :
                            isShowDropDownMenu && isCalendar ?
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
                                : null
                    }
                </div>
            </div>
        )
    
    }


    const MultiSelectDropDownMenu = (props) => {

        const { handleMultiDropDownSelectionChange } = props;
    
        const multiSelectDropDownMenuRef = useRef(null);
        const [isShowDropDownMenu, setIsShowDropDownMenu] = useState(false);
    
        let initialStateObject = {};
    
        const multiSelectDropDownOptions = [
            "All",
            "Channel name 1", "Channel name 2", "Channel name 3", "Channel name 4", "Channel name 5", "Channel name 6", "Channel name 7",
            "Channel name 8", "Channel name 9", "Channel name 10", "Channel name 11", "Channel name 12", "Channel name 13", "Channel name 14", "Channel name 15",
            "Channel name 16", "Channel name 17", "Channel name 18", "Channel name 19", "Channel name 20", "Channel name 21", "Channel name 22", "Channel name 23",
            "Channel name 24", "Channel name 25", "Channel name 26",
        ]
    
        // multiSelectDropDownOptions.forEach(element => element === 'All' ? initialStateObject[element] = true : initialStateObject[element] = false);
        multiSelectDropDownOptions.forEach(element => initialStateObject[element] = true);
    
        const [selectedSelectOptions, setSelectedSelectOptions] = useState(initialStateObject);
        const [previousSelectedSelectOptions, setPreviousSelectedSelectOptions] = useState(initialStateObject);
    
        useEffect(() => {
            const handleOnClickOutSide = (event) => {
                if (multiSelectDropDownMenuRef.current && !multiSelectDropDownMenuRef.current.contains(event.target)) {
                    setIsShowDropDownMenu(false)
                }
            };
    
            document.addEventListener('click', handleOnClickOutSide, true);
    
            return () => document.removeEventListener('click', handleOnClickOutSide, true);
        }, [isShowDropDownMenu]);
    
        // console.log('selectedSelectOptions', selectedSelectOptions, 'initialStateObject', initialStateObject);
    
        const handleSelection = (option, event) => {
    
            if (option === 'All') {
                let setStateObject = {}
                for (let item in selectedSelectOptions) {
                    setStateObject[item] = !selectedSelectOptions['All'];
                }
                setSelectedSelectOptions(setStateObject);
            } else if (selectedSelectOptions['All'] === true && selectedSelectOptions[option] === true) {
    
                setSelectedSelectOptions(previous => {
                    return {
                        ...selectedSelectOptions,
                        ['All']: false,
                        [option]: !previous[option],
                    }
                })
            } else if (selectedSelectOptions['All'] === false) {
                let falseCount = 0
                // let setStateObject = {}
                for (let item in selectedSelectOptions) {
                    if (selectedSelectOptions[item] === false) falseCount++;
                }
    
                // console.log('falseCount', falseCount);
                if (falseCount == 2) {
                    setSelectedSelectOptions(previous => {
                        return {
                            ...selectedSelectOptions,
                            ['All']: true,
                            [option]: !previous[option],
                        }
                    })
                } else if (falseCount > 2) {
                    setSelectedSelectOptions(previous => {
                        return {
                            ...selectedSelectOptions,
                            [option]: !previous[option],
                        }
                    })
                }
                // setSelectedSelectOptions(setStateObject);
            }
    
        }
    
        const getPlaceholderForMultiselectMenu = () => {
            for (let item in selectedSelectOptions) {
                if (selectedSelectOptions.All === true) {
                    return <p className='drop-down-menu-selection-box-placeholder'>All</p>
                } else if (selectedSelectOptions[item] === true) {
                    return <p className='drop-down-menu-selection-box-placeholder'>Multiple Selected</p>
                }
            }
        }
    
        return (
            <div className='multiselect-dropwn-menu-container'>
                <label className='drop-down-menu-label'>Channel *</label>
                {
                    <div className='drop-down-menu-selection-box'
                        onClick={(event) => {
                            setIsShowDropDownMenu(!isShowDropDownMenu);
                        }}
                    >
                        {
                            getPlaceholderForMultiselectMenu()
                            // <p className='drop-down-menu-selection-box-placeholder'>All</p>
                        }
    
    
                        {/* <p className='drop-down-menu-selection-box-placeholder'>{Select}</p> */}
                        <div className='drop-down-menu-selection-box-down-arrow-icon'>
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00893 0L4 3.01432L0.991063 0L0 0.992838L4 5L8 0.992838L7.00893 0Z" fill="#808080" />
                            </svg>
    
                        </div>
                    </div>
                }
    
                {isShowDropDownMenu &&
                    <div className='multiselect-drop-down-menu-options-parent-container' ref={multiSelectDropDownMenuRef}>
    
                        {multiSelectDropDownOptions.map((option, index) => {
                            return (
                                <div className='multiselect-dropwn-menu-option-container' onClick={(event) => handleSelection(option, event)} key={index}>
                                    <div className='multiselect-dropwn-menu-option-checkbox'>
                                        {
                                            selectedSelectOptions.All && selectedSelectOptions.All ?
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
                        })}
                        <div className='multiselect-dropdown-menu-options-action-container'>
                            <button className='multiselect-dropdown-menu-options-action-cancle-btn' onClick={
                                (event) => {
                                    setSelectedSelectOptions(previousSelectedSelectOptions);
                                    handleMultiDropDownSelectionChange("cancle", previousSelectedSelectOptions)
                                    setIsShowDropDownMenu(!isShowDropDownMenu);
                                }
                            }>Cancle</button>
                            <button className='multiselect-dropdown-menu-options-action-ok-btn'
                                onClick={
                                    (event) => {
                                        event.preventDefault();
                                        setPreviousSelectedSelectOptions(selectedSelectOptions);
                                        handleMultiDropDownSelectionChange("ok", selectedSelectOptions)
                                        setIsShowDropDownMenu(!isShowDropDownMenu);
                                    }}
                            >
                                Ok</button>
                        </div>
                    </div>
    
                }
    
            </div>
        )
    }

    return (
        <div>
            <diov style={{ "display": "flex", "flexDirection": "column" }}>
                <div className='content-scheduling-with-heatmap-dropdowns-dropdown-filters-container-product-syn'>
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.platform}
                        // isMendatory={true}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
     
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.usertype}
          
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.region}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.tier}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.gender}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.devicetype}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />
                    <DropDownMenu
                        dropDownMenu={dropDownMenuForChannelGenre.appversion}
                        handleOnDropDownMenuSelectionChange={handleOnDropDownMenuSelectionChange}
                    />


                    <button className='dropdown-filers-apply-button' onClick={(event) => {
                        selectedDropDownFilters.channelGenre &&
                            selectedDropDownFilters.usertype &&
                            selectedDropDownFilters.metric &&
                            selectedDropDownFilters.platform ?
                            setIsClickOnDropDownFilterApply(true) :
                            setIsClickOnDropDownFilterApply(false)
                    }}>Apply</button>
                </div>
                
                <div className="catalogue-acquisitions-indicators">
                    <label className="funnel-metrics-product-syn">Business Metrics</label>

                    <div className="product-all-indicators-with-icons-syn">
                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.04306 12.6289V12.1289H6.54306H4.79297H4.29297V12.6289V14.1256C4.29297 14.8829 4.91066 15.5006 5.66801 15.5006C6.42537 15.5006 7.04306 14.8829 7.04306 14.1256V12.6289Z" fill="white" stroke="#939090"/>
                            <path d="M9.96103 12.6289V12.1289H9.46103H7.71094H7.21094V12.6289V14.1256C7.21094 14.8829 7.82863 15.5006 8.58598 15.5006C9.34334 15.5006 9.96103 14.8829 9.96103 14.1256V12.6289Z" fill="white" stroke="#939090"/>
                            <path d="M11.4157 11.7925V7.12567C11.4157 6.20492 10.6698 5.45886 9.74898 5.45898C9.74895 5.45898 9.74892 5.45898 9.74888 5.45898H4.49871C3.57801 5.45898 2.83203 6.20496 2.83203 7.12567V11.7925C2.83203 12.7132 3.57801 13.4591 4.49871 13.4591H9.74898C10.6697 13.4591 11.4157 12.7132 11.4157 11.7925Z" fill="white" stroke="#939090"/>
                            <path d="M8.94951 3.04123L9.36254 3.30203L9.6329 2.8952L10.4075 1.72958C10.6532 1.36314 10.5491 0.871615 10.1863 0.632564C9.81985 0.388062 9.32897 0.49246 9.09035 0.855277L8.27528 2.07879L7.92786 2.60032L8.51351 2.82328C8.66609 2.88137 8.81133 2.95398 8.94951 3.04123Z" fill="white" stroke="#939090"/>
                            <path d="M5.73399 2.84697L6.3142 2.62607L5.9747 2.10628L5.15924 0.85775C5.1592 0.857695 5.15917 0.85764 5.15913 0.857585C5.15912 0.857573 5.15912 0.857561 5.15911 0.85755C4.92102 0.492881 4.42881 0.387522 4.06161 0.63263C3.69969 0.871215 3.59542 1.36104 3.83896 1.72712L4.61196 2.91489L4.88095 3.32821L5.29794 3.06495C5.43618 2.97768 5.58142 2.90506 5.73399 2.84697Z" fill="white" stroke="#939090"/>
                            <path d="M13.7501 10.0415V7.70805C13.7501 6.9507 13.1324 6.33301 12.375 6.33301C11.6177 6.33301 11 6.9507 11 7.70805V10.0415C11 10.7989 11.6177 11.4166 12.375 11.4166C13.1324 11.4166 13.7501 10.7989 13.7501 10.0415Z" fill="white" stroke="#939090"/>
                            <path d="M3.25009 10.0415V7.70805C3.25009 6.9507 2.6324 6.33301 1.87504 6.33301C1.11769 6.33301 0.5 6.9507 0.5 7.70805V10.0415C0.5 10.7989 1.11769 11.4166 1.87504 11.4166C2.6324 11.4166 3.25009 10.7989 3.25009 10.0415Z" fill="white" stroke="#939090"/>
                            <path d="M11.4157 5.08342V5.08337C11.4155 3.75186 10.7141 2.58576 9.66111 1.93233C9.46837 1.81079 9.26527 1.70918 9.05237 1.62785C8.63403 1.4617 8.17862 1.375 7.70713 1.375H6.54044C6.06899 1.375 5.61343 1.46169 5.19517 1.62786C4.98226 1.7092 4.77921 1.81081 4.58649 1.93232C3.53346 2.58571 2.83203 3.75184 2.83203 5.08342C2.83203 5.51997 3.18712 5.87506 3.62367 5.87506H10.624C11.0606 5.87506 11.4157 5.51997 11.4157 5.08342ZM6.04022 3.6251C6.04022 3.56634 6.0641 3.51353 6.10276 3.47578C6.14142 3.51353 6.1653 3.56634 6.1653 3.6251C6.1653 3.68386 6.14142 3.73667 6.10276 3.77442C6.0641 3.73667 6.04022 3.68386 6.04022 3.6251ZM8.08195 3.6251C8.08201 3.5662 8.10593 3.51348 8.14452 3.4758C8.18316 3.51355 8.20703 3.56635 8.20703 3.6251C8.20703 3.6252 8.20703 3.62529 8.20703 3.62539C8.20696 3.68404 8.18309 3.73673 8.14449 3.77442C8.10592 3.73675 8.08205 3.68409 8.08195 3.62548C8.08195 3.62535 8.08195 3.62523 8.08195 3.6251Z" fill="white" stroke="#939090"/>
                            </svg>
                            Android
                        </label>

                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.09866 12.8439C2.5711 13.4312 3.28097 13.9999 4.09796 13.9999C4.56281 13.9999 4.95763 13.7812 5.38202 13.6215C5.77284 13.4774 6.18611 13.4033 6.60261 13.4028C7.00456 13.4004 7.4028 13.4785 7.77407 13.6324C7.97095 13.7155 8.16567 13.8041 8.36577 13.8807C8.56879 13.9591 8.78461 13.9995 9.00229 13.9999C9.40501 13.9953 9.7969 13.8692 10.1267 13.6379C11.0848 12.9817 11.7947 11.8289 12.2978 10.8195C12.3481 10.7189 12.3962 10.6171 12.4444 10.5165C12.5242 10.3481 12.3985 10.1348 12.1753 10.0123C11.1909 9.47202 10.6146 8.63638 10.5183 7.48361C10.422 6.3308 10.8704 5.42083 11.7706 4.76014L11.9478 4.61463C12.0462 4.53368 11.9926 4.30946 11.8077 4.13446V4.13437C11.1269 3.46387 10.2148 3.08028 9.25927 3.0625C9.07382 3.0626 8.88878 3.07793 8.70585 3.1084C7.87461 3.25059 7.20742 3.64657 6.42433 3.64657C6.18673 3.64676 5.95051 3.60985 5.72433 3.53719C5.06809 3.32714 4.41625 3.0625 3.7184 3.0625C3.64184 3.0625 3.56421 3.0625 3.48657 3.07236C2.62623 3.16406 1.82301 3.54638 1.20935 4.15623C-0.000317093 5.34841 -0.17199 7.2002 0.129857 8.76518C0.419704 10.2811 1.13277 11.6472 2.09859 12.8436L2.09866 12.8439Z" fill="#939090"/>
                            <path d="M6.34769 3.06276C6.36331 3.06412 6.37903 3.06412 6.39476 3.06276C8.70576 2.63181 8.95848 0.846854 8.97273 0.195036C8.97371 0.141716 8.95251 0.0904468 8.91404 0.0534347C8.87566 0.01652 8.82361 -0.00271726 8.77039 0.000310204C8.75086 0.000310204 8.73142 0.00245863 8.71238 0.00685314C6.37843 0.547173 6.13566 2.23046 6.12891 2.85932C6.12998 2.91557 6.15391 2.96909 6.19512 3.00737C6.23642 3.04575 6.2914 3.06567 6.34765 3.06274L6.34769 3.06276ZM8.50889 0.513282C8.50889 0.513282 7.23214 1.23749 6.58831 2.56844C7.63526 2.32498 8.50889 0.513282 8.50889 0.513282Z" fill="#939090"/>
                            </svg>IOS
                        </label>
                        
                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.61538C0 0.7232 0.639565 0 1.42857 0H11.9048C12.6938 0 13.3333 0.7232 13.3333 1.61538V12.3846C13.3333 13.2768 12.6938 14 11.9048 14H1.42857C0.639565 14 0 13.2768 0 12.3846V1.61538ZM0.952381 4.30769V12.3846C0.952381 12.682 1.1656 12.9231 1.42857 12.9231H11.9048C12.1677 12.9231 12.381 12.682 12.381 12.3846V4.30769H0.952381ZM2.85714 2.15385C2.85714 1.85649 3.07036 1.61538 3.33333 1.61538H5.2381C5.50106 1.61538 5.71429 1.85649 5.71429 2.15385C5.71429 2.4512 5.50106 2.69231 5.2381 2.69231H3.33333C3.07036 2.69231 2.85714 2.4512 2.85714 2.15385ZM1.90476 2.69231C2.16773 2.69231 2.38095 2.4512 2.38095 2.15385C2.38095 1.85649 2.16773 1.61538 1.90476 1.61538C1.64179 1.61538 1.42857 1.85649 1.42857 2.15385C1.42857 2.4512 1.64179 2.69231 1.90476 2.69231Z" fill="#939090"/>
                            </svg>WEB
                        </label>


                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6067 0.85H1.39326C1.0902 0.85 0.85 1.0902 0.85 1.39326V8.50349C0.85 8.80656 1.0902 9.04676 1.39326 9.04676H6.43436V9.98942H4.94832C4.64526 9.98942 4.40506 10.2296 4.40506 10.5327C4.40506 10.8357 4.64526 11.0759 4.94832 11.0759H11.0358C11.3388 11.0759 11.579 10.8357 11.579 10.5327C11.579 10.2296 11.3388 9.98942 11.0358 9.98942H9.56564V9.04676H14.6067C14.9098 9.04676 15.15 8.80656 15.15 8.50349V1.39326C15.15 1.09027 14.9099 0.850119 14.607 0.85C14.6069 0.85 14.6068 0.85 14.6067 0.85ZM8.47933 10.0052H7.52097V9.06253L8.47933 9.06245V10.0052ZM14.0637 7.9759H1.93653V1.93647H14.0637V7.9759Z" fill="#939090" stroke="#939090" stroke-width="0.3"/>
                            </svg>Android TV
                        </label>

                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99289 19.0795C9.38465 18.6865 9.91645 18.4656 10.4712 18.4649C10.4712 18.4649 10.4712 18.4649 10.4712 18.4649L10.4714 18.6149L8.99289 19.0795ZM8.99289 19.0795C8.60119 19.4723 8.38154 20.0046 8.3824 20.5594L8.99289 19.0795ZM18.6926 19.0795C19.0844 18.6865 19.6163 18.4656 20.171 18.4649C20.171 18.4649 20.171 18.4649 20.1711 18.4649L20.1713 18.6149L18.6926 19.0795ZM18.6926 19.0795C18.3009 19.4723 18.0814 20.0047 18.0823 20.5594M18.6926 19.0795L21.547 19.1833C21.912 19.5482 22.1166 20.0432 22.1157 20.5592M18.0823 20.5594C18.0823 20.5594 18.0823 20.5594 18.0823 20.5594L18.2323 20.5592L18.0823 20.5594ZM18.0823 20.5594C18.083 21.113 18.3032 21.644 18.6947 22.0355C19.0863 22.427 19.6171 22.6474 20.1708 22.6482M20.1708 22.6482C20.1709 22.6482 20.1709 22.6482 20.1709 22.6482L20.1711 22.4982L20.1708 22.6482ZM20.1708 22.6482C20.7256 22.6491 21.2582 22.4296 21.651 22.0377C22.0439 21.646 22.265 21.1141 22.2657 20.5594C22.2657 20.5594 22.2657 20.5594 22.2657 20.5594L22.1157 20.5592M22.1157 20.5592C22.1151 21.0742 21.9098 21.5679 21.545 21.9315L22.1157 20.5592ZM2.47536 3.60503L2.47532 3.60501L2.47311 3.60811C2.35345 3.77639 2.31498 4.00031 2.38446 4.19633C4.14806 9.69908 4.14782 15.2861 2.38371 20.7889L2.38352 20.7895C2.3163 21.0022 2.3522 21.2045 2.47306 21.3747L2.47305 21.3747L2.47401 21.376C2.59266 21.5393 2.77272 21.6501 3.00267 21.6501H7.83824H8.05421L7.9788 21.4477C7.87235 21.1621 7.81045 20.8678 7.81045 20.5594V20.5079V20.3579H7.66045H3.86861C5.38437 15.1329 5.38452 9.85135 3.86886 4.64856H26.5611C25.0427 9.85417 25.0429 15.1357 26.5613 20.3579H22.9817H22.8317V20.5079V20.5594C22.8317 20.8697 22.7745 21.168 22.6741 21.4498L22.6028 21.6501H22.8154H27.4217C27.6523 21.6501 27.8302 21.5389 27.9534 21.3796L27.9538 21.3799L27.9609 21.369C28.0652 21.207 28.1154 21.004 28.0464 20.7888L28.0463 20.7885C26.2676 15.2859 26.2674 9.69912 28.0456 4.19652C28.1167 3.9959 28.0642 3.77401 27.9608 3.61371L27.9611 3.61351L27.9547 3.60503C27.8265 3.43404 27.64 3.35 27.4217 3.35H3.00267C2.7825 3.35 2.60256 3.43543 2.47536 3.60503ZM6.55271 26.2252L6.55179 26.3186L6.63523 26.3607L6.65816 26.3722L6.66737 26.3769L6.67713 26.3802C7.86426 26.7859 9.11256 26.9561 10.3625 26.9561H11.2974H11.4054V27.282V27.4147L11.5371 27.4309C12.7393 27.5786 14.0147 27.65 15.324 27.65C16.6364 27.65 17.9031 27.5786 19.1052 27.4309L19.2369 27.4147V27.282V26.956H19.3507H20.28C21.5302 26.956 22.7838 26.7827 23.9706 26.3801L23.9851 26.3752L23.9965 26.3685L23.9995 26.367L24.0056 26.364L24.0139 26.3599L24.0962 26.3176L24.0953 26.2251C24.0769 24.3483 22.5493 22.8413 20.6815 22.8413L19.672 22.8415C18.7935 22.8415 17.9876 23.1736 17.3847 23.7302L17.2576 23.8476C16.8229 23.6472 16.3388 23.5356 15.8288 23.5356H14.8193C14.3098 23.5356 13.8257 23.6473 13.3906 23.8479L13.2635 23.7304C12.6607 23.1736 11.8546 22.8416 10.9763 22.8416L9.96655 22.8415C8.09874 22.8415 6.57108 24.3484 6.55271 26.2252ZM12.5657 20.5594C12.5666 20.0036 12.3462 19.4703 11.9532 19.0773L12.5657 20.5594ZM15.3241 19.1589C14.7492 19.1589 14.2215 19.3934 13.8471 19.7764C13.4644 20.1503 13.2296 20.6723 13.2296 21.2477C13.2296 22.406 14.1756 23.3422 15.3241 23.3422C16.4795 23.3422 17.4129 22.4049 17.4129 21.2477C17.4129 20.099 16.4762 19.1589 15.3241 19.1589Z" fill="#768CFF" stroke="#768CFF" stroke-width="0.3"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.735 9.77832C14.6668 9.77832 13.8008 10.6443 13.8008 11.7126C13.8008 12.7808 14.6668 13.6468 15.735 13.6468C16.8033 13.6468 17.6693 12.7808 17.6693 11.7126C17.6693 10.6443 16.8033 9.77832 15.735 9.77832ZM15.0903 11.7126C15.0903 11.3565 15.3789 11.0679 15.735 11.0679C16.0911 11.0679 16.3798 11.3565 16.3798 11.7126C16.3798 12.0687 16.0911 12.3573 15.735 12.3573C15.3789 12.3573 15.0903 12.0687 15.0903 11.7126Z" fill="#768CFF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7516 10.0127C17.982 7.24315 13.4912 7.24315 10.7216 10.0127L9.47793 11.2564C9.22611 11.5082 9.22611 11.9165 9.47793 12.1683L10.7216 13.4119C13.4912 16.1815 17.982 16.1815 20.7516 13.4119L21.9952 12.1683C22.2469 11.9164 22.2469 11.5082 21.9952 11.2564L20.7516 10.0127ZM11.6335 10.9246C13.8996 8.65842 17.5736 8.65842 19.8397 10.9246L20.6275 11.7123L19.8397 12.5001C17.5735 14.7663 13.8996 14.7663 11.6335 12.5001L10.8457 11.7123L11.6335 10.9246Z" fill="#768CFF"/>
                            </svg>HTML 5
                        </label>

                        <label>
                        <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.12667 0 0 3.12667 0 7C0 10.8733 3.12667 14 7 14C10.8733 14 14 10.8733 14 7C14 3.12667 10.8733 0 7 0ZM7 13.0667C3.64 13.0667 0.933333 10.36 0.933333 7C0.933333 3.64 3.64 0.933333 7 0.933333C10.36 0.933333 13.0667 3.64 13.0667 7C13.0667 10.36 10.36 13.0667 7 13.0667Z" fill="#939090"/>
                            <path d="M10.5923 3.4066C10.4056 3.21993 10.1256 3.21993 9.93896 3.4066L8.95896 4.3866C8.39896 3.9666 7.69896 3.73327 6.99896 3.73327C6.29896 3.73327 5.59896 3.9666 5.03896 4.3866L4.05896 3.4066C3.87229 3.21993 3.59229 3.21993 3.40563 3.4066C3.21896 3.59327 3.21896 3.87327 3.40563 4.05993L4.38563 5.03993C3.96562 5.59994 3.73229 6.29993 3.73229 6.99993C3.73229 7.69993 3.96562 8.39994 4.38563 8.95994L3.40563 9.93994C3.21896 10.1266 3.21896 10.4066 3.40563 10.5933C3.49896 10.6866 3.59229 10.7333 3.73229 10.7333C3.87229 10.7333 3.96562 10.6866 4.05896 10.5933L5.03896 9.61327C5.59896 10.0333 6.29896 10.2666 6.99896 10.2666C7.69896 10.2666 8.39896 10.0333 8.95896 9.61327L9.93896 10.5933C10.0323 10.6866 10.1256 10.7333 10.2656 10.7333C10.4056 10.7333 10.499 10.6866 10.5923 10.5933C10.779 10.4066 10.779 10.1266 10.5923 9.93994L9.61229 8.95994C10.0323 8.39994 10.2656 7.69993 10.2656 6.99993C10.2656 6.29993 10.0323 5.59994 9.61229 5.03993L10.5923 4.05993C10.779 3.87327 10.779 3.59327 10.5923 3.4066ZM5.36563 8.63327C4.89896 8.21327 4.66562 7.6066 4.66562 6.99993C4.66562 6.39327 4.89896 5.7866 5.36563 5.3666C5.78562 4.9466 6.39229 4.6666 6.99896 4.6666C7.60563 4.6666 8.21229 4.89993 8.63229 5.3666C9.05229 5.7866 9.33229 6.39327 9.33229 6.99993C9.33229 7.6066 9.09896 8.21327 8.63229 8.63327C8.21229 9.09994 7.60563 9.33327 6.99896 9.33327C6.39229 9.33327 5.78562 9.09994 5.36563 8.63327Z" fill="#939090"/>
                        </svg>
                            AFS
                        </label>

                        <label>
                        <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.03933 1.03931L1.03928 1.03937C0.918164 1.16058 0.85 1.32496 0.85 1.49649V8.85726C0.85 9.02879 0.918169 9.19314 1.03927 9.31437L1.03937 9.31447C1.16058 9.43558 1.32496 9.50374 1.49649 9.50374H3.29524C3.4966 9.50374 3.6828 9.39636 3.78352 9.22184L3.78353 9.22182C3.88412 9.04746 3.88411 8.8326 3.78353 8.65823L3.78351 8.6582C3.68279 8.4837 3.49662 8.37631 3.29524 8.37631H1.97743V1.97754H14.0226V8.37631H12.7048C12.5034 8.37631 12.3172 8.48369 12.2165 8.65821L12.2165 8.65823C12.1159 8.83259 12.1159 9.04745 12.2165 9.22182L12.2165 9.22185C12.3172 9.39635 12.5034 9.50374 12.7048 9.50374H14.5035C14.675 9.50374 14.8394 9.43558 14.9606 9.31448L14.9607 9.31438C15.0818 9.19316 15.15 9.02878 15.15 8.85726V1.49649C15.15 1.32496 15.0818 1.1606 14.9607 1.03938L14.9607 1.03932C14.8394 0.91805 14.675 0.85 14.5035 0.85H14.5034H1.49649C1.32501 0.85 1.16061 0.918054 1.03933 1.03931Z" fill="#939090" stroke="#939090" stroke-width="0.3"/>
                            <path d="M3.92082 10.5583C3.92496 10.5542 3.92869 10.5492 3.93242 10.5442C3.93615 10.5393 3.93988 10.5343 3.94402 10.5302L7.70541 6.76699M3.92082 10.5583L11.9866 11.1673C12.0317 11.137 12.0705 11.0983 12.1007 11.0531C12.1007 11.0457 12.1063 11.0382 12.1119 11.0308C12.1138 11.0283 12.1156 11.0258 12.1173 11.0234M3.92082 10.5583C3.9109 10.5688 3.90152 10.5799 3.8927 10.5914M3.92082 10.5583L3.8927 10.5914M7.70541 6.76699C7.78299 6.68918 7.88838 6.64551 7.99831 6.64551C8.10824 6.64551 8.21363 6.68918 8.2912 6.76699M7.70541 6.76699L7.59918 6.66108L3.83796 10.4241L3.94402 10.5302L3.83793 10.4241C3.8308 10.4313 3.82517 10.4379 3.82128 10.4428C3.81773 10.4472 3.81453 10.4514 3.81284 10.4537L3.81254 10.4541L3.81099 10.4561M7.70541 6.76699L7.59932 6.66095L7.59926 6.661L12.0257 11.3173M8.2912 6.76699L12.0544 10.5252M8.2912 6.76699L8.39743 6.66109L12.159 10.4176L12.0544 10.5252M8.2912 6.76699L8.3972 6.66086L12.0257 11.3173M12.0544 10.5252C12.0741 10.5443 12.0918 10.5653 12.1074 10.5881C12.109 10.5905 12.1109 10.593 12.1127 10.5955C12.1183 10.6029 12.1239 10.6104 12.1239 10.6178M12.0544 10.5252L12.1604 10.419L12.1597 10.4184C12.1862 10.4442 12.2101 10.4726 12.2312 10.5034M12.1239 10.6178C12.1319 10.6312 12.1391 10.645 12.1454 10.6592C12.1506 10.6728 12.1549 10.6866 12.1586 10.7006M12.1239 10.6178L12.1586 10.5971V10.7006M12.1239 10.6178H12.1586V10.6533V10.6542V10.7006M12.1586 10.7006H12.1587C12.1702 10.7121 12.1702 10.7238 12.1702 10.737C12.1812 10.7916 12.1812 10.8478 12.1702 10.9024H12.1702M12.1702 10.9024C12.1586 10.9156 12.1586 10.9273 12.1586 10.9388C12.1549 10.9529 12.1506 10.9667 12.1454 10.9802M12.1702 10.9024V10.9388V10.9419V10.9791L12.1454 10.9802M12.1702 10.9024L12.1702 10.9025L12.2117 10.9388L12.2343 10.9586L12.2531 10.9751L12.2904 10.9733L12.2952 10.973L12.2952 10.9731L12.2953 10.9745L12.2957 10.9829C12.297 10.9805 12.2982 10.9781 12.2993 10.9756C12.302 10.9696 12.3043 10.9631 12.3059 10.9563C12.3076 10.949 12.3083 10.9424 12.3085 10.9388C12.3087 10.9371 12.3087 10.9362 12.3086 10.9362C12.3086 10.9363 12.3086 10.9371 12.3086 10.9388V10.9581L12.3037 10.9767C12.3016 10.9851 12.2992 10.9934 12.2966 11.0017L12.1702 10.9896L12.1456 10.9803L12.1454 10.9802M12.1454 10.9802L12.1454 10.9803C12.137 10.9953 12.1276 11.0096 12.1173 11.0234M12.1173 11.0234L12.157 11.0531L12.2365 11.1127L12.2399 11.1055L12.1618 11.0531L12.1173 11.0234ZM12.0257 11.3173C12.0098 11.3264 11.9937 11.3346 11.9773 11.342L11.9693 11.3457L11.961 11.3483L11.9196 11.3615L11.9135 11.3635L11.9134 11.3633L11.877 11.3733L11.8649 11.3766L11.8523 11.3778C11.8182 11.3812 11.7838 11.3814 11.7497 11.3785H4.15254H4.13084L4.11004 11.3724L4.06535 11.3592L4.06481 11.359L4.03168 11.3491L4.02155 11.3461L4.01195 11.3416C3.9918 11.3323 3.97211 11.3219 3.95299 11.3103L3.93316 11.2997L3.92638 11.2961L3.92 11.2919C3.9125 11.2868 3.90513 11.2816 3.8979 11.2763L3.8784 11.2642V11.2611C3.83641 11.227 3.79938 11.187 3.76858 11.1422C3.75429 11.1238 3.74318 11.1043 3.73462 11.0846L3.73437 11.0842C3.73097 11.0792 3.72302 11.0673 3.71614 11.0516C3.71228 11.0428 3.70841 11.0321 3.70559 11.0197C3.69966 11.0022 3.69456 10.9844 3.69034 10.9663L3.68645 10.9496V10.9324V10.9198C3.67535 10.8558 3.67535 10.7904 3.68645 10.7264V10.7205V10.7032L3.6904 10.6863C3.69671 10.6593 3.70505 10.6328 3.7153 10.6071M12.0257 11.3173H12.0322L12.07 11.2919C12.1315 11.2508 12.1842 11.198 12.2254 11.1366L12.2507 11.0987V11.0946C12.2598 11.0815 12.2682 11.068 12.276 11.0542L12.277 11.0524H12.2932L12.3173 10.9319C12.3312 10.8628 12.3321 10.7919 12.3201 10.7226C12.3194 10.7034 12.3154 10.67 12.2958 10.6353C12.2927 10.6255 12.2894 10.6157 12.2857 10.606L12.2859 10.6059L12.2823 10.5979C12.2766 10.5851 12.2703 10.5724 12.2636 10.56C12.2626 10.5574 12.2617 10.555 12.2607 10.5527C12.2545 10.5378 12.2473 10.5263 12.2429 10.5197C12.2388 10.5136 12.2347 10.5081 12.233 10.5058L12.2327 10.5054C12.2318 10.5043 12.2314 10.5036 12.2312 10.5034M3.7153 10.6071L3.71785 10.6081V10.6049L3.73041 10.5776M3.7153 10.6071C3.71526 10.6072 3.71523 10.6073 3.7152 10.6073L3.71785 10.6084V10.6378C3.71785 10.6272 3.71903 10.6178 3.72075 10.6095L3.79195 10.6378L3.85465 10.6626M3.7153 10.6071C3.7188 10.5983 3.72255 10.591 3.72559 10.5857C3.72729 10.5826 3.72893 10.5799 3.73041 10.5776M3.73041 10.5776C3.73096 10.5767 3.73149 10.5759 3.73199 10.5751C3.73257 10.5743 3.73311 10.5734 3.73361 10.5727L3.73833 10.5659L3.73937 10.5645L3.73949 10.5643L3.7369 10.5683C3.73591 10.5699 3.73445 10.5723 3.73279 10.5755C3.73212 10.5768 3.73142 10.5782 3.73071 10.5797C3.72785 10.5857 3.72362 10.5959 3.7208 10.6093L3.79228 10.6378L3.85465 10.6626M3.73041 10.5776L3.73162 10.575C3.74146 10.5536 3.75261 10.5328 3.76508 10.5126L3.76911 10.5061L3.77377 10.5C3.78525 10.4851 3.79764 10.4704 3.81099 10.4561M3.85465 10.6626C3.85596 10.6593 3.85835 10.656 3.86073 10.6526C3.86429 10.6477 3.86785 10.6427 3.86785 10.6378M3.85465 10.6626C3.84715 10.6814 3.84105 10.7008 3.83645 10.7205V10.7403C3.82535 10.7949 3.82535 10.8513 3.83645 10.9059L3.86785 10.6378M3.81099 10.4561L3.81049 10.4568C3.81003 10.4574 3.8099 10.4575 3.80999 10.4574L3.81 10.4574C3.81007 10.4573 3.81062 10.4567 3.8116 10.4556C3.81239 10.4547 3.81346 10.4535 3.81477 10.4522L3.81472 10.4522L3.81157 10.4555C3.81137 10.4557 3.81118 10.4559 3.81099 10.4561ZM3.86785 10.6378C3.8752 10.6218 3.88348 10.6063 3.8927 10.5914M3.86785 10.6378L3.8927 10.5914M12.2312 10.5034C12.2313 10.5035 12.2314 10.5037 12.2316 10.504L12.2312 10.5034ZM5.59696 10.2593L7.99999 7.85623L10.4016 10.2593H5.59696Z" fill="#939090" stroke="#939090" stroke-width="0.3"/>
                        </svg>
                            Apple TV</label>

                        <label style={{borderRight: '1px solid #D8E3FF', paddingRight: '20px'}}>
                        <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.12667 0 0 3.12667 0 7C0 10.8733 3.12667 14 7 14C10.8733 14 14 10.8733 14 7C14 3.12667 10.8733 0 7 0ZM7 13.0667C3.64 13.0667 0.933333 10.36 0.933333 7C0.933333 3.64 3.64 0.933333 7 0.933333C10.36 0.933333 13.0667 3.64 13.0667 7C13.0667 10.36 10.36 13.0667 7 13.0667Z" fill="#939090"/>
                            <path d="M10.5923 3.4066C10.4056 3.21993 10.1256 3.21993 9.93896 3.4066L8.95896 4.3866C8.39896 3.9666 7.69896 3.73327 6.99896 3.73327C6.29896 3.73327 5.59896 3.9666 5.03896 4.3866L4.05896 3.4066C3.87229 3.21993 3.59229 3.21993 3.40563 3.4066C3.21896 3.59327 3.21896 3.87327 3.40563 4.05993L4.38563 5.03993C3.96562 5.59994 3.73229 6.29993 3.73229 6.99993C3.73229 7.69993 3.96562 8.39994 4.38563 8.95994L3.40563 9.93994C3.21896 10.1266 3.21896 10.4066 3.40563 10.5933C3.49896 10.6866 3.59229 10.7333 3.73229 10.7333C3.87229 10.7333 3.96562 10.6866 4.05896 10.5933L5.03896 9.61327C5.59896 10.0333 6.29896 10.2666 6.99896 10.2666C7.69896 10.2666 8.39896 10.0333 8.95896 9.61327L9.93896 10.5933C10.0323 10.6866 10.1256 10.7333 10.2656 10.7333C10.4056 10.7333 10.499 10.6866 10.5923 10.5933C10.779 10.4066 10.779 10.1266 10.5923 9.93994L9.61229 8.95994C10.0323 8.39994 10.2656 7.69993 10.2656 6.99993C10.2656 6.29993 10.0323 5.59994 9.61229 5.03993L10.5923 4.05993C10.779 3.87327 10.779 3.59327 10.5923 3.4066ZM5.36563 8.63327C4.89896 8.21327 4.66562 7.6066 4.66562 6.99993C4.66562 6.39327 4.89896 5.7866 5.36563 5.3666C5.78562 4.9466 6.39229 4.6666 6.99896 4.6666C7.60563 4.6666 8.21229 4.89993 8.63229 5.3666C9.05229 5.7866 9.33229 6.39327 9.33229 6.99993C9.33229 7.6066 9.09896 8.21327 8.63229 8.63327C8.21229 9.09994 7.60563 9.33327 6.99896 9.33327C6.39229 9.33327 5.78562 9.09994 5.36563 8.63327Z" fill="#939090"/>
                        </svg>
                            AOSP
                        </label>
                        <label>
                        <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7613 10.2632L11.2211 13.25H0.778893L1.23844 10.2631C1.23846 10.2631 1.23847 10.263 1.23848 10.2629C1.23849 10.2628 1.2385 10.2628 1.23851 10.2627C1.32822 9.68238 1.50831 9.30612 1.7225 9.04928C1.93599 8.79326 2.22491 8.606 2.61512 8.47108C3.44647 8.18363 4.57018 8.17868 5.99987 8.17868C7.42955 8.17868 8.55326 8.18364 9.3846 8.4711C9.77481 8.60602 10.0637 8.79328 10.2772 9.04929C10.4914 9.30615 10.6715 9.68241 10.7612 10.2627C10.7612 10.2628 10.7613 10.2629 10.7613 10.263C10.7613 10.263 10.7613 10.2631 10.7613 10.2632ZM8.67866 3.42853C8.67866 4.90576 7.47735 6.10707 6.00012 6.10707C4.5229 6.10707 3.32159 4.90576 3.32159 3.42853C3.32159 1.95131 4.5229 0.75 6.00012 0.75C7.47735 0.75 8.67866 1.95131 8.67866 3.42853Z" stroke="#939090" stroke-width="1.5"/>
                        </svg>
                            Guest
                        </label>
                        <label>
                        <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91238 2.79994C8.91238 4.34628 7.65878 5.59988 6.11244 5.59988C4.56611 5.59988 3.3125 4.34628 3.3125 2.79994C3.3125 1.25361 4.56611 0 6.11244 0C7.65878 0 8.91238 1.25361 8.91238 2.79994Z" fill="#939090"/>
                        <path d="M8.41238 2.79994C8.41238 4.07013 7.38263 5.09988 6.11244 5.09988C4.84225 5.09988 3.8125 4.07013 3.8125 2.79994C3.8125 1.52975 4.84225 0.5 6.11244 0.5C7.38263 0.5 8.41238 1.52975 8.41238 2.79994Z" fill="#939090" stroke="#939090"/>
                        <path d="M4.99162 10.6403C4.99149 11.3331 5.15312 12.0163 5.46374 12.6356C5.49199 12.6864 5.49136 12.7484 5.46199 12.7987C5.43274 12.8489 5.37911 12.8799 5.32086 12.8803H0.168971C0.120723 12.8797 0.0749732 12.8587 0.0429739 12.8226C0.0110997 12.7864 -0.00415149 12.7384 0.000974807 12.6904C0.182472 11.2002 0.90246 9.82761 2.02544 8.83099C3.14843 7.83463 4.59688 7.28303 6.098 7.28027C6.164 7.2809 6.22362 7.32002 6.25025 7.3804C6.27699 7.44064 6.26587 7.51114 6.22187 7.56027C5.43501 8.39311 4.99514 9.49447 4.99153 10.6402L4.99162 10.6403Z" fill="#939090"/>
                        <path d="M9.47321 7.2803C8.58209 7.2803 7.72749 7.63427 7.09739 8.2644C6.46729 8.89453 6.11328 9.74911 6.11328 10.6402C6.11328 11.5313 6.46726 12.3859 7.09739 13.016C7.72752 13.6461 8.58209 14.0002 9.47321 14.0002C10.3643 14.0002 11.2189 13.6462 11.849 13.016C12.4791 12.3859 12.8331 11.5313 12.8331 10.6402C12.8364 9.74812 12.4835 8.89162 11.8526 8.26079C11.2218 7.62995 10.3653 7.27706 9.47321 7.2803ZM11.0552 10.013L9.09523 11.6929C9.07936 11.7047 9.06236 11.7147 9.04423 11.7227C8.96199 11.7814 8.85086 11.7787 8.77162 11.7159C8.75137 11.7058 8.73262 11.6932 8.71562 11.6784L7.87563 10.8385C7.76951 10.7286 7.77101 10.554 7.87901 10.446C7.98701 10.3379 8.16163 10.3365 8.27151 10.4426L8.92836 11.0994L10.6912 9.58746C10.7471 9.53583 10.8216 9.50909 10.8976 9.51359C10.9734 9.51796 11.0444 9.55309 11.0938 9.61096C11.1433 9.66871 11.1672 9.74421 11.1599 9.81995C11.1526 9.8957 11.1148 9.9652 11.0552 10.0124L11.0552 10.013Z" fill="#939090"/>
                        </svg>
                            Registered
                        </label>
                        <label>
                        <svg style={{marginRight:'5px', marginLeft: '10px'}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="18" fill="#FAFAFD"/>
                        <path d="M8.85612 5.13236C6.72055 5.13236 4.98818 6.86457 4.98818 9.0003C4.98818 11.1359 6.72055 12.8682 8.85612 12.8682C10.9917 12.8682 12.7241 11.136 12.7241 9.0003C12.7241 6.86474 10.9917 5.13236 8.85612 5.13236ZM11.6088 8.52576L10.3511 9.56989L10.7308 11.1598C10.802 11.4683 10.4698 11.7055 10.2088 11.5395L8.85611 10.6852L7.47981 11.5395C7.21877 11.7057 6.88657 11.4683 6.95776 11.1598L7.33747 9.56989L6.1035 8.52576C5.86613 8.3359 5.98481 7.95621 6.29335 7.93252L7.93073 7.81384L8.54765 6.29516C8.66633 6.01045 9.0697 6.01045 9.18839 6.29516L9.80531 7.81384L11.4427 7.93252C11.7275 7.95619 11.8461 8.3359 11.6089 8.52576H11.6088ZM14.8833 11.2784L15.263 11.0649C15.7139 10.8039 15.8563 10.2343 15.5477 9.80723L15.2867 9.45135C15.0732 9.14282 15.0732 8.73943 15.2867 8.45472L15.5477 8.09884C15.8563 7.6718 15.7139 7.07856 15.263 6.84118L14.836 6.62733C14.5038 6.46114 14.3376 6.08159 14.3851 5.72556L14.4562 5.27466C14.5511 4.77626 14.1715 4.30171 13.6495 4.27803L13.2223 4.25436C12.8426 4.23069 12.5342 3.99333 12.4392 3.63744L12.3205 3.21039C12.1782 2.71199 11.6325 2.45096 11.1577 2.66466L10.7307 2.83051C10.3985 2.97286 9.99512 2.87802 9.75774 2.61699L9.44921 2.28478C9.09334 1.90507 8.50012 1.90507 8.16791 2.28478L7.8832 2.61699C7.64584 2.90169 7.24247 2.99669 6.91025 2.85435L6.48321 2.68816C6.00866 2.4983 5.46293 2.75934 5.32043 3.25771L5.20174 3.68475C5.1069 4.04063 4.79837 4.30168 4.41867 4.32549L3.96777 4.34916C3.44572 4.37283 3.08983 4.84756 3.16101 5.36944L3.23219 5.79649C3.30336 6.15236 3.13734 6.53206 2.80514 6.69825L2.44927 6.93577C1.99837 7.19681 1.85603 7.76639 2.16457 8.19344L2.4256 8.54931C2.63913 8.85784 2.63913 9.26123 2.4256 9.54594L2.16457 9.90182C1.85603 10.3289 1.99838 10.9221 2.44927 11.1595L2.85265 11.373C3.18485 11.5392 3.35105 11.9187 3.30355 12.2748L3.23238 12.7257C3.13753 13.2241 3.51708 13.6986 4.03913 13.7223L4.49004 13.746C4.86974 13.7696 5.1781 14.007 5.27311 14.3629L5.39179 14.7899C5.53414 15.2883 6.07986 15.5494 6.55457 15.3357L6.95795 15.1695C7.29015 15.0271 7.69352 15.122 7.9309 15.383L8.23943 15.7152C8.59531 16.0949 9.18853 16.0949 9.52074 15.7152L9.80544 15.383C10.0428 15.0983 10.4462 15.0033 10.7784 15.1457L11.1818 15.3118C11.6563 15.5017 12.202 15.2407 12.3446 14.7423L12.4632 14.3152C12.5581 13.9594 12.8666 13.6983 13.2463 13.6745L13.6972 13.6508C14.2193 13.6272 14.5752 13.1524 14.504 12.6306L14.4328 12.2035C14.3851 11.8241 14.5511 11.4681 14.8833 11.2784L14.8833 11.2784ZM13.5545 9.61723C13.2935 11.7291 11.585 13.4377 9.47304 13.6987C6.38817 14.1021 3.75425 11.4681 4.15765 8.3833C4.41868 6.27138 6.12719 4.56286 8.23911 4.30183C11.324 3.89862 13.9579 6.53261 13.5545 9.61723Z" fill="#939090"/>
                        </svg>
                            Premium
                        </label>
                        <label>
                        <svg style={{marginRight:'5px', marginLeft: '10px'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0C3.13778 0 0 3.13778 0 7C0 10.8622 3.13778 14 7 14C10.8622 14 14 10.8622 14 7C14 3.13778 10.8622 0 7 0ZM7 0.636307C10.5182 0.636307 13.3636 3.48176 13.3636 6.99994C13.3636 10.5181 10.5182 13.3636 7 13.3636C3.48182 13.3636 0.636364 10.5181 0.636364 6.99994C0.636364 3.48176 3.48182 0.636307 7 0.636307ZM6.08744 3.97722C5.71968 3.98554 5.40085 4.28085 5.39141 4.7031V9.29173C5.40395 9.85457 5.96605 10.1961 6.46031 9.92804L10.4376 7.62625C10.6541 7.50052 10.8005 7.26969 10.8005 6.9998C10.8005 6.72991 10.654 6.49909 10.4376 6.37335L6.46031 4.07156C6.33668 4.00453 6.21006 3.97444 6.08744 3.97722Z" fill="#939090"/>
                        </svg>
                            AVOD
                        </label>
                    </div>
                </div>


            </diov>

            <div className={'product-card'}>
                <div className="product-row1-syn">
                    <div className="product-column-syn">
                        <ContentAcquisitionsToggle  data={['Viewer to User Ratio', 1000, 70]} />
                    </div>
                    <div className="product-column-syn">
                        <ContentAcquisitionsToggle  data={['DAU', 1000, 70]} />
                    </div>
                    <div className="product-column-syn">
                        <ContentAcquisitionsToggle  data={['MAU', 1000, 70]} />
                    </div>
                </div>
            </div>

            <div className=''>
                    <ProductAcquisitionsFunnelMetrics />
            </div>


        </div>
    )

}

export default ProductAcquisitions;
