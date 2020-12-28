import React from "react";
import KidsInfo from "../components/kidsInfo";
import Kids from "../assets/foto1.png";
import StackGrid from "react-stack-grid";
import Index from "../components/breadCrumbs";

import "./stylesPages.css";

function TheKids() {
  return (
    <div className="container-pages">
      <Index
        name="Los Niños"
        link="/LosNiños"
        showIndexItem="show-item-index"
      />

      {/* <h2 className="titles-pages">Nuestros Niños</h2> */}
      <StackGrid columnWidth={455} monitorImagesLoaded={true}>
        <KidsInfo
          className="bg-red"
          title=" Santa y Sudeep"
          subtitle="Familia Khadka "
          photo={Kids}
          text=" Matrimonio joven sin mayor educación, con dos hijos de 9 y 7. Viven y trabajan en un criadero de pollos, en condiciones muy básicas, y con ingresos suficientes sólo para sobrevivir. 
        La asignatura preferida de Santa es Ciencias, y cuando sea grande le gustaría convertirse en una profesora.
        A Sudeep le gustan mucho los deportes, y su asignatura favorita es matemáticas."
        />

        <KidsInfo
          className="bg-skyblue"
          title="Kusal, Karuna y Kristina"
          subtitle="Familia Lama"
          photo={Kids}
          text="Joven pareja de 34 y 39 años que no cuentan con mayor educación, con tres hijos de 14, 12 y 7 años. Se ganan la vida haciendo ladrillos en condiciones muy precarias de trabajo, y no cuentan con casa o terreno propio. Viven en la propiedad de otra persona a cambio de cuidarla.
          A Kusal le encantan los deportes, y cuando sea grande le gustaría entrar al ejército.
          Karuna es una niña muy inteligente a la que le gusta la música, inglés y cuando grande le gustaría ser profesora.
          Desde el año 2018, la mas pequeña de la familia, Kristina Lama, también asiste al colegio, y nuestra idea es poder ayudarla a ella también."
        />

        <KidsInfo
          className="bg-green"
          title="Sampana"
          subtitle="Familia Khadka"
          photo={Kids}
          text="Pareja joven, Sarita de 27 y el padre,  con un hijo de 7 años. No cuentan con trabajo estable, ocasionalmente el padre trabaja lavando platos, pero padece de un tipo de cáncer que no le permite realizar trabajos muy demandantes físicamente. El pequeño Sampana parece ser muy inteligente y talentoso a su temprana edad, escribiendo bastante según comenta la profesora del play group.
        Le gusta la música, y su asignatura preferida es Nepali. Cuando grande le gustaría ser doctor."
        />
        <KidsInfo
          className="bg-yellow"
          title="Karina"
          subtitle="Familia Bastola"
          photo={Kids}
          text=" Pequeña de 8 años de edad, sin padres y actualmente viviendo con sus tíos. Ella estaba muy motivada para ir al colegio, pero con muchas dificultades para lograrlo. Ahora gracias a nuestro apoyo fue la última beneficiada del grupo. Post terremoto al igual que las otras familias su hogar se vio muy dañado."
        />
      </StackGrid>
    </div>
  );
}

export default TheKids;
