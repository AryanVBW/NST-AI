import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Terminal, Rocket, Cpu, BookOpen, Settings, AlertTriangle, Video, Home, Code, Brain, Users, Lightbulb, Github, Linkedin, Instagram } from 'lucide-react';

const DocSite = () => {
  const [activeTab, setActiveTab] = useState('home');

  const CodeBlock = ({ children }) => (
    <div className="bg-slate-900 text-slate-50 rounded-md p-4 my-2 font-mono text-sm overflow-x-auto">
      {children}
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="flex items-start gap-3 p-4 border rounded-lg">
      <Icon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  const UpcomingFeatureCard = ({ number, title, description }) => (
    <div className="relative border rounded-lg p-4">
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
        {number}
      </div>
      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Cpu className="w-8 h-8 text-blue-500" />
            <div>
              <CardTitle className="text-2xl">NST AI</CardTitle>
              <CardDescription>Your Personal Study Companion</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Welcome to <strong>NST AI</strong> – your AI-powered study buddy designed specifically for Newton School of Technologies! Get started with offline AI-powered learning using Mistral 7b LLM and Nomic Embed Text.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-500">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-blue-500">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/yourusername" className="text-gray-600 hover:text-blue-500">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 gap-4">
          <TabsTrigger value="home">
            <Home className="w-4 h-4 mr-2" /> Overview
          </TabsTrigger>
          <TabsTrigger value="features">
            <Rocket className="w-4 h-4 mr-2" /> Features
          </TabsTrigger>
          <TabsTrigger value="installation">
            <Settings className="w-4 h-4 mr-2" /> Installation
          </TabsTrigger>
          <TabsTrigger value="troubleshooting">
            <AlertTriangle className="w-4 h-4 mr-2" /> Help
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>🐍 Python 3.11 (<a href="#" className="text-blue-500 hover:underline">Download here</a>)</li>
                <li>🍺 Homebrew (<a href="#" className="text-blue-500 hover:underline">Install Homebrew</a>)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Current Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard
                  icon={Terminal}
                  title="Ask AI Anything"
                  description="Get instant answers to questions about your lectures and notes."
                />
                <FeatureCard
                  icon={Code}
                  title="Instant Code Execution"
                  description="Write, test, and run code directly in NST-AI chat. One click, instant results!"
                />
                <FeatureCard
                  icon={BookOpen}
                  title="Smart Interview Insights"
                  description="Get resume-based questions, real-time feedback, and improvement tips."
                />
                <FeatureCard
                  icon={Cpu}
                  title="Offline Capability"
                  description="Study without interruptions; NST AI functions even without internet."
                />
                <FeatureCard
                  icon={Users}
                  title="Student-Centric Design"
                  description="Developed by students, ensuring it meets their unique study needs efficiently."
                />
                <FeatureCard
                  icon={Brain}
                  title="AI-Enhanced Learning"
                  description="Leverage advanced AI to improve your study experience."
                />
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Exciting Upcoming Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UpcomingFeatureCard
                    number="1"
                    title="Subject-Specific Sections"
                    description="Tailored study spaces for Software & Web, PSP, Math, and more!"
                  />
                  <UpcomingFeatureCard
                    number="2"
                    title="Flowcharts and Memory Notes"
                    description="Create visual flowcharts and memory notes to break down complex ideas."
                  />
                  <UpcomingFeatureCard
                    number="3"
                    title="Offline Optimization"
                    description="Experience seamless, offline AI with system-optimized SLM and 1-bit LLM technology."
                  />
                  <UpcomingFeatureCard
                    number="4"
                    title="Advanced Interview Analysis"
                    description="Facial recognition and emotion detection for deeper interview insights and confidence monitoring."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="installation">
          <Card>
            <CardHeader>
              <CardTitle>Installation Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Step 1: Update Pip</h3>
                <CodeBlock>pip install pip --upgrade</CodeBlock>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 2: Install Poetry</h3>
                <CodeBlock>
                  pip install poetry{'\n'}
                  poetry --version
                </CodeBlock>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 3: Install Ollama.ai</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Visit Ollama's official website and download the macOS version</li>
                  <li>After downloading, unzip the file and move Ollama to Applications</li>
                  <li>Quit Ollama from the taskbar</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 4: Download LLM Models</h3>
                <CodeBlock>
                  ollama pull mistral{'\n'}
                  ollama pull nomic-embed-text
                </CodeBlock>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 5: Start Ollama Service</h3>
                <CodeBlock>ollama serve</CodeBlock>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 6: Install Dependencies</h3>
                <CodeBlock>
                  poetry install --extras "ui llms-ollama embeddings-ollama vector-stores-qdrant"
                </CodeBlock>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 7: Run NST AI</h3>
                <CodeBlock>PGPT_PROFILES=ollama make run</CodeBlock>
                <p className="text-gray-600 mt-2">
                  Access NST AI in your browser at http://localhost:8001
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="troubleshooting">
          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting & Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertTriangle className="w-4 h-4" />
                <AlertDescription>
                  If you see "Error: listen tcp 127.0.0.1:11434: bind: address already in use", 
                  Ollama is already running. Close it from the taskbar and try again.
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold mb-2">Slow CPU or GPU Issues</h3>
                <p className="text-gray-600">
                  If NST AI is slow or if you experience GPU issues, modify the timeout setting:
                  Open <code className="bg-gray-100 px-2 py-1 rounded">components/llm/llm_component.py</code> and add:
                  <code className="block bg-gray-100 px-2 py-1 rounded mt-2">request_timeout=300</code>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Video className="w-6 h-6 text-blue-500" />
                <h3 className="font-semibold">Video Tutorial Coming Soon</h3>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <footer className="mt-8 text-center text-gray-600 border-t pt-4">
        <p>© 2024 NST AI. Developed with ❤️ by Vivek W</p>
      </footer>
    </div>
  );
};

export default DocSite;
