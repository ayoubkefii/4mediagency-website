"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Ahmed K.",
    role: "CEO, TechStart TN",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4", // Placeholder stock video
    quote: "4media transformed our digital presence. The ROI has been incredible.",
  },
  {
    id: 2,
    name: "Leila B.",
    role: "Marketing Director, FashionBrand",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-an-open-office-306-large.mp4", // Placeholder stock video
    quote: "The team is professional, creative, and truly understands the Tunisian market.",
  },
]

export function VideoTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-slate-950 to-slate-950 pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear directly from the people we've worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoCard({ testimonial, index }: { testimonial: any, index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="bg-slate-900 border-slate-800 overflow-hidden group relative aspect-[9/16] md:aspect-[4/5] rounded-3xl shadow-2xl cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          loop
          muted={isMuted}
          playsInline
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Controls & Info */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
           <div className="flex justify-between items-end mb-4">
             <div>
               <h3 className="text-2xl font-bold text-white mb-1">{testimonial.name}</h3>
               <p className="text-primary font-medium">{testimonial.role}</p>
             </div>
             <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20 rounded-full"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </Button>
           </div>
           <p className="text-slate-300 italic text-sm border-l-2 border-primary pl-4">
             "{testimonial.quote}"
           </p>
        </div>
      </Card>
    </motion.div>
  )
}
