"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import confetti from "canvas-confetti"
import { useLanguage } from "@/i18n/LanguageProvider"

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

export default function ContactPage() {
  const { t } = useLanguage()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Fire Confetti
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#0EA5E9', '#F97316']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#0EA5E9', '#F97316']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    
    toast.success(t("contact.toast_success_title"), {
      description: t("contact.toast_success_desc"),
      action: {
        label: t("contact.toast_cancel"),
        onClick: () => console.log("Annuler"),
      },
    })
    form.reset()
  }

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <Toaster />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="container px-4 md:px-6 mb-16 text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t("contact.hero_title")}
          </span>
        </motion.h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("contact.hero_subtitle")}
        </p>
      </section>

      <section className="container px-4 md:px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm p-8">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-8">
                  {t("contact.form_title")}
                </h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel className="text-base">
                            {t("contact.fields.name_label")}
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.fields.name_placeholder")} 
                              {...field} 
                              className="h-12 bg-background/50 border-slate-200 dark:border-slate-800 focus:border-primary transition-all" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">
                            {t("contact.fields.email_label")}
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.fields.email_placeholder")} 
                              {...field} 
                              className="h-12 bg-background/50 border-slate-200 dark:border-slate-800 focus:border-primary transition-all" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">
                            {t("contact.fields.subject_label")}
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.fields.subject_placeholder")} 
                              {...field} 
                              className="h-12 bg-background/50 border-slate-200 dark:border-slate-800 focus:border-primary transition-all" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">
                            {t("contact.fields.message_label")}
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t("contact.fields.message_placeholder")} 
                              className="min-h-[150px] bg-background/50 border-slate-200 dark:border-slate-800 focus:border-primary transition-all resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg py-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <Loader2 className="h-6 w-6 animate-spin" />
                      ) : (
                        <>
                          {t("contact.submit")}{" "}
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg bg-slate-50/50 dark:bg-slate-900/50 hover:bg-primary/5 transition-colors cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {t("contact.cards.phone_title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.cards.phone_value")}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-slate-50/50 dark:bg-slate-900/50 hover:bg-secondary/5 transition-colors cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {t("contact.cards.email_title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.cards.email_value")}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-slate-50/50 dark:bg-slate-900/50 md:col-span-2 hover:bg-blue-500/5 transition-colors cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {t("contact.cards.hq_title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.cards.hq_value")}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Response Time Badge */}
            <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-2xl flex items-center justify-between shadow-xl border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full animate-pulse">
                  <Clock className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {t("contact.response_badge_title")}
                  </h4>
                  <p className="text-slate-400">
                    {t("contact.response_badge_desc")}
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ Preview */}
             <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b-slate-200 dark:border-b-slate-800">
                  <AccordionTrigger className="text-lg hover:text-primary">
                    {t("contact.faq_preview.q1_title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t("contact.faq_preview.q1_answer")}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-slate-200 dark:border-b-slate-800">
                  <AccordionTrigger className="text-lg hover:text-primary">
                    {t("contact.faq_preview.q2_title")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t("contact.faq_preview.q2_answer")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
