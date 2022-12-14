import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  }, []);

  

  return (
    <FeedbackContext.Provider
      value={{
        
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
