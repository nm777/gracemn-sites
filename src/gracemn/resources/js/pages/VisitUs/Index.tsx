import { Layout } from '@/pages/Layout';

export default function Index() {
    return (
        <Layout>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12">
                {/* Header */}
                <div className="text-center">
                    <h1 className="mb-6 text-4xl font-bold text-neutral-900">
                        Visit Us
                    </h1>
                    <p className="mb-12 text-lg text-neutral-600">
                        Find out more about visiting our church and community.
                    </p>
                </div>

                {/* Scripture */}
                <div className="text-center">
                    <blockquote className="mx-auto max-w-4xl text-xl text-neutral-700 italic">
                        "But if we walk in the light, as he is in the light, we
                        have fellowship one with another, and the blood of Jesus
                        Christ his Son cleanseth us from all sin."
                        <footer className="mt-2 text-sm text-neutral-500">
                            - 1 John 1:7
                        </footer>
                    </blockquote>
                </div>

                <div className="mx-auto max-w-4xl space-y-8">
                    {/* About Section */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                            About Grace Ministries
                        </h2>
                        <p className="text-neutral-600">
                            Grace Ministries is a non-denominational Bible
                            believing church that is following the message of
                            the hour. We are a fellowship of believers seeking
                            to follow the Scriptures and the leadership of the
                            Holy Spirit. We are in the lower level of the 5th on
                            Main apartment building at 517 Mainstreet in
                            Hopkins, Minnesota (see map below). You can enter
                            through the side door and go down the stairs, or use
                            the main entrance and take the elevator down to the
                            lower level.
                        </p>
                    </div>

                    {/* Service Times */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                            Service Times
                        </h2>
                        <ul className="space-y-2 text-neutral-600">
                            <li className="flex items-center">
                                <span className="font-medium">Wednesday:</span>
                                <span className="ml-2">7:30 PM</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-medium">Sunday:</span>
                                <span className="ml-2">10:30 AM</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-medium">
                                    First Sunday of the month:
                                </span>
                                <span className="ml-2">
                                    Evening communion service at 5:00 PM. There
                                    is no morning service on these days.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Google Maps */}
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                            Our Location
                        </h2>
                        <div className="aspect-video w-full overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.931433420266!2d-93.4090953485055!3d44.92472987899579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6203ba07c4309%3A0x8f3c070c14848056!2s517+Mainstreet%2C+Hopkins%2C+MN+55343!5e0!3m2!1sen!2sus!4v1555795575502!5m2!1sen!2sus"
                                width="600"
                                height="450"
                                style={{
                                    border: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Grace Ministries Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
