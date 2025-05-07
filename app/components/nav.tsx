"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/80 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100 flex items-center gap-1"
					>
						<ArrowLeft className="w-5 h-5" />
						<span className="font-medium">Raiyan</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-6">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm duration-200 text-zinc-400 hover:text-zinc-100"
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Mobile Navigation Button */}
					<button 
						className="p-2 md:hidden text-zinc-400 hover:text-zinc-100"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<motion.div 
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-x-0 top-[73px] bg-zinc-900/95 border-b border-zinc-800 py-4 md:hidden"
					>
						<nav className="flex flex-col items-center gap-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-sm py-2 duration-200 text-zinc-400 hover:text-zinc-100"
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
						</nav>
					</motion.div>
				)}
			</div>
		</header>
	);
};
