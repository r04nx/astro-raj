"use client"

import { Separator } from "@/components/ui/separator"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Menu, 
  MessageCircle, 
  User, 
  CreditCard, 
  Info, 
  LogOut, 
  Send, 
  Orbit,
  Clock, 
  MapPin, 
  Briefcase, 
  Phone, 
  Mail, 
  Lock,
  Sun,
  Moon,
  Calendar,
  BookOpen,
  Users
} from "lucide-react"

export  default function ResponsiveDashboard() {
  const [activeTab, setActiveTab] = useState("ask-query")
  const [name, setName] = useState("John Doe")
  const [middleName, setMiddleName] = useState("Doe")
  const [lastName, setLastName] = useState("Doe")
  const [age, setAge] = useState(35)
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 555-5555")
  const [dateOfBirth, setDateOfBirth] = useState("1988-05-15")
  const [timeOfBirth, setTimeOfBirth] = useState("10:30 AM")
  const [placeOfBirth, setPlaceOfBirth] = useState("New York, USA")
  const [caste, setCaste] = useState("Brahmin")
  const [latestQualification, setLatestQualification] = useState("Master's Degree")
  const [mothersName, setMothersName] = useState("Jane Doe")
  const [fathersName, setFathersName] = useState("John Doe")
  const [address, setAddress] = useState("123 Main St, Anytown USA")
  const [email, setEmail] = useState("john.doe@example.com")
  const [password, setPassword] = useState("********")
  const [horoscope, setHoroscope] = useState("Aries")
  const [profilePicture, setProfilePicture] = useState("Profile Picture")
  const [signature, setSignature] = useState("Signature")
  const [messages, setMessages] = useState([
    { id: 1, sender: "Astrologer", content: "Hello! How can I assist you today?" },
    { id: 2, sender: "You", content: "Hi, I have a question about my career path." },
  ])
  const [newMessage, setNewMessage] = useState("")
  const chatEndRef = useRef(null)
  const { setTheme, theme } = useTheme()

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const sendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages(
        [...messages, { id: messages.length + 1, sender: "You", content: newMessage }]
      )
      setNewMessage("")
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const NavLinks = () => (
    <>
  

      <Link
        href="#"
        className={`flex items-center gap-2 hover:text-primary-foreground/80 ${
          activeTab === "ask-query" ? "text-primary-foreground" : ""
        }`}
        onClick={() => handleTabClick("ask-query")}
        prefetch={false}>
        <MessageCircle className="h-4 w-4" />
        Ask Query
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-2 hover:text-primary-foreground/80 ${
          activeTab === "live-chat" ? "text-primary-foreground" : ""
        }`}
        onClick={() => handleTabClick("live-chat")}
        prefetch={false}>
        <MessageCircle className="h-4 w-4" />
        Live Chat
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-2 hover:text-primary-foreground/80 ${
          activeTab === "my-profile" ? "text-primary-foreground" : ""
        }`}
        onClick={() => handleTabClick("my-profile")}
        prefetch={false}>
        <User className="h-4 w-4" />
        Profile
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-2 hover:text-primary-foreground/80 ${
          activeTab === "my-subscription" ? "text-primary-foreground" : ""
        }`}
        onClick={() => handleTabClick("my-subscription")}
        prefetch={false}>
        <CreditCard className="h-4 w-4" />
        Subscription
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-2 hover:text-primary-foreground/80 ${
          activeTab === "about-astrologer" ? "text-primary-foreground" : ""
        }`}
        onClick={() => handleTabClick("about-astrologer")}
        prefetch={false}>
        <Info className="h-4 w-4" />
        About Astrologer
      </Link>
      <Button
        variant="ghost"
        className="text-primary-secondary hover:text-primary-secondary/80 flex items-center gap-2">
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
    </>
  )

  return (
    (<div className="flex min-h-screen flex-col bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
          <Orbit className="h-6 w-6 mx-auto" />
            <h1 className="text-xl font-bold">Astrology by Raj Jani</h1>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <NavLinks />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {activeTab === "ask-query" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ask Your Query</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Label htmlFor="query">Your Query</Label>
                    <Textarea
                      id="query"
                      rows={6}
                      required
                      className="w-full"
                      placeholder="Type your question here..." />
                  </div>
                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Query
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Past Queries</h3>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-md">
                    <p className="font-semibold">What is my future career path?</p>
                    <p className="text-muted-foreground mt-2">
                      Based on your astrological chart, it seems you have a strong inclination towards the field of
                      technology. Your analytical skills and problem-solving abilities will serve you well in a career
                      as a software engineer or data analyst.
                    </p>
                  </div>
                  <Separator />
                  <div className="bg-card p-4 rounded-md">
                    <p className="font-semibold">How can I improve my relationships?</p>
                    <p className="text-muted-foreground mt-2">
                      Your chart indicates that you may have some challenges in your personal relationships. I would
                      suggest focusing on improving your communication skills, being more empathetic, and making time
                      for your loved ones. This will help strengthen your bonds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "live-chat" && (
            <div className="h-[calc(100vh-12rem)] flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Live Chat</h2>
              <div
                className="flex-1 bg-card rounded-md p-4 mb-4 overflow-hidden flex flex-col">
                <ScrollArea className="flex-1">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "You" ? "justify-end" : "justify-start"
                      } mb-4`}>
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.sender === "You"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        }`}>
                        <p className="font-semibold">{message.sender}</p>
                        <p>{message.content}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </ScrollArea>
              </div>
              <form onSubmit={sendMessage} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1" />
                <Button type="submit">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          )}
          {activeTab === "my-profile" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">My Profile</h2>
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    First Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="middleName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Middle Name
                  </Label>
                  <Input
                    id="middleName"
                    type="text"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="lastName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="age" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date of Birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="timeOfBirth" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Time of Birth
                  </Label>
                  <Input
                    id="timeOfBirth"
                    type="time"
                    value={timeOfBirth}
                    onChange={(e) => setTimeOfBirth(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="placeOfBirth" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Place of Birth
                  </Label>
                  <Input
                    id="placeOfBirth"
                    type="text"
                    value={placeOfBirth}
                    onChange={(e) => setPlaceOfBirth(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="caste" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Caste
                  </Label>
                  <Input
                    id="caste"
                    type="text"
                    value={caste}
                    onChange={(e) => setCaste(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="latestQualification" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Latest Qualification
                  </Label>
                  <Input
                    id="latestQualification"
                    type="text"
                    value={latestQualification}
                    onChange={(e) => setLatestQualification(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="mothersName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Mother's Name
                  </Label>
                  <Input
                    id="mothersName"
                    type="text"
                    value={mothersName}
                    onChange={(e) => setMothersName(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="fathersName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Father's Name
                  </Label>
                  <Input
                    id="fathersName"
                    type="text"
                    value={fathersName}
                    onChange={(e) => setFathersName(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                <div>
                  <Label htmlFor="horoscope" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Horoscope
                  </Label>
                  <Input
                    id="horoscope"
                    type="text"
                    value={horoscope}
                    onChange={(e) => setHoroscope(e.target.value)}
                    required />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full">Update Profile</Button>
                </div>
              </form>
            </div>
          )}
          {activeTab === "my-subscription" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">My Subscription</h2>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <CreditCard className="h-5 w-5" />
                    Current Subscription
                  </h3>
                  <p className="text-muted-foreground mb-2">Premium Plan</p>
                  <p className="text-muted-foreground mb-4">Expires on: October 31, 2023</p>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Renew Subscription
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Payment History</h3>
                <div className="bg-card p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Premium Plan</p>
                        <p className="text-sm text-muted-foreground">Sep 1, 2023</p>
                      </div>
                      <p className="font-semibold">$9.99</p>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Premium Plan</p>
                        <p className="text-sm text-muted-foreground">Aug 1, 2023</p>
                      </div>
                      <p className="font-semibold">$9.99</p>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Premium Plan</p>
                        <p className="text-sm text-muted-foreground">Jul 1, 2023</p>
                      </div>
                      <p className="font-semibold">$9.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "about-astrologer" && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">About Our Astrologers</h2>
              <div className="space-y-8">
                <div className="bg-card p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">John Doe</h3>
                      <p className="text-muted-foreground">Senior Astrologer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    John Doe is a highly experienced astrologer with over 15 years of expertise in the field. He has
                    helped countless clients gain clarity and direction in their lives through his insightful astrological
                    readings. Specializing in Vedic astrology, John combines traditional wisdom with modern interpretations
                    to provide accurate and actionable guidance.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Jane Smith</h3>
                      <p className="text-muted-foreground">Relationship Specialist</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Jane Smith is our relationship and compatibility expert. With a background in psychology and 10 years
                    of astrological practice, Jane provides deep insights into interpersonal dynamics. Her readings focus
                    on helping clients navigate their relationships and find harmony in their personal lives.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>)
  );
}