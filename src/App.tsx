import * as React from 'react'
import {
  RemoteData,
  NotAsked,
  isNotAsked,
  isLoading,
  isSuccess,
  isFailure,
  Loading,
  Success,
  Failure,
  getRemoteDataState,
} from './RemoteData'

import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

interface USer {
  name: string
  age: number
}

interface RemoteDataError {
  error: string
}

let testData: RemoteData<RemoteDataError, USer> = NotAsked()
testData = Loading()
testData = Success({ name: 'James', age: 41 } as USer)
testData = Failure({ error: 'This is an error message. Failed to load.' } as RemoteDataError)

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />

        <h1>Test</h1>
        {isNotAsked(testData) && <h2>NotAsked</h2>}
        {isLoading(testData) && <h2>Loading</h2>}
        {isSuccess(testData) && <h2>Success {JSON.stringify(testData.data)} </h2>}
        {isFailure(testData) && <h2>Failure {JSON.stringify(testData.error)}</h2>}

        {getRemoteDataState(testData)}
      </div>
    )
  }
}

export default App
