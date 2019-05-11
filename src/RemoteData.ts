// RemoteData-ts POC
// TODO: Can you use an eNum instead? It seems not.
// TODO: Unit tests

// Inspiration from @ohani @olavi at Futurice and lemons.js by @nvie
// Philosophy: use Elm matched verbiage and static typed purely functional approach flexible enough for reuse
// Goal: to combine with an Elm style Decoder for ts runtime type enforcement after side effects induced by redux-loop

export type RemoteDataType = 'NOT_ASKED' | 'LOADING' | 'SUCCESS' | 'FAILURE'

interface RemoteDataNotAsked {
  type: 'NOT_ASKED'
}
interface RemoteDataLoading {
  type: 'LOADING'
}
interface RemoteDataSuccess<T> {
  type: 'SUCCESS'
  data: T
}
interface RemoteDataFailure<E> {
  type: 'FAILURE'
  error: E
}

export type RemoteData<E, T> =
  | RemoteDataNotAsked
  | RemoteDataLoading
  | RemoteDataSuccess<T>
  | RemoteDataFailure<E>

export const NotAsked = (): RemoteDataNotAsked => ({ type: 'NOT_ASKED' })
export const Loading = (): RemoteDataLoading => ({ type: 'LOADING' })
export const Success = <T>(data: T): RemoteDataSuccess<T> => ({
  type: 'SUCCESS',
  data,
})
export const Failure = <E>(error: E): RemoteDataFailure<E> => ({
  type: 'FAILURE',
  error,
})

export const isNotAsked = <E, T>(RemoteData: RemoteData<E, T>): RemoteData is RemoteDataNotAsked =>
  RemoteData.type === 'NOT_ASKED'
export const isLoading = <E, T>(RemoteData: RemoteData<E, T>): RemoteData is RemoteDataLoading =>
  RemoteData.type === 'LOADING'
export const isSuccess = <E, T>(RemoteData: RemoteData<E, T>): RemoteData is RemoteDataSuccess<T> =>
  RemoteData.type === 'SUCCESS'
export const isFailure = <E, T>(RemoteData: RemoteData<E, T>): RemoteData is RemoteDataFailure<E> =>
  RemoteData.type === 'FAILURE'

export const getRemoteDataState = <E, T>(RemoteData: RemoteData<E, T>): RemoteDataType => {
  return RemoteData.type
}
