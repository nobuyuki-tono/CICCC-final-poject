import React, {useState} from 'react';
import Message from "./Message/Message";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import IndustryOption from "./IndustryOption";
import "./ContactForm.scss";

const ContactForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        industry: "",
        orderDerscription: "",
        status: "",
        showModal: false
    });

    const {name, email, industry, orderDerscription, status, showModal} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, status: "isSending", showModal: true});
        // const form = e.target;
        // const data = new FormData(form);
        // const xhr = new XMLHttpRequest();
        // xhr.open(form.method, form.action);
        // xhr.setRequestHeader("Accept", "application/json");
        // xhr.onreadystatechange = () => {
        //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
        //     if (xhr.status === 200) {
        //         form.reset();
        //         setValues({...values, status: "success", showModal: true});
        //     } else {
        //         setValues({
        //             ...values,
        //             name: "",
        //             email: "",
        //             industry: "",
        //             orderDerscription: "",
        //             status: "",
        //             showModal: false});
        //     }
        // };
        // xhr.send(data);
        setValues({
            ...values,
            name: "",
            email: "",
            industry: "",
            orderDerscription: "",
            status: "success",
            showModal: true
        });
    }

    const handleChange = (type) => (e) => {
        setValues({...values, [type]: e.target.value, status: "", showModal: false});
    }

    const ContactForm = () => {
        return (
            //<Form onSubmit={handleSubmit} action="https://formspree.io/mwkblkwq" method="POST">
            // <Form onSubmit={handleSubmit} action="https://formspree.io/mwkbasdfasdflkwq" method="POST">
            <Form onSubmit={handleSubmit} >
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input onChange={handleChange("name")} type="text" name="name" id="name" placeholder="Type your name" value={name} />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={handleChange("email")} type="email" name="email" id="email" placeholder="Type your email" value={email} />
                        <Input type="hidden" name="_cc" value={email} />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                    <FormGroup row>
                        <Label for="industry" md={12}>Industry</Label>
                        <Col md={12}>
                        <Input onChange={handleChange("industry")} type="select" name="industry" id="industry" value={industry} >
                            <option value="" selected disabled hidden>Choose your industry</option>
                            <IndustryOption />
                        </Input>
                        </Col>
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="orderDescription">Order Description</Label>
                        <Input onChange={handleChange("orderDerscription")} type="textarea" name="text" id="orderDescription" value={orderDerscription} />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Button color="primary" block>Send</Button>
                    </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    };

    const handleModal = () => {
        console.log("hi");
        setValues({...values, status: "", showModal: false});

    }

    return (
        <section id="form">
            <h2 className="text-center pt-4 pb-4">Contact Us</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {ContactForm()}
                    {showModal && <Message type={status} handleModal={handleModal} />}
                </div>
            </div>
        </section>
    );
}

export default ContactForm;