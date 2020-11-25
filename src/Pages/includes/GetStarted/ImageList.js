import React, { Component } from 'react';
import { CardImg, Container, Card } from "react-bootstrap";

class ImageList extends Component {
    render() {
        return (
            <div className="pt-2 mt-2 mb-5">
                <Container style={{ marginTop: 20 }}>
                    <Card className="card card-style-price shadow_pricing" style={{ marginBottom: 20 }}>
                        <span className="text-style-get pb-2" style={{ marginLeft: 20, marginTop: 10 }}> Step 1</span>
                        <Card.Body>
                            <CardImg src={require("../../../static/image/instructions_1.jpg")} />
                        </Card.Body>
                    </Card>
                    <Card className="card card-style-price shadow_pricing" style={{ marginBottom: 20 }}>
                        <span className="text-style-get pb-2" style={{ marginLeft: 20, marginTop: 10 }}> Step 2</span>
                        <Card.Body>
                            <CardImg src={require("../../../static/image/instructions_2.jpg")} />
                        </Card.Body>
                    </Card>
                    <Card className="card card-style-price shadow_pricing" style={{ marginBottom: 20 }}>
                        <span className="text-style-get pb-2" style={{ marginLeft: 20, marginTop: 10 }}> Step 3</span>
                        <Card.Body>
                            <CardImg src={require("../../../static/image/instructions_3.jpg")} />
                        </Card.Body>
                    </Card>
                    <Card className="card card-style-price shadow_pricing" style={{ marginBottom: 20 }}>
                        <span className="text-style-get pb-2" style={{ marginLeft: 20, marginTop: 10 }}> Step 4</span>
                        <Card.Body>
                            <CardImg src={require("../../../static/image/instructions_4.jpg")} />
                        </Card.Body>
                    </Card>
                    <Card className="card card-style-price shadow_pricing">
                        <span className="text-style-get pb-2" style={{ marginLeft: 20, marginTop: 10 }}> Step 5</span>
                        <Card.Body>
                            <CardImg src={require("../../../static/image/instructions_5.jpg")} />
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ImageList;