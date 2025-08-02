'use client'

import { Leaf, TreePine, Waves, Wind } from "lucide-react"

const games = [
    {
        id:"breathing",
        title:"Breathing Patterns",
        description:"Follow calming breathing exercises with visual guidance",
        icon:Wind,
        color:"text-blue-500",
        bgColor:"bg-blue-500/50",
        duration:"5 mins"
    },
    {
    id: "zen-garden",
    title: "Zen Garden",
    description: "Cultivate a digital garden by planting trees and designing calming spaces",
    icon: Leaf, // consider using an appropriate Lucide icon like `Leaf` or `TreePine`
    color: "text-green-600",
    bgColor: "bg-green-600/50",
    duration: "10 mins"
},
{
    id: "mindful-forest",
    title: "Mindful Forest",
    description: "Immerse yourself in forest ambience with birdsong and rustling leaves",
    icon: TreePine, // or something like `TreeDeciduous` if you're using Lucide icons
    color: "text-emerald-700",
    bgColor: "bg-emerald-700/50",
    duration: "7 mins"
},
{
    id: "ocean-waves",
    title: "Ocean Waves",
    description: "Relax to the sound of gentle ocean waves and sea breeze",
    icon: Waves, // if available; else use a generic `Sound` or `Music` icon
    color: "text-sky-500",
    bgColor: "bg-sky-500/50",
    duration: "8 mins"
}

]

interface AnxietyGamesProps {
    onGamePlayed?:(gameName:string, description:string) => Promise<void>;
}