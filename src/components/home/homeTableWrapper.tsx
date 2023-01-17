import { convertedObject, findMax, school, } from '@/helpers/constant'
import React, { useRef, useState } from 'react'
import { FileInputStyle, FileLabelStyle, GreaterStyle, ImageContainerStyle, ImageStyle, TableContainerStyle, TableStyle, TableWrapperStyle, TabLinkStyle, TabStyle, ThImageStyle, } from './homeTable.style'
import ToggleIcon from '../../../public/toggle.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FileUplaodIcon from '../../../public/fileUpload.svg'

type refProps = React.MutableRefObject<HTMLTableCellElement | null>

const HomeTableWrapper = () => {
    const [toggle, setToggle] = useState(false)
    const scrollToRef = useRef<refProps>(null)
    const router = useRouter()
    const formatRoute = router.asPath.substring(2).replace(/%20/g, ' ')

    const toggleCheck = () => {
        setToggle(!toggle)
    }
    const [file, setFile] = useState({ image: '' })
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
        if (!e?.target?.files) return
        const file = e?.target?.files[0] as File
        const image = URL.createObjectURL(file)
        setFile(state => ({ ...state, image }))
    }

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked)
    }

    return (
        <TableWrapperStyle>
            {/* tab */}
            <TabStyle className="tab">
                {convertedObject.keys.map((tab, index) => (
                    <Link key={index} href={`#${tab}`} legacyBehavior >
                        <TabLinkStyle onClick={() => scrollToRef.current?.current?.scrollIntoView({ behavior: 'smooth' })} className={`${formatRoute === tab ? 'active' : ''}`}>

                            {tab.toUpperCase()}
                        </TabLinkStyle>
                    </Link>
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
                                    <tr id={item}  >
                                        <th align='left' colSpan={5} ref={scrollToRef}>{item}</th>
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
                                                                findMax(item[1]).max == school[1] && findMax(item[1]).max !== 1? (<GreaterStyle>
                                                                    {school[1]} <input type="checkbox" checked onChange={(e) => handleCheck(e)} />
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