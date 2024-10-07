"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AstrologySubscriptionGrowth } from "@/components/astrology-subscription-growth"
import { UserInfoTable } from "@/components/user-info-table"
import {
  Moon,
  Sun,
  Menu,
  MessageCircle,
  User,
  CreditCard,
  LogOut,
  Send,
  MoveVertical,
  Check,
  X,
  FilePen,
  Trash,
  Orbit,
  PlusCircle,
  Users,
  DollarSign,
  BarChart,
  TrendingUp,
} from "lucide-react";

export default function AstroDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", plan: "Premium", createdAt: "2023-04-15" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", plan: "Basic", createdAt: "2023-03-01" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", plan: "Enterprise", createdAt: "2022-11-20" },
  ])
  const [newUser, setNewUser] = useState({ name: "", email: "", plan: "Basic", dateOfBirth: "", phoneNumber: "" })
  const { setTheme, theme } = useTheme()

  const handleCreateUser = (e) => {
    e.preventDefault()
    setUsers([
      ...users,
      {
        id: users.length + 1,
        ...newUser,
        createdAt: new Date().toISOString().slice(0, 10),
      },
    ])
    setNewUser({ name: "", email: "", plan: "Basic", dateOfBirth: "", phoneNumber: "" })
  }

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const handleEditUser = (id) => {
    const user = users.find((u) => u.id === id)
    setNewUser({
      name: user.name,
      email: user.email,
      plan: user.plan,
      dateOfBirth: user.dateOfBirth || "",
      phoneNumber: user.phoneNumber || "",
    })
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const NavLinks = () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Orbit className="h-6 w-6" onClick={window.href="../"} />
                    <div className="mb-2 mt-4 text-lg font-medium" onClick={window.href="../"} >
                      Astrologer Dashboard
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Manage your astrology business with ease
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Analytics" icon={<BarChart className="h-4 w-4" />}>
                View user growth and revenue
              </ListItem>
              <ListItem
                href="#"
                title="User Queries"
                icon={<MessageCircle className="h-4 w-4" />}>
                Respond to user questions
              </ListItem>
              <ListItem href="#" title="Live Chat" icon={<MessageCircle className="h-4 w-4" />}>
                Real-time communication with users
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#" title="Profile" icon={<User className="h-4 w-4" />}>
                Manage your personal information
              </ListItem>
              <ListItem href="#" title="Plans" icon={<CreditCard className="h-4 w-4" />}>
                View and edit subscription plans
              </ListItem>
              <ListItem href="#" title="Users" icon={<Users className="h-4 w-4" />}>
                Manage registered users
              </ListItem>
              <ListItem href="#" title="Billing" icon={<DollarSign className="h-4 w-4" />}>
                View and manage payments
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  return (
    (<div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div
          className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
              <Orbit className="h-6 w-6" />
              <span className="sr-only md:not-sr-only">Astrologer Dashboard</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="#" className="w-full"> Analytics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">User Queries</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Live Chat</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Price Plans</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Users</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <img
                    src="/LOGO.png"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="rounded-full" />
                </Button>
            
      
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 container px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <Tabs defaultValue="analytics">
          <TabsList className="mb-8">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="queries">User Queries</TabsTrigger>
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
            <TabsTrigger value="price-plans">Price Plans</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>
          <TabsContent value="analytics">
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>User Analytics</CardTitle>
                  <CardDescription>Overview of your user base and revenue.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-6">
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-2xl font-bold">1,234</CardTitle>
      <CardDescription className="flex items-center">
        <Users className="h-4 w-4 mr-1" />
        Total Registered Users
      </CardDescription>
    </CardHeader>
  </Card>
  <AstrologySubscriptionGrowth />
</div>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold">789</CardTitle>
                        <CardDescription className="flex items-center">
                          <Check className="h-4 w-4 mr-1" />
                          Total Subscribed Users
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold">456</CardTitle>
                        <CardDescription className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-1" />
                          Users with Active Plans
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="queries">
            <Card>
              <CardHeader>
                <CardTitle>User Queries</CardTitle>
                <CardDescription>View, reply, and remove user queries.</CardDescription>
              </CardHeader>
              <CardContent>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Query</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">John Doe</div>
                            <div className="text-sm text-muted-foreground">johndoe@example.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">Astrology Consultation</div>
                          <div className="text-sm text-muted-foreground">
                            I would like to schedule an astrology consultation.
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-muted-foreground">2023-04-15</div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoveVertical className="h-5 w-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Reply
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">
                              <Trash className="mr-2 h-4 w-4" />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <infoTable/>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="chat">
            <Card>
              <CardHeader>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Respond to user queries in real-time.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 rounded-lg bg-muted p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-muted-foreground">2:39 PM</div>
                        </div>
                        <div>
                          <p>Hi, I'm interested in getting an astrology reading. Can you help me with that?</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 rounded-lg bg-muted p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-xs text-muted-foreground">2:41 PM</div>
                        </div>
                        <div>
                          <p>I'm having trouble understanding my birth chart. Can you explain it to me?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form className="flex w-full gap-2">
                  <Input type="text" placeholder="Type your message..." className="flex-1" />
                  <Button type="submit">
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="price-plans">
            <Card>
              <CardHeader>
                <CardTitle>Price Plans</CardTitle>
                <CardDescription>Manage your price plans.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                      <CardDescription>$9.99/month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          10 Astrology Consultations
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          Basic Birth Chart Analysis
                        </li>
                        <li className="flex items-center">
                          <X className="mr-2 h-4 w-4 text-red-500" />
                          No Priority Support
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button size="sm">Edit</Button>
                      <Button size="sm" variant="destructive">
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                      <CardDescription>$19.99/month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          Unlimited Astrology Consultations
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          Advanced Birth Chart Analysis
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          Priority Support
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button size="sm">Edit</Button>
                      <Button size="sm" variant="destructive">
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold">Add New Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="plan-name">Plan Name</Label>
                          <Input id="plan-name" type="text" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="plan-price">Price</Label>
                          <Input id="plan-price" type="number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="plan-features">Features</Label>
                          <Textarea id="plan-features" rows={3} />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter>
                      <Button>Save New Plan</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>Manage your users and add new ones.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <UserInfoTable></UserInfoTable>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.plan}</TableCell>
                          <TableCell>{user.createdAt}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost">
                                  <MoveVertical className="h-5 w-5" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleEditUser(user.id)}>
                                  <FilePen className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-500" onClick={() => handleDeleteUser(user.id)}>
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

          <form onSubmit={handleCreateUser} className="space-y-4 bg-muted p-4 mt-6 rounded-lg w-fit">
                    <h3 className="text-lg font-semibold">Add New User</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={newUser.name}
                          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                          required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newUser.email}
                          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                          required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="plan">Plan</Label>
                        <Select
                          value={newUser.plan}
                          onValueChange={(value) => setNewUser({ ...newUser, plan: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a plan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Basic">Basic</SelectItem>
                            <SelectItem value="Premium">Premium</SelectItem>
                            <SelectItem value="Enterprise">Enterprise</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={newUser.dateOfBirth}
                          onChange={(e) => setNewUser({ ...newUser, dateOfBirth: e.target.value })}
                          required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          value={newUser.phoneNumber}
                          onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
                          required />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add User
                    </Button>
                  </form>
              </CardContent>
            </Card>
            
          </TabsContent>

          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Track your earnings and financial performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold">$12,345</CardTitle>
                      <CardDescription className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Total Revenue
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold">$1,234</CardTitle>
                      <CardDescription className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        Monthly Revenue
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold">789</CardTitle>
                      <CardDescription className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-1" />
                        Active Subscriptions
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2023-05-01</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>Premium</TableCell>
                        <TableCell>$19.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-04-30</TableCell>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>Basic</TableCell>
                        <TableCell>$9.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-04-29</TableCell>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>Enterprise</TableCell>
                        <TableCell>$49.99</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>)
  );
}

function ListItem({ className, title, children, icon, ...props }) {
  return (
    (<li>
      <NavigationMenuLink asChild>
        <a
          className={(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>)
  );
}