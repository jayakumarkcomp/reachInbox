import { useEffect, useState } from "react";
import axios from "axios";
import InboxView from "../InboxView/index";
import MainContainer from "../MainContainer/index";
import RightSection from "../RightSection/index";
import './index.css'

function MainPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2500);

    return () => clearInterval(interval);
  }, []);

  const loadMail = (threadId) => {
    setSelectedThread(threadId);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="w-1/4">
        <InboxView data={datas} loadMail={loadMail} />
      </div>
      <div className="w-2/4">
        <MainContainer selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <RightSection />
      </div>
    </div>
  );
}

export default MainPage;