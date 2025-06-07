"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, Shield, Clock, Award } from "lucide-react"
import { MateriasCarrossel } from "@/components/materias-carrossel"
import Image from "next/image"
import { useEffect } from "react"
import { trackConversion, trackScrollDepth, trackTimeOnPage } from "@/components/analytics"

export default function MarcoStammLP() {
  // Initialize tracking
  useEffect(() => {
    const cleanupScroll = trackScrollDepth()
    const cleanupTime = trackTimeOnPage()

    return () => {
      cleanupScroll?.()
      cleanupTime?.()
    }
  }, [])

  // Função para gerar URLs com UTMs
  const generateWhatsAppURL = (source: string, medium = "whatsapp", campaign = "landing_page") => {
    const phoneNumber = "5551993925730"
    const baseMessage = "Olá Marco, quero saber mais sobre o treinamento de comunicação para minha equipe"
    const utmParams = `utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
    const message = `${baseMessage} (Origem: ${source})`

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  // Função para WhatsApp com tracking melhorado
  const handleWhatsAppClick = (source: string) => {
    const whatsappUrl = generateWhatsAppURL(source)

    // Enhanced tracking
    trackConversion("whatsapp_click", "contato", source, 1)

    // Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "WhatsApp Contact",
        content_category: "Lead Generation",
        source: source,
      })
    }

    console.log("WhatsApp URL:", whatsappUrl)
    window.open(whatsappUrl, "_blank")
  }

  // Função para email com tracking
  const handleEmailClick = (source: string) => {
    const email = "marco.stammm@gmail.com"
    const subject = "Interesse no treinamento de comunicação"
    const body = `Olá Marco, gostaria de saber mais sobre o treinamento de comunicação para minha equipe da prefeitura. (Origem: ${source})`
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    trackConversion("email_click", "contato", source, 1)

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Email Contact",
        content_category: "Lead Generation",
        source: source,
      })
    }

    console.log("Email URL:", emailUrl)
    window.location.href = emailUrl
  }

  // Função para tracking de navegação
  const handleNavigation = (section: string, label: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "navigation_click", {
        event_category: "navegacao",
        event_label: label,
        page_location: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Melhorado para mobile */}
      <header className="bg-gradient-to-r from-purple-700 to-purple-800 text-white py-3 md:py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-base md:text-xl font-bold">Marco Stamm</div>
          <button
            onClick={() => {
              handleNavigation("contato", "header_contato")
            }}
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-sm md:text-base px-3 py-2 md:px-6 md:py-2 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 min-h-[44px] touch-manipulation"
            aria-label="Ir para seção de contato"
          >
            Falar Agora
          </button>
        </div>
      </header>

      {/* Hero Section - Otimizado para mobile */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-purple-curves.png" alt="" fill className="object-cover opacity-90" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-amber-500/10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-4 md:space-y-8 text-center lg:text-left">
              <div className="bg-purple-700 text-white hover:bg-purple-800 text-xs md:text-base px-3 py-2 md:px-4 md:py-2 rounded-full shadow-md inline-block">
                Comunicação de confiança para Prefeituras
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Sua equipe pode produzir <span className="text-amber-300">comunicação profissional</span> sem contratar
                ninguém
              </h1>
              <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transformo quem você já confia em uma estrutura de comunicação que funciona de verdade — produz com
                eficiência, dá visibilidade à sua gestão e evita crise
              </p>
              <div className="flex flex-col gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start max-w-sm mx-auto lg:mx-0">
                <button
                  onClick={() => handleNavigation("solucao", "como_funciona")}
                  className="bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white w-full text-center py-3 md:py-4 px-6 md:px-8 rounded-lg font-medium text-base md:text-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 min-h-[48px] touch-manipulation"
                >
                  Como Funciona
                </button>
                <button
                  onClick={() => handleNavigation("depoimentos", "ver_resultados")}
                  className="bg-white border-2 border-white text-purple-700 hover:bg-purple-50 active:bg-purple-100 w-full text-center py-3 md:py-4 px-6 md:px-8 rounded-lg font-medium text-base md:text-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 min-h-[48px] touch-manipulation"
                >
                  Ver Resultados
                </button>
              </div>
            </div>

            {/* Imagem do profissional - Melhorada para mobile */}
            <div className="relative order-first lg:order-last">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-none">
                <Image
                  src="/images/hero-professional.png"
                  alt="Marco Stamm - Especialista em comunicação para prefeituras"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Dor - Melhorado para mobile */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-cream-minimal.png" alt="" fill className="object-cover opacity-60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              A dor que você sente — e não sabe nomear
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed px-2">
              Prefeito, você acordou hoje pensando em obras, saúde, educação. Mas aí chegam as cobranças: "Por que não
              saiu na imprensa?", "A oposição está falando mal nas redes", "O cidadão reclama que não sabe o que a
              prefeitura faz".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              "Você nomeou pessoas de confiança, mas elas não sabem fazer comunicação profissional de verdade",
              "Sua equipe confunde divulgação pessoal com comunicação institucional da prefeitura",
              "Você está gastando com mídia paga sem orientação e pode estar correndo risco jurídico grave",
              "A imprensa local não existe ou não te dá cobertura adequada para sua gestão municipal",
              "Você não tem tempo para ensinar comunicação — tem uma cidade inteira para administrar",
              "Sua gestão boa não chega ao cidadão da forma correta e transparente que deveria",
            ].map((problema, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-purple-700 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4 md:p-6">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{problema}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12 px-4">
            <p className="text-lg md:text-xl font-semibold text-purple-800">
              O resultado? Você trabalha dobrado: administra a cidade e ainda precisa se preocupar com comunicação.
              <span className="text-gray-900"> Isso não deveria ser assim.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solução - Melhorada para mobile */}
      <section id="solucao" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Como eu resolvo — com a equipe que você já confia
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed px-2">
                Não precisa contratar ninguém novo. Trabalho com a equipe que você já tem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Aproveitamos sua equipe atual
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Aquela pessoa que você nomeou por confiança? Eu transformo ela em um profissional de comunicação
                      competente. O cinegrafista que só filma? Vai aprender a produzir conteúdo estratégico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Resultados em 30 dias</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Minha abordagem é prática e direta: pego sua equipe atual e ensino tudo que precisa saber. Em 30
                      dias, você terá uma estrutura de comunicação própria e eficaz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Suporte contínuo</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Após o treinamento inicial, continuo mentorando sua equipe com suporte constante. Em situações de
                      crise grave ou decisões estratégicas complexas, atuo diretamente ao seu lado.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-amber-50 border-purple-200 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-4 md:mb-6">
                    O que você vai ter em 30 dias:
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      "Equipe que produz conteúdo sem você precisar revisar",
                      "Comunicação que chega ao cidadão sem depender da imprensa local",
                      "Você dormindo tranquilo sabendo que não vai ter crise por post errado",
                    ].map((beneficio, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{beneficio}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis - Melhorado para mobile */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-purple-gradient.png" alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-purple-50/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              O que está incluído
            </h2>
            <p className="text-base md:text-xl text-gray-600 px-2">
              Tudo que você precisa para ter uma comunicação profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Target,
                title: "Diagnóstico completo",
                description:
                  "Análise detalhada da situação atual da sua comunicação e identificação de pontos críticos",
              },
              {
                icon: Users,
                title: "Equipe treinada",
                description: "Capacitação completa aproveitando quem já está no seu gabinete de confiança",
              },
              {
                icon: Award,
                title: "Mídia training personalizado",
                description: "Treinamento específico para você, secretários e atendentes da sua prefeitura",
              },
              {
                icon: CheckCircle,
                title: "Manual prático",
                description: "Guia completo sobre uso correto da comunicação institucional na gestão pública",
              },
              {
                icon: Target,
                title: "Agente de IA personalizado",
                description: "Ferramenta com linguagem jornalística profissional treinada para comunicação pública",
              },
              {
                icon: Users,
                title: "Mentoria contínua",
                description: "Suporte direto comigo para crises, pautas urgentes e decisões estratégicas importantes",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-purple-700 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Card className="bg-gradient-to-r from-amber-100 to-purple-100 border-amber-300 max-w-4xl mx-auto shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Bônus Exclusivos:</h3>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      <strong>Orientação legal para licitação de agência</strong> — Como contratar serviços de
                      comunicação dentro da lei
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      <strong>Relacionamento com a imprensa</strong> — Estratégias para melhorar a cobertura
                      jornalística da sua gestão
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que funciona - Melhorado para mobile */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              Por que meu método funciona
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <Card className="border-purple-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-purple-700" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Experiência Real</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Mais de 20 anos em veículos nacionais, agências e gabinetes públicos. Sei exatamente o que funciona
                    na prática e o que é perda de tempo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Foco no Essencial</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Nada de jargão técnico ou ferramentas mirabolantes que complicam tudo. Só o que realmente importa
                    para uma prefeitura do interior funcionar bem.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Trabalho com Pessoas</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Sua equipe vai aprender fazendo, com orientação prática direta. Suporte constante para garantir que
                    tudo funcione perfeitamente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Comprovada - Carrossel */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-gradient-soft.png" alt="" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gray-50/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Dos grandes jornais para a sua prefeitura: experiência comprovada
            </h2>
            <p className="text-base md:text-xl text-gray-600 px-2">
              Mais de 20 anos cobrindo política, eleições e grandes eventos. Sei o que funciona na prática — e o que é
              perda de tempo.
            </p>
          </div>

          <MateriasCarrossel />
        </div>
      </section>

      {/* Depoimentos - Melhorado para mobile */}
      <section id="depoimentos" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Resultados Comprovados
            </h2>
            <p className="text-base md:text-xl text-gray-600 px-2">
              Veja o que prefeitos e gestores falam sobre o trabalho
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 md:mb-6">
                  <div className="flex text-amber-400 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                    "Conheci o Marco ainda na pré-campanha, quando eu nem sabia se eu seria candidato. Fiz um mídia
                    training e fui pra campanha, vitoriosa. Após a eleição, o desafio era montar a equipe de comunicação
                    num primeiro mandato, em uma cidade do interior, onde faltam jornalistas e mão de obra qualificada.
                    Entrei em contato com o Marco e em menos de um mês ele organizou a minha estrutura de comunicação."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-purple-700 font-bold text-sm md:text-lg">RB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Rodrigo Benassi</p>
                    <p className="text-gray-600 text-xs md:text-sm">Prefeito de Colíder/MT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-amber-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 md:mb-6">
                  <div className="flex text-amber-400 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                    "Eu conheci o Marco quando ele trabalhava na imprensa. Tive necessidade de contratar um jornalista
                    para o meu gabinete e o convidei. Foi um período em que pude me concentrar no mandato, sabendo que a
                    comunicação estava profissional e estratégica na contenção de possíveis crises, que conseguimos
                    evitar ou reduzir o impacto."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-amber-700 font-bold text-sm md:text-lg">DD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Dilmar Dal Bosco</p>
                    <p className="text-gray-600 text-xs md:text-sm">Deputado Estadual</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Marco - Melhorado para mobile */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Marco Stamm</h2>
              <p className="text-base md:text-xl text-gray-600 px-2">
                Jornalista com mais de 20 anos de experiência em comunicação pública e privada
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900">Experiência Profissional</h3>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Repórter dos jornais O Globo e Lance!, na TV Globo
                    </p>
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Coordenador de comunicação em gabinete na Assembleia Legislativa
                    </p>
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Jornalista concursado há 15 anos na Câmara Municipal de Sinop
                    </p>
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Cobriu eleições, Copa do Mundo e Olimpíadas
                    </p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900">Formação Acadêmica</h3>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Graduação em Jornalismo e Letras
                    </p>
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Pós-graduado em Comunicação em Crises nas Organizações
                    </p>
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Mestrando em Marketing Digital
                    </p>
                    <p className="text-gray-700 flex items-start text-sm md:text-base">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
                      Especialização em Growth Marketing e Martech
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-amber-50 border-purple-200 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold text-purple-900 mb-4 md:mb-6">Minha Especialidade</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    Sei exatamente como a comunicação funciona nos dois lados: na imprensa e no poder público. Conheço
                    as dores, os prazos e as limitações do gestor público.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    Hoje me dedico exclusivamente a resolver o problema de comunicação de prefeituras do interior. Não
                    trabalho apenas com teoria — trabalho com resultados práticos e mentoria contínua.
                  </p>
                  <p className="text-purple-800 font-semibold text-sm md:text-base">
                    Minha especialidade é transformar equipes sem formação em comunicação em estruturas profissionais e
                    eficazes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Melhorado para mobile */}
      <section id="contato" className="py-12 md:py-20 bg-gradient-to-r from-purple-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Pronto para ter uma equipe de comunicação que funciona?
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 px-2">
              Sua gestão merece ser conhecida. Sua equipe pode aprender. E você pode dormir tranquilo sabendo que a
              comunicação está profissional.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
              <p className="text-lg md:text-2xl font-semibold mb-2 md:mb-4">
                São apenas <span className="text-amber-300">30 dias</span> para transformar completamente como sua
                prefeitura se comunica.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 justify-center items-center px-4 max-w-sm mx-auto">
              <button
                onClick={() => handleWhatsAppClick("cta_final")}
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold px-6 py-4 md:px-8 md:py-4 text-base md:text-lg w-full rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 min-h-[52px] touch-manipulation"
                aria-label="Entrar em contato via WhatsApp"
              >
                Falar no WhatsApp
              </button>
              <button
                onClick={() => handleEmailClick("cta_final")}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-800 active:bg-gray-100 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 min-h-[52px] touch-manipulation"
                aria-label="Entrar em contato via email"
              >
                Enviar E-mail
              </button>
            </div>

            <p className="text-xs md:text-sm opacity-75 mt-4 md:mt-6">
              Resposta em até 24 horas • Consulta inicial gratuita
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Melhorado para mobile */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Marco Stamm</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Especialista em comunicação para prefeituras do interior. Transformando equipes em estruturas
                profissionais há mais de 20 anos.
              </p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400 text-sm md:text-base">
                <p>
                  <button
                    onClick={() => handleWhatsAppClick("footer")}
                    className="text-gray-400 hover:text-white transition-colors underline"
                    aria-label="Contato via WhatsApp"
                  >
                    WhatsApp: (51) 99392-5730
                  </button>
                </p>
                <p>
                  <button
                    onClick={() => handleEmailClick("footer")}
                    className="text-gray-400 hover:text-white transition-colors underline"
                    aria-label="Contato via email"
                  >
                    E-mail: marco.stammm@gmail.com
                  </button>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Especialidades</h4>
              <div className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
                <p>• Comunicação Pública</p>
                <p>• Treinamento de Equipes</p>
                <p>• Gestão de Crises</p>
                <p>• Mídia Training</p>
                <p>• Marketing Digital</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
            <p>&copy; 2025 Marco Stamm. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp - Melhorado para mobile */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button
          onClick={() => handleWhatsAppClick("botao_flutuante")}
          className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95 min-h-[56px] min-w-[56px] touch-manipulation"
          title="Falar no WhatsApp"
          aria-label="Contato via WhatsApp"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </button>
      </div>
    </div>
  )
}
