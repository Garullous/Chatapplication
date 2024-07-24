import { useState } from 'react';
import { ChatState} from "../Context/ChatProvider.js"
import { Box } from "@chakra-ui/layout";
import Chatbox from "../components/ChatBox.js";
import MyChats from "../components/MyChats.js";
import SideDrawer from "../components/miscellaneous/SideDrawer.js";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;