import { useEffect } from 'react';
import TopBar from '../components/header/TopBar'
import HeaderDark from '../components/header/HeaderDark';
import ChatBot from '../components/chatbot/ChatBot';
import FooterOne from '../components/footer/FooterOne';

function ChatFullPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <TopBar />
            <HeaderDark />
            <ChatBot fullPage={true} />
            <FooterOne />
        </div>
    );
}
export default ChatFullPage;