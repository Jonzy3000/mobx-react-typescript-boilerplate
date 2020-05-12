/// <reference types="cypress" />
import AppState from './AppState'

describe('AppState', () => {
  it('increments', () => {
    const state = new AppState()
    expect(state.timer).to.equal(0)

    cy.wait(1100)
      .then(() => {
        expect(state.timer).to.equal(1)
      })

    cy.wait(1000)
      .then(() => {
        expect(state.timer).to.equal(2)
      })
      .then(() => {
        state.resetTimer()
        expect(state.timer).to.equal(0)
      })
  })


  it('quickly increments by controlling the clock', () => {
    // https://on.cypress.io/clock
    // in order to use the mock clock and timers
    // need to defer app code into "then" block
    let state
    cy.clock()
      .then(() => {
        state = new AppState()
        expect(state.timer).to.equal(0)
      })

    cy.tick(1100)
      .then(() => {
        expect(state.timer).to.equal(1)
      })

    cy.tick(1000)
      .then(() => {
        expect(state.timer).to.equal(2)
      })
  })
})
