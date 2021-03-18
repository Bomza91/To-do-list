import Layout from "./Layout";
import Global from "../Global/Global";
import faker from "faker";

const config = {
  title: "component/Layout",
};
export default config;

const Home = () => (
  <Global>
    <Layout activePage="home">{faker.lorem.paragraphs(5)}</Layout>
  </Global>
);

const Add = () => (
    <Global>
      <Layout activePage="Add">{faker.lorem.paragraphs(5)}</Layout>
    </Global>
  );
  import Layout from "./Layout";
import Global from "../Gobal/Global";
import faker from "faker";

const config = {
    title: 'components/Layout'
}

export default config;

const Home = () => 
<Global>
<Layout activePage="home">{faker.lorem.paragraphs(5)}</Layout>
</Global>

const Add = () => 
<Global>
<Layout activePage="add">{faker.lorem.paragraphs(5)}</Layout>
</Global>

const Edit = () => 
<Global>
<Layout activePage="edit">{faker.lorem.paragraphs(5)}</Layout>
</Global>

export {
    Home, 
    Add,
    Edit
}
  const Edit = () => (
    <Global>
      <Layout activePage="Edit">{faker.lorem.paragraphs(5)}</Layout>
    </Global>
  );
  
export { Home, Add, Edit };
