"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Image, Environment, useCursor, Float, Preload } from "@react-three/drei"
import { easing } from "maath"
import * as THREE from "three"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Luxury Real Estate",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    description: "A high-end real estate platform with immersive virtual tours."
  },
  {
    id: 2,
    title: "Tech Startup",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    description: "Complete brand identity for a Silicon Valley AI startup."
  },
  {
    id: 3,
    title: "E-commerce App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
    description: "Mobile-first shopping experience with 2M+ downloads."
  },
  {
    id: 4,
    title: "Fashion Editorial",
    category: "Production",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    description: "Award-winning video campaign for a luxury fashion house."
  }
]

// Check if WebGL is supported
function isWebGLAvailable() {
  if (typeof window === "undefined") return true
  try {
    const canvas = document.createElement("canvas")
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    )
  } catch {
    return false
  }
}

// Loading component
function LoadingOverlay({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black"
        >
          <div className="relative">
            {/* Spinning ring */}
            <motion.div
              className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.p
            className="mt-6 text-slate-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Loading gallery...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Fallback 2D Gallery for browsers without WebGL
function FallbackGallery() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-8xl font-black text-white/10 uppercase tracking-tighter">
          Immersive Gallery
        </h1>
        <p className="text-slate-400 mt-4">Click on a card to explore</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            className={`relative cursor-pointer rounded-xl overflow-hidden aspect-[2/3] group ${
              activeProject === project.id ? "ring-2 ring-primary" : ""
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-300 ${
                activeProject === project.id ? "brightness-100" : "brightness-75 group-hover:brightness-90"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.category}</p>
              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-slate-400 mt-2"
                  >
                    {project.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Scene ready tracker
function SceneReady({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    // Small delay to ensure everything is rendered
    const timer = setTimeout(onReady, 500)
    return () => clearTimeout(timer)
  }, [onReady])
  return null
}

export function ProjectGallery3D() {
  const [isLoading, setIsLoading] = useState(true)
  const [webGLSupported, setWebGLSupported] = useState(true)

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable())
  }, [])

  // Show fallback gallery if WebGL not supported
  if (!webGLSupported) {
    return <FallbackGallery />
  }

  return (
    <div className="h-screen w-full relative bg-black">
      {/* Loading Overlay */}
      <LoadingOverlay isLoading={isLoading} />

      {/* Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <h1 className="text-5xl md:text-8xl font-black text-white/10 uppercase tracking-tighter">
          Immersive Gallery
        </h1>
        <p className="text-slate-400 mt-4">Click on a card to explore</p>
      </div>

      <Canvas camera={{ position: [0, 0, 15], fov: 15 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Rig />
          <Cards />
          <Preload all />
          <SceneReady onReady={() => setIsLoading(false)} />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Rig(props: any) {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.pointer.x * 2, state.pointer.y * 2, 15], 0.25, delta)
  })
  return null
}

function Cards() {
  const [hovered, hover] = useState<number | null>(null)
  
  return (
    <group>
      {projects.map((project, i) => (
        <Card 
          key={project.id} 
          project={project} 
          index={i} 
          hovered={hovered} 
          setHover={hover} 
        />
      ))}
    </group>
  )
}

function Card({ project, index, hovered, setHover }: any) {
  const ref = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false)
  
  // Calculate position based on index
  const x = (index - 1.5) * 2.5

  useFrame((state, delta) => {
    if (ref.current) {
      // Hover effect: scale up and move forward
      const targetScale = active ? 1.2 : hovered === index ? 1.1 : 1
      const targetZ = active ? 2 : hovered === index ? 0.5 : 0
      
      easing.damp3(ref.current.scale, [targetScale, targetScale, 1], 0.15, delta)
      easing.damp(ref.current.position, 'z', targetZ, 0.15, delta)
      
      // Slight rotation based on mouse
      // easing.dampE(ref.current.rotation, [0, active ? 0 : state.pointer.x * 0.1, 0], 0.15, delta)
    }
  })

  useCursor(hovered === index)

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[x, 0, 0]}>
        <mesh 
          ref={ref}
          onClick={() => setActive(!active)}
          onPointerOver={() => setHover(index)}
          onPointerOut={() => setHover(null)}
        >
          <planeGeometry args={[2, 3]} />
          {/* Use a valid image URL or handle error */}
          <Image 
            url={project.image} 
            transparent 
            opacity={active ? 1 : 0.7} 
            scale={[2, 3]} 
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Text Label (only visible on hover/active) */}
        {(hovered === index || active) && (
          <group position={[0, -1.8, 0.1]}>
            <Text fontSize={0.15} color="white" anchorX="center" anchorY="top" fontWeight="bold">
              {project.title}
            </Text>
            <Text fontSize={0.1} color="#aaa" position={[0, -0.2, 0]} anchorX="center" anchorY="top">
              {project.category}
            </Text>
            {active && (
               <Text fontSize={0.08} color="#888" position={[0, -0.4, 0]} anchorX="center" anchorY="top" maxWidth={1.8} textAlign="center">
                {project.description}
              </Text>
            )}
          </group>
        )}
      </group>
    </Float>
  )
}
