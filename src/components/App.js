import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";
import { getList, FileList, SearchFile } from "../services/api";

export const App = () => {
  let data = [];

  const [datafound, setData] = useState([]); // Estado para almacenar los datos encontrados
  const [encontrado, setEncontrado] = useState(true);  //Determina si se encontro los resultado
  const [inputValue, setInputValue] = useState(""); // Valor del buscador
  const [list, setList] = useState([]); //Lista de csv
  const [files, filesList] = useState([]); //Lista de archivos disponibles

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    getList().then((items) => {
      items.data.forEach((element) => {
        element[0].line.forEach((csv) => {
          data.push(csv);
        });
      });
      setList(data);
    });
  }, []);

  useEffect(() => {
    FileList().then((items) => {
      filesList(items.data.files);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEncontrado(true);
    setData([]);

    if (inputValue) {
      SearchFile(inputValue).then((items) => {
        if (!items || items.status !== 200) return setEncontrado(false);
        setData(items.data[0].line);
      });
    }
  };

  return (
    <div>
      <h2 className="headertable">React App</h2>

      <Tabs
        defaultActiveKey="datafile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="datafile" title="Data CSV">
          <Table striped bordered hover size="sm" className="tablecustomer">
            <thead>
              <tr>
                <th>Filename</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {list.map((element) => (
                <tr key={element.id}>
                  <td>{element.file}</td>
                  <td>{element.text}</td>
                  <td>{element.number}</td>
                  <td>{element.hex}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="filelist" title="Lista de Archivos disponibles">
          <ListGroup>
            {files.map((element, index) => (
              <ListGroup.Item key={index}>{element}</ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
        <Tab eventKey="search" title="Búsqueda de data de CSV">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Ingrese el nombre del archivo que desea buscar
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="test18.csv"
                value={inputValue}
                onChange={handleInputChange}
              />
              <Button
                className="buttoncustomer"
                variant="primary"
                type="submit"
              >
                Buscar
              </Button>
            </Form.Group>
          </Form>
          {!encontrado && (
            <Alert key="danger" variant="danger">
              No se encontró el resultado o el archivo no es correcto
            </Alert>
          )}

          {encontrado && datafound.length > 0 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Filename</th>
                  <th>Text</th>
                  <th>Number</th>
                  <th>Hex</th>
                </tr>
              </thead>
              <tbody>
                {datafound.map((item) => (
                  <tr key={item.id}>
                    <td>{item.file}</td>
                    <td>{item.text}</td>
                    <td>{item.number}</td>
                    <td>{item.hex}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};
