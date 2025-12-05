"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, Sparkles, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = {
  id: string
  role: "user" | "bot"
  content: string
  suggestions?: string[]
}

// Comprehensive FAQ knowledge base
const knowledgeBase = [
  // Greetings
  {
    keywords: ["hello", "hi", "hey", "bonjour", "salut", "good morning", "good afternoon", "good evening"],
    answer: "Hello! 👋 Welcome to 4mediagency! I'm your digital assistant. How can I help you today?",
    suggestions: ["What services do you offer?", "How much does a website cost?", "Tell me about your team"]
  },
  {
    keywords: ["thanks", "thank you", "merci", "appreciate", "helpful"],
    answer: "You're welcome! 😊 Is there anything else I can help you with?",
    suggestions: ["I have another question", "Contact a human agent", "No, that's all"]
  },
  
  // Services
  {
    keywords: ["service", "offer", "do", "provide", "work", "help with"],
    answer: "We offer a comprehensive range of digital services:\n\n🌐 **Web Development** - Custom websites, e-commerce, web apps\n🎨 **Branding** - Logo design, visual identity, brand strategy\n📱 **Mobile Apps** - iOS & Android development\n📈 **Digital Marketing** - SEO, social media, content marketing\n🔒 **Cybersecurity** - Security audits, protection solutions\n\nWhich service interests you most?",
    suggestions: ["Tell me about web development", "What about branding?", "Digital marketing services"]
  },
  {
    keywords: ["web", "website", "site", "develop", "create website", "build website"],
    answer: "Our web development services include:\n\n✅ Custom responsive websites\n✅ E-commerce platforms (Shopify, WooCommerce)\n✅ Web applications (React, Next.js)\n✅ CMS development (WordPress, Strapi)\n✅ API development & integration\n✅ Website maintenance & support\n\nWe build fast, secure, and beautiful websites tailored to your brand!",
    suggestions: ["How much for a website?", "How long does it take?", "Show me your portfolio"]
  },
  {
    keywords: ["brand", "logo", "identity", "visual", "design logo"],
    answer: "Our branding services help you stand out:\n\n🎨 **Logo Design** - Unique, memorable logos\n📋 **Brand Guidelines** - Colors, typography, usage rules\n🖼️ **Visual Identity** - Business cards, letterheads, social templates\n💡 **Brand Strategy** - Positioning, messaging, tone of voice\n\nA strong brand is the foundation of business success!",
    suggestions: ["Branding package cost?", "How long for a logo?", "See brand examples"]
  },
  {
    keywords: ["marketing", "seo", "social media", "advertis", "promote", "digital marketing"],
    answer: "Our digital marketing services include:\n\n📊 **SEO** - Improve your Google rankings\n📱 **Social Media Management** - Content, engagement, growth\n💰 **Paid Advertising** - Google Ads, Facebook/Instagram Ads\n✍️ **Content Marketing** - Blog posts, videos, infographics\n📧 **Email Marketing** - Campaigns, automation, newsletters\n\nWe help you reach the right audience and grow your business!",
    suggestions: ["SEO pricing?", "Social media packages", "Marketing strategy consultation"]
  },
  {
    keywords: ["app", "mobile", "ios", "android", "application"],
    answer: "Our mobile app development services:\n\n📱 **Native Apps** - iOS (Swift) & Android (Kotlin)\n⚡ **Cross-Platform** - React Native, Flutter\n🔗 **App Integration** - APIs, third-party services\n🛠️ **Maintenance** - Updates, bug fixes, improvements\n\nFrom concept to App Store, we build apps users love!",
    suggestions: ["App development cost?", "How long to build an app?", "See app portfolio"]
  },
  
  // Pricing
  {
    keywords: ["price", "cost", "pricing", "quote", "budget", "how much", "tarif", "devis", "expensive", "cheap", "affordable"],
    answer: "Our pricing depends on project scope and requirements:\n\n💻 **Basic Website**: Starting at 2,000 TND\n🛒 **E-commerce Site**: Starting at 5,000 TND\n🎨 **Branding Package**: Starting at 1,500 TND\n📱 **Mobile App**: Starting at 8,000 TND\n📈 **Marketing Retainer**: Starting at 800 TND/month\n\nEvery project is unique! Contact us for a personalized quote tailored to your needs.",
    suggestions: ["Get a free quote", "What's included?", "Payment options?"]
  },
  {
    keywords: ["payment", "pay", "invoice", "installment"],
    answer: "We offer flexible payment options:\n\n💳 **Bank Transfer** - Local and international\n💵 **Cash Payment** - At our office\n📅 **Payment Plans** - Split into milestones (50% upfront, 50% on delivery)\n🔄 **Monthly Retainers** - For ongoing services\n\nWe'll find a payment structure that works for you!",
    suggestions: ["Start a project", "Get a quote", "Contact sales"]
  },
  
  // Timeline
  {
    keywords: ["time", "long", "duration", "deadline", "delivery", "when", "how fast", "timeline"],
    answer: "Typical project timelines:\n\n⏱️ **Basic Website**: 2-4 weeks\n⏱️ **E-commerce Site**: 4-8 weeks\n⏱️ **Branding Package**: 2-3 weeks\n⏱️ **Mobile App**: 8-16 weeks\n⏱️ **Logo Design**: 1-2 weeks\n\nTimelines vary based on complexity. We always agree on deadlines before starting!",
    suggestions: ["Rush delivery available?", "Start a project", "Current availability?"]
  },
  
  // Location & Contact
  {
    keywords: ["location", "where", "office", "address", "visit", "meet"],
    answer: "📍 We're located in **Tunis, Tunisia**\n\nWhile we're based in Tunisia, we work with clients globally! We offer:\n\n🖥️ Video calls (Zoom, Google Meet)\n📧 Email communication\n💬 WhatsApp/phone support\n🤝 In-person meetings in Tunis\n\nDistance is never a barrier to great collaboration!",
    suggestions: ["Schedule a meeting", "Contact information", "Working hours"]
  },
  {
    keywords: ["contact", "email", "phone", "reach", "call", "talk"],
    answer: "Here's how to reach us:\n\n📧 **Email**: contact@4mediagency.tn\n📱 **Phone**: +216 XX XXX XXX\n💬 **WhatsApp**: Click the green button!\n🌐 **Website**: www.4mediagency.tn\n\nWe typically respond within 24 hours!",
    suggestions: ["Send an email", "Schedule a call", "WhatsApp us"]
  },
  {
    keywords: ["hour", "available", "open", "working"],
    answer: "Our working hours:\n\n🕘 **Monday - Friday**: 9:00 AM - 6:00 PM (Tunisia Time)\n🕘 **Saturday**: 9:00 AM - 1:00 PM\n🚫 **Sunday**: Closed\n\nWe monitor messages outside hours for urgent matters!",
    suggestions: ["Contact us now", "Schedule a meeting", "Send a message"]
  },
  
  // About
  {
    keywords: ["about", "who", "company", "team", "4media", "agency"],
    answer: "**4mediagency** is a premium digital agency based in Tunisia! 🇹🇳\n\n🏆 5+ years of experience\n👥 Team of 10+ experts\n🌍 50+ clients served\n⭐ 98% client satisfaction\n\nWe blend creativity, technology, and strategy to help businesses thrive in the digital world!",
    suggestions: ["Meet the team", "See our portfolio", "Our values"]
  },
  {
    keywords: ["portfolio", "example", "work", "project", "case stud", "showcase"],
    answer: "Check out our portfolio to see our best work! 🎨\n\nWe've worked with:\n• E-commerce brands\n• Tech startups\n• Restaurants & hospitality\n• Real estate companies\n• Healthcare providers\n\n👉 Visit our Portfolio page to see detailed case studies!",
    suggestions: ["View portfolio", "Client testimonials", "Industries we serve"]
  },
  {
    keywords: ["testimonial", "review", "client", "feedback", "rating"],
    answer: "Here's what our clients say:\n\n⭐⭐⭐⭐⭐\n\"4media transformed our digital presence. The ROI has been incredible!\" - TechCorp CEO\n\n⭐⭐⭐⭐⭐\n\"Professional, creative, and truly understand the market.\" - Marketing Director\n\n⭐⭐⭐⭐⭐\n\"Delivered beyond our expectations!\" - Startup Founder",
    suggestions: ["Start your project", "Get a free consultation", "Contact us"]
  },
  
  // Process
  {
    keywords: ["process", "start", "begin", "how to", "step", "procedure", "work with"],
    answer: "Our simple 5-step process:\n\n1️⃣ **Discovery** - We learn about your business & goals\n2️⃣ **Strategy** - We create a tailored plan\n3️⃣ **Design** - We craft beautiful visuals\n4️⃣ **Development** - We build your solution\n5️⃣ **Launch** - We deploy & support you\n\nReady to start? Let's schedule a free consultation!",
    suggestions: ["Book a consultation", "Get started", "What do I need to prepare?"]
  },
  {
    keywords: ["consultation", "meeting", "discuss", "free"],
    answer: "Yes! We offer a **FREE 30-minute consultation** to:\n\n✅ Understand your needs\n✅ Discuss your goals\n✅ Propose solutions\n✅ Provide a quote\n\nNo obligations - just a friendly chat about your project!",
    suggestions: ["Book consultation now", "Contact information", "What to prepare"]
  },
  
  // Technical
  {
    keywords: ["technolog", "stack", "framework", "language", "tool"],
    answer: "We use modern technologies:\n\n**Frontend**: React, Next.js, Vue.js, Tailwind CSS\n**Backend**: Node.js, Python, PHP\n**Mobile**: React Native, Flutter, Swift, Kotlin\n**CMS**: WordPress, Strapi, Sanity\n**Cloud**: AWS, Vercel, Google Cloud\n\nWe choose the best tech for your specific needs!",
    suggestions: ["Which tech for my project?", "See our portfolio", "Technical consultation"]
  },
  {
    keywords: ["host", "domain", "server", "maintain"],
    answer: "We offer complete hosting solutions:\n\n🌐 **Domain Registration** - We help secure your domain\n☁️ **Web Hosting** - Fast, secure servers\n🔄 **Maintenance** - Updates, backups, monitoring\n🔒 **SSL Certificates** - Free HTTPS security\n📊 **Analytics Setup** - Track your performance\n\nPackages start at 50 TND/month!",
    suggestions: ["Hosting pricing", "Maintenance plans", "Domain help"]
  },
  
  // Support
  {
    keywords: ["support", "help", "issue", "problem", "bug", "fix"],
    answer: "We provide ongoing support:\n\n🆘 **Technical Support** - Bug fixes, troubleshooting\n📞 **Priority Response** - Within 24 hours\n🔄 **Regular Updates** - Security & feature updates\n📚 **Training** - Learn to manage your site\n\nSupport plans start at 200 TND/month!",
    suggestions: ["Support plans", "Report an issue", "Training options"]
  },
  
  // Languages
  {
    keywords: ["language", "english", "french", "arabic", "speak"],
    answer: "Our team speaks multiple languages:\n\n🇬🇧 **English** - Fluent\n🇫🇷 **French** - Fluent\n🇹🇳 **Arabic** - Native\n\nWe communicate in whichever language you prefer!",
    suggestions: ["Contact in French", "Contact in Arabic", "Start a project"]
  },
  
  // Comparison/Competition
  {
    keywords: ["why", "different", "better", "choose", "vs", "competitor"],
    answer: "Why choose 4mediagency?\n\n✨ **Local Expertise** - We understand the Tunisian market\n💡 **Custom Solutions** - No templates, everything tailored\n🤝 **Personal Service** - Direct access to your team\n💰 **Fair Pricing** - Quality without breaking the bank\n🏆 **Proven Results** - 98% client satisfaction\n\nWe're not just vendors - we're your digital partners!",
    suggestions: ["See client results", "Book a call", "View portfolio"]
  },
  
  // Fallbacks
  {
    keywords: ["human", "agent", "person", "real", "speak to someone"],
    answer: "Of course! You can reach a human team member:\n\n📧 Email: contact@4mediagency.tn\n📱 WhatsApp: Click the green button\n📞 Phone: +216 XX XXX XXX\n\nOr fill out our contact form and we'll get back to you within 24 hours!",
    suggestions: ["Go to contact page", "WhatsApp us", "Send email"]
  },
  {
    keywords: ["bye", "goodbye", "later", "see you"],
    answer: "Goodbye! 👋 Thanks for chatting with us. Feel free to come back anytime you have questions. Have a great day! 🌟",
    suggestions: ["Start new conversation", "Contact us", "View services"]
  }
]

