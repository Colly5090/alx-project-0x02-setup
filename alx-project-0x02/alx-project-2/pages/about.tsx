import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


const AboutPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                <Button title="Small" size="text-sm px-2 py-1" shape="rounded-sm" />
                <Button title="Medium" size="text-base px-4 py-2" shape="rounded-md" />
                <Button title="Large" size="text-lg px-6 py-3" shape="rounded-lg" />
                <Button title="Extra Large" size="text-xl px-8 py-4" shape="rounded-full" />
            </div>
        </>
    );
}

export default AboutPage;