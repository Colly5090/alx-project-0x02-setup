import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const UsersPage: React.FC<{ users: UserProps[] }> = ({ users }) => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        {...user}
                    />
                ))}
            </div>
        </>
    );
};

export default UsersPage;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}
