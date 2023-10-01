import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'


function App() {
  const [count, setCount] = useState([])
  const [_value,setValue] = useState()
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(_value)
  })
  console.log(count)
  console.log(count[0]?.data.title,'-----------------')
  console.log(count[0]?.data.url,'-----------------')
  console.log(count[0]?.data.selftext_html,'-----------------')
  console.log(count[0]?.data.score,'-----------------')
  
  console.log(sanitizedData())
  useEffect(()=>{
    
    async function getData(){
      let img = await axios.get('https://www.reddit.com/r/reactjs.json')
      setCount(img.data.data.children)
    }
    getData()
    // setCount([...img])
  },[])
  async function hello(){
    let value = await count[2]?.data?.selftext_html
    // setValue(value)
  }
  // console.log(typeof &lt;)
  hello()
  const data = '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;I would like to have recommendations on where to get news on React.&lt;/p&gt;&lt;p&gt;Currently all I have is Dan Abramov&amp;#39;s twitter and &lt;a href="https://app.daily.dev"&gt;app.daily.dev&lt;/a&gt; &lt;/p&gt;&lt;p&gt;What other sources would you recommend?&lt;/p&gt;&lt;/div&gt;&lt;!-- SC_ON --&gt;'
  return (
    <>
    <div
    dangerouslySetInnerHTML={{__html : `<div dangerouslySetInnerHTML={{__html : ${data}}}/>`}} 
    />
    {parse(parse(data))}
    {/* <div>{setHtml(data)}</div> */}
      
    </>
  )
}

export default App
