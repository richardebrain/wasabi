import { school } from '@/helpers/constant'
import React from 'react'
import { ImageContainerStyle, ImageStyle, ImageTabStyle, TabButtonStyle, TableWrapperStyle, TabStyle } from './homeTable.style'
import Image from 'next/image'
import ToggleIcon from '../../../public/toggle.svg'


const tabs = [
    { name: 'Findeet Rating' },
    { name: 'Key School Stats' },
    { name: 'Academic Stats' },
    { name: 'Teachers Stats' },
    { name: 'Key Structure' },

]

const HomeTableWrapper = () => {
    return (
        <TableWrapperStyle>
            {/* tab */}
            <TabStyle className="tab">
                {tabs.map((tab, index) => (
                    <TabButtonStyle key={index} >
                        {tab.name.toUpperCase()}
                    </TabButtonStyle>
                ))}

            </TabStyle>
            {/* school Image */}
            <ImageTabStyle>
                <ImageContainerStyle>
                    <ToggleIcon />
                    <div className='check'>

                        <input type="checkbox" name='toggle' id='toggle'/>
                        <label htmlFor="toggle"> Hide some features</label>
                    </div>

                </ImageContainerStyle>
                {
                    school.map((school, index) => (
                        <ImageContainerStyle key={index}>
                            {school.id && (
                                <>
                            <ImageStyle src={school.image
                            } alt={school.schoolName} width={198.75} height={160}
                                priority
                            />
                            <p>{school.schoolName}</p>
                            </>)}
                        </ImageContainerStyle>
                    ))
                }
            </ImageTabStyle>
            {/* table */}

                


        </TableWrapperStyle>
    )
}

export default HomeTableWrapper