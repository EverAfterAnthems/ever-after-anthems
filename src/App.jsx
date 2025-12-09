import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-8 text-center">
      <motion.h1
        className="text-5xl font-extrabold mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Ever After Anthems
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg mb-8"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Transform your most meaningful memories into a custom song that lasts
        forever — perfect for anniversaries, weddings, birthdays, and moments
        that deserve a soundtrack.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <Card className="bg-white/10 backdrop-blur shadow-xl rounded-2xl p-6 border border-white/20">
          <CardContent className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Ready for your song?</h3>
            <Button
              size="lg"
              className="rounded-2xl px-6 py-3 bg-pink-500 hover:bg-pink-600 transition"
              onClick={() =>
                window.open("https://your-order-link-here.com", "_blank")
              }
            >
              Order Your Custom Song 🎵
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
