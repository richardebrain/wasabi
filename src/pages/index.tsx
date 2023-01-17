import Head from 'next/head'
import { Inter } from '@next/font/google'
import { MainStyle } from '@/styles/home.styled'
import CustomInput from '@/components/customInput/input'
import HomeTableWrapper from '@/components/home/homeTableWrapper' 
import SearchIcon from '../../public/search.svg'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="compare different schools on wasabi ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyle>
        <div className="main-header">
          <h1 className='heading'>Compare Schools</h1>
          <div className="description">

            <p>
              Compare top four schools you’re interested in and pick the right one for you. </p>
            <p>Use the search field to add schools to compare. You can drag to reorder schools after selection.</p>

          </div>
        </div>
        <CustomInput height='48' width='720' icon={<SearchIcon/>}/>
        <HomeTableWrapper />



      </MainStyle>
    </>
  )
}
