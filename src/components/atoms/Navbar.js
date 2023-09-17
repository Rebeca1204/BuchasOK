import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import CatalogoBuchasOK from "assets/catalogo_de_produtos_buchasok.pdf";

const Navbar = () => {
  const Image = styled.img`
    height: 100%;
    max-width: 300px;
    border-radius: 8px;
  `;

  return (
    <Menu mode="horizontal" style={{ display: "block" }}>
      <Menu.Item>
        <Image src="/ImageLogo.png"></Image>
      </Menu.Item>
      <Menu.Item
        key="/orcamento"
        style={{ float: "right", marginTop: "15px", marginRight: "20px" }}
      >
        <Button color="danger">
          <Link to="/orcamento">ORCAMENTO</Link>
        </Button>
      </Menu.Item>
      <Menu.SubMenu
        key="/contato"
        title="FALE CONOSCO"
        style={{ float: "right", marginTop: "15px", marginRight: "20px" }}
      >
        <Menu.Item>
          <Link to="/contato">Envie nos sua mensagem</Link>
        </Menu.Item>
        <Menu.Item key="/meLigue">
          <Link to="/meLigue">Deixa que ligamos pra você</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="/produtos"
        title="PRODUTOS"
        style={{ float: "right", marginTop: "15px", marginRight: "20px" }}
      >
        <Menu.Item>
          <Link to="/produtos">Mais detalhes</Link>
        </Menu.Item>
        <Menu.Item key="/catalogo">
          <Link to={CatalogoBuchasOK} target="_blank">
            Baixar o catálogo de produtos
          </Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item
        key="/home"
        style={{ float: "right", marginTop: "15px", marginRight: "20px" }}
      >
        <Link to="/">HOME</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
