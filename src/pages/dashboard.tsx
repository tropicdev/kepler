import { GetServerSidePropsContext } from "next";
import Header from "~/components/Header";
import { getServerAuthSession } from "~/server/auth";

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Header />
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    return {
        props: {
            session: await getServerAuthSession(ctx),
        },
    };
};