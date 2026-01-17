import { Layout } from '@/pages/Layout';

export default function Index() {
    return (
        <Layout>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-12">
                {/* Hero Section */}
                <div className="text-center">
                    <h1 className="mb-6 text-5xl font-bold text-neutral-900">
                        Welcome to GraceMN
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-neutral-600">
                        A community of faith, hope, and love serving Minnesota
                        and beyond.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Visit Us Card */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Visit Us
                        </h2>
                        <p className="mb-4 text-neutral-600">
                            Join us for worship, fellowship, and biblical
                            teaching every Sunday.
                        </p>
                        <div className="text-sm text-neutral-500">
                            <p>Sunday Morning: 9:00 AM & 11:00 AM</p>
                            <p>Evening Service: 6:00 PM</p>
                        </div>
                    </div>

                    {/* Sermons Card */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Sermons
                        </h2>
                        <p className="mb-4 text-neutral-600">
                            Access our latest sermons and biblical teachings
                            from our pastoral team.
                        </p>
                        <div className="text-sm text-neutral-500">
                            <p>Weekly messages available online</p>
                            <p>Scripture-based teaching series</p>
                        </div>
                    </div>

                    {/* Music Card */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Music
                        </h2>
                        <p className="mb-4 text-neutral-600">
                            Experience worship through music with our choir and
                            worship team.
                        </p>
                        <div className="text-sm text-neutral-500">
                            <p>Contemporary and traditional hymns</p>
                            <p>Worship albums and recordings</p>
                        </div>
                    </div>

                    {/* Live Stream Card */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:col-span-2 lg:col-span-1">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Live Stream
                        </h2>
                        <p className="mb-4 text-neutral-600">
                            Can't make it in person? Join us online for our live
                            streaming services.
                        </p>
                        <div className="text-sm text-neutral-500">
                            <p>Watch services live online</p>
                            <p>Previous services available on-demand</p>
                        </div>
                    </div>

                    {/* Get Connected Card */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:col-span-2 lg:col-span-3">
                        <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
                            Get Connected
                        </h2>
                        <p className="mb-4 text-neutral-600">
                            Find your place in our community through small
                            groups and ministries.
                        </p>
                        <div className="text-sm text-neutral-500">
                            <p>Small groups and Bible studies</p>
                            <p>Volunteer opportunities</p>
                        </div>
                    </div>
                </div>

                {/* Additional Content */}
                <div className="mt-12 text-center">
                    <h2 className="mb-4 text-3xl font-semibold text-neutral-900">
                        We'd Love to See You
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Whether you're new to the area or looking for a church
                        home, we welcome you to join us this Sunday.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
