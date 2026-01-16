import { Layout } from '@/pages/Layout';

export default function Index() {
    return (
        <Layout>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12">
                <div className="text-center">
                    <h1 className="mb-6 text-4xl font-bold text-neutral-900">
                        Welcome to GraceMN
                    </h1>
                    <p className="mb-12 text-lg text-neutral-600">
                        We're glad you're here. Explore our community and
                        connect with us.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Sunday Services
                        </h2>
                        <p className="text-base text-neutral-600">
                            Join us for worship, teaching, and community every
                            Sunday.
                        </p>
                    </div>

                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Sermons & Teachings
                        </h2>
                        <p className="text-base text-neutral-600">
                            Access our archive of messages and resources.
                        </p>
                    </div>

                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Music Ministry
                        </h2>
                        <p className="text-base text-neutral-600">
                            Experience worship through music and song.
                        </p>
                    </div>
                </div>

                <div className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-neutral-900">
                        Get Connected
                    </h2>
                    <p className="mb-8 text-lg text-neutral-600">
                        We'd love to hear from you. Reach out to us anytime.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:outline-none"
                        >
                            Contact Us
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-8 py-3 text-base font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:outline-none"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
