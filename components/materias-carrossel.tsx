"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Materia {
  id: number
  imagem: string
  titulo: string
  descricao: string
}

export function MateriasCarrossel() {
  // Matérias organizadas conforme a copy fornecida
  const materias: Materia[] = [
    {
      id: 1,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2021.54.59-6TjuwgFxfJXoLBp2LH84xqzRpfng94.png",
      titulo: "Eleições 2014 - Cobertura política nacional",
      descricao: "Cobri as principais eleições do país para O Globo. Conheço exatamente como a política se comunica.",
    },
    {
      id: 2,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.15.24-p8OIstYcvva7kaEk7fCmgTWB5xRXdq.png",
      titulo: "Exclusivo para assinantes - Análise política estratégica",
      descricao: "Matérias exclusivas sobre articulações políticas em Mato Grosso. Experiência em bastidores do poder.",
    },
    {
      id: 3,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.10.56-AE4G40id5cp7K9Vd7eiFLDjmTYdLga.png",
      titulo: "Política Mato Grosso - Cobertura de crises",
      descricao: "Cobri cassação de mandato parlamentar. Sei como comunicação política funciona em momentos críticos.",
    },
    {
      id: 4,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.30.37-rCrnyem5pcYFj61Wt1x40ciKa6Snzl.png",
      titulo: "Gestão pública Rio - Conflitos e autonomia",
      descricao: "Cobertura de conflitos entre prefeito e governador. Entendo dinâmicas da gestão pública.",
    },
    {
      id: 5,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.14.54-XPWWFtKDEhtqkWklTjK3GUV7Dzgzjb.png",
      titulo: "Meio ambiente e política - Eleições e sustentabilidade",
      descricao: "Candidatos e meio ambiente: comunicação que conecta gestão pública com causas importantes.",
    },
    {
      id: 6,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.16.34-neN0OlGpeIJ21B5PXwNZwyFWKk7Nqx.png",
      titulo: "Olimpíadas Rio 2016 - Grandes eventos sob pressão",
      descricao:
        "Cobertura de eventos internacionais com zero margem para erro. Comunicação sob pressão é minha especialidade.",
    },
    {
      id: 7,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.08.19-Ch4GtiX1E0vLoEznumFG4C35EpW0ou.png",
      titulo: "Cultura e tradição - Toda pauta pode ser positiva",
      descricao: "Centro Cultural Maçônico: matérias sobre cultura geram identificação e aproximam o cidadão.",
    },
    {
      id: 8,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2021.58.39.png-t5Td3N1bnMqiBPrLSFogBCe3qIXeAc.jpeg",
      titulo: "Grandes eventos culturais - Comunicação que emociona",
      descricao: "Do Carnaval às festividades: eventos culturais fortalecem identidade local.",
    },
    {
      id: 9,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.07.31.png-A35uO0iWzO84qNMW6evIXsxjbxvgLN.jpeg",
      titulo: "Turismo regional - Comunicação que valoriza",
      descricao:
        "Matérias sobre interior e turismo mostram potencial local. Comunicação positiva gera desenvolvimento.",
    },
    {
      id: 10,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2021.56.06-7XoD1HuWlf32zfOq7hDNOnxCd96Vl2.png",
      titulo: "Meio ambiente e sociedade - Pautas que importam",
      descricao: "15 anos acompanhando impactos ambientais. Comunicação responsável sobre temas sensíveis.",
    },
    {
      id: 11,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.13.12-2F2XfZL1xJh30C6aRTUNUg3wa5rIzK.png",
      titulo: "Esportes nacionais - Diversidade de pautas",
      descricao: "Cobertura esportiva para Terra. Esporte une população e fortalece identidade.",
    },
    {
      id: 12,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2022.00.05-VqzDgpgPSJ8Iu6Aolx8bTTve7LHKUP.png",
      titulo: "Entrevistas estratégicas - Visão de comunicação moderna",
      descricao: "Sempre entendi que comunicação evolui. Novas ferramentas a serviço da gestão pública.",
    },
    {
      id: 13,
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202025-06-06%20a%CC%80s%2021.57.18-CfO0t2OLUEal3lJqLlBYvr88ltZdfM.png",
      titulo: "Redação O Globo - Experiência em grande veículo",
      descricao: "Fiz parte da equipe que cobriu grandes eventos. Trabalho em equipe de alto nível.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === materias.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? materias.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000) // Aumentei para 6 segundos para dar tempo de ler
    return () => clearInterval(interval)
  }, [currentIndex])

  // Touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-xl">
      <div
        className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {materias.map((materia, index) => (
          <div
            key={materia.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={materia.imagem || "/placeholder.svg"}
              alt={materia.titulo}
              fill
              className="object-contain"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-4 md:p-6 text-white">
              <h3 className="text-sm sm:text-base md:text-xl font-bold mb-2 line-clamp-2">{materia.titulo}</h3>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {materia.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Melhor contraste */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full h-10 w-10 md:h-12 md:w-12 touch-manipulation border-2 border-white/20"
        onClick={prevSlide}
        aria-label="Matéria anterior"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full h-10 w-10 md:h-12 md:w-12 touch-manipulation border-2 border-white/20"
        onClick={nextSlide}
        aria-label="Próxima matéria"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      {/* Indicators - Melhor visibilidade */}
      <div className="absolute bottom-3 md:bottom-4 left-0 right-0 z-20 flex justify-center space-x-2 flex-wrap px-4 gap-y-2">
        {materias.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 touch-manipulation border border-white/30 ${
              index === currentIndex ? "bg-white shadow-lg scale-110" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Ir para matéria ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter - Melhor contraste */}
      <div className="absolute top-2 md:top-4 right-2 md:right-4 z-20 bg-black/70 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/20">
        {currentIndex + 1} / {materias.length}
      </div>
    </div>
  )
}
