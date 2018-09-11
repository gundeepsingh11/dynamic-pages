import { Component } from 'react';
import Link from 'next/link';
import { Image, NavContainer, HeaderContainer, NavButton } from './Header.style';


class Header extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
        <HeaderContainer>
            <Link as="/" href="/GenericController?url=home">
              <Image src="http://www.starbucks.in/media/logo_tcm87-366_w1024_n.png" alt="_logo" className="logo clearfix" />
            </Link>
          <NavContainer>
            <Link as="/" href="/GenericController?url=home">
                <NavButton>Home</NavButton>
            </Link>
            <Link as="/about" href="/GenericController?url=about">
                  <NavButton>About</NavButton>
              </Link>
          </NavContainer>
        </HeaderContainer>
    );
  };
}
export default Header;
