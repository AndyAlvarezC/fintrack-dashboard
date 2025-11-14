import { GoPlus } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";

const data = [
  {id: 1, type: 'Platinum', balance: 9864.12, number: '1234-1234-1234-1234', date: '10/25', cvc: 123}
]

export default function MyCards() {
  return (
    <div className="grid grid-rows-[auto_auto] w-full gap-4">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] items-center w-full">
        <h2 className="text-md font-semibold">My Cards</h2>
        <div className="flex flex-row items-center gap-2">
          <h3 className="font-semibold text-sm">Add New</h3>
          <GoPlus className="text-2xl"/>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-rows-[auto1_fr] w-full gap-4">
      {data.map((card, index) => (
        <div key={index} className="grid grid-rows-[auto1_fr] p-4 w-full h-auto bg-linear-to-r from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl">
          {/* Card Header */}
          <div className="flex items-start justify-between">
            <h2 className="text-gray-300 font-medium text-lg">{card.type}</h2>
            <MdOutlineSettings className="text-2xl" />
          </div>
          
          {/* Balance */}
          <div className="flex items-center justify-start mt-6">
            <h1 className="text-2xl font-bold tracking-wide">${card.balance}</h1>
          </div>

          {/* Card Details */}
            <div className="flex flex-row justify-start mt-4 gap-4 font-semibold">
            <p className="flex flex-row items-center gap-2 text-white">{card.number}
              <span className="cursor-pointer"><MdContentCopy /></span>
            </p>
            </div>

          <div className="flex justify-between items-center font-semibold">
            <div className="flex flex-row gap-4">
              <p>CVC: {card.cvc}</p>
              <p>{card.date}</p>
            </div>
              <RiVisaLine className="text-6xl" />
            </div>
          <div>
          </div>
        </div>        
      ))}
      </div>

      {/* Selector */}
      <div className="flex flex-row w-full h-full justify-center gap-2">
        <div className="w-3 h-3 bg-gray-400 rounded-full" />
        <div className="w-3 h-3 bg-purple-700 rounded-full" />
        <div className="w-3 h-3 bg-gray-400 rounded-full" />
      </div>
    </div>
  )
}
