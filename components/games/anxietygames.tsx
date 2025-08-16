"use client";

import { Flower2, Gamepad, TreePine, Waves, Wind } from "lucide-react";
import { JSX, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const games = [
  {
    id: "breathing",
    title: "Breathing Patterns",
    description: "Follow calming breathing exercises with visual guidance",
    icon: Wind,
    color: "text-blue-600",
    badge: "bg-blue-600/10 text-blue-700",
    bgColor: "bg-gradient-to-tl from-cyan-300 to-white",
    duration: "5 mins",
  },
  {
    id: "garden",
    title: "Zen Garden",
    description: "Create and maintain your digital peaceful space",
    icon: Flower2,
    color: "text-rose-600",
    badge: "bg-rose-600/10 text-rose-700",
    bgColor: "bg-gradient-to-tr from-purple-300 to-white",
    duration: "10 mins",
  },
  {
    id: "forest",
    title: "Mindful Forest",
    description: "Take a peaceful walk through a virtual forest",
    icon: TreePine,
    color: "text-green-600",
    badge: "bg-green-600/10 text-green-700",
    bgColor: "bg-gradient-to-bl from-gray-300 to-white",
    duration: "15 mins",
  },
  {
    id: "waves",
    title: "Ocean Waves",
    description: "Match your breath with gentle ocean waves",
    icon: Waves,
    color: "text-cyan-600",
    badge: "bg-cyan-600/10 text-cyan-700",
    bgColor: "bg-gradient-to-br from-orange-300 to-white",
    duration: "8 mins",
  },
];

interface AnxietyGamesProps {
  onGamePlayed?: (gameName: string, description: string) => Promise<void>;
}

export const AnxietyGames = ({ onGamePlayed }: AnxietyGamesProps): JSX.Element => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameStart = async (gameId: string) => {
    setSelectedGame(gameId);

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
      <Card className="border-primary/10 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Gamepad className="h-5 w-5 text-primary" />
            Anxiety Relief Activities
          </CardTitle>
          <CardDescription>
            Tap a tile to begin an exercise
          </CardDescription>
        </CardHeader>

        {/* 2x2 perfect square grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 pt-0 max-w-3xl mx-auto">
          {games.map((game) => {
            const Icon = game.icon;
            const isActive = selectedGame === game.id;

            return (
              <button
                key={game.id}
                onClick={() => handleGameStart(game.id)}
                className={[
                  "group relative w-64 h-56 aspect-square rounded-2xl border-2 shadow-sm",
                  "flex flex-col items-start justify-between p-4",
                  "text-slate-800 transition-transform duration-150",
                  "hover:-translate-y-0.5 active:translate-y-0",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
                  game.bgColor,
                  isActive ? "ring-2 ring-primary/60" : "",
                  "border-white/60",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {/* Icon & badge row */}
                <div className="flex items-center justify-between w-full">
                  <Icon className={`h-7 w-7 ${game.color}`} />
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${game.badge}`}
                  >
                    {game.duration}
                  </span>
                </div>

                {/* Title & description */}
                <div className="space-y-1">
                  <div className="font-semibold leading-tight text-base sm:text-lg">
                    {game.title}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {game.description}
                  </div>
                </div>

                {/* subtle gradient sheen on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 0% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
                  }}
                />
              </button>
            );
          })}
        </div>
      </Card>

      {selectedGame && (
        <div className="mt-4 p-4 border rounded-xl bg-slate-50">
          <h3 className="font-bold text-lg">
            Now playing: <span className="text-primary">{selectedGame}</span>
          </h3>
          {/* Optionally render game-specific UI here */}
        </div>
      )}
    </>
  );
};
