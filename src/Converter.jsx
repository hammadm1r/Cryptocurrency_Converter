import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Col, Row } from "antd";
import { Select } from "antd";
import { Input } from "antd";
import Item from "antd/es/list/Item";
import { BsCurrencyExchange } from "react-icons/bs";


function Converter() {
  const container = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  let apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";
  let [crptoList, setCryptoList] = useState([]);
  let defaultFromValue = "Bitcoin";
  let defaultToValue = "Ether";
  let [fromValue, setFromValue] = useState(defaultFromValue);
  let [toValue, setToValue] = useState(defaultToValue);
  let [value, setValue] = useState("0");
  let [result, setResult] = useState("0");

  console.log(fromValue);
  console.log(toValue);
  console.log(value);

  async function fetchData() {
    let response = await fetch(apiUrl);
    let cryptoData = await response.json();
    const data = cryptoData.rates;
    const tempArray = [];
    Object.entries(data).forEach((item) => {
      const tempObj = {
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
      tempArray.push(tempObj);
    });
    console.log(tempArray);
    setCryptoList(tempArray);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (crptoList.length == 0) return;
     const fromValueRate = crptoList.find((item) => {
      return item.value === fromValue;
    }).rate;
    const toValueRate = crptoList.find((item) => {
      return item.value === toValue;
    }).rate;
    const anws = (value * toValueRate) / fromValueRate;
    setResult(anws);
    console.log(anws);
  }, [fromValue, toValue, value]);

  return (
    <div className="Container" style={container}>
      <Card title={<h1> <BsCurrencyExchange /> Cryptocurrency Converter</h1>} style={{ width: 600 }}>
        <Input placeholder="Amount" onChange={(e) => setValue(e.target.value)} />
        <br />
        <br />
        <Row>
          <Col span={12}>
            <Select
              style={{ width: 250 }}
              onChange={(value) => setFromValue(value)}
              defaultValue={defaultFromValue}
              options={crptoList}
            />
          </Col>
          <Col span={12}>
            <Select
              style={{ width: 250 }}
              onChange={(value) => setToValue(value)}
              defaultValue={defaultToValue}
              options={crptoList}
            />
          </Col>
        </Row>
        <p>{value} {fromValue} To {toValue} = {result} </p>
      </Card>
    </div>
  );
}

export default Converter;
