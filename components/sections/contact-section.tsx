"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { MeetingAnimation } from "@/components/3d/meeting-animation";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Interested in collaborating on full stack and AI projects or
          discussing opportunities? I'd love to hear from you!
        </p>

        {/* Meeting Animation */}
        <div className="h-48 sm:h-64 mb-2 sm:mb-12">
          <Canvas>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={0.8} />
            <MeetingAnimation />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {/* <Environment preset="sunset" /> */}
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="bg-gray-800/30 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-4 sm:p-6 text-center relative z-10">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                Email
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                binisha4200@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-purple-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-4 sm:p-6 text-center relative z-10">
              <Github className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                GitHub
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                https://github.com/Binisha1
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-green-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-4 sm:p-6 text-center relative z-10">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                https://www.linkedin.com/in/binisha-naga-ab93b1294/
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
