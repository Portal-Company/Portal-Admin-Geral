import { useEffect, memo, Fragment, useState } from "react";
import {
  Row,
  Col,
  Card,
  Dropdown,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

//apexcharts
import Chart from "react-apexcharts";

// Redux Selector / Action
import { useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

//router-dom
import { Link } from "react-router-dom";

//component
import CustomToggle from "../../components/dropdowns";
import ChoicesJs from "../../components/choices";
import { getUserInfo } from "./auth/services";
import useFetch from "../../hooks";

//select

const options3 = [
  { value: "Enter Amount in BTC", label: "Enter Amount in BTC" },
  { value: "100", label: "100" },
  { value: "200", label: "200" },
  { value: "500", label: "500" },
];
const options4 = [
  { value: "Enter Amount in USD", label: "Enter Amount in USD" },
  { value: "34,85.10", label: "34,85.10" },
  { value: "34,85.11", label: "34,85.11" },
  { value: "34,85.12", label: "34,85.12" },
];

const Crypto = memo((props) => {
  useSelector(SettingSelector.theme_color);
  const User = getUserInfo();
  const { data: userData } = useFetch(`/user/list/${User?.sub}`);
  const [data, setData] = useState(userData);
  const { data: statistc } = useFetch(`/statistic/general`);
  const { data: Category } = useFetch(`/category/list`);
  const [view, setView] = useState("");
  const [view2, setView2] = useState("");

  console.log(statistc, "minha");

  const getVariableColor = () => {
    let prefix =
      getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
    if (prefix) {
      prefix = prefix.trim();
    }
    const color1 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary`
    );
    const color2 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}secondary`
    );
    const color3 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary-tint-20`
    );
    const color4 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}warning`
    );
    const color5 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}tertiray`
    );
    return {
      primary: color1.trim(),
      secondary: color2.trim(),
      primary_light: color3.trim(),
      warning: color4.trim(),
      tertiray: color5.trim(),
    };
  };
  const variableColors = getVariableColor();
  const colors = [
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  useEffect(() => {
    return () => colors;
  });

  const chart1 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#1AA053"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Inscritos",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };

  const chart2 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#1AA053"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Inscritos",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart3 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#C03221"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Inscritos",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart4 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#7016d0"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Inscritos",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart5 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#7016d0",
            downward: "#08B1BA",
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
    series: [
      {
        data: [
          [new Date("2023-06-01").getTime(), 10], // Data e número de pessoas cadastradas
          [new Date("2023-06-05").getTime(), 15],
          [new Date("2023-06-10").getTime(), 8],
          [new Date("2023-06-15").getTime(), 12],
          // Adicione mais datas e números de pessoas cadastradas conforme necessário
        ],
      },
    ],
  };
  const chart6 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#c03221"],
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          minWidth: 20,
          maxWidth: 20,
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      fill: {
        opacity: 0.5,
      },
      tooltip: {
        x: {
          format: "yyyy",
        },
        fixed: {
          enabled: false,
          position: "topRight",
        },
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        yaxis: {
          lines: {
            offsetX: -30,
          },
        },
      },
    },
    series: [
      {
        data: [
          {
            x: 1996,
            y: 500,
          },
          {
            x: 1997,
            y: 400,
          },
          {
            x: 1998,
            y: 429,
          },
          {
            x: 1999,
            y: 342,
          },
          {
            x: 2000,
            y: 448,
          },
          {
            x: 2001,
            y: 234,
          },
          {
            x: 2002,
            y: 325,
          },
          {
            x: 2003,
            y: 316,
          },
          {
            x: 2004,
            y: 218,
          },
          {
            x: 2005,
            y: 430,
          },
          {
            x: 2006,
            y: 355,
          },
          {
            x: 2007,
            y: 466,
          },
          {
            x: 2008,
            y: 337,
          },
          {
            x: 2009,
            y: 452,
          },
          {
            x: 2010,
            y: 377,
          },
        ],
      },
    ],
  };
  return (
    <Fragment>
      <Row>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0">Total de Inscritos</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton36"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#" onClick={() => setView("M")}>
                      Masculino
                    </Dropdown.Item>
                    <Dropdown.Item to="#" onClick={() => setView("F")}>
                      Femenino
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  {!view && <h3>{statistc?.totalInscritos}</h3>}
                  {view === "M" && <h3>{statistc?.totalRapazesInscritos}</h3>}
                  {view === "F" && <h3>{statistc?.totalMeninasInscritas}</h3>}
                  <small className="text-success">+ 0.1%</small>
                  <small className="ms-2">Candidatos</small>
                </div>
                <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 ms-2">Total de Alunos Rejeitados</h6>
                </div>
                {/* <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton38"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Mascolino</Dropdown.Item>
                    <Dropdown.Item to="#">Femenino</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3>{statistc?.totalInscritosRejeitados}</h3>
                  <small className="text-success">+ 0.8%</small>
                  <small className="ms-2">Alunos</small>
                </div>
                <Chart
                  options={chart2.options}
                  series={chart2.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 ms-2">Total de Inscritos Apurados</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton38"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#" onClick={() => setView2("M")}>
                      Masculino
                    </Dropdown.Item>
                    <Dropdown.Item to="#" onClick={() => setView2("F")}>
                      Femenino
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  {!view2 && <h3>{statistc?.totalInscritosAceites}</h3>}
                  {view2 === "M" && (
                    <h3>{statistc?.totalRapazesIncritosAceites}</h3>
                  )}
                  {view2 === "F" && (
                    <h3>{statistc?.totalMeninasIncritasAceites}</h3>
                  )}

                  <small className="text-danger">- 0.8%</small>
                  <small className="ms-2">Alunos</small>
                </div>
                <Chart
                  options={chart3.options}
                  series={chart3.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 ms-2">Total de Escolas</h6>
                </div>
                {/* <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton40"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Year</Dropdown.Item>
                    <Dropdown.Item to="#">Month</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3>{statistc?.totalEscolas}</h3>
                  <small className="text-danger">- 0.8%</small>
                  <small className="ms-2">Candidatos</small>
                </div>
                <Chart
                  options={chart4.options}
                  series={chart4.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="7" xl="8">
          <Row>
            <Col lg="12">
              <Card className="card-block card-stretch card-height">
                <div className="flex-wrap card-header d-flex justify-content-between align-items-center">
                  <div className="header-title">
                    <h4>Balanço de 2023</h4>
                  </div>
                  <div className="d-flex align-items-center form-group mb-0"></div>
                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      to="#"
                      variant="text-gray dropdown-toggle"
                      size="sm"
                      id="dropdownMenuButton40"
                    >
                      Anos Anteriores
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#">Balanço 2022</Dropdown.Item>
                      <Dropdown.Item to="#">Balanço 2021</Dropdown.Item>
                      <Dropdown.Item to="#">Balanço 2020</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Card.Body>
                  <Chart
                    options={{
                      ...chart5?.options,
                      xaxis: {
                        ...chart5?.options?.xaxis,
                        type: "datetime", // Define o tipo do eixo x como datetime para usar datas
                        labels: {
                          ...chart5?.options?.xaxis?.labels,
                          datetimeUTC: false, // Define se as datas estão em UTC (true) ou não (false)
                          format: "dd MMM", // Formato dos rótulos (dia e mês)
                        },
                      },
                      tooltip: {
                        ...chart5?.options?.tooltip,
                        x: {
                          ...chart5?.options?.tooltip?.x,
                          format: "dd MMM yyyy", // Formato do valor exibido no tooltip (dia, mês e ano)
                        },
                        y: {
                          ...chart5?.options?.tooltip?.y,
                          formatter: function (value) {
                            return value + " pessoas"; // Adiciona o texto 'pessoas' ao valor exibido no tooltip
                          },
                        },
                      },
                    }}
                    series={chart5.series}
                    type="candlestick"
                    height="280"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg="5" xl="4">
          <Card className="portfolio-card bg-primary">
            <div className=" p-4 d-flex align-items-center justify-content-between flex-wrap pb-0">
              <div className="header-title">
                <h6 className="mb-2">Estatistica 2023</h6>
                <h3 className="mb-2">
                  Total {statistc?.totalInscritos} Inscritos
                </h3>
                <p className="mb-0 text-danger bg-white p-1 px-3 rounded">
                  {statistc?.totalInscritos} Inscritos
                </p>
              </div>
              <div className="text-end">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M14.6756 0H5.33333C1.92889 0 0 1.92889 0 5.33333V14.6667C0 18.0711 1.92889 20 5.33333 20H14.6756C18.08 20 20 18.0711 20 14.6667V5.33333C20 1.92889 18.08 0 14.6756 0Z"
                    fill="white"
                  />
                  <path
                    d="M5.36866 7.36914C4.91533 7.36914 4.54199 7.74247 4.54199 8.2047V15.0758C4.54199 15.5291 4.91533 15.9025 5.36866 15.9025C5.83088 15.9025 6.20421 15.5291 6.20421 15.0758V8.2047C6.20421 7.74247 5.83088 7.36914 5.36866 7.36914Z"
                    fill="white"
                  />
                  <path
                    d="M10.0357 4.08887C9.58232 4.08887 9.20898 4.4622 9.20898 4.92442V15.0755C9.20898 15.5289 9.58232 15.9022 10.0357 15.9022C10.4979 15.9022 10.8712 15.5289 10.8712 15.0755V4.92442C10.8712 4.4622 10.4979 4.08887 10.0357 4.08887Z"
                    fill="white"
                  />
                  <path
                    d="M14.6402 10.9956C14.178 10.9956 13.8047 11.3689 13.8047 11.8312V15.0756C13.8047 15.5289 14.178 15.9023 14.6314 15.9023C15.0936 15.9023 15.4669 15.5289 15.4669 15.0756V11.8312C15.4669 11.3689 15.0936 10.9956 14.6402 10.9956Z"
                    fill="white"
                  />
                </svg>
                <p className="mb-0 text-white mt-2">+1.2%</p>
              </div>
            </div>
            <Card.Body className="pt-0" style={{ height: "300px" }}>
              <hr />
              <h4 className="mb-3">Categoria</h4>
              <div className="d-flex align-items-center justify-content-between">
                {Category?.map((item) => (
                  <>
                    <div className="d-flex align-items-center">
                      <div className="ms-2">
                        <h6>{item?.nome}</h6>
                        <p className="mb-0">
                          {statistc?.totalInscritos} Candidatos
                        </p>
                      </div>
                    </div>
                    <h5 className="text-white">
                      {statistc?.percentagemRapazesInscritos}%
                    </h5>
                  </>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Crypto.displayName = "Crypto";
export default Crypto;
