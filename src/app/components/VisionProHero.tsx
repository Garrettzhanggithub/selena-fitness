"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

/* ─── 3D Particle Field (floating geometric shapes) ─── */

function FloatingParticles({ mousePos }: { mousePos: [number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 80;
  
  // Generate random positions & sizes
  const particles = Array.from({ length: particleCount }, () => ({
    x: (Math.random() - 0.5) * 30,
    y: (Math.random() - 0.5) * 20,
    z: (Math.random() - 0.5) * 15 - 5,
    size: Math.random() * 0.08 + 0.02,
    speed: Math.random() * 0.3 + 0.1,
    phase: Math.random() * Math.PI * 2,
  }));

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    groupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      // Gentle floating motion + mouse influence
      child.position.x = p.x + Math.sin(t * p.speed + p.phase) * 0.5 + mousePos[0] * 0.3;
      child.position.y = p.y + Math.cos(t * p.speed * 0.7 + p.phase) * 0.3 + mousePos[1] * 0.2;
      child.position.z = p.z + Math.sin(t * p.speed * 0.5 + p.phase) * 0.2;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.5 + Math.sin(i) * 0.3}
            transparent
            opacity={0.4 + Math.sin(i * 0.5) * 0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingRings({ mousePos }: { mousePos: [number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = Math.sin(t * 0.2 + i) * 0.3 + mousePos[1] * 0.1;
      child.rotation.y = Math.cos(t * 0.15 + i * 0.5) * 0.4 + mousePos[0] * 0.1;
      child.position.y = Math.sin(t * 0.3 + i * 1.2) * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[
          (i - 2) * 4,
          Math.sin(i * 1.5) * 2,
          -3 - i * 0.5
        ]}>
          <torusGeometry args={[0.6 + i * 0.1, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.3}
            transparent
            opacity={0.15 + i * 0.03}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Parallax Layer (CSS-based depth) ─── */

function ParallaxLayer({ 
  children, 
  depth = 1, 
  mousePos 
}: { 
  children: React.ReactNode; 
  depth?: number; 
  mousePos: [number, number]; 
}) {
  const offset = depth * 20;
  return (
    <div
      style={{
        transform: `translate(${mousePos[0] * offset}px, ${mousePos[1] * offset}px)`,
        transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Glassmorphism Card (Vision Pro style) ─── */

function GlassCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
}

/* ─── Main Hero Component ─── */

export default function VisionProHero() {
  const [mousePos, setMousePos] = useState<[number, number]>([0, 0]);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1 range
      setMousePos([
        (e.clientX / window.innerWidth - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * 2
      ]);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax scroll effect on hero
  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroTranslateY = scrollY * 0.3;

  return (
    <section 
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        perspective: "1200px",
      }}
    >
      {/* ─── 3D Background Layer ─── */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ opacity: heroOpacity * 0.7 }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#10B981" />
          <FloatingParticles mousePos={mousePos as any} />
          <FloatingRings mousePos={mousePos as any} />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* ─── Gradient Overlay (Vision Pro depth) ─── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/95 via-[var(--bg)]/60 to-[var(--bg)]" />
        {/* Radial glow at center */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
            transform: `translate(-50%, -50%) translate(${mousePos[0] * 30}px, ${mousePos[1] * 30}px)`,
            transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />
      </div>

      {/* ─── Hero Content (with parallax depth layers) ─── */}
      <div 
        className="relative z-10 flex-grow flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-0"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslateY}px)`,
        }}
      >
        <div className="space-y-8">
          
          {/* Badge — floats at depth layer 2 */}
          <ParallaxLayer depth={2} mousePos={mousePos}>
            <div 
              className={`inline-flex items-center space-x-2 glass-badge animate-fade-in-up ${isLoaded ? "visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase">RN-Certified Fitness Coach · Vancouver, BC</span>
            </div>
          </ParallaxLayer>

          {/* Hero headline — depth layer 1 (closest) */}
          <ParallaxLayer depth={1} mousePos={mousePos}>
            <div 
              className={`hero-title ${isLoaded ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--text-primary)] tracking-tight leading-tight">
                UNLEASH YOUR<br />
                <span className="gradient-text vision-glow">TRUE POTENTIAL</span>
              </h1>
            </div>
          </ParallaxLayer>

          {/* Subheadline — depth layer 2 */}
          <ParallaxLayer depth={2} mousePos={mousePos}>
            <div 
              className={`hero-subtitle ${isLoaded ? "visible" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                Elite personal training and nutrition coaching designed to sculpt your physique, 
                elevate your performance, and transform your mind — backed by medical expertise.
              </p>
            </div>
          </ParallaxLayer>

          {/* CTA buttons — depth layer 1 */}
          <ParallaxLayer depth={1} mousePos={mousePos}>
            <div 
              className={`hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${isLoaded ? "visible" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <Link 
                href="/booking" 
                className="btn-primary text-base px-10 py-5 shadow-xl btn-vision-glow"
                style={{ boxShadow: "0 8px 30px rgba(16,185,129,0.3), 0 0 60px rgba(16,185,129,0.1)" }}
              >
                Start Your Transformation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/workouts" className="btn-outline text-base px-10 py-5 btn-glass">
                View Programs
              </Link>
            </div>
          </ParallaxLayer>
        </div>
      </div>

      {/* ─── Stats/Social Proof Footer (glass effect) ─── */}
      <div 
        className="relative z-10 w-full border-t border-[var(--card-border)] glass-stats"
        style={{ opacity: heroOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Clients Trained" },
            { number: "RN", label: "Medical Certified" },
            { number: "100%", label: "Evidence-Based" },
            { number: "4.9★", label: "Client Rating" },
          ].map((s) => (
            <div key={s.label}>
              <p className="stat-number">{s.number}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
