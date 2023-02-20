import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Calendar } from 'react-calendar';
import * as d3 from 'd3';

const ProductDiscovery = (props) => {
    const { dropDownMenu, handleOnDropDownMenuSelectionChange, isCalendar = false, isMendatory = false } = props;
    const [isShowDropDownMenu, setIsShowDropDownMenu] = useState(false);
    const [selectedDropDownOption, setSelectedDropDownOption] = useState(dropDownMenu.isMendatory ? '' : dropDownMenu.options[0]);
    const [selectedFilterDate, setSelectedFilterDate] = useState(new Date());
    const dropDownMenuRef = useRef(null);
    let date = new Date();
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

export default ProductDiscovery;