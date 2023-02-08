import { useCallback, useEffect, useState } from 'react';

import HeatMap from '../Charts/HeatMap/HeatMap';

import './ContentSchedulingWithHeatMapAndDropdowns.css'

const ContentSchedulingWithHeatMapAndDropdowns = (props) => {

    const channelGenre = [
        "Hindi",
        "Gujarati",
        "Bangla",
        "Marathi",
        "Punjabi",
    ];

    const metric = [
        "Watch Time",
        "Reach",
        "TSV",
        "GRP",
    ];

    const tg = [
        "One",
        "Two",
        "Three",
    ];

    const market = [
        "Domestic",
        "Global"
    ];

    const day = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const dropdownFilters = [
        {
            name: "Channel Genre",
            values: [
                "Hindi",
                "Gujarati",
                "Bangla",
                "Marathi",
                "Punjabi",
            ],
        },

        {
            name: "Metric",
            values: [
                "Watch Time",
                "Reach",
                "TSV",
                "GRP",
            ],
        },

        {
            name: "TG",
            values: [
                "One",
                "Two",
                "Three",
            ],
        },

        {
            name: "Market",
            values: [
                "Domestic",
                "Global"
            ],
        },

        {
            name: "Day",
            values: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
    ]

    const [selectedDropDownFilters, setSelectedDropDownFilters] = useState({
        channelGenre: '',
        metric: '',
        market: '',
        tg: '',
        day: '',
    });

    const [isAllDropdownsSelected, setIsAllDropdownsSelected] = useState(false);

    useEffect(() => {

        // setIsAllDropdownsSelected(
        //     (selectedDropDownFilters.channelGenre && selectedDropDownFilters.day && selectedDropDownFilters.market
        //         && selectedDropDownFilters.metric && selectedDropDownFilters.tg) ? true : false)

        let flag = selectedDropDownFilters.channelGenre && selectedDropDownFilters.day && selectedDropDownFilters.market
            && selectedDropDownFilters.metric && selectedDropDownFilters.tg ? true : false;

        // console.log('flag', flag);
        setIsAllDropdownsSelected(flag);

    }, [selectedDropDownFilters]);


    const handleSelectedDropdownChange = (filterType, event) => {
        // console.log(event.target.value);

        if (filterType === "channelGenere") {
            setSelectedDropDownFilters({
                ...selectedDropDownFilters,
                channelGenre: event.target.value !== "Channel Genre" ? event.target.value : '',
            })
        } else if (filterType === "metric") {
            setSelectedDropDownFilters({
                ...selectedDropDownFilters,
                metric: event.target.value !== "Metric" ? event.target.value : '',
            })
        } else if (filterType === "market") {
            setSelectedDropDownFilters({
                ...selectedDropDownFilters,
                market: event.target.value !== "Market" ? event.target.value : '',
            })
        } else if (filterType === "day") {
            setSelectedDropDownFilters({
                ...selectedDropDownFilters,
                day: event.target.value !== "Day" ? event.target.value : '',
            })
        } else if (filterType === "tg") {
            setSelectedDropDownFilters({
                ...selectedDropDownFilters,
                tg: event.target.value !== "TG" ? event.target.value : '',
            })
        }

        // setIsAllDropdownsSelected(
        //     (selectedDropDownFilters.channelGenre && selectedDropDownFilters.day && selectedDropDownFilters.market
        //         && selectedDropDownFilters.metric && selectedDropDownFilters.tg) ? true : false)

    }

    return (
        <div className='content-scheduling-with-heatmap-dropdowns-container'>
            <div>
                <div className='content-scheduling-with-heatmap-dropdowns-dropdown-filters-container'>
                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="chanlegenre"
                        value={selectedDropDownFilters.channelGenre}
                        onChange={(event) => { handleSelectedDropdownChange('channelGenere', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Channel Genre</option>
                        {channelGenre.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="metric"
                        value={selectedDropDownFilters.metric}
                        onChange={(event) => { handleSelectedDropdownChange('metric', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Metric</option>
                        {metric.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="tg"
                        value={selectedDropDownFilters.tg}
                        onChange={(event) => { handleSelectedDropdownChange('tg', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >TG</option>
                        {tg.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="market"
                        value={selectedDropDownFilters.market}
                        onChange={(event) => { handleSelectedDropdownChange('market', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Market</option>
                        {market.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="day"
                        value={selectedDropDownFilters.day}
                        onChange={(event) => { handleSelectedDropdownChange('day', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Day</option>
                        {day.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className='heatmap-container'>
                    <div className='heatmap-child-container'>
                        <HeatMap />
                    </div>
                    <HeatMapWithDropDownFilters dropdownFilters={dropdownFilters} />
                </div>
            </div>
            <div style={{ "marginTop": "1rem" }}>
                <div className='content-scheduling-with-heatmap-dropdowns-dropdown-filters-container'>
                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="chanlegenre"
                        value={selectedDropDownFilters.channelGenre}
                        onChange={(event) => { handleSelectedDropdownChange('channelGenere', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Channel Genre</option>
                        {channelGenre.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="metric"
                        value={selectedDropDownFilters.metric}
                        onChange={(event) => { handleSelectedDropdownChange('metric', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Metric</option>
                        {metric.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="tg"
                        value={selectedDropDownFilters.tg}
                        onChange={(event) => { handleSelectedDropdownChange('tg', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >TG</option>
                        {tg.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="market"
                        value={selectedDropDownFilters.market}
                        onChange={(event) => { handleSelectedDropdownChange('market', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Market</option>
                        {market.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>

                    <select
                        className='content-scheduling-with-heatmap-dropdowns-dropdown'
                        name="day"
                        value={selectedDropDownFilters.day}
                        onChange={(event) => { handleSelectedDropdownChange('day', event) }}  >
                        {/* <label for="channelGenre">Channel Genre</label> */}
                        <option >Day</option>
                        {day.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className='heatmap-container'>
                    <div className='heatmap-child-container'>
                        <HeatMap />
                    </div>
                    <HeatMapWithDropDownFilters dropdownFilters={dropdownFilters} />
                </div>
            </div>
        </div>
    )
}

const HeatMapWithDropDownFilters = (props) => {

    const { dropdownFilters } = props;

    let filerNames = dropdownFilters.map(item => item.name);

    let initialStateObject = {};

    filerNames.forEach(element => {
        initialStateObject[element] = ''
    });

    console.log('stateObject', initialStateObject);

    const [selectedDropDownFilters, setSelectedDropDownFilters] = useState(initialStateObject);

    // console.log('filerNames', filerNames);


    // const dropdownFilterNames = Object.assign({}, dropdownFilters);
    const dropdownFilterNames = dropdownFilters.map((item) => item.name)

    console.log('dropdownFilterNames', dropdownFilterNames);

    return (<></>)

    // // const [selectedDropDownFilters, setSelectedDropDownFilters] = useState(
    // //     dropdownFilters.map((item, index) => {
    // //         return { [item.name]: '' }
    // //     })
    // // )

    // // const handleSelectedDropdownChange = (filterType, event) => {
    // //     // console.log(event.target.value);

    // //     setSelectedDropDownFilters([
    // //         ...selectedDropDownFilters,

    // //     ])

    // //     if (filterType === "channelGenere") {
    // //         setSelectedDropDownFilters([
    // //             ...selectedDropDownFilters,
    // //             channelGenre: event.target.value !== "Channel Genre" ? event.target.value : '',
    // //         ])
    // //     } else if (filterType === "metric") {
    // //         setSelectedDropDownFilters({
    // //             ...selectedDropDownFilters,
    // //             metric: event.target.value !== "Metric" ? event.target.value : '',
    // //         })
    // //     } else if (filterType === "market") {
    // //         setSelectedDropDownFilters({
    // //             ...selectedDropDownFilters,
    // //             market: event.target.value !== "Market" ? event.target.value : '',
    // //         })
    // //     } else if (filterType === "day") {
    // //         setSelectedDropDownFilters({
    // //             ...selectedDropDownFilters,
    // //             day: event.target.value !== "Day" ? event.target.value : '',
    // //         })
    // //     } else if (filterType === "tg") {
    // //         setSelectedDropDownFilters({
    // //             ...selectedDropDownFilters,
    // //             tg: event.target.value !== "TG" ? event.target.value : '',
    // //         })
    // //     }

    // //     // setIsAllDropdownsSelected(
    // //     //     (selectedDropDownFilters.channelGenre && selectedDropDownFilters.day && selectedDropDownFilters.market
    // //     //         && selectedDropDownFilters.metric && selectedDropDownFilters.tg) ? true : false)

    // // }

    // // return (
    // //     <div className='heatmap-with-dropdown-filters-container'>
    // //         <div className='content-scheduling-with-heatmap-dropdowns-dropdown-filters-container'>
    // //             <select
    // //                 className='content-scheduling-with-heatmap-dropdowns-dropdown'
    // //                 name="chanlegenre"
    // //                 value={selectedDropDownFilters.channelGenre}
    // //                 onChange={(event) => { handleSelectedDropdownChange('channelGenere', event) }}  >
    // //                 {/* <label for="channelGenre">Channel Genre</label> */}
    // //                 <option >Channel Genre</option>
    // //                 {channelGenre.map((item, key) => {
    // //                     return <option key={key} value={item}>{item}</option>
    // //                 })}
    // //             </select>

    // //             <select
    // //                 className='content-scheduling-with-heatmap-dropdowns-dropdown'
    // //                 name="metric"
    // //                 value={selectedDropDownFilters.metric}
    // //                 onChange={(event) => { handleSelectedDropdownChange('metric', event) }}  >
    // //                 {/* <label for="channelGenre">Channel Genre</label> */}
    // //                 <option >Metric</option>
    // //                 {metric.map((item, key) => {
    // //                     return <option key={key} value={item}>{item}</option>
    // //                 })}
    // //             </select>

    // //             <select
    // //                 className='content-scheduling-with-heatmap-dropdowns-dropdown'
    // //                 name="tg"
    // //                 value={selectedDropDownFilters.tg}
    // //                 onChange={(event) => { handleSelectedDropdownChange('tg', event) }}  >
    // //                 {/* <label for="channelGenre">Channel Genre</label> */}
    // //                 <option >TG</option>
    // //                 {tg.map((item, key) => {
    // //                     return <option key={key} value={item}>{item}</option>
    // //                 })}
    // //             </select>

    // //             <select
    // //                 className='content-scheduling-with-heatmap-dropdowns-dropdown'
    // //                 name="market"
    // //                 value={selectedDropDownFilters.market}
    // //                 onChange={(event) => { handleSelectedDropdownChange('market', event) }}  >
    // //                 {/* <label for="channelGenre">Channel Genre</label> */}
    // //                 <option >Market</option>
    // //                 {market.map((item, key) => {
    // //                     return <option key={key} value={item}>{item}</option>
    // //                 })}
    // //             </select>

    // //             <select
    // //                 className='content-scheduling-with-heatmap-dropdowns-dropdown'
    // //                 name="day"
    // //                 value={selectedDropDownFilters.day}
    // //                 onChange={(event) => { handleSelectedDropdownChange('day', event) }}  >
    // //                 {/* <label for="channelGenre">Channel Genre</label> */}
    // //                 <option >Day</option>
    // //                 {day.map((item, key) => {
    // //                     return <option key={key} value={item}>{item}</option>
    // //                 })}
    // //             </select>
    // //         </div>
    // //         <div className='heatmap-container'>
    // //             {selectedDropDownFilters.channelGenre && selectedDropDownFilters.day && selectedDropDownFilters.market
    // //                 && selectedDropDownFilters.metric && selectedDropDownFilters.tg && <HeatMap
    // //                     // isAllDropdownsSelected={
    // //                     //     (selectedDropDownFilters.channelGenre && selectedDropDownFilters.day && selectedDropDownFilters.market
    // //                     //         && selectedDropDownFilters.metric && selectedDropDownFilters.tg) ? true : false
    // //                     // }
    // //                     isAllDropdownsSelected={isAllDropdownsSelected}
    // //                     shallDisableIfAllNotSelected={true}
    // //                 />}
    // //         </div>
    // //     </div>
    // )
}

export default ContentSchedulingWithHeatMapAndDropdowns;