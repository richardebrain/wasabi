import { convertedObject, findMax, school, } from '@/helpers/constant'
import React, { useRef, useState } from 'react'
import { FileInputStyle, FileLabelStyle, GreaterStyle, ImageContainerStyle, ImageStyle, TableContainerStyle, TableStyle, TableWrapperStyle, TabLinkStyle, TabStyle, ThImageStyle, } from './homeTable.style'
import ToggleIcon from '../../../public/toggle.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FileUplaodIcon from '../../../public/fileUpload.svg'


const HomeTableWrapper = () => {
    const refs = convertedObject.keys.reduce((acc, value) => {
        acc[value] = React.createRef<HTMLTableHeaderCellElement>()
        return acc

    }, {} as { [key: string]: React.RefObject<HTMLTableHeaderCellElement> })

    const [toggle, setToggle] = useState(false)


    const toggleCheck = () => {
        setToggle(!toggle)
    }
    const [file, setFile] = useState({ image: '' })

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e?.target?.files) return
        const file = e?.target?.files[0] as File
        const image = URL.createObjectURL(file)
        setFile(state => ({ ...state, image }))
    }

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target

    }
    const gotToRef = (id: string) => {
        refs[id].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        console.log(refs[id].current?.id)

    }
    return (
        <TableWrapperStyle>
            {/* tab */}
            <TabStyle className="tab">
                {convertedObject.keys.map((tab: string, index: number) => (

                    <TabLinkStyle
                        id={tab}
                        onClick={() => gotToRef(tab)}
                        // className={`${refs[tab].current?.id  === tab ? 'active' : ''}`}
                        key={tab}

                    >

                        {tab.toUpperCase()}
                    </TabLinkStyle>

                ))}

            </TabStyle>

            {/* table */}
            <TableContainerStyle>
                <TableStyle>
                    <thead>
                        <tr >
                            <ThImageStyle>
                                <ImageContainerStyle>

                                    <ToggleIcon />
                                    <p className='check' >

                                        <input type="checkbox" name='toggle' id='toggle' onChange={() => toggleCheck()} />
                                        <label htmlFor="toggle"> Hide some features</label>
                                    </p>
                                </ImageContainerStyle>


                            </ThImageStyle>
                            {
                                school.map((school, index) => (
                                    <ThImageStyle key={school.id} >
                                        {school.id && (
                                            <>
                                                <ImageStyle src={school.image
                                                } alt={school.schoolName} width={198.75} height={160}
                                                    priority
                                                    referrerPolicy='no-referrer'
                                                />
                                                <p>{school.schoolName}</p>
                                            </>)}
                                    </ThImageStyle>
                                ))
                            }


                            {!school.length || school.length <= 1 || school.length <= 2 &&
                                Array.from({ length: 2 }).map((_, index) => (
                                    <ThImageStyle key={index}>
                                        {file.image ?
                                            (
                                                <>

                                                    <ImageStyle src={file.image} alt='school' width={198.75} height={160} priority />
                                                    <p>hello</p>
                                                </>
                                            )

                                            : (<ImageContainerStyle className='imageSkeleton'>

                                                <FileInputStyle type="file" name='fileUpload' id='fileUpload' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileUpload(e)} disabled />
                                                <FileLabelStyle htmlFor="fileUpload" id='fileUpload' >
                                                    <FileUplaodIcon />

                                                </FileLabelStyle>

                                                < p></p>


                                            </ImageContainerStyle>)}
                                    </ThImageStyle>
                                ))
                            }


                        </tr>
                    </thead>
                </TableStyle>

                {!toggle &&
                    (
                        convertedObject.keys.map((item, parentIndex) => (


                            <TableStyle key={parentIndex} >
                                <thead>
                                    <tr   >
                                        <th align='left' colSpan={5} ref={refs[item]} id={item}>{item}</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        Object.entries(convertedObject?.convertedObject[parentIndex][item]).map((item, index) => (
                                            <tr key={index}>
                                                <th align='left'>{item[0]}</th>

                                                {



                                                    Object.entries(item[1]).map((school, index) => (
                                                        <td key={index}>
                                                            {
                                                                findMax(item[1]).max == school[1] && findMax(item[1]).max !== 1 ? (<GreaterStyle>
                                                                    {school[1]}
                                                                    <label htmlFor="">

                                                                        <input type="checkbox" checked onChange={(e) => handleCheck(e)} />
                                                                        <span className='custom'></span>
                                                                    </label>
                                                                </GreaterStyle>) : school[1]
                                                            }

                                                        </td>

                                                    ))

                                                }

                                                <td></td>
                                                <td></td>


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