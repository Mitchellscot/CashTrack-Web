import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CashTrack</title>
        <meta name="description" content="Cash Track - a budgeting app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>Hey</h1>
        <div>
          This is a placeholder site. <br />
          Check out the <a href="https://demo.cashtrack.net">demo site</a> in the meantime.
        </div>
      </main>
    </>
  )
}
