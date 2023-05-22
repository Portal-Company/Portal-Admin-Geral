import { useFormik } from "formik";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import useFetch from "../../../hooks";
import { getUserInfo } from "../auth/services";
import * as yup from "yup";
import { api } from "../../../services";
import { toast } from "react-toastify";
import { useState } from "react";

const CargoAdd = () => {
  const user = getUserInfo();
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const { data: Province } = useFetch("/province/list");
  const [isActive, setIsActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      nome: "",
      provinciaId: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      provinciaId: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        setIsActive(true);
        const response = await api.post("/county/post", data);
        if (response) {
          toast.success("Municipio cadastrado com sucesso");
          formik.resetForm();
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      } finally {
        setTimeout(() => {
          setIsActive(false);
        }, 4000);
      }
    },
  });

  return (
    <Row>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title"> Cadastrar Municipio</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Row>
              <Col md="6" className="mb-3">
                <Form.Label md="6" htmlFor="validationDefault01">
                  Nome do Municipio
                </Form.Label>
                <Form.Control
                  type="text"
                  id="nome"
                  name="nome"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  required
                />
                {formik?.touched?.nome && formik?.errors?.nome ? (
                  <label className="mt-1 text-danger">
                    {formik?.errors?.nome}
                  </label>
                ) : null}
                <Form.Select
                  id="provinciaId"
                  name="provinciaId"
                  className="mt-3"
                  required
                  onChange={formik.handleChange}
                >
                  <option defaultChecked>Selecione uma Provincia</option>
                  {Province?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.nome}
                    </option>
                  ))}
                </Form.Select>
                {formik?.touched?.provinciaId && formik?.errors?.provinciaId ? (
                  <label className="mt-1 text-danger">
                    {formik?.errors?.provinciaId}
                  </label>
                ) : null}
              </Col>
            </Row>
            <Form.Group>
              <Button variant="btn btn-primary" type="submit">
                Cadastrar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default CargoAdd;
