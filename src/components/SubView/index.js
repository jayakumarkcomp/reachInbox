import axios from "axios";
import img from "../../assets/i.svg";
import { useEffect } from "react";
import './index.css'

function SubView() {
  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      try {
        await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
          headers: {
            Authorization: token,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    call();
  }, []);

  return (
    <div className="sub-view">
      <div>
        <img src={img} alt="Illustration" />
      </div>
      <div className="heading">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="description">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default SubView;