import './App.css'

import { types, titles } from './components/chartTypes/types'
import data from './components/data/data'
import options from './components/options/options'

import { Chart } from 'react-google-charts'

export default function App () {
  return (
    <div className='App'>
      <h1>Graphics</h1>
      <section className='graphs'>
        {types.map((type, index) => {
          return (
            <div key={titles[index]}>
              <h2>{titles[index]}</h2>
              <Chart
                chartType={type}
                width='80vw'
                height='fit-content'
                data={data[index]}
                options={options[index]}
              />
            </div>
          )
        })}
      </section>
    </div>
  )
}
