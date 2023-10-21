import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { LuAlignEndHorizontal } from "react-icons/lu";
import { BiLayer } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { BsPlusCircle } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";



function Dashboard() {
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col sm={2} className='bg-white p-0 header  border-end'>
                        <div>
                            <h6 className='bg-dark text-white p-3 m-0 fw-bold'>Company name</h6>
                            <Nav defaultActiveKey="/Dashboard" variant='tabs' className="flex-column ">
                                <Nav.Link style={{ margin: "10px 0" }} href="/Dashboard"><BiHomeAlt /> Dashboard</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-1"><AiOutlineFile /> Orders</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-2"><AiOutlineShoppingCart /> Products</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-3"><IoMdContacts /> Customer</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-4"><LuAlignEndHorizontal /> Reports</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-5"><BiLayer /> Intigrations</Nav.Link>
                            </Nav>
                        </div>
                        <div>
                            <div className='d-flex align-items-center justify-content-between m-3 text-secondary fw-bold'>
                                <span>SAVED REPORTS</span>
                                <BsPlusCircle />
                            </div>
                            <Nav defaultActiveKey="/Dashboard" variant='tabs' className="flex-column">
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-1" className='text-secondary'>< FiFileText /> Current month</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-2" className='text-secondary'>< FiFileText /> Last quarter</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-3" className='text-secondary'>< FiFileText /> Social engagemenet</Nav.Link>
                                <Nav.Link style={{ margin: "10px 0" }} eventKey="link-4" className='text-secondary'>< FiFileText /> Year-end sale</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col sm={10} className='p-0'>
                        <div className='d-flex bg-dark p-2 justify-content-between '>
                            <Form.Control type="text" placeholder="Search" className='text-dark bg-secondary border-0 rounded-0' />
                            <Button type="submit" className="bg-transparent border-0  text-nowrap">Sign Out</Button>
                        </div>
                        <div className='d-flex justify-content-between m-3 border-secondary border-bottom pb-4 pt-4'>
                            <div>
                                <h2 style={{ margin: "0px 0" }}>Dashboard</h2>
                            </div>
                            <div className='d-flex'>
                                <ListGroup horizontal>
                                    <ListGroup.Item className='text-secondary border border-2 border-secondary'>Share</ListGroup.Item>
                                    <ListGroup.Item className='text-secondary border border-2 border-secondary'>Export</ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal className='ms-3 me-3 align-item-center'>
                                    <ListGroup.Item className='text-secondary border border-2 border-secondary'><MdDateRange /> This week <AiFillCaretDown /></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <div className='m-3'>
                            <h2 style={{ margin: "0px 0" }} className='border-secondary border-bottom pb-4 pt-4'>Section title</h2>
                            <Table className='mt-4' striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>lorem</td>
                                        <td>Otto</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>lorem</td>
                                        <td>ipsum</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Dashboard;
