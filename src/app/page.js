import HomeContentWrapper from './HomeContent';
import Sidebar from './Sidebar';
import './globals.css';

export default function Home() {
    return (
        <div>
            <HomeContentWrapper>
                <Sidebar />
            </HomeContentWrapper>
        </div>
    );
}
