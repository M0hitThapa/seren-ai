'use client'

import { Gamepad, Leaf, TreePine, Waves, Wind } from "lucide-react"
import { JSX, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const games = [
  {
    id: "breathing",
    title: "Breathing Patterns",
    description: "Follow calming breathing exercises with visual guidance",
    icon: Wind,
    color: "text-blue-500",
    bgColor: "bg-blue-500/50",
    duration: "5 mins"
  },
  {
    id: "zen-garden",
    title: "Zen Garden",
    description: "Cultivate a digital garden by planting trees and designing calming spaces",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-600/50",
    duration: "10 mins"
  },
  {
    id: "mindful-forest",
    title: "Mindful Forest",
    description: "Immerse yourself in forest ambience with birdsong and rustling leaves",
    icon: TreePine,
    color: "text-emerald-700",
    bgColor: "bg-emerald-700/50",
    duration: "7 mins"
  },
  {
    id: "ocean-waves",
    title: "Ocean Waves",
    description: "Relax to the sound of gentle ocean waves and sea breeze",
    icon: Waves,
    color: "text-sky-500",
    bgColor: "bg-sky-500/50",
    duration: "8 mins"
  }
];

interface AnxietyGamesProps {
  onGamePlayed?: (gameName: string, description: string) => Promise<void>;
}

export const AnxietyGames = ({ onGamePlayed }: AnxietyGamesProps): JSX.Element => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [showGame, setShowGame] = useState(false);

  const handleGameStart = async (gameId: string) => {
    setSelectedGame(gameId);
    setShowGame(true);

    if (onGamePlayed) {
      try {
        await onGamePlayed(
          gameId,
          games.find((g) => g.id === gameId)?.description || ""
        );
      } catch (error) {
        console.error("Error logging game activity", error);
      }
    }
  };

  return (
    <>
      <Card className="border-primary/10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Gamepad className="h-5 w-5 text-primary" />
            Anxiety Relief Activities
          </CardTitle>
          <CardDescription>
            Interactive exercises to help reduce stress and anxiety
          </CardDescription>
        </CardHeader>
        {/* Render buttons for each game */}
        <div className="p-4 flex gap-4 flex-wrap">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <button
                key={game.id}
                onClick={() => handleGameStart(game.id)}
                className={`p-4 rounded-md ${game.bgColor} text-white flex flex-col items-start`}
              >
                <Icon className={`h-6 w-6 ${game.color}`} />
                <span className="font-semibold">{game.title}</span>
                <span className="text-sm">{game.duration}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {showGame && selectedGame && (
        <div className="mt-4 p-4 border rounded-md">
          <h3 className="font-bold text-lg">Now playing: {selectedGame}</h3>
          {/* Optionally render game-specific UI */}
        </div>
      )}
    </>
  );
};
