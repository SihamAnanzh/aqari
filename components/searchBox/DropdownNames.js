import React, { useState, useEffect, useContext } from 'react'
import onClickOutside from 'react-onclickoutside';
import axios from 'axios';
import { FilterContext } from '../../stores/filter';


const DropdownNames = ({ items = [], title, dropTitle, setSelectItem, showSearchSelling, setRegionName }) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [showListNames, setShowListNames] = useState(true)
    const [selectItem, setSelectItems] = useState([])
    const [regionsId, setRegionsId] = useState([])
    const [selectionID, setSelectionID] = useState([])
    const filterCtx = useContext(FilterContext)


    // const toggle = () => setOpen(!open);
    DropdownNames.handleClickOutside = () => {
        setOpen(false);
        setShowListNames(true)

    }



    useEffect(() => {

        selectionID.length !== 0 && selectionID.map(item => {
            AddActiveClass(item)

        })
    }, [showListNames]);




    useEffect(() => {

        filterCtx.setRegionsId(regionsId)
        filterCtx.setAreaStringName([...selection])
    }, [selection]);





    const AddActiveClass = (id) => {


        let item = document.getElementById(id)
        item !== null ? item.classList.toggle('selected') : ""

        // item.classList.add('selected')



    }

    const removeAcitveCllass = (id) => {
        let item = document.getElementById(id)
        item.classList.remove('selected')


    }


    return (
        <div className='dropdwon-menu' style={{
            zIndex: "1000"
        }}>
            <div className='serach-content' onClick={(e) => {
                setOpen(!open)
                setShowListNames(!showListNames)

                //  e.target.nextSibling.classList.toggle('hidden')
            }}>
                <span className='serach-icon' >
                    <img src='assets/img/research.svg' style={{
                        margin: '10px '
                    }} />
                </span>
                <span className='bar-icon' style={{
                    margin: '5px'
                }}>
                    <img src='/assets/img/bar.svg' style={{
                        height: "28px"
                    }} />
                </span>
                <p className='placeholder cityName' style={{

                    fontSize: `${selection.length > 0 ? "16px" : ""}`,
                    color: `${selection.length > 0 ? "#00416B" : ""}`
                }}>


                    {


                        selection.length > 0 ? (
                            selection.length < 3 ?
                                selection.map((select, index) => (
                                    (index ? ' ,' : "") + select
                                )) : selection[0] + "," + selection[1] + "," + selection[2] + "..."
                        ) : title
                    }
                </p>
                <img src='/assets/img/Stroke 1.svg' className='arrow-drop-name' />
            </div>
            {
                open ?
                    <ul className={`list-items dropItem ${showListNames ? 'hidden' : ""}`}>

                        <h3 >{dropTitle}</h3>
                        {items.map((item) => (
                            <li className='list-item' key={item.id} id={item.id} onClick={(e) => {
                                setOpen(!open)
                                setShowListNames(!showListNames)



                                let selectInfo = {
                                    value: item.title,
                                    id: item.id
                                }

                                let index = selection.findIndex((el) => el === item.title)
                                if (index == -1) {
                                    setRegionsId(pre => [...pre, item.id])
                                    setSelection(pre => [...pre, item.title])
                                    setSelectionID(pre => [...pre, item.id])

                                    setSelectItems(pre => [...pre, selectInfo])
                                    AddActiveClass(e.target.id)



                                } else {
                                    let newArray = [...selection]
                                    newArray.splice(index, 1)
                                    setSelection(newArray)
                                    let newRegions = [...regionsId]
                                    newRegions.splice(index, 1)
                                    setRegionsId(newRegions)
                                    let newIdsSelection = [...selectionID]
                                    newIdsSelection.splice(index, 1)
                                    setSelectionID(newIdsSelection)
                                    removeAcitveCllass(e.target.id)







                                }






                            }
                            }>{item.title}</li>
                        ))}
                    </ul> : ""
            }

        </div>



    );
}

const clickOutsideConfig = {
    handleClickOutside: () => DropdownNames.handleClickOutside,
};

export default onClickOutside(DropdownNames, clickOutsideConfig);
