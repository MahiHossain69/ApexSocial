import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "react-hot-toast";

import { CircleCheck, Trash2, Eye } from "lucide-react";

import { RiMessage2Fill } from "react-icons/ri";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import RobertFox from "../../assets/robertfox.svg";
import Laura from "../../assets/laura.svg";
import James from "../../assets/james.svg";
import Juma from "../../assets/juma.svg";



const initialPeople = [
  {
    id: "1",
    name: "Robert Fox",
    age: 23,
    occupation: "Therapist",
    country: "Germany",
    date: "Oct 2024",
    avatar: RobertFox,
  },
  {
    id: "2",
    name: "Laura Pereze",
    age: 26,
    occupation: "Therapist",
    country: "USA",
    date: "Oct 2024",
    avatar: Laura,
  },
  {
    id: "3",
    name: "James Brown",
    age: 30,
    occupation: "Therapist",
    country: "Indonesia",
    date: "Oct 2024",
    avatar: James,
  },
  {
    id: "4",
    name: "Juma Omondi",
    age: 32,
    occupation: "Therapist",
    country: "Germany",
    date: "Oct 2024",
    avatar: Juma,
  },
];

const MyFavorite = () => {
  const [people, setPeople] = useState(initialPeople);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [personToDelete, setPersonToDelete] = useState(null);

  const handleViewDetails = (person) => {
    setSelectedPerson(person);
    setShowDetailsDialog(true);
    toast({
      title: "Viewing Details",
      description: `Opening details for ${person.name}`,
    });
  };

  const handleDeleteClick = (person) => {
    setPersonToDelete(person);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (personToDelete) {
      setPeople(people.filter((p) => p.id !== personToDelete.id));
      toast({
        title: "Removed from Favorites",
        description: `${personToDelete.name} has been removed from your favorites.`,
        variant: "destructive",
      });
      setPersonToDelete(null);
    }
    setShowDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setPersonToDelete(null);
    setShowDeleteDialog(false);
  };

  return (
    <div>
      <div className="mb-6 border-b-2 mt-[-24px] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex ml-0 xs:mt-[15px] md:mt-0 sm:ml-[-15px] gap-2 sm:gap-[10px] items-center">
          <div className="bg-[#45B5AA]  w-[24px] h-[24px] rounded-full flex items-center justify-center">
            <RiMessage2Fill className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-inter font-semibold text-[18px]">
            My Direct Contacts
          </h1>
        </div>
      </div>

      <Card>
        <div className="bg-[#EFFAF6] p-3 mx-5 rounded-md">
          <div>
            <h1 className="font-inter font-medium ml-3 text-[#176448] flex gap-2 items-center text-[20px]">
              Your list is empty. Feel free to search our pool of care professionals <PiGreaterThanBold />
            </h1>
          </div>
        </div>
      </Card>

      <div className="mb-6 border-b-2 mt-[10px] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex ml-0 xs:mt-[15px] md:mt-0 sm:ml-[-15px] gap-2 sm:gap-[10px] items-center">
          <div className="bg-[#45B5AA]  w-[24px] h-[24px] rounded-full flex items-center justify-center">
            <FaHeart className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-inter font-semibold text-[18px]">My Favorites</h1>
        </div>
      </div>

      <div className="w-full  mx-auto ">
    
     

      {/* Table Container */}
      <div className="bg-white rounded-lg shadow-sm border  border-gray-200 overflow-hidden">
        {people.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-[20px] text-[#176448]">No favorites added yet.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#EFFAF6] p-3 mx-5 rounded-md">
                      <th className="text-left py-4 px-6 font-medium text-[#176448] text-sm">Name</th>
                      <th className="text-left py-4 px-6 font-medium text-[#176448] text-sm">Age</th>
                      <th className="text-left py-4 px-6 font-medium text-[#176448] text-sm">Occupation</th>
                      <th className="text-left py-4 px-6 font-medium text-[#176448] text-sm">Country</th>
                      <th className="text-left py-4 px-6 font-medium text-[#176448] text-sm">Date</th>
                      <th className="text-left py-4 px-6 font-medium text-[#176448] text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {people.map((person, index) => (
                      <tr
                        key={person.id}
                        className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${index === people.length - 1 ? "border-b-0" : ""}`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10 border border-gray-200">
                              <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                              <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
                                {person.name.charAt(0)}
                                {person.name.split(" ")[1]?.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-gray-900 text-sm">{person.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-700 text-sm">{person.age}</td>
                        <td className="py-4 px-6 text-gray-700 text-sm">{person.occupation}</td>
                        <td className="py-4 px-6 text-gray-700 text-sm">{person.country}</td>
                        <td className="py-4 px-6 text-gray-700 text-sm">{person.date}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              className="h-8 w-8 bg-teal-500 hover:bg-teal-600 border-0 shadow-sm"
                              onClick={() => handleViewDetails(person)}
                              title="View Details"
                            >
                              <CircleCheck className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              className="h-8 w-8 bg-red-500 hover:bg-red-600 border-0 shadow-sm"
                              onClick={() => handleDeleteClick(person)}
                              title="Remove from Favorites"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden">
              <div className="divide-y divide-gray-100">
                {people.map((person) => (
                  <div key={person.id} className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border border-gray-200">
                          <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                          <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
                            {person.name.charAt(0)}
                            {person.name.split(" ")[1]?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{person.name}</p>
                          <p className="text-xs text-gray-500">{person.occupation}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          className="h-8 w-8 bg-teal-500 hover:bg-teal-600 border-0 shadow-sm"
                          onClick={() => handleViewDetails(person)}
                          title="View Details"
                        >
                          <CircleCheck className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          className="h-8 w-8 bg-red-500 hover:bg-red-600 border-0 shadow-sm"
                          onClick={() => handleDeleteClick(person)}
                          title="Remove from Favorites"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <p className="text-gray-500 mb-1">Age</p>
                        <p className="text-gray-700">{person.age}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Country</p>
                        <p className="text-gray-700">{person.country}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Date</p>
                        <p className="text-gray-700">{person.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
            <DialogDescription>Detailed information about {selectedPerson?.name}</DialogDescription>
          </DialogHeader>
          {selectedPerson && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border">
                  <AvatarImage src={selectedPerson.avatar || "/placeholder.svg"} alt={selectedPerson.name} />
                  <AvatarFallback className="text-lg">
                    {selectedPerson.name.charAt(0)}
                    {selectedPerson.name.split(" ")[1]?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedPerson.name}</h3>
                  <p className="text-sm text-gray-500">{selectedPerson.occupation}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Age</p>
                  <p className="text-lg">{selectedPerson.age} years old</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Country</p>
                  <p className="text-lg">{selectedPerson.country}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Added Date</p>
                  <p className="text-lg">{selectedPerson.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="text-lg text-teal-600">⭐ Favorite</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setShowDetailsDialog(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove from Favorites?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove {personToDelete?.name} from your favorites? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-red-600 hover:bg-red-700">
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    </div>
  );
};

export default MyFavorite;
