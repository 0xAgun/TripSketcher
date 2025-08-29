"use client";
import React from "react";

const features = [
	{
		icon: "🗺️",
		title: "Paris",
		desc: "Eiffel Tower · Louvre Museum · Notre-Dame Cathedral",
		image:
			"https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg",
		wide: false,
		tags: ["Planning", "Routes"],
	},
	{
		icon: "📍",
		title: "Tokyo",
		desc: "Tokyo Tower · Senso-ji Temple · Shibuya Crossing",
		image:
			"https://wanderlog.com/p/images/66e9a04af169a54a82164ea9_66bd2d63b74cc52cdd91b284_img%20tokyo_explore_places.jpg",
		wide: false,
		tags: ["Inspiration"],
	},
	{
		icon: "🏨",
		title: "Rome",
		desc: "Colosseum · Vatican City · Pantheon",
		image:
			"https://wanderlog.com/p/images/66bd2d63742b1e62cbc01b6b_img%20rome_explore_places.jpg",
		wide: false,
		tags: ["Hotels", "Stays"],
	},
	{
		icon: "✈️",
		title: "Bangkok",
		desc: "Grand Palace · Wat Arun · Chatuchak Weekend Market",
		image:
			"https://wanderlog.com/p/images/66e9a04a0e88014cfb53cc86_66bd2d6330902c203b566dcb_img%20bangkok_explore_places.jpg",
		wide: false,
		tags: ["Compare"],
	},
	{
		icon: "🎯",
		title: "New York",
		desc: "Statue of Liberty · Central Park · Times Square",
		image:
			"https://wanderlog.com/p/images/66e9a04afc78245ffa4ab328_66bd2d63bbd996cefa85f70f_img%20new%20york_explore_places.jpg",
		wide: true,
		tags: ["Activities"],
	},
	{
		icon: "💰",
		title: "London",
		desc: "Tower of London · British Museum · Buckingham Palace",
		image:
			"https://wanderlog.com/p/images/66e9a04af0bdf1869bff2bf1_66bd2d63cf351730d7fbf12e_img%20london_explore_places.jpg",
		wide: true,
		tags: ["Budget"],
	},
	{
		icon: "💰",
		title: "Dubai",
		desc: "Burj Khalifa · Dubai Mall · Palm Jumeirah",
		image:
			"https://wanderlog.com/p/images/66e9a04a67b1bd2da3f41ce8_66bd2d6384f6fc053a362fa3_img%20dubai_explore_places.jpg",
		wide: false,
		tags: ["Budget"],
	},
];

export default function CityGrid() {
	return (
		<section className="pt-0 pb-16 bg-[#f8f9fa]">
			<div className="px-4 md:px-8 max-w-7xl mx-auto">
				<div className="bg-[#f8f9fa] px-8 py-8 rounded-2xl">
					<div className="text-center mb-10">
						{/* tiny label */}
						<span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full
                   text-xs font-medium text-blue-700
                   ring-1 ring-blue-600/20
                   bg-gradient-to-r from-blue-600/10 to-cyan-500/10">
							✨ Your next escape awaits
						</span>

						{/* heading */}
						<h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
							Explore hundreds of places to visit
for every corner of the world
						</h2>

						<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
							Everything you need to create unforgettable travel experiences, all in
							one place.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((f, i) => (
							<article
								key={i}
								className={`
                  relative overflow-hidden rounded-2xl group
                  col-span-1 md:col-span-1 lg:${f.wide ? "col-span-2" : "col-span-1"}
                  h-52 md:h-56 lg:h-60
                  shadow-[0_8px_32px_0_rgba(31,38,135,0.12)]
                `}
							>
								{/* Full-card image */}
								<img
									src={f.image}
									alt={f.title}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								/>

								{/* Gradient overlay for readability */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

								{/* Bottom-left labels/content */}
								<div className="absolute bottom-0 left-0 p-5 md:p-6 text-white max-w-[90%]">
									{/* Optional badges */}
									{f.tags?.length ? (
										<div className="flex flex-wrap gap-2 mb-2">
											{f.tags.map((t, idx) => (
												<span
													key={idx}
													className="px-2 py-0.5 text-xs rounded-md bg-white/15 backdrop-blur-sm border border-white/20"
												>
													{t}
												</span>
											))}
										</div>
									) : null}

									<h3 className="text-lg md:text-xl font-semibold drop-shadow-sm">
										{f.title}
									</h3>
									<p className="text-white/85 text-sm md:text-[15px] leading-snug mt-1">
										{f.desc}
									</p>

									<button className="mt-3 text-sm font-medium text-white/90 hover:text-white inline-flex items-center gap-1 transition">
										Learn more{" "}
										<span className="opacity-75 group-hover:translate-x-0.5 transition">
											→
										</span>
									</button>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
