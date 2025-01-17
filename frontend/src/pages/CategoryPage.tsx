import { useParams } from "react-router-dom";
import Baby from "./Baby";
import Sports from "./Sport";
import ElectricalAppliances from "./ElectricalAppliances";
import Clothing from "./Clothing";
import Other from "./Other";
import Bikes from "./Bikes";
import Holidays from "./Holidays";
import Photography from "./Photography";
import Services from "./Services";
import Telephony from "./Telephony";
import Tools from "./Tools";
import VideoGames from "./VideoGames";
import Automobile from "./Automobile";
import Decorating from "./Decorating";
import Furnishing from "./Furnishing";

const CategoryPage = () => {
   const { categoryName } = useParams<{ categoryName: string }>();

   // Associez les noms de catégories aux composants
   const categoryComponents: Record<string, JSX.Element> = {
      "equipement-informatique": <ElectricalAppliances />,
      automobile: <Automobile />,
      vetements: <Clothing />,
      autre: <Other />,
      bebe: <Baby />,
      velos: <Bikes />,
      vacances: <Holidays />,
      photographie: <Photography />,
      services: <Services />,
      sports: <Sports />,
      telephonie: <Telephony />,
      outillage: <Tools />,
      "jeux-video": <VideoGames />,
      decoration: <Decorating />,
      ameublement: <Furnishing />
   };

   // Trouvez le composant correspondant ou affichez une page 404 si inexistant
   const CategoryComponent = categoryComponents[categoryName as string];

   if (!CategoryComponent) {
      return <p>Category not found!</p>;
   }

   return <div>{CategoryComponent}</div>;
};

export default CategoryPage;
