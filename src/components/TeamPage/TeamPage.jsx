import React from 'react';

export const TeamPage = () => {
    // Array containing data for each team member
    const teamMembers = [
        {
            name: "Oliver Aguilerra",
            role: "Product Manager",
            imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            description: "Vincent Van Gogh’s most popular painting, The Starry Night."
        },
        {
            name: "Marta Clermont",
            role: "Design Team Lead",
            imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Amet I love liquorice jujubes pudding croissant I love pudding."
        },
        {
            name: "Alice Melbourne",
            role: "Human Resources",
            imageUrl: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit."
        },
        {
            name: "John Doe",
            role: "Good guy",
            imageUrl: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            description: "Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank."
        }
    ];

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-100 uppercase rounded-full bg-teal-accent-400">
                    Know Our Team
                </p>
                <p className="text-base text-white md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                </p>
            </div>
            <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                {teamMembers.map((member, index) => (
                    <div key={index} className="grid sm:grid-cols-3 bg-gray-300 p-10 m-6 rounded-3xl">
                        <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={member.imageUrl}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-lg text-gray-500 font-bold">{member.name}</p>
                            <p className="mb-4 text-xs text-gray-600">{member.role}</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800">{member.description}</p>
                            <div className="flex items-center justify-center space-x-3 py-3">
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:youremail@example.com"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M12 2c-6.627 0-12 5.372-12 12s5.373 12 12 12 12-5.372 12-12-5.373-12-12-12zm-1.684 4.26l-6.315 5.625 6.315 4.875 6.363-4.882-6.363-5.618zm5.187 11.74c-.808-.744-5.684-4.557-6.316-4.976-.404-.303-.999-.303-1.403 0-.632.419-5.508 4.232-6.316 4.976.106-.123 6.119 5.244 7.719 6.618 1.586-1.376 7.635-6.496 7.722-6.618z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/yourusername"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:bg-gray-100 rounded-full p-2"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm-1.573 16.713c-.053.132-.252.238-.429.238h-2.746c-.227 0-.429-.12-.429-.355v-7.194c0-.153.109-.298.252-.355l2.154-1.115v9.873zm5.187-6.998c.23-.315.362-.698.362-1.114 0-1.041-.844-1.885-1.885-1.885-.427 0-.844.144-1.19.409-.216.125-.342.347-.342.616v5.947c0 .298-.08.478-.274.602-.184.12-.45.157-.814.157-.772 0-1.386-.443-1.793-1.041-.097-.142-.142-.298-.142-.459v-5.672c0-.298-.077-.478-.274-.598-.191-.12-.459-.157-.812-.157-.775 0-1.391.444-1.797 1.041-.095.143-.145.298-.145.459v6.394c0 .315.132.646.377.88.226.214.547.347.881.347.387 0 .647-.214.881-.457.263-.272.386-.607.386-.982v-4.813c.466-.293.85-.411 1.258-.411.473 0 .874.142 1.222.421.386.306.599.756.599 1.316v4.487c0 .18.019.322.057.448zm-3.139 3.285h1.766v-1.57h-1.766v1.57z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
