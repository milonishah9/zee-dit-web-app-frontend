import { useCallback, useEffect, useState, useRef } from 'react';
import { Calendar } from 'react-calendar';
import * as d3 from 'd3';
import HeatMap from '../../Charts/HeatMap/HeatMap';

import './productAcquisitions.css';
import ContentAcquisitionsToggle from '../ContentAcquisitionsToggle/ContentAcquisitionsToggle';

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
            <div style={{ "display": "flex", "flexDirection": "column" }}>
                <div className='content-scheduling-with-heatmap-dropdowns-dropdown-filters-container'>
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
                    <label className="catalogue-last-90day">Business Metrics</label>

                    <div className="all-indicators-with-icons">
                        <label>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.09866 12.8439C2.5711 13.4312 3.28097 13.9999 4.09796 13.9999C4.56281 13.9999 4.95763 13.7812 5.38202 13.6215C5.77284 13.4774 6.18611 13.4033 6.60261 13.4028C7.00456 13.4004 7.4028 13.4785 7.77407 13.6324C7.97095 13.7155 8.16567 13.8041 8.36577 13.8807C8.56879 13.9591 8.78461 13.9995 9.00229 13.9999C9.40501 13.9953 9.7969 13.8692 10.1267 13.6379C11.0848 12.9817 11.7947 11.8289 12.2978 10.8195C12.3481 10.7189 12.3962 10.6171 12.4444 10.5165C12.5242 10.3481 12.3985 10.1348 12.1753 10.0123C11.1909 9.47202 10.6146 8.63638 10.5183 7.48361C10.422 6.3308 10.8704 5.42083 11.7706 4.76014L11.9478 4.61463C12.0462 4.53368 11.9926 4.30946 11.8077 4.13446V4.13437C11.1269 3.46387 10.2148 3.08028 9.25927 3.0625C9.07382 3.0626 8.88878 3.07793 8.70585 3.1084C7.87461 3.25059 7.20742 3.64657 6.42433 3.64657C6.18673 3.64676 5.95051 3.60985 5.72433 3.53719C5.06809 3.32714 4.41625 3.0625 3.7184 3.0625C3.64184 3.0625 3.56421 3.0625 3.48657 3.07236C2.62623 3.16406 1.82301 3.54638 1.20935 4.15623C-0.000317093 5.34841 -0.17199 7.2002 0.129857 8.76518C0.419704 10.2811 1.13277 11.6472 2.09859 12.8436L2.09866 12.8439Z" fill="#939090"/>
                            <path d="M6.34769 3.06276C6.36331 3.06412 6.37903 3.06412 6.39476 3.06276C8.70576 2.63181 8.95848 0.846854 8.97273 0.195036C8.97371 0.141716 8.95251 0.0904468 8.91404 0.0534347C8.87566 0.01652 8.82361 -0.00271726 8.77039 0.000310204C8.75086 0.000310204 8.73142 0.00245863 8.71238 0.00685314C6.37843 0.547173 6.13566 2.23046 6.12891 2.85932C6.12998 2.91557 6.15391 2.96909 6.19512 3.00737C6.23642 3.04575 6.2914 3.06567 6.34765 3.06274L6.34769 3.06276ZM8.50889 0.513282C8.50889 0.513282 7.23214 1.23749 6.58831 2.56844C7.63526 2.32498 8.50889 0.513282 8.50889 0.513282Z" fill="#939090"/>
                            </svg>IOS
                        </label>
                        
                        <label>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.61538C0 0.7232 0.639565 0 1.42857 0H11.9048C12.6938 0 13.3333 0.7232 13.3333 1.61538V12.3846C13.3333 13.2768 12.6938 14 11.9048 14H1.42857C0.639565 14 0 13.2768 0 12.3846V1.61538ZM0.952381 4.30769V12.3846C0.952381 12.682 1.1656 12.9231 1.42857 12.9231H11.9048C12.1677 12.9231 12.381 12.682 12.381 12.3846V4.30769H0.952381ZM2.85714 2.15385C2.85714 1.85649 3.07036 1.61538 3.33333 1.61538H5.2381C5.50106 1.61538 5.71429 1.85649 5.71429 2.15385C5.71429 2.4512 5.50106 2.69231 5.2381 2.69231H3.33333C3.07036 2.69231 2.85714 2.4512 2.85714 2.15385ZM1.90476 2.69231C2.16773 2.69231 2.38095 2.4512 2.38095 2.15385C2.38095 1.85649 2.16773 1.61538 1.90476 1.61538C1.64179 1.61538 1.42857 1.85649 1.42857 2.15385C1.42857 2.4512 1.64179 2.69231 1.90476 2.69231Z" fill="#939090"/>
                            </svg>WEB
                        </label>


                        <label>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                                <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                            </svg>AFS
                        </label>

                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                                <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                            </svg>Apple TV</label>

                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                                <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                            </svg>
                            AOSP
                        </label>
                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                                <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                            </svg>
                            Guest
                        </label>
                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                                <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                            </svg>
                            Registered
                        </label>
                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                                <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                            </svg>
                            Premium
                        </label>
                        <label>
                            <svg style={{marginRight:'5px', marginLeft: '10px'}} width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 23.8568C23.5 24.2119 23.1957 24.5 22.8194 24.5H9.18058C8.80429 24.5 8.5 24.2119 8.5 23.8568C8.5 19.9488 11.8642 16.7696 16 16.7696C20.1358 16.7696 23.5 19.949 23.5 23.8568ZM16 15.5046C18.6263 15.5046 20.7641 13.485 20.7641 11.0023C20.7641 8.51957 18.6263 6.5 16 6.5C13.3737 6.5 11.2359 8.51957 11.2359 11.0023C11.2359 13.485 13.3737 15.5046 16 15.5046Z" fill="#CE5CCA"/>
                                <circle cx="21.5" cy="21.5" r="6" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4999 26.4869C18.7459 26.4869 16.5138 24.2541 16.5138 21.5008C16.5138 18.7467 18.7459 16.5138 21.4999 16.5138C24.2541 16.5138 26.486 18.7467 26.486 21.5008C26.486 24.2541 24.2539 26.4869 21.4999 26.4869ZM21.4999 15.5C24.8134 15.5 27.5 18.1866 27.5 21.5008C27.5 24.8142 24.8134 27.5 21.4999 27.5C18.1864 27.5 15.5 24.8142 15.5 21.5008C15.5 18.1866 18.1866 15.5 21.4999 15.5ZM21.4999 17.528C21.2194 17.528 20.993 17.7553 20.993 18.0358V21.4927V21.4952C20.9922 21.6271 21.0403 21.7588 21.1409 21.8594L23.5909 24.3086C23.6898 24.4082 23.819 24.4572 23.9491 24.4572C24.0783 24.4572 24.2085 24.4082 24.3073 24.3086C24.505 24.1109 24.505 23.7899 24.3073 23.5921L22.0068 21.2916V18.0356C22.0068 17.7551 21.7803 17.5278 21.4998 17.5278L21.4999 17.528Z" fill="#CE5CCA"/>
                            </svg>
                            AVOD
                        </label>
                    </div>
                </div>
            </div>

        {/* <div className={'product-journey-discovery'}> */}
        <div className={'product-card'}>
            <div className="row1">
                <div className="column">
                    <ContentAcquisitionsToggle  data={['Viewer to User Ratio', 1000, 70]} />
                </div>
                <div className="column">
                    <ContentAcquisitionsToggle  data={['DAU', 1000, 70]} />
                </div>
                <div className="column">
                    <ContentAcquisitionsToggle  data={['MAU', 1000, 70]} />
                </div>
            </div>
        </div>



        </div>
    )

}

export default ProductAcquisitions;
