import { TabsWrap, TabsList, RenderBlock } from "./TabList.Styled";
import  Features  from "./Features/Features";
import  Book  from "../Tab/Book/Book";
import Reviews from "./Rewievs/Rewievs";
const Tabs = ({ card, activeTab, setActiveTab}) => {
  return (
    <TabsWrap>
      <TabsList>
        <li>
          <button
            type="button"
            
            className={activeTab === "features" ? "active" : ""}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-label="Show reviews"
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => activeTab("reviews")}
          >
            Reviews
          </button>
        </li>
      </TabsList>

      <hr />

      {activeTab === "features" ? (
        <RenderBlock>
          <Features card={card} />
        </RenderBlock>
      ) : (
        <RenderBlock>
          <Reviews card={card} />
         < Book/>
        </RenderBlock>
      
      )}
    </TabsWrap>
  );
};

export default Tabs;