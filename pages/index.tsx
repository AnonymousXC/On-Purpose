import type { NextPage } from "next/types"
import Head from "next/head"



const Home : NextPage = () => {
  return (
    <>

      <Head>
        <title>On Purpose</title>
      </Head>
      
      <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default Home