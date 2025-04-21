import React from 'react';

export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="flex gap-2 justify-end mb-4">
      <button
        className={`px-3 py-1 rounded text-xs font-bold border ${lang === 'en' ? 'bg-gray-900 text-white border-gray-700' : 'bg-gray-800 text-gray-400 border-gray-700 hover:text-white'}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded text-xs font-bold border ${lang === 'lt' ? 'bg-gray-900 text-white border-gray-700' : 'bg-gray-800 text-gray-400 border-gray-700 hover:text-white'}`}
        onClick={() => setLang('lt')}
      >
        LT
      </button>
    </div>
  );
}
