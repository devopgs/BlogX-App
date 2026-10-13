
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//import { useNavigate } from 'react-router';

import {
  Edit3,
  Trash2,
  Plus,
  X,
  CheckCircle2,
  BookOpen,
  User,
  Tag,
  FileText,
  Image as ImageIcon,
  BookMarked
} from 'lucide-react';



const INITIAL_DATA = [
  {
    id: '1',
    title: 'Raj Ki Batein',
    category: 'Lifestyle',
    author: 'Raj Kumar',
    description: "'Raj kumar ki Batein' novel is very interesting to read.",
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    title: 'Code & Coffee',
    category: 'Technology',
    author: 'Priya Sharma',
    description: 'A developer guide on building scalable React applications efficiently.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    title: 'Mindful Living',
    category: 'Wellness',
    author: 'Amit Verma',
    description: 'Practical daily mindfulness techniques for busy urban professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=200'
  }
];





export default function Dashboard() {

  const [items, setItems] = useState(INITIAL_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');


  let apiBaseUrl = `http://localhost:5000/blog/`


  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: '',
    description: '',
    imageUrl: ''
  });
  // Helper for Toast Feedback
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };
  // Open Modal for Edit
  const handleEditClick = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      author: item.author,
      description: item.description,
      imageUrl: item.imageUrl || ''
    });
    setIsModalOpen(true);
  };

  // Open Modal for Adding New Entry
  const handleAddNewClick = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: '',
      author: '',
      description: '',
      imageUrl: ''
    });
    setIsModalOpen(true);
  };

  // Form Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Save / Submit Handler
  const handleSave = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.category.trim()) {
      alert('Please fill out Title and Category fields.');
      return;
    }

    if (editingItem) {
      // Update existing item
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItem.id ? { ...item, ...formData } : item
        )
      );
      showToast(`Successfully updated "${formData.title}"`);
    } else {
      // Add new item
      const newItem = {
        id: Date.now().toString(),
        ...formData
      };
      setItems((prev) => [newItem, ...prev]);
      showToast(`Successfully added "${formData.title}"`);
    }

    setIsModalOpen(false);
  };

  // Delete Handler
  const handleDelete = (id, title) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    showToast(`Deleted "${title}"`);
  };





  /*let navigate = useNavigate()




  let apiBaseUrl = `http://localhost:5000/blog/`

  let [data, setData] = useState([]);

  const [selectedRecord, setSelectedRecord] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Modal aur Editing Item ki States
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);


  // 1. Edit Button Click Handling
  const handleEditClick = (obj) => {

    setEditingItem({ ...obj }); // Selected item ka clone state me set karein
    setIsDialogOpen(true);        // Dialog open karein
  };

  // 2. Input Change Handling in Modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingItem((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  // 3. Save Edited Data
  const handleSave = (e) => {
    e.preventDefault();
    setItems((formData) =>
      formData.map((obj) =>
        item.id === editingItem.id ? editingItem : item
      )
    );
    setIsDialogOpen(false); // Modal close karein
    setEditingItem(null);
  };


  /*const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };



  const [blog, setBlog] = useState({
    title: "",
    author: "",
    category: "",
    content: ""
  })



  // 4. Delete Item (Optional)
  let deleteBlog = (_id) => {

    axios.delete(`http://localhost:5000/blog/delete/${_id}`)
      .then((res) => {
        console.log(res.data);
        toast.error("Blog Deleted ")
        viewBlog();

      })

  }

  let viewBlog = () => {
    axios.get(`${apiBaseUrl}view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data);




      })
  };





  useEffect(() => {
    viewBlog()
  }, [])

  console.log(selectedRecord);
  
*/

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-4 sm:p-8 font-sans transition-colors duration-200">
      { }
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-emerald-700 text-white px-4 py-3 rounded-xl shadow-xl animate-bounce text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div>
            <section className="bg-gray-50 dark:bg-gray-900  flex items-center">
              <div className="max-w[1320px] px-4 mx-auto lg:px-12 w-full">
                {/* Start coding here */}
                <div className="relative bg-gray-500 shadow-md dark:bg-gray-800 sm:rounded-lg">
                  <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="max-w[1320px] md:w-1/2">
                      <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative w-full">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="simple-search"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Search"
                            required=""
                          />
                        </div>
                      </form>
                    </div>
                    <div className="flex flex-col items-stretch justify-end shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">

                      <div className="flex items-center w-full space-x-3 md:w-auto">


                        <button
                          id="actionsDropdownButton"
                          data-dropdown-toggle="actionsDropdown"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700"
                          type="button">
                          <select onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Technology">Technology</option>
                            <option value="Travel">Travel</option>
                          </select>
                        </button>                        
                        <button
                          id="filterDropdownButton"
                          data-dropdown-toggle="filterDropdown"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700"
                          type="button">
                          <select onChange={(e) => setSelectedAuthor(e.target.value)}>
                            <option value="">Select Author</option>
                            <option value="Raj Kumar">Raj Kumar</option>
                            <option value="Kamal Kishore">Kamal Kishore</option>
                            <option value="Gaurav">Gaurav</option>
                            <option value="Ajay Kumar">Ajay Kumar</option>
                          </select>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          <button
            onClick={handleAddNewClick}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95 text-sm"
          >
            <Plus className="w-4 h-4" /> Add Blog
          </button>
        </header>

        { }
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Top Border Indicator */}
          <div className="h-1.5 bg-emerald-700 w-full" />

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {items.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <BookOpen className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-700 mb-2" />
                <p>No entries found. Click "Add New Entry" to create one.</p>
              </div>
            ) : (
              items.map((obj, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 gap-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                >
                  {/* Left Box & Text Info */}
                  <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                    {/* Placeholder Thumbnail Box */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-md overflow-hidden flex items-center justify-center">
                      {obj.imageUrl ? (
                        <img
                          src={obj.imageUrl}
                          alt={obj.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageIcon className="w-6 h-6 text-slate-400" />
                      )}
                    </div>

                    {/* Content Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 flex-1 items-center">
                      {/* Title */}
                      <div className="font-semibold text-slate-900 dark:text-slate-100 text-base truncate">
                        {obj.title}
                      </div>

                      {/* Category */}
                      <div className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
                        <span>{obj.category}</span>
                      </div>

                      {/* Author */}
                      <div className="text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
                        <span>{obj.author}</span>
                      </div>

                      {/* Description */}
                      <div className="text-slate-600 dark:text-slate-400 text-sm sm:col-span-1 italic line-clamp-2">
                        {obj.description}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons (Exact Green & Dark Red Styling) */}
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0 pt-2 md:pt-0">
                    <button
                      onClick={() => handleEditClick(obj)}
                      className="flex items-center gap-1.5 bg-[#006400] hover:bg-[#004d00] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-sm shadow transition-all active:scale-95"
                      title="Edit Entry in Modal"
                    >
                      <Edit3 className="w-4 h-4" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(obj.id, obj.title)}
                      className="flex items-center gap-1.5 bg-[#8B0000] hover:bg-[#6b0000] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-sm shadow transition-all active:scale-95"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      { }
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800/60 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                {editingItem ? 'Edit Entry Details' : 'Add New Entry'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Content */}
            <form onSubmit={handleSave} className="p-6 space-y-4">
              {/* Title Field */}
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter title..."
                    required
                    className="w-full pl-3 pr-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Category & Author Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g. Lifestyle, Tech"
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Author name..."
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Image URL Field */}
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:text-slate-100"
                />
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Short description or quote..."
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:text-slate-100 resize-none"
                />
              </div>

              { }
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#006400] hover:bg-[#004d00] text-white text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

  );
};





















