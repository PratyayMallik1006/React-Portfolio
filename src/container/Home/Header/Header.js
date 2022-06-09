import React, { useState } from 'react'
import {TOTAL_SCREEN, GET_SCREEN_INDEX} from '../../../utilities/commonUtils'
import ScrollService from '../../../utilities/ScrollService'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Header.css'

export default function Header(){
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)

    const updateCurrentScreen = (currentScreen)=>{
        if(!currentScreen || !currentScreen.ScreenInView)
        return
        let screenIndex = GET_SCREEN_INDEX(currentScreen.ScreenInView)
        if(screenIndex < 0)
        return
    }
    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

    const getHeaderOptions = ()=>{
        return(
            <div>
                
            </div>
        )
    }
    return(
        <div>

        </div>
    )
}