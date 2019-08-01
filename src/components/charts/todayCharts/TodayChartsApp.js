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
// import ttn from "ttn";
// import mysql from "mysql";
// import moment from "moment";
// import config from "./config";
class TodayChartsApp extends PureComponent {
    get_table () {
        // const ttn = require("ttn");
        const mysql = require("mysql");
        const moment = require("moment");
        const config = require("./config");
        
        const con = mysql.createConnection(config.databaseOptions);
        let data = [];
        con.connect(function (err) {
            if (err) throw err;
            const sql = "SELECT time, temperature, humidity FROM sensors_data";
            con.query(sql, function (err, rows) {
                if (err) throw err;
                console.log("Data retrieved from table 'sensor_data'");
                rows.forEach(row => {
                    // let time = moment(row.time).format("hh:mma");
                    let hours = moment(row.time).format("hh");
                    let minutes = moment(row.time).format("mm");
                    let time_only_in_hours = parseInt(hours, 10) + parseInt(minutes, 10) / 60;
                    time_only_in_hours += "PM";
                    let humidity = parseInt(row.humidity, 10) / 100;
                    data.push({
                        name: time_only_in_hours,
                        Temperatura: row.temperature,
                        Umiditate: humidity,
                    });
                });
            });
        });
        console.log(data);
        return data;
    }

    state = {
        data: this.get_table()

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
