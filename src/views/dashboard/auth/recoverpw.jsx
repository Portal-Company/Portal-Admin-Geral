import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//router
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";

//components
import Card from "../../../components/bootstrap/card";

// img
import auth1 from "/src/assets/images/ben-white-83tkHLPgg2Q-unsplash.jpg";
// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../../services";

const Recoverpw = memo(() => {
  const appName = useSelector(SettingSelector.app_name);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().trim().required("O email é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        const response = await (
          await api.post("/auth/forgot_password", data)
        ).data;
        if (response) {
          formik.resetForm();
          toast.success(response?.message);
        }
      } catch (err) {
        toast(err?.response?.data?.message);
      }
    },
  });
  return (
    <Fragment>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="12" lg="6" className="align-self-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary"
            >
              <div className="logo-normal">
                <img
                  style={{
                    width: "50%",
                  }}
                  src={Logo}
                />
              </div>
            </Link>
            <Row className="justify-content-center pt-5">
              <Col lg="8">
                <Card className="d-flex justify-content-center mb-0">
                  <Card.Body>
                    <h2 className="mb-2">Recuperar senha</h2>
                    <p>
                      Digite seu endereço de e-mail e enviaremos um e-mail com
                      instruções para redefinir sua senha.
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="floating-label form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              id="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              aria-describedby="email"
                              placeholder=" "
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <span className="text-danger">
                                {formik.errors.email}
                              </span>
                            ) : null}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button type="submit" variant="btn btn-primary">
                        Resetar
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1  overflow-hidden"
            style={{ height: "100vh" }}
          >
            <Image
              src={auth1}
              className="Image-fluid gradient-main"
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
});

Recoverpw.displayName = "Recoverpw";
export default Recoverpw;
