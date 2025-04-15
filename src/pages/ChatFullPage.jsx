import { useEffect } from 'react';
import TopBar from '../components/header/TopBar'
import HeaderDark from '../components/header/HeaderDark';
import ChatBot from '../components/chatbot/ChatBot';
import FooterOne from '../components/footer/FooterOne';
import HeaderForFullChat from '../components/header/HeaderForFullChat';

function ChatFullPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeaderDark />
            <ChatBot fullPage={true} />
           
        </div>
    );
}
export default ChatFullPage;