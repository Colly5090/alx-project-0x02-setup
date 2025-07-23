import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


const AboutPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                <Button title="Small" size="small" shape="rounded-sm" />
                <Button title="Medium" size="medium" shape="rounded-md" />
                <Button title="Large" size="large" shape="rounded-full" />
            </div>
        </>
    );
}

export default AboutPage;