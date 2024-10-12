"use client";
import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Users } from "lucide-react";

const integrations = [
  { name: "Notion", icon: "N" },
  { name: "Atom", icon: "A" },
]

const userGroups = [
  { name: "SupportTeam", users: 3 },
  { name: "Developers", users: 5 },
  { name: "Managers", users: 2 },
]

export function IntegrationDashboard() {
  const [activeIntegration, setActiveIntegration] = useState(null)

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Background Elements */}
      {/* ... (background elements remain the same) */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Seamless Integrations Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-teal-800/30 backdrop-blur-md rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-teal-200 mb-6">
            Easily connect with your favorite tools and platforms.
          </p>
          <div className="flex space-x-4">
            {integrations.map((integration, index) => (
              <TooltipProvider key={integration.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                        activeIntegration === index
                          ? "bg-green-500 text-teal-900"
                          : "bg-teal-700 text-teal-100"
                      }`}
                      onClick={() => setActiveIntegration(index)}>
                      {integration.icon}
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{integration.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.div>

        {/* User Groups Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-green-800/30 backdrop-blur-md rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">User Groups</h2>
          <p className="text-green-200 mb-6">
            Organize and manage user groups for streamlined access control.
          </p>
          <div className="space-y-4">
            {userGroups.map((group) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between bg-green-700/30 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-300" />
                  <span className="font-medium">@{group.name}</span>
                </div>
                <div className="flex -space-x-2">
                  {[...Array(group.users)].map((_, i) => (
                    <Avatar key={i} className="border-2 border-green-700 w-8 h-8">
                      <AvatarImage src={`https://i.pravatar.cc/32?img=${i + 1}`} />
                      <AvatarFallback>{group.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
