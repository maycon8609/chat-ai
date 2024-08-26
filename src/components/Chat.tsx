'use client'

import { useChat } from 'ai/react'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from './ui/scroll-area';


export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[440px] bg-slate-50">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>

        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4">
            {messages.map((message) => {
              return (
                  <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                      {message.role === 'user' && (
                        <Avatar>
                          <AvatarFallback>You</AvatarFallback>
                          <AvatarImage src="https://picsum.photos/200" />
                        </Avatar>
                      )}

                      {message.role === 'assistant' && (
                        <Avatar>
                          <AvatarFallback>AI</AvatarFallback>
                          <AvatarImage src="https://github.com/vercel.png" />
                        </Avatar>
                      )}

                    <p className="leading-relaxed">
                      <span className="block font-bold text-slate-700">
                        {message.role === 'user' ? 'You:' : 'AI:'}
                      </span>
                      {message.content}
                    </p>
                  </div>
              )
            })}
          </ScrollArea>
        </CardContent>

        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
  )
}