
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { JSX, SVGProps } from "react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link href="#" className="mr-6 flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Astrologer</span>
        </Link>
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" className="font-bold" prefetch={false}>
            Astrologer
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            User Login
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                  Unlock the Secrets of the Stars with Our Astrologer Website
                </h1>
                <p className="max-w-[600px] text-primary-foreground md:text-xl">
                  Discover your destiny, explore your future, and connect with our expert astrologers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Pricing
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                Discover Your Future with Our Astrologer Website
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our astrologer website offers a wide range of features to help you unlock the secrets of the stars and
                gain insights into your future.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Personalized Horoscopes</h3>
                    <p className="text-muted-foreground">
                      Get detailed, personalized horoscopes tailored to your unique astrological profile.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Astrology Readings</h3>
                    <p className="text-muted-foreground">
                      Connect with our expert astrologers for in-depth readings and insights into your life.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Compatibility Analysis</h3>
                    <p className="text-muted-foreground">
                      Explore your compatibility with friends, family, and romantic partners using our advanced
                      astrological tools.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                Affordable Plans for Every Need
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best fits your astrological needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="bg-muted p-6 rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Personalized Horoscopes
                  </li>
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Basic Astrology Readings
                  </li>
                  <li>
                    <XIcon className="mr-2 h-5 w-5 text-red-500" />
                    Compatibility Analysis
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-muted p-6 rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Personalized Horoscopes
                  </li>
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    In-Depth Astrology Readings
                  </li>
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Compatibility Analysis
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-muted p-6 rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Personalized Horoscopes
                  </li>
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Comprehensive Astrology Readings
                  </li>
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Advanced Compatibility Analysis
                  </li>
                  <li>
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    Priority Support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or want to learn more? Fill out the form below and we'll get back to you.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-2xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}