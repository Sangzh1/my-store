import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Home() {
  const { user, dispatch } = useContext(GlobalContext);
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum
        explicabo itaque vel quisquam inventore nam laudantium provident debitis
        consequuntur vero animi alias, impedit reprehenderit, culpa hic rem.
        Necessitatibus aperiam corrupti quisquam accusamus iusto doloremque,
        debitis amet illo reprehenderit natus perferendis excepturi sint numquam
        doloribus quod tempore. Aperiam laborum autem odio a deserunt maxime,
        earum molestiae id neque facere voluptate atque perferendis nostrum
        blanditiis. Consequatur ipsum maiores voluptatem officiis placeat,
        debitis at non quibusdam iste dolor, rerum harum labore reprehenderit
        provident quam explicabo officia aspernatur! Excepturi ipsam hic rem eos
        iste, a ducimus! Minima autem tenetur nemo cum maxime aut reiciendis
        possimus, quia quibusdam eligendi recusandae similique ipsum soluta
        maiores architecto et quod esse rerum quasi ex est, temporibus
        voluptatem.
      </p>
    </div>
  );
}

export default Home;
