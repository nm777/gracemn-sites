import { Layout } from '@/pages/Layout';

export default function Index() {
    return (
        <Layout>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12">
                <div className="text-center">
                    <h1 className="mb-6 text-4xl font-bold text-neutral-900">
                        Visit Us
                    </h1>
                    <p className="mb-12 text-lg text-neutral-600">
                        Find out more about visiting our church and community.
                    </p>
                    <div className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
                        <h2 className="mb-4 text-2xl font-semibold text-neutral-700">
                            Coming Soon
                        </h2>
                        <p className="text-base text-neutral-500">
                            This section is under development. Check back soon
                            for updates!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
