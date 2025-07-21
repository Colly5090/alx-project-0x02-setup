import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

const HomePage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [cards, setcards] = useState<CardProps[]>([
        { title: "Single Room", content: "This is a single room apartment" },
        { title: "Double Room", content: "This is a double room apartment" },
        { title: "Triple Room", content: "This is a triple room apartment" },
        { title: "Quadruple Room", content: "This is a quadruple room apartment" }
    ]);

    const handleAddPost = (title: string, content: string) => {
        setcards([...cards, { title, content }]);
        setShowModal(false);
    };


    return (
        <>
            <Header />
            <div className="grid grid-cols-4 gap-4 mt-4 p-4">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} />
                ))}
            </div>
            <div>
                <button type="button" className="border py-2 px-2 text-green-400 rounded-lg">Post A Room</button>
            </div>
            <div>
                {showModal && (
                    <PostModal onClose={() => setShowModal(false)} onSubmit={handleAddPost} />
                )}
            </div>
        </>
    );
}

export default HomePage;