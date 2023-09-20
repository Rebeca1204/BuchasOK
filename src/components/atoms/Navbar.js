import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import CatalogoBuchasOK from "assets/catalogo_de_produtos_buchasok.pdf";
import { BreakAt, BreakpointSize } from "styles/Breakpoints";

const Navbar = () => {
  const Image = styled.img`
    height: 100%;
    max-width: 300px;
    border-radius: 8px;
  `;

  const OrcaDiv = styled.div`
    ${BreakAt(BreakpointSize.lg)} {
      margin-top: 15px;
    }
    ${BreakAt(BreakpointSize.md)} {
      margin-top: 15px;
    }
  `;

  return (
    <Menu mode="horizontal" style={{ display: "block" }}>
      <Menu.Item>
        <Link to="/">
          <Image src="/ImageLogo.png"></Image>
        </Link>
      </Menu.Item>

      <Menu.Item key="/home" style={{ marginBottom: "15px" }}>
        <Link to="/">HOME</Link>
      </Menu.Item>

      <Menu.SubMenu
        key="/produtos"
        title="PRODUTOS"
        style={{ marginBottom: "15px" }}
      >
        <Menu.Item>
          <Link to="/produtos">Mais detalhes</Link>
        </Menu.Item>
        <Menu.Item key="/catalogo">
          <Link to={CatalogoBuchasOK} target="_blank">
            Ver catálogo
          </Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        key="/contato"
        title="FALE CONOSCO"
        style={{ marginBottom: "15px" }}
      >
        <Menu.Item>
          <Link to="/contato">Envie uma mensagem</Link>
        </Menu.Item>

        <Menu.Item key="/meLigue">
          <Link to="/meLigue">Ligamos pra você</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="/orcamento" style={{ float: "right" }}>
        <OrcaDiv>
          <Button color="danger" style={{ padding: "10px", margin: "0px" }}>
            <Link to="/orcamento">ORÇAMENTO</Link>
          </Button>
        </OrcaDiv>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
