"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, Sparkles, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/i18n/LanguageProvider"

type Message = {
  id: string
  role: "user" | "bot"
  content: string
  suggestions?: string[]
}

export function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale } = useLanguage()
  const isRTL = locale === "ar"
  
  // Build knowledge base dynamically based on current language
  const knowledgeBase = useMemo(() => [
    // Greetings
    {
      keywords: ["hello", "hi", "hey", "bonjour", "salut", "good morning", "good afternoon", "good evening", "مرحبا", "أهلا", "السلام عليكم"],
      answer: t("chatbot.answers.greeting"),
      suggestions: [t("chatbot.suggestions.services"), t("chatbot.suggestions.pricing"), t("chatbot.suggestions.team")]
    },
    {
      keywords: ["thanks", "thank you", "merci", "appreciate", "helpful", "شكرا", "شكراً"],
      answer: t("chatbot.answers.thanks"),
      suggestions: [t("chatbot.suggestions.another_question"), t("chatbot.suggestions.contact_human"), t("chatbot.suggestions.no_thanks")]
    },
    
    // Services
    {
      keywords: ["service", "offer", "do", "provide", "work", "help with", "خدم", "تقدم", "عمل"],
      answer: t("chatbot.answers.services"),
      suggestions: [t("chatbot.suggestions.web_dev"), t("chatbot.suggestions.branding"), t("chatbot.suggestions.marketing")]
    },
    {
      keywords: ["web", "website", "site", "develop", "create website", "build website", "موقع", "ويب", "تطوير"],
      answer: t("chatbot.answers.web"),
      suggestions: [t("chatbot.suggestions.pricing"), t("chatbot.suggestions.rush"), t("chatbot.suggestions.portfolio")]
    },
    {
      keywords: ["brand", "logo", "identity", "visual", "design logo", "شعار", "هوية", "علامة تجارية"],
      answer: t("chatbot.answers.brand"),
      suggestions: [t("chatbot.suggestions.pricing"), t("chatbot.suggestions.rush"), t("chatbot.suggestions.portfolio")]
    },
    {
      keywords: ["marketing", "seo", "social media", "advertis", "promote", "digital marketing", "تسويق", "إعلان"],
      answer: t("chatbot.answers.marketing"),
      suggestions: [t("chatbot.suggestions.pricing"), t("chatbot.suggestions.consultation"), t("chatbot.suggestions.portfolio")]
    },
    {
      keywords: ["app", "mobile", "ios", "android", "application", "تطبيق", "جوال", "موبايل"],
      answer: t("chatbot.answers.app"),
      suggestions: [t("chatbot.suggestions.pricing"), t("chatbot.suggestions.rush"), t("chatbot.suggestions.portfolio")]
    },
    
    // Pricing
    {
      keywords: ["price", "cost", "pricing", "quote", "budget", "how much", "tarif", "devis", "expensive", "cheap", "affordable", "سعر", "تكلفة", "كم"],
      answer: t("chatbot.answers.pricing"),
      suggestions: [t("chatbot.suggestions.quote"), t("chatbot.suggestions.included"), t("chatbot.suggestions.payment")]
    },
    {
      keywords: ["payment", "pay", "invoice", "installment", "دفع", "فاتورة"],
      answer: t("chatbot.answers.payment"),
      suggestions: [t("chatbot.suggestions.project"), t("chatbot.suggestions.quote"), t("chatbot.suggestions.contact_info")]
    },
    
    // Timeline
    {
      keywords: ["time", "long", "duration", "deadline", "delivery", "when", "how fast", "timeline", "وقت", "مدة", "متى"],
      answer: t("chatbot.answers.timeline"),
      suggestions: [t("chatbot.suggestions.rush"), t("chatbot.suggestions.project"), t("chatbot.suggestions.availability")]
    },
    
    // Location & Contact
    {
      keywords: ["location", "where", "office", "address", "visit", "meet", "موقع", "أين", "مكتب", "عنوان"],
      answer: t("chatbot.answers.location"),
      suggestions: [t("chatbot.suggestions.schedule"), t("chatbot.suggestions.contact_info"), t("chatbot.suggestions.hours")]
    },
    {
      keywords: ["contact", "email", "phone", "reach", "call", "talk", "اتصال", "بريد", "هاتف", "تواصل"],
      answer: t("chatbot.answers.contact"),
      suggestions: [t("chatbot.suggestions.email"), t("chatbot.suggestions.schedule"), t("chatbot.suggestions.whatsapp")]
    },
    {
      keywords: ["hour", "available", "open", "working", "ساعات", "متاح", "مفتوح"],
      answer: t("chatbot.answers.hours"),
      suggestions: [t("chatbot.suggestions.contact_info"), t("chatbot.suggestions.schedule"), t("chatbot.suggestions.email")]
    },
    
    // About
    {
      keywords: ["about", "who", "company", "team", "4media", "agency", "عن", "من", "شركة", "فريق", "وكالة"],
      answer: t("chatbot.answers.about"),
      suggestions: [t("chatbot.suggestions.team"), t("chatbot.suggestions.portfolio"), t("chatbot.suggestions.values")]
    },
    {
      keywords: ["portfolio", "example", "work", "project", "case stud", "showcase", "أعمال", "مشاريع", "محفظة"],
      answer: t("chatbot.answers.portfolio"),
      suggestions: [t("chatbot.suggestions.portfolio"), t("chatbot.suggestions.testimonials"), t("chatbot.suggestions.industries")]
    },
    {
      keywords: ["testimonial", "review", "client", "feedback", "rating", "آراء", "تقييم", "عملاء"],
      answer: t("chatbot.answers.testimonials"),
      suggestions: [t("chatbot.suggestions.project"), t("chatbot.suggestions.consultation"), t("chatbot.suggestions.contact_info")]
    },
    
    // Process
    {
      keywords: ["process", "start", "begin", "how to", "step", "procedure", "work with", "عملية", "بدء", "خطوات", "كيف"],
      answer: t("chatbot.answers.process"),
      suggestions: [t("chatbot.suggestions.consultation"), t("chatbot.suggestions.start"), t("chatbot.suggestions.prepare")]
    },
    {
      keywords: ["consultation", "meeting", "discuss", "free", "استشارة", "اجتماع", "مجاني"],
      answer: t("chatbot.answers.consultation"),
      suggestions: [t("chatbot.suggestions.consultation"), t("chatbot.suggestions.contact_info"), t("chatbot.suggestions.prepare")]
    },
    
    // Technical
    {
      keywords: ["technolog", "stack", "framework", "language", "tool", "تقنية", "أدوات"],
      answer: t("chatbot.answers.tech"),
      suggestions: [t("chatbot.suggestions.tech"), t("chatbot.suggestions.portfolio"), t("chatbot.suggestions.consultation")]
    },
    {
      keywords: ["host", "domain", "server", "maintain", "استضافة", "نطاق", "سيرفر"],
      answer: t("chatbot.answers.hosting"),
      suggestions: [t("chatbot.suggestions.hosting"), t("chatbot.suggestions.maintenance"), t("chatbot.suggestions.domain")]
    },
    
    // Support
    {
      keywords: ["support", "help", "issue", "problem", "bug", "fix", "دعم", "مساعدة", "مشكلة"],
      answer: t("chatbot.answers.support"),
      suggestions: [t("chatbot.suggestions.support_plans"), t("chatbot.suggestions.report_issue"), t("chatbot.suggestions.training")]
    },
    
    // Languages
    {
      keywords: ["language", "english", "french", "arabic", "speak", "لغة", "إنجليزي", "فرنسي", "عربي"],
      answer: t("chatbot.answers.languages"),
      suggestions: [t("chatbot.suggestions.french"), t("chatbot.suggestions.arabic"), t("chatbot.suggestions.project")]
    },
    
    // Comparison/Competition
    {
      keywords: ["why", "different", "better", "choose", "vs", "competitor", "لماذا", "أفضل", "مختلف"],
      answer: t("chatbot.answers.why_us"),
      suggestions: [t("chatbot.suggestions.results"), t("chatbot.suggestions.call"), t("chatbot.suggestions.portfolio")]
    },
    
    // Fallbacks
    {
      keywords: ["human", "agent", "person", "real", "speak to someone", "موظف", "شخص", "حقيقي"],
      answer: t("chatbot.answers.human"),
      suggestions: [t("chatbot.suggestions.contact_page"), t("chatbot.suggestions.whatsapp"), t("chatbot.suggestions.email")]
    },
    {
      keywords: ["bye", "goodbye", "later", "see you", "مع السلامة", "وداعا"],
      answer: t("chatbot.answers.bye"),
      suggestions: [t("chatbot.suggestions.new_conversation"), t("chatbot.suggestions.contact_info"), t("chatbot.suggestions.view_services")]
    }
  ], [t])

  const initialSuggestions = useMemo(() => [
    t("chatbot.suggestions.services"),
    t("chatbot.suggestions.pricing"),
    t("chatbot.suggestions.about"),
    t("chatbot.suggestions.project")
  ], [t])

  const getInitialMessage = (): Message => ({
    id: "1",
    role: "bot",
    content: t("chatbot.welcome"),
    suggestions: initialSuggestions
  })

  const [messages, setMessages] = useState<Message[]>([getInitialMessage()])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Update initial message when language changes
  useEffect(() => {
    setMessages([getInitialMessage()])
  }, [locale])

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
        if (lowerInput.includes(keyword.toLowerCase())) {
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
      answer: t("chatbot.answers.fallback"),
      suggestions: [t("chatbot.suggestions.services"), t("chatbot.suggestions.quote"), t("chatbot.suggestions.contact_human")]
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
    setMessages([getInitialMessage()])
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
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-blue-600 text-white flex justify-between items-center">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <span className="font-bold block">4media Assistant</span>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {t("chatbot.online_status")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleReset} 
                  className="hover:bg-white/20 text-white h-8 w-8"
                  title={t("chatbot.suggestions.new_conversation")}
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
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center ${isRTL ? 'ml-2' : 'mr-2'} shrink-0`}>
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? `bg-gradient-to-br from-primary to-blue-600 text-white ${isRTL ? 'rounded-bl-md' : 'rounded-br-md'}`
                          : `bg-white dark:bg-slate-800 text-foreground shadow-sm border border-border/50 ${isRTL ? 'rounded-br-md' : 'rounded-bl-md'}`
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
                      className={`mt-3 ${isRTL ? 'mr-10' : 'ml-10'} flex flex-wrap gap-2`}
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
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center ${isRTL ? 'ml-2' : 'mr-2'} shrink-0`}>
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className={`bg-white dark:bg-slate-800 p-4 rounded-2xl ${isRTL ? 'rounded-br-md' : 'rounded-bl-md'} shadow-sm border border-border/50 flex items-center gap-1.5`}>
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
                  placeholder={t("chatbot.placeholder")}
                  className="rounded-full border-border/50 focus:border-primary"
                  disabled={isTyping}
                  dir={isRTL ? "rtl" : "ltr"}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="rounded-full shrink-0 bg-gradient-to-br from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90" 
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </form>
              <p className="text-[10px] text-center text-muted-foreground/60 mt-2">
                {t("chatbot.powered_by")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
