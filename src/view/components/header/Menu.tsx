import { Menu } from 'semantic-ui-react'
import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  .ui.secondary.menu .item {
    color: ${({ theme }) => theme.menuText};
  }
  .ui.secondary.menu .active.item {
    background: ${({ theme }) => theme.menuActiveBackground};
    color: ${({ theme }) => theme.menuTextActive};
  }
`

export default function AppMenu() {

  return (
    <MenuContainer>
      <Menu secondary className="pr-2">
      </Menu>
    </MenuContainer>
  )
}
