import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>tanatswa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hello i'm {' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Tanatswa Mukwawaya
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          I am a programmer with experience in,<br/>{' '}<br/>
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          👉Website Development (front-end & still learning backend)
          </code><br/><br/>
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          👉Android Development in Kotlin
          </code><br/><br/>
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          👉......
          </code>
        </p>


        <p className="mt-3 text-2xl">
          besides programming, I am also a Graphics designer. I've worked for 4 years at <a href='https://eastern star graphics'>Eastern Star Graphics</a>
          <br/><br/>
          Some of my projects are below👇 👇 👇
        </p>




        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://github.com/tanatswasamson2000/nextjs-commerce"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Netflix clone &rarr;</h3>
            <p className="mt-4 text-xl">
              Coming soon
            </p>
          </a>

          <a
            href="https://github.com/tanatswasamson2000/nextjs-commerce"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Amazon Clone &rarr;</h3>
            <p className="mt-4 text-xl">
              Coming soon
            </p>
          </a>

          <a
            href="https://github.com/tanatswasamson2000/nextjs-commerce"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">My Projects on Github &rarr;</h3>
            <p className="mt-4 text-xl">
              Get more of projects on Github
            </p>
          </a>

          <a href='https://github.com/tanatswasamson2000/nextjs-commerce'
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Not Official &rarr;</h3>
            <p className="mt-4 text-xl">
              This is not my official website, Rate it!!!!!
            </p>
          </a>
        </div>
      </main>
      <br/>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/tanatswasamson2000/nextjs-commerce"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Eastern Star Graphics
        </a>
      </footer>
    </div>
  )
}

export default Home
