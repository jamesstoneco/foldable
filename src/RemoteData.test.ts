import * as RD from './RemoteData'

const testData = { name: 'James' }
const testError = { message: 'There was an error.' }
const r1 = RD.NotAsked()
const r2 = RD.Loading()
const r3 = RD.Success(testData)
const r4 = RD.Failure(testError)

describe('returns correct data shape', () => {
  it('NotAsked() has the correct type of NOT_ASKED', () => {
    expect(r1.type === 'NOT_ASKED')
  })
  it('Loading() has the correct type of LOADING', () => {
    expect(r2.type === 'LOADING')
  })
  it('Success() has the correct type of SUCCESS and matching data obj', () => {
    expect(r3.type === 'SUCCESS')
    expect(r3.type === 'SUCCESS' && r3.data).toEqual(testData)
  })
  it('Failure() has the correct type of FAILURE and matching error obj', () => {
    expect(r4.type === 'FAILURE')
    expect(r4.type === 'FAILURE' && r4.error).toEqual(testError)
  })
})

describe('helper functions', () => {
  it('isNotAsked() returns true for NotAsked(), false for others', () => {
    expect(RD.isNotAsked(r1)).toBe(true)
    expect(RD.isNotAsked(r2)).toBe(false)
    expect(RD.isNotAsked(r3)).toBe(false)
    expect(RD.isNotAsked(r4)).toBe(false)
  })
  it('isLoading() returns true for Loading(), false for others', () => {
    expect(RD.isLoading(r1)).toBe(false)
    expect(RD.isLoading(r2)).toBe(true)
    expect(RD.isLoading(r3)).toBe(false)
    expect(RD.isLoading(r4)).toBe(false)
  })
  it('isSuccess() returns true for Success(), false for others', () => {
    expect(RD.isSuccess(r1)).toBe(false)
    expect(RD.isSuccess(r2)).toBe(false)
    expect(RD.isSuccess(r3)).toBe(true)
    expect(RD.isSuccess(r4)).toBe(false)
  })
  it('isFailure() returns true for Failure(), false for others', () => {
    expect(RD.isFailure(r1)).toBe(false)
    expect(RD.isFailure(r2)).toBe(false)
    expect(RD.isFailure(r3)).toBe(false)
    expect(RD.isFailure(r4)).toBe(true)
  })
})

describe('getRemoteDataState returns correct type', () => {
  it('getRemoteDataState returns coresponding type', () => {
    expect(RD.getRemoteDataState(r1) === 'NOT_ASKED')
    expect(RD.getRemoteDataState(r1) === 'LOADING')
    expect(RD.getRemoteDataState(r1) === 'SUCCESS')
    expect(RD.getRemoteDataState(r1) === 'FAILURE')
  })
})

//tslint-disable:default-export
