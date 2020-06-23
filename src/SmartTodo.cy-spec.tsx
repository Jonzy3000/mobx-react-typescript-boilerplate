/// <reference types="cypress" />
import * as React from 'react'
import { mount } from 'cypress-react-unit-test'
import { SmartTodo } from './SmartTodo'

describe('SmartTodo', () => {
  it('toggles', () => {
    mount(<SmartTodo />)
    cy.get('h3').should('not.contain', 'done')
      .click()
    cy.get('h3').should('contain', 'done')

    cy.log('**check todo state**')
    // @ts-ignore
    cy.wrap(window).its('todo').should('deep.include', {
      title: 'Click to toggle',
      done: true,
    })
  })
})
