import { useState } from "react";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export default function TagFilter({ tags, selectedTags, setSelectedTags }: TagFilterProps) {
  const [allSelected, setAllSelected] = useState(true);

  const toggleTag = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);
    setAllSelected(updatedTags.length === tags.length);
  };

  const selectAllTags = () => {
    setSelectedTags(tags);
    setAllSelected(true);
  };

  const clearTags = () => {
    setSelectedTags([]);
    setAllSelected(false);
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md w-64">
      {/* Action Buttons */}
        <div className="flex justify-between mb-3">
        <button
            onClick={selectAllTags}
            className="text-sm text-blue-400 hover:text-blue-300 hover:brightness-125 transition cursor-pointer"
        >
            Select All
        </button>
        <button
            onClick={clearTags}
            className="text-sm text-red-400 hover:text-red-300 hover:brightness-125 transition cursor-pointer"
        >
            Clear
        </button>
        </div>

        {/* Tag List */}
        <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
            <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-all shadow-sm cursor-pointer 
                ${
                selectedTags.includes(tag)
                    ? "bg-blue-500 text-white hover:bg-blue-400 hover:brightness-125"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:brightness-125"
                }`}
            >
            {tag}
            </button>
        ))}
        </div>
    </div>
  );
}
