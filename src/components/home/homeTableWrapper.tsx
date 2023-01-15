import { convertedObject, school, } from '@/helpers/constant'
import React from 'react'
import { ImageContainerStyle, ImageStyle, ImageTabStyle, TabButtonStyle, TableContainerStyle, TableStyle, TableWrapperStyle, TabStyle, ThImageStyle, } from './homeTable.style'
import ToggleIcon from '../../../public/toggle.svg'


const tabs = [
    { name: 'Findeet Rating' },
    { name: 'Key School Stats' },
    { name: 'Academic Stats' },
    { name: 'Teachers Stats' },
    { name: 'Key Structure' },

]

const HomeTableWrapper = () => {
    const [toggle, setToggle] = React.useState(false)
    const toggleCheck = () => {
        setToggle(!toggle)
    }
    return (
        <TableWrapperStyle>
            {/* tab */}
            <TabStyle className="tab">
                {convertedObject.keys.map((tab, index) => (
                    <TabButtonStyle key={index} >
                        {tab.toUpperCase()}
                    </TabButtonStyle>
                ))}

            </TabStyle>

            {/* table */}
            <TableContainerStyle>
                <TableStyle>
                    <thead>
                        <tr >
                            <ThImageStyle>
                                <ImageContainerStyle>

                                    <ToggleIcon/>
                                    <p className='check' >

                                        <input type="checkbox" name='toggle' id='toggle' onChange={() => toggleCheck()} />
                                        <label htmlFor="toggle"> Hide some features</label>
                                    </p>
                                </ImageContainerStyle>


                            </ThImageStyle>
                            {
                                school.map((school, index) => (
                                    <ThImageStyle key={index}>
                                        {school.id && (
                                            <>
                                                <ImageStyle src={school.image
                                                } alt={school.schoolName} width={198.75} height={160}
                                                    priority
                                                />
                                                <p>{school.schoolName}</p>
                                            </>)}
                                    </ThImageStyle>
                                ))
                            }


                            {
                                Array.from({ length: 2 }).map((_, index) => (
                                    <ThImageStyle key={index}>hello world</ThImageStyle>
                                ))
                            }


                        </tr>
                    </thead>
                </TableStyle>

                {!toggle &&
                    (
                        convertedObject.keys.map((item, parentIndex) => (


                            <TableStyle key={parentIndex}>
                                <thead>
                                    <tr >
                                        <th align='left' colSpan={5}>{item}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.entries(convertedObject?.convertedObject[parentIndex][item]).map((item, index) => (
                                            <tr key={index}>
                                                <th align='left'>{item[0]}</th>

                                                <td >
                                                    {!item[1].school1 ? 'No Data' : item[1].school1}
                                                </td>
                                                <td>
                                                    {!item[1].school2 ? 'No Data' : item[1].school2}
                                                </td>
                                                <td>
                                                    {!item[1].school3 ? '' : item[1].school3}
                                                </td>
                                                <td>
                                                    {!item[1].school4 ? '' : item[1].school4}
                                                </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </TableStyle>
                        ))
                    )
                }
            </TableContainerStyle>
        </TableWrapperStyle >
    )
}

export default HomeTableWrapper