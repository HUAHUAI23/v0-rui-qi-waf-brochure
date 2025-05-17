"use client"

import { Printer } from "lucide-react"

export default function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="fixed top-4 right-4 z-50 bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 print:hidden"
    >
      <Printer size={18} />
      <span>打印宣传手册</span>
    </button>
  )
}
