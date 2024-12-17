"use client";

import flow from './../../../flow/chatbotFlow';
import { lazy, Suspense, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ChatBot = lazy(() => import("react-chatbotify"));

const MyChatBot = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const settings = {
    isOpen: true,
    general: {
      primaryColor: '#008d43',
      secondaryColor: '#739931',
      fontFamily: 'Arial, sans-serif',

    },
    chatHistory: {
      storageKey: "concepts_settings"
    },
    headerStyle: {
      background: '#42b0c5',
      color: '#ffffff',
      padding: '10px',
    },
    chatWindowStyle: {
      backgroundColor: '#f2f2f2',
    },
    header: {
      title: (
        <div style={{ cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }} >
          Bam
        </div>
      ),
      showAvatar: true,
    },
    tooltip: {
      mode: "NEVER",
    },
  };

  return (
    <div>

      {/* ChatBot component */}
      {isLoaded && (
        <Suspense fallback={<div>Loading...</div>}>
          <ChatBot
            settings={settings}
            flow={flow}
          />
        </Suspense>
      )}
    </div>
  );
};

export default MyChatBot;
