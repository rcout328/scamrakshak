"use client";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Users, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const integrations = [
  { name: "Notion", icon: "N", color: "bg-gray-800" },
  { name: "Atom", icon: "A", color: "bg-blue-600" },
  { name: "Slack", icon: "S", color: "bg-purple-600" },
  { name: "GitHub", icon: "G", color: "bg-gray-900" },
]

const initialUserGroups = [
  { name: "SupportTeam", users: 3, color: "bg-pink-500" },
  { name: "Developers", users: 5, color: "bg-blue-500" },
  { name: "Managers", users: 2, color: "bg-[#ddff00]" },
]

export function IntegrationDashboard() {
  const [activeIntegration, setActiveIntegration] = useState(null)
  const [userGroups, setUserGroups] = useState(initialUserGroups)
  const [newGroupName, setNewGroupName] = useState("")
  const [isAddingGroup, setIsAddingGroup] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setUserGroups(prevGroups => 
        prevGroups.map(group => ({
          ...group,
          users: Math.max(1, group.users + Math.floor(Math.random() * 3) - 1)
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const addNewGroup = () => {
    if (newGroupName.trim()) {
      const newGroup = {
        name: newGroupName.trim(),
        users: 1,
        color: `bg-${['red', 'yellow', '[#ddff00]', 'blue', 'indigo', 'purple', 'pink'][Math.floor(Math.random() * 7)]}-500`
      }
      setUserGroups([...userGroups, newGroup])
      setNewGroupName("")
      setIsAddingGroup(false)
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-[#ddff00]/20 rounded-3xl filter blur-3xl"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Seamless Integrations Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-teal-800/30 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-teal-500/30">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-[#ddff00] bg-clip-text text-transparent">Seamless Integrations</h2>
          <p className="text-teal-200 mb-6">
            Elevate your workflow by connecting with cutting-edge tools and platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            {integrations.map((integration, index) => (
              <TooltipProvider key={integration.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${integration.color} ${
                        activeIntegration === index
                          ? "ring-4 ring-[#ddff00]"
                          : ""
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
          className="bg-[#ddff00]/30 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#ddff00]/30">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#ddff00] to-teal-400 bg-clip-text text-transparent">User Groups</h2>
          <p className="text-[#ddff00] mb-6">
            Streamline access control with intelligent user group management.
          </p>
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#ddff00] scrollbar-track-[#ddff00]/30">
            <AnimatePresence>
              {userGroups.map((group) => (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between bg-[#ddff00]/30 rounded-xl p-4 hover:bg-[#ddff00]/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full ${group.color} flex items-center justify-center`}>
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">@{group.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[...Array(Math.min(group.users, 3))].map((_, i) => (
                        <Avatar key={i} className="border-2 border-[#ddff00] w-8 h-8">
                          <AvatarImage src={`https://i.pravatar.cc/32?img=${i + 1}`} />
                          <AvatarFallback>{group.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    {group.users > 3 && (
                      <span className="text-sm text-[#ddff00]">+{group.users - 3}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-4">
            {isAddingGroup ? (
              <div className="flex items-center space-x-2">
                <Input
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Enter group name"
                  className="bg-[#ddff00]/30 border-[#ddff00] text-white"
                />
                <Button onClick={addNewGroup} className="bg-[#ddff00] hover:bg-[#ddff00]/80 text-black">
                  Add
                </Button>
                <Button onClick={() => setIsAddingGroup(false)} className="bg-red-600 hover:bg-red-700">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsAddingGroup(true)} className="w-full bg-[#ddff00] hover:bg-[#ddff00]/80 text-black">
                <Plus className="w-4 h-4 mr-2" /> Add New Group
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
