import HomeContentWrapper from './HomeContent';
import Sidebar from './Sidebar';

export default function Home() {
    return (
        <div>
            <HomeContentWrapper>
                <Sidebar />
            </HomeContentWrapper>
        </div>
    );
}
