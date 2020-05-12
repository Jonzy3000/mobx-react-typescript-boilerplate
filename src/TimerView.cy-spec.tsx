/// <reference types="cypress" />
import * as React from 'react'
import { mount } from 'cypress-react-unit-test'
import AppState from './AppState'
import TimerView from './TimerView'

describe('TimerView', () => {
  it('shows the timer', () => {
    const appState = new AppState()
    mount(<TimerView appState={appState} />)

    // wait until the counter increments
    cy.contains('button', 'Seconds passed: 2').click()

    // resets
    cy.contains('button', 'Seconds passed: 0')
    cy.wrap(appState.timer).should('equal', 0)

    // again the count continues
    cy.wrap(appState).its('timer').should('equal', 3)
  })
})
