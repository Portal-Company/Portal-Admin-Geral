import {
  Modal,
  Button,
  Col,
  Form,
  Row,
  Card,
  Container,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../../../services";
import useFetch from "../../../../hooks";

function ModalUpdate({ onClose, item, mutate, setShowModalUpadate }) {
  const { data: Province } = useFetch("/province/list");

  const formik = useFormik({
    initialValues: {
      nome: item?.nome,
      provinciaId: item?.provinciaId,
    },
    validationSchema: yup.object({}),
    onSubmit: async (data) => {
      try {
        const response = await api.put(`/county/put/${item?.id}`, data);
        if (response) {
          toast.success("Municipio actualizado com sucesso");
          mutate();
          setShowModalUpadate(false);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    },
  });

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Municipio</Modal.Title>
      </Modal.Header>
      <Card.Body
        style={{
          width: "100%",
          padding: "1rem 1rem",
          display: "flex",
        }}
      >
        <Form onSubmit={formik?.handleSubmit} encType="multipart/form-data">
          <Container>
            <Col xs={12} sm={12} md={12} lg={50} xl={20} className="mb-3 ">
              <Form.Label htmlFor="validationCustom05">Nome</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name="nome"
                value={formik.values.nome}
                type="text"
                id="nome"
              />
              <Form.Select
                id="provinciaId"
                name="provinciaId"
                className="mt-3"
                required
                value={formik.values.provinciaId}
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
          </Container>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Actualizar</Button>
          </Modal.Footer>
        </Form>
      </Card.Body>
    </Modal>
  );
}

export { ModalUpdate };
