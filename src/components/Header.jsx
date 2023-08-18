import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import LogoLong from "components/_ui/LogoLong"

const HeaderContainer = styled("div")`
  padding-top: 2em;
  padding-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`

const LogoContainer = styled.div`
  width: 100%;
  height: 50px;
`

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <LogoContainer>
        <LogoLong width="auto" height="100%" />
      </LogoContainer>
    </Link>
  </HeaderContainer>
)

export default Header
