import { Container, Row, Col } from 'react-bootstrap';

const Header = (props) => {

    // const [title, setTitle] = useState(props.title || '');
    const title = props.title
    return (
        <div>
            <Container className='mt-3'>
                <Row className='d-flex justify-content-center '>
                    <Col lg={6}>
                        <h3 className='text-center'>{title || 'Default header'}</h3>
                    </Col>
                </Row>
            </Container>
            <hr className="solid" />
        </div>
    );
}
 
export default Header;