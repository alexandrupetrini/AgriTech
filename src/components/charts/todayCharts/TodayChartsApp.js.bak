import React, { PureComponent } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    Legend,
    YAxis,
    XAxis
} from "recharts";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CANCELLED } from "dns";
class TodayChartsApp extends PureComponent {
    state = {
        data: [
            {
                name: "1PM",
                Temperatura: 10
            },
            {
                name: "2PM",
                Temperatura: 13
            },
            {
                name: "3PM",
                Temperatura: 20
            },
            {
                name: "4PM",
                Temperatura: 19
            },
            {
                name: "5PM",
                Temperatura: 35
            },
            {
                name: "6PM",
                Temperatura: 32
            },
            {
                name: "7PM",
                Temperatura: 2
            },
            {
                name: "8PM",
                Temperatura: 6
            },
            {
                name: "9PM",
                Temperatura: 4
            },
            {
                name: "10PM",
                Temperatura: 10
            }
        ]
    };
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Card>
                        <Card.Header as="h5" style={{ background: "#94b8f2" }}>
                            Last 24 Hours
                        </Card.Header>
                        <Card.Body className="m-1">
                            <Row>
                                <Col lg="6" className="p-1">
                                    <ResponsiveContainer
                                        width="90%"
                                        minHeight={300}
                                    >
                                        <LineChart data={this.state.data}>
                                            <CartesianGrid strokeDasharray="5 5" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line
                                                type="monotone"
                                                dataKey="Temperatura"
                                                stroke="#8884d8"
                                                legendType="circle"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </Col>
                                <Col lg="6" className="p-1">
                                    <ResponsiveContainer
                                        width="90%"
                                        minHeight={300}
                                    >
                                        <LineChart data={this.state.data}>
                                            <CartesianGrid strokeDasharray="5 5" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line
                                                type="monotone"
                                                dataKey="Temperatura"
                                                stroke="red"
                                                legendType="circle"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6" className="p-1">
                                    <ResponsiveContainer
                                        width="90%"
                                        minHeight={300}
                                    >
                                        <LineChart data={this.state.data}>
                                            <CartesianGrid strokeDasharray="5 5" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line
                                                type="monotone"
                                                dataKey="Temperatura"
                                                stroke="green"
                                                legendType="circle"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </Col>
                                <Col lg="6" className="p-1">
                                    <ResponsiveContainer
                                        width="90%"
                                        minHeight={300}
                                    >
                                        <LineChart data={this.state.data}>
                                            <CartesianGrid strokeDasharray="5 5" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line
                                                type="monotone"
                                                dataKey="Temperatura"
                                                stroke="orange"
                                                legendType="circle"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </React.Fragment>
        );
    }
}

export default TodayChartsApp;