// Quick suggestion buttons for new conversations
const initialSuggestions = [
  "What services do you offer?",
  "How much does a website cost?",
  "Tell me about 4mediagency",
  "I want to start a project"
]

export function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: "1", 
      role: "bot", 
      content: "Hello! 👋 I'm the 4mediagency AI assistant. I can help you with information about our services, pricing, process, and more!\n\nWhat would you like to know?",
      suggestions: initialSuggestions
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const findBestMatch = (input: string): { answer: string; suggestions?: string[] } => {
    const lowerInput = input.toLowerCase()
    
    // Score each knowledge base entry
    let bestMatch = null
    let bestScore = 0
    
    for (const entry of knowledgeBase) {
      let score = 0
      for (const keyword of entry.keywords) {
        if (lowerInput.includes(keyword)) {
          // Longer keyword matches get higher scores
          score += keyword.length
        }
      }
      
      if (score > bestScore) {
        bestScore = score
        bestMatch = entry
      }
    }
    
    if (bestMatch && bestScore > 0) {
      return { answer: bestMatch.answer, suggestions: bestMatch.suggestions }
    }
    
    // Default response
    return {
      answer: "I'm not sure I understand that question. 🤔\n\nI can help you with:\n• Our services (web, branding, marketing)\n• Pricing and quotes\n• Our process and timeline\n• Contact information\n\nOr would you like to speak with a human agent?",
      suggestions: ["What services do you offer?", "Get a quote", "Contact human agent"]
    }
  }

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking delay (varies for realism)
    const thinkingTime = 800 + Math.random() * 700
    
    setTimeout(() => {
      const response = findBestMatch(messageText)
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: response.answer,
        suggestions: response.suggestions
      }])
      setIsTyping(false)
    }, thinkingTime)
  }

  const handleReset = () => {
    setMessages([
      { 
        id: "1", 
        role: "bot", 
        content: "Hello! 👋 I'm the 4mediagency AI assistant. I can help you with information about our services, pricing, process, and more!\n\nWhat would you like to know?",
        suggestions: initialSuggestions
      }
    ])
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`fixed bottom-6 right-6 z-40 ${isOpen ? 'pointer-events-none opacity-0' : ''}`}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-to-br from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
          1
        </span>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] md:w-[420px] h-[600px] bg-background border border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-blue-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold block">4media Assistant</span>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online • Typically replies instantly
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleReset} 
                  className="hover:bg-white/20 text-white h-8 w-8"
                  title="Start new conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)} 
                  className="hover:bg-white/20 text-white h-8 w-8"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900/30" 
              ref={scrollRef}
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index === messages.length - 1 ? 0.1 : 0 }}
                >
                  <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-2 shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-primary to-blue-600 text-white rounded-br-md"
                          : "bg-white dark:bg-slate-800 text-foreground shadow-sm border border-border/50 rounded-bl-md"
                      }`}
                    >
                      <div className="whitespace-pre-line">{msg.content}</div>
                    </div>
                  </div>
                  
                  {/* Suggestion buttons */}
                  {msg.role === "bot" && msg.suggestions && index === messages.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 ml-10 flex flex-wrap gap-2"
                    >
                      {msg.suggestions.map((suggestion, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(suggestion)}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-2 shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-md shadow-sm border border-border/50 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-background/95 backdrop-blur-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="rounded-full border-border/50 focus:border-primary"
                  disabled={isTyping}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="rounded-full shrink-0 bg-gradient-to-br from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90" 
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-[10px] text-center text-muted-foreground/60 mt-2">
                Powered by 4mediagency AI • Not a real person
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
