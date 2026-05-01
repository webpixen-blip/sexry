/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, Volume2, Maximize, Settings, Shield, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const MONETAG_LINK = "https://omg10.com/4/9831677";

  const handlePlayClick = () => {
    window.open(MONETAG_LINK, '_blank');
  };

  const relatedVideos = [
    { 
      id: 1, 
      title: "Secret Footage: Exclusive Reveal", 
      duration: "12:45", 
      views: "1.2M", 
      date: "2 days ago",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQJCsEA4O2cphBCvQ3HG7ycjQObr7uWgZ8A&s"
    },
    { 
      id: 2, 
      title: "Hidden Cam: Night Moments", 
      duration: "08:20", 
      views: "850K", 
      date: "5 days ago",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHMqFgsdWwu8uHR39kLpOJnVb3zu1toi7Ag&s"
    },
    { 
      id: 3, 
      title: "Private Collection: Chapter 4", 
      duration: "15:10", 
      views: "2.5M", 
      date: "1 week ago",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BleR4WMnY7DcAIq3UXchJd66p2zJuTifOA&s"
    },
    { 
      id: 4, 
      title: "The Unseen Tape", 
      duration: "10:30", 
      views: "4.1M", 
      date: "3 days ago",
      thumbnail: "https://thumb-cdn77.xnxx-cdn.com/deb3a372-43bc-43aa-a4af-7cb583268b3d/0/xn_15_p.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0502] text-white font-sans selection:bg-[#ff4e00]/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-6 flex justify-between items-center backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#ff4e00] to-[#ff8c00] rounded-full flex items-center justify-center shadow-lg shadow-[#ff4e00]/20">
            <Play className="fill-white w-5 h-5 ml-1" />
          </div>
          <span className="text-2xl font-bold tracking-tighter uppercase italic">
            POV<span className="text-[#ff4e00]">STREAM</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Hot</a>
          <a href="#" className="hover:text-white transition-colors">Premium</a>
          <a href="#" className="hover:text-white transition-colors">VR 360</a>
          <a href="#" className="hover:text-white transition-colors">Live</a>
        </div>

        <button className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95">
          Sign In
        </button>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-3 text-[#ff4e00] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            <Shield className="w-4 h-4" />
            <span>Verified Premium Content</span>
            <span className="w-1 h-1 bg-zinc-600 rounded-full" />
            <span className="text-zinc-400">4K Ultra HD</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-4xl leading-[1.2]">
            🤫 රහසිගතව කැමරාවට අසුවූ දර්ශන පෙළ... 🔞
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 24:15</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-current text-yellow-500" /> 4.9 (248k)</span>
            <span className="bg-zinc-800 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase italic">18+ Premium</span>
          </div>
        </header>

        {/* Video Player Area */}
        <section className="relative group cursor-pointer" onClick={handlePlayClick}>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl relative bg-zinc-900 ring-1 ring-white/10">
            {/* Thumbnail Image */}
            <img 
              src="https://noboring.com/content/contentthumbs/49/43/474943-1x.jpg" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 bg-[#ff4e00] rounded-full flex items-center justify-center shadow-2xl shadow-[#ff4e00]/40 group-hover:bg-[#ff6a20] transition-colors"
              >
                <Play className="fill-white w-10 h-10 ml-2" />
              </motion.div>
            </div>

            {/* Video Controls Bar (Mock) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col gap-4 bg-gradient-to-t from-black to-transparent opacity-90">
              <div className="w-full h-1 bg-zinc-700/50 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#ff4e00]" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  <Play className="w-6 h-6 hover:text-[#ff4e00] transition-colors" />
                  <Volume2 className="w-6 h-6 hover:text-[#ff4e00] transition-colors" />
                  <span className="text-sm font-mono mt-0.5">04:12 / 24:15</span>
                </div>
                <div className="flex gap-6">
                  <Settings className="w-6 h-6 hover:text-[#ff4e00] transition-colors" />
                  <Maximize className="w-6 h-6 hover:text-[#ff4e00] transition-colors" />
                </div>
              </div>
            </div>

            {/* Live Indicator */}
            <div className="absolute top-6 right-6">
              <div className="bg-[#ff4e00] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Live Now
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Actions */}
        <section className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-800 pb-10">
          <div className="flex gap-2">
            <button 
              onClick={handlePlayClick}
              className="px-10 py-4 bg-[#ff4e00] text-black font-black uppercase tracking-tighter text-lg rounded-xl hover:bg-[#ff6a20] transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Watch Full Video Now
            </button>
            <button className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all">
              <Star className="w-6 h-6 fill-none" />
            </button>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-3xl font-bold tracking-tighter">4,815,220 <span className="text-zinc-600 font-medium text-sm tracking-widest uppercase">Views</span></span>
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-[10px] uppercase font-bold text-zinc-400">#Premium</span>
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-[10px] uppercase font-bold text-zinc-400">#4K</span>
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-[10px] uppercase font-bold text-zinc-400">#Exclusive</span>
            </div>
          </div>
        </section>

        {/* Related Videos */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold italic tracking-tighter uppercase">Recommended <span className="text-[#ff4e00]">For You</span></h2>
            <a href="#" className="text-xs uppercase tracking-widest text-[#ff4e00] font-bold hover:underline">View All</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedVideos.map((video) => (
              <motion.div 
                key={video.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-3 relative">
                  <img 
                    src={video.thumbnail} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                    alt={video.title}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-bold">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Play className="fill-white w-5 h-5 ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-sm line-clamp-2 leading-snug group-hover:text-[#ff4e00] transition-colors">{video.title}</h3>
                <div className="flex justify-between mt-2 text-[10px] uppercase tracking-wider font-bold text-zinc-500">
                  <span>{video.views} Views</span>
                  <span>{video.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-900 bg-black/30 p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
              <Play className="fill-zinc-400 w-4 h-4 ml-0.5" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic text-zinc-500">
              POV<span className="text-zinc-600">STREAM</span>
            </span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">DMCA</a>
            <a href="#" className="hover:text-white transition-colors">2257</a>
          </div>
          <p className="text-[10px] text-zinc-700 uppercase tracking-widest font-medium">
            © 2026 POVSTREAM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Atmospheric Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[#ff4e00]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
