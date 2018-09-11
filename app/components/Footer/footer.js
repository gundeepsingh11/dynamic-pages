import { Component } from 'react';
import { Wrapper, Container, Para } from './Footer.style';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Wrapper>
                <Container>
                    {/* <select>
                        <option value="English">English</option>
                        <option value="Italian">Italian</option>
                    </select> */}
                    <Para>&#169; 2018 Starbucks Corporation. All rights reserved.</Para>
                </Container>
            </Wrapper>
        );
    };
}

export default Footer;