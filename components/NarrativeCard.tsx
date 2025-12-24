import { MapPin } from "lucide-react";
import Image from "next/image";

interface NarrativeCardProps {
    title: string;
    location: string;
    text1: string;
    image1: string;
    text2?: string;
    image2?: string;
}

export default function NarrativeCard({ title, location, text1, image1, text2, image2 }: NarrativeCardProps) {
    return (
        <div className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 backdrop-blur-none md:backdrop-blur-sm md:bg-[#0D1014]/50 border-r border-white/5 relative z-10">

            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-[#C5A065]" />
                <span className="text-[#C5A065] text-xs font-sans tracking-[0.2em] uppercase">{location}</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-serif text-[#F0F0F0] mb-8 leading-tight">{title}</h2>

            {/* Text Block 1 */}
            <p className="text-lg md:text-xl font-serif text-[#E6E2D6]/80 leading-relaxed mb-8">
                {text1}
            </p>

            {/* Image 1 */}
            <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm border border-white/10 shadow-2xl group">
                <Image
                    src={image1}
                    alt={title}
                    fill
                    className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-1000"
                />
            </div>

            {/* Text Block 2 (Optional) */}
            {text2 && (
                <p className="text-lg md:text-xl font-serif text-[#E6E2D6]/80 leading-relaxed mb-8">
                    {text2}
                </p>
            )}

            {/* Image 2 (Optional) */}
            {image2 && (
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm border border-white/10 shadow-2xl group">
                    <Image
                        src={image2}
                        alt="Detail"
                        fill
                        className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
            )}

        </div>
    );
}
