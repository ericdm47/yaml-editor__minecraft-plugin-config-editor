import React, { useState, useEffect, useRef } from "react";
import jsyaml from "js-yaml";
import {
  FileText,
  Upload,
  Download,
  RotateCcw,
  RotateCw,
  Search,
  Eye,
  ChevronsDown,
  ChevronsUp,
  Sun,
  Moon,
  Info,
  ChevronRight,
  ChevronDown,
  Settings,
  HelpCircle,
  Plus,
  Trash2,
  AlertTriangle,
  Flame,
  Wrench,
  Check
} from "lucide-react";
import { EditorTheme, HistoryState } from "./types";
import { DEFAULT_YAML, PRESETS, DESCRIPTIONS } from "./constants";
import PipeAnimation from "./components/PipeAnimation";

export default function App() {
  // Theme & App State
  const [theme, setTheme] = useState<EditorTheme>("dark");
  const [data, setData] = useState<any>({});
  const [originalData, setOriginalData] = useState<any>({});
  const [fileName, setFileName] = useState<string>("weapon.yml");
  const [searchText, setSearchText] = useState<string>("");
  const [filterChanged, setFilterChanged] = useState<boolean>(false);
  
  // Collapse State (Store paths as dot-separated string or nested key)
  const [collapsedPaths, setCollapsedPaths] = useState<Record<string, boolean>>({});

  // Active hover information for tooltip panels
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [hoveredDesc, setHoveredDesc] = useState<string | null>(null);

  // Undo/Redo Stacks
  const [undoStack, setUndoStack] = useState<HistoryState[]>([]);
  const [redoStack, setRedoStack] = useState<HistoryState[]>([]);

  // Selected preset name
  const [selectedPreset, setSelectedPreset] = useState<string>("AR");

  // File input ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initial load
  useEffect(() => {
    try {
      const parsed = jsyaml.load(DEFAULT_YAML);
      setData(parsed);
      // Keep a deep copy for change comparison
      setOriginalData(JSON.parse(JSON.stringify(parsed)));
    } catch (e) {
      console.error("Failed to parse default YAML", e);
    }
  }, []);

  // Update history state for Undo/Redo
  const pushToHistory = (newData: any) => {
    setUndoStack((prev) => [
      ...prev,
      { data: JSON.parse(JSON.stringify(data)), fileName }
    ]);
    // Clear redo index on new action
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (undoStack.length === 0) return;
    const previous = undoStack[undoStack.length - 1];
    
    setRedoStack((prev) => [
      ...prev,
      { data: JSON.parse(JSON.stringify(data)), fileName }
    ]);
    
    setData(previous.data);
    setFileName(previous.fileName);
    setUndoStack((prev) => prev.slice(0, -1));
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    
    setUndoStack((prev) => [
      ...prev,
      { data: JSON.parse(JSON.stringify(data)), fileName }
    ]);
    
    setData(next.data);
    setFileName(next.fileName);
    setRedoStack((prev) => prev.slice(0, -1));
  };

  // Helper: check if a specific deeply nested path has been modified
  const isPathChanged = (path: string[]): boolean => {
    let orig = originalData;
    let curr = data;
    for (const segment of path) {
      if (orig === undefined || curr === undefined) return true;
      orig = orig[segment];
      curr = curr[segment];
    }
    // Deep equal check for primitives & arrays
    return JSON.stringify(orig) !== JSON.stringify(curr);
  };

  // Update a nested key value
  const updateValue = (path: string[], val: any) => {
    pushToHistory(data);
    const updated = JSON.parse(JSON.stringify(data));
    let ref = updated;
    for (let i = 0; i < path.length - 1; i++) {
      ref = ref[path[i]];
    }
    ref[path[path.length - 1]] = val;
    setData(updated);
  };

  // Merge preset deep helper
  const mergePreset = (target: any, source: any) => {
    const output = JSON.parse(JSON.stringify(target));
    const merge = (t: any, s: any) => {
      for (const key in s) {
        if (s[key] !== null && typeof s[key] === "object" && !Array.isArray(s[key])) {
          if (!t[key]) t[key] = {};
          merge(t[key], s[key]);
        } else {
          t[key] = s[key];
        }
      }
    };
    merge(output, source);
    return output;
  };

  const applyPresetByName = (presetName: string) => {
    if (!presetName || !PRESETS[presetName]) return;
    pushToHistory(data);
    setSelectedPreset(presetName);
    const merged = mergePreset(data, PRESETS[presetName]);
    setData(merged);
  };

  // File Upload Handling
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    readAndSetFile(file);
  };

  const readAndSetFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = jsyaml.load(text);
        if (parsed && typeof parsed === "object") {
          pushToHistory(data);
          setData(parsed);
          setOriginalData(JSON.parse(JSON.stringify(parsed)));
          setFileName(file.name);
        } else {
          alert("올바르지 않은 YAML 파일 형식입니다.");
        }
      } catch (err: any) {
        alert("YAML 파싱 중 에러 발생: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  // Drag & Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      readAndSetFile(file);
    }
  };

  // Save / Export YAML file
  const handleSaveFile = () => {
    try {
      const dumped = jsyaml.dump(data, { sortKeys: false, indent: 2 });
      const blob = new Blob([dumped], { type: "text/yaml;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e: any) {
      alert("파일 저장 불가: " + e.message);
    }
  };

  // Collapse controllers
  const toggleCollapse = (pathStr: string) => {
    setCollapsedPaths(prev => ({
      ...prev,
      [pathStr]: !prev[pathStr]
    }));
  };

  const collapseAll = () => {
    const newCollapsed: Record<string, boolean> = {};
    const traverse = (obj: any, currentPath: string[] = []) => {
      for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
          const pathStr = [...currentPath, key].join(".");
          newCollapsed[pathStr] = true;
          traverse(obj[key], [...currentPath, key]);
        }
      }
    };
    traverse(data);
    setCollapsedPaths(newCollapsed);
  };

  const expandAll = () => {
    setCollapsedPaths({});
  };

  // Render a specific schema item in the Tree
  const renderTreeNodes = (obj: any, path: string[] = []): React.ReactNode => {
    if (!obj || typeof obj !== "object") return null;

    return Object.entries(obj).map(([key, value]) => {
      const currentPath = [...path, key];
      const pathStr = currentPath.join(".");
      
      // Filter by search keyword
      const matchesSearch = key.toLowerCase().includes(searchText.toLowerCase()) || 
        (typeof value === "string" && value.toLowerCase().includes(searchText.toLowerCase()));
      
      // Filter by modified values if filterChanged is active
      const isChanged = isPathChanged(currentPath);
      if (filterChanged && !isChanged) {
        return null;
      }

      // If searchable but doesn't match current node & is a leaf, skip. (Only applies to search queries)
      if (searchText && !matchesSearch && typeof value !== "object") {
        return null;
      }

      const hasDescription = !!DESCRIPTIONS[key];

      // Nested Object
      if (value !== null && typeof value === "object" && !Array.isArray(value)) {
        const isCollapsed = collapsedPaths[pathStr] || false;
        
        return (
          <div key={pathStr} className="mb-4 border border-[#523d2b]/30 rounded-lg overflow-hidden bg-[#1f1915]/30">
            {/* Folder / Parent Header */}
            <div 
              onClick={() => toggleCollapse(pathStr)}
              className={`flex items-center justify-between p-3 cursor-pointer select-none border-b border-[#523d2b]/20 hover:bg-[#8d6033]/15 transition-colors duration-150 ${
                theme === "dark" ? "bg-[#251e18]" : "bg-[#ded6bd]"
              }`}
            >
              <div className="flex items-center gap-2">
                {isCollapsed ? (
                  <ChevronRight className="w-5 h-5 text-[#c28a3d]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#c28a3d]" />
                )}
                <span className="font-mono text-base font-bold tracking-wide text-[#f0dfb4] flex items-center gap-1.5 capitalize">
                  <Wrench className="w-4 h-4 text-[#b57e3e]" />
                  {key}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                {isChanged && (
                  <span className="flex items-center gap-1 text-[10px] bg-amber-500/15 border border-amber-500/40 text-[#ffb347] px-1.5 py-0.5 rounded-sm uppercase font-mono tracking-wider animate-pulse">
                    Modified
                  </span>
                )}
                <span className="text-[10px] font-mono opacity-50">
                  ({Object.keys(value).length} sub-keys)
                </span>
              </div>
            </div>

            {/* Folder Contents */}
            {!isCollapsed && (
              <div className="p-3 pl-4 sm:pl-6 space-y-3 border-t border-[#18130f]">
                {renderTreeNodes(value, currentPath)}
              </div>
            )}
          </div>
        );
      }

      // Arrays (e.g. standard string list, craftingRequirements, etc)
      if (Array.isArray(value)) {
        return (
          <div 
            key={pathStr}
            onMouseEnter={() => {
              setHoveredKey(key);
              setHoveredDesc(DESCRIPTIONS[key] || "제작식 또는 아이템 조합 목록 배열값입니다.");
            }}
            className={`item flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 border transition-all duration-200 rounded-lg ${
              isChanged 
                ? "border-[#ffb347]/60 bg-gradient-to-r from-[#ffb347]/10 to-[#1d1713]" 
                : "border-[#3b3028] bg-[#221a15]/80 hover:border-[#8d6033]/60"
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                {isChanged && <span className="w-2 h-2 rounded-full bg-[#ffb347] animate-ping" />}
                <label className="font-mono text-sm font-medium text-[#f0dfb4] flex items-center gap-1 capitalize">
                  {key} 
                </label>
                <span className="text-[10px] px-1.5 bg-[#c28a3d]/20 text-[#c28a3d] border border-[#c28a3d]/30 rounded font-mono uppercase">
                  List
                </span>
                {hasDescription && (
                  <button 
                    title={DESCRIPTIONS[key]}
                    className="text-[#c28a3d] hover:text-[#ffb347] transition-colors p-0.5"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <p className="text-xs text-[#b89f75] mb-2 font-sans line-clamp-1">
                {DESCRIPTIONS[key] || "쉼표로 구분하여 여러 리스트 아이템을 편집할 수 있습니다."}
              </p>
            </div>

            <div className="md:w-3/5 flex gap-2">
              <textarea
                className="w-full h-16 text-xs p-2 bg-[#18130f] text-[#f0dfb4] border border-[#6d4c2d] rounded focus:outline-none focus:border-[#c28a3d] font-mono custom-scrollbar resize-none"
                value={value.join(", ")}
                onChange={(e) => {
                  const arr = e.target.value.split(",").map((s) => s.trim());
                  updateValue(currentPath, arr);
                }}
              />
            </div>
          </div>
        );
      }

      // Primitive Values (Numbers, Booleans, Strings)
      const isBoolean = typeof value === "boolean";
      const isNumber = typeof value === "number";

      return (
        <div 
          key={pathStr}
          onMouseEnter={() => {
            setHoveredKey(key);
            setHoveredDesc(DESCRIPTIONS[key] || "기본 성능 및 특성 제어를 위한 파라미터 값입니다.");
          }}
          className={`item flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 border transition-all duration-200 rounded-lg ${
            isChanged 
              ? "border-[#ffb347]/60 bg-gradient-to-r from-[#ffb347]/10 to-[#1d1713]" 
              : "border-[#3b3028] bg-[#221a15]/80 hover:border-[#8d6033]/60"
          }`}
        >
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-1.5 mb-1">
              {isChanged && <span className="w-2.5 h-2.5 rounded-full bg-[#ffb347] animate-pulse" />}
              <label className="font-mono text-sm font-semibold text-[#f0dfb4] capitalize flex items-center gap-1">
                {key}
              </label>
              <span className="text-[9px] font-mono text-opacity-60 text-white ml-2 bg-[#1b1410] px-1 py-0.2 rounded border border-[#3a2f26]">
                {typeof value}
              </span>
              {hasDescription && (
                <button 
                  title={DESCRIPTIONS[key]}
                  className="text-[#c28a3d] hover:text-[#ffb347] transition-colors p-0.5"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            {DESCRIPTIONS[key] && (
              <p className="text-[11px] text-[#b89f75] leading-relaxed line-clamp-1">{DESCRIPTIONS[key]}</p>
            )}
          </div>

          <div className="md:w-3/5 flex items-center gap-2">
            {isBoolean ? (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => updateValue(currentPath, !value)}
                  className={`w-14 h-7 rounded-sm p-1 transition-all duration-200 border relative ${
                    value 
                      ? "bg-[#6b8c34] border-[#aaff44]/40" 
                      : "bg-[#27211d] border-[#5a483a]"
                  }`}
                >
                  <div 
                    className={`h-4.5 w-4.5 rounded-sm bg-[#f0dfb4] border border-[#c28a3d] shadow-sm transform transition-transform duration-200 ${
                      value ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-xs font-mono text-[#f0dfb4]">
                  {value ? "활성 (True)" : "비활성 (False)"}
                </span>
              </div>
            ) : isNumber ? (
              <div className="flex items-center gap-2 w-full">
                {/* Custom Minecraft Style Number Input with arrows */}
                <button 
                  type="button"
                  onClick={() => updateValue(currentPath, Number((value - (key === "recoil" ? 0.1 : 1)).toFixed(2)))}
                  className="w-8 h-8 flex items-center justify-center bg-[#251e18] border border-[#5d412d] hover:bg-[#c28a3d] text-[#f0dfb4] active:scale-95 rounded text-xs font-bold font-mono"
                >
                  -
                </button>
                <input
                  type="number"
                  step="any"
                  className="w-full text-center p-2 bg-[#18130f] text-[#f0dfb4] border border-[#6d4c2d] rounded focus:outline-none focus:border-[#c28a3d] font-mono text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={value}
                  onChange={(e) => updateValue(currentPath, Number(e.target.value))}
                />
                <button 
                  type="button"
                  onClick={() => updateValue(currentPath, Number((value + (key === "recoil" ? 0.1 : 1)).toFixed(2)))}
                  className="w-8 h-8 flex items-center justify-center bg-[#251e18] border border-[#5d412d] hover:bg-[#c28a3d] text-[#f0dfb4] active:scale-95 rounded text-xs font-bold font-mono"
                >
                  +
                </button>
              </div>
            ) : (
              // Text / Category Select / Default Custom dropdown input
              <div className="w-full relative">
                {key === "weapontype" ? (
                  <select
                    className="w-full p-2 bg-[#18130f] text-[#f0dfb4] border border-[#6d4c2d] rounded focus:outline-none focus:border-[#c28a3d] font-mono text-sm"
                    value={value}
                    onChange={(e) => updateValue(currentPath, e.target.value)}
                  >
                    <option value="SMG">SMG (소기관총)</option>
                    <option value="SR">SR (저격소총)</option>
                    <option value="AR">AR (돌격소총)</option>
                    <option value="HG">HG (권총)</option>
                    <option value="SG">SG (산탄총)</option>
                    <option value="DMR">DMR (지정사수소총)</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    className="w-full p-2 bg-[#18130f] text-[#f0dfb4] border border-[#6d4c2d] rounded focus:outline-none focus:border-[#c28a3d] font-mono text-sm"
                    value={value}
                    onChange={(e) => updateValue(currentPath, e.target.value)}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div 
      className={`min-h-screen font-sans ${
        theme === "dark" 
          ? "bg-[#171310] text-[#f4e3bc]" 
          : "bg-[#f4efe1] text-[#3e2b1d]"
      } p-3 sm:p-6 transition-colors duration-200 custom-scrollbar`}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* TOP COMPREHENSIVE BAR */}
        <header className="relative flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl border-3 border-[#5f3818] bg-[#2a221d] shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.1)] overflow-hidden">
          {/* Gear Backplate Detail */}
          <div className="absolute top-[-30px] right-[-10px] opacity-10 pointer-events-none">
            <Settings className="w-36 h-36 text-[#c28a3d] animate-spin-slow" />
          </div>

          <div className="flex items-center gap-3.5 z-10">
            <div className="p-2.5 bg-gradient-to-br from-[#c28a3d] to-[#9c5d2d] rounded-lg border-2 border-[#ffb347]/40 shadow-md">
              <Settings className="w-7 h-7 text-[#171310] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-pixel text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ffd38d] via-[#c28a3d] to-[#b57e3e] uppercase select-none drop-shadow">
                  ARMOURY FIXER
                </span>
                <span className="bg-[#ffb347] text-[#171310] text-[10px] font-pixel px-1.5 py-0.2 rounded border border-[#ffd38d] font-black uppercase tracking-wider animate-pulse">
                  YAML v1.2
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#b89f75] uppercase tracking-widest mt-0.5">
                Industrial Config Forge
              </p>
            </div>
          </div>

          {/* Quick Toolbar Action Controllers */}
          <div className="flex flex-wrap items-center gap-2 bg-[#1b1310] p-2.5 rounded-lg border border-[#3b2b21] z-10">
            
            {/* Preset Selector */}
            <div className="flex items-center gap-2 mr-2">
              <span className="text-[11px] font-mono font-bold text-[#b89f75] uppercase hidden sm:inline">
                프리셋 :
              </span>
              <select 
                value={selectedPreset}
                onChange={(e) => applyPresetByName(e.target.value)}
                className="bg-[#2a221d] text-[#f0dfb4] border border-[#8d6033] px-2.5 py-1.5 rounded-md font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#ffb347] cursor-pointer"
              >
                <option value="">프리셋 선택</option>
                <option value="SMG">SMG (소기관총)</option>
                <option value="SR">SR (저격식)</option>
                <option value="AR">AR (돌격식)</option>
                <option value="HG">HG (권총)</option>
                <option value="SG">SG (배합탄)</option>
                <option value="DMR">DMR (지정사수)</option>
              </select>
            </div>

            {/* Quick Action Buttons */}
            <div className="h-6 w-[1px] bg-[#3b2b21] mx-1 hidden sm:block" />

            {/* Undo / Redo */}
            <button 
              onClick={handleUndo}
              disabled={undoStack.length === 0}
              className={`p-2 rounded border font-mono text-xs font-bold transition-all flex items-center justify-center ${
                undoStack.length > 0 
                  ? "bg-[#2a221d] hover:bg-[#8d6033]/60 text-[#f0dfb4] border-[#8d6033] cursor-pointer active:scale-95" 
                  : "bg-black/30 text-neutral-600 border-neutral-800 cursor-not-allowed"
              }`}
              title="되돌리기 (Undo)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button 
              onClick={handleRedo}
              disabled={redoStack.length === 0}
              className={`p-2 rounded border font-mono text-xs font-bold transition-all flex items-center justify-center ${
                redoStack.length > 0 
                  ? "bg-[#2a221d] hover:bg-[#8d6033]/60 text-[#f0dfb4] border-[#8d6033] cursor-pointer active:scale-95" 
                  : "bg-black/30 text-neutral-600 border-neutral-800 cursor-not-allowed"
              }`}
              title="다시실행 (Redo)"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-[#2a221d] hover:bg-[#8d6033]/60 text-[#ffd38d] border border-[#8d6033] rounded cursor-pointer active:scale-95"
              title={theme === "dark" ? "황동 워크숍 (라이트)" : "산업용 엔진룸 (다크)"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#8d6033]" />}
            </button>
            
          </div>
        </header>

        {/* TWO-COLUMN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* LEFT SIDEBAR PANEL (File administration & presets) */}
          <aside className="lg:col-span-1 space-y-6">
            
            {/* File Administration Module */}
            <div className="panel border-3 border-[#8d6033] bg-[#2a221d] p-4.5 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ffb347]/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="font-pixel text-xl text-[#ffd38d] mb-4 uppercase tracking-wider border-b border-[#523d2b] pb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#c28a3d]" />
                FILE MANAGER
              </h3>

              <div className="space-y-4">
                {/* File picker */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="group cursor-pointer border-2 border-dashed border-[#8d6033] hover:border-[#ffb347] bg-[#18130f] p-4 rounded-lg text-center transition-all bg-[radial-gradient(#201914_1px,transparent_1px)] [background-size:8px_8px]"
                >
                  <Upload className="w-7 h-7 mx-auto text-[#b89f75] group-hover:text-[#ffb347] group-hover:scale-110 transition-transform mb-2" />
                  <span className="text-xs font-mono font-bold text-[#f0dfb4] block">파일 선택</span>
                  <span className="text-[10px] text-[#b89f75] block mt-1 hover:underline">
                    또는 드래그앤드롭
                  </span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".yml,.yaml"
                    className="hidden"
                  />
                </div>

                {/* File Display Status with Copper Ring indicator */}
                <div className="bg-[#1b1410] border border-[#523d2b] p-3 rounded-lg">
                  <span className="text-[10px] font-mono text-[#b89f75] uppercase block mb-1">
                    선택된 파일
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-green-200 animate-pulse" />
                    <span className="font-mono text-sm tracking-wide text-[#f4e3bc] break-all truncate">
                      {fileName}
                    </span>
                  </div>
                </div>

                {/* Save Options Buttons */}
                <button
                  onClick={handleSaveFile}
                  className="w-full py-3 bg-gradient-to-b from-[#c28a3d] to-[#9c5d2d] hover:from-[#ffb347] hover:to-[#c28a3d] active:translate-y-0.5 border-3 border-b-6 border-[#5f3818] text-[#171310] font-pixel text-lg tracking-wider rounded-lg transition-all font-black uppercase text-center flex items-center justify-center gap-2 shadow-[0_4px_0_#3f200c]"
                >
                  <Download className="w-5 h-5 text-[#171310]" />
                  SAVE FILE
                </button>
              </div>
            </div>

            {/* Quick Presets Selector Module */}
            <div className="panel border-3 border-[#8d6033] bg-[#2a221d] p-4.5 rounded-xl shadow-lg">
              <h3 className="font-pixel text-xl text-[#ffd38d] mb-4 uppercase tracking-wider border-b border-[#523d2b] pb-2 flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#ffb347] animate-pulse" />
                QUICK PRESETS
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {Object.keys(PRESETS).map((p) => {
                  const isActive = selectedPreset === p;
                  return (
                    <button
                      key={p}
                      onClick={() => applyPresetByName(p)}
                      className={`py-2 px-3 text-left rounded border transition-all flex items-center justify-between font-mono font-bold text-xs ${
                        isActive
                          ? "bg-gradient-to-r from-[#8d6033] to-[#51361c] border-[#ffb347] text-[#ffb347] ring-1 ring-[#ffb347] shadow-[0_0_12px_rgba(255,179,71,0.25)]"
                          : "bg-[#18130f] border-[#3a2f26] hover:border-[#c28a3d] text-[#b89f75] hover:text-[#f0dfb4]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#ffb347]" : "bg-[#3a2f26]"}`} />
                        {p}
                      </span>
                      {isActive && (
                        <span className="text-[10px] bg-[#ffb347] text-[#171310] px-1 rounded uppercase tracking-tighter">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Valve Gears Anim Panel */}
            <div className="relative hidden lg:block">
              <PipeAnimation />
            </div>

          </aside>

          {/* MAIN CONFIGURATION EDITOR */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Search, Filter & Bulk control Action Center */}
            <div className="panel border-3 border-[#8d6033] bg-[#2a221d] p-4.5 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Search Bar Input */}
                <div className="relative w-full md:w-1/2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="w-4 h-4 text-[#b89f75]" />
                  </div>
                  <input
                    id="searchBox"
                    type="text"
                    placeholder="설정 검색 (예: recoil, damage)..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-[#18130f] text-[#f0dfb4] placeholder-[#b89f75]/60 border-2 border-[#523d2b] focus:border-[#ffb347] rounded-lg focus:outline-none font-mono text-sm shadow-inner"
                  />
                  {searchText && (
                    <button
                      onClick={() => setSearchText("")}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs opacity-50 hover:opacity-100"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                {/* Filter and Bulk Actions */}
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
                  
                  {/* Changed list toggler */}
                  <label className="flex items-center gap-2 cursor-pointer select-none bg-[#18130f] border border-[#523d2b] px-3 py-1.5 rounded-lg active:scale-95 transition-all">
                    <input
                      type="checkbox"
                      checked={filterChanged}
                      onChange={(e) => setFilterChanged(e.target.checked)}
                      className="rounded border-[#6d4c2d] text-[#c28a3d] focus:ring-[#c28a3d] bg-black"
                    />
                    <span className="text-xs font-mono font-medium text-[#ffd38d] flex items-center gap-1.5 uppercase">
                      <Eye className="w-3.5 h-3.5" />
                      변경된 항목만 보기
                    </span>
                  </label>

                  {/* Bulk collapse/expand */}
                  <div className="flex items-center gap-1 bg-[#18130f] border border-[#523d2b] p-1 rounded-lg">
                    <button
                      onClick={expandAll}
                      type="button"
                      className="p-1 px-2 hover:bg-[#8d6033]/20 hover:text-[#ffb347] rounded text-[11px] font-mono text-[#b89f75] flex items-center gap-1 transition-all"
                      title="모두 펼치기"
                    >
                      <ChevronsDown className="w-3.5 h-3.5" />
                      일괄 펼치기
                    </button>
                    <div className="h-4 w-[1px] bg-[#523d2b]" />
                    <button
                      onClick={collapseAll}
                      type="button"
                      className="p-1 px-2 hover:bg-[#8d6033]/20 hover:text-[#ffb347] rounded text-[11px] font-mono text-[#b89f75] flex items-center gap-1 transition-all"
                      title="모두 접기"
                    >
                      <ChevronsUp className="w-3.5 h-3.5" />
                      일괄 접기
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* Tree Drag and Drop Zone Container */}
            <div 
              id="dropZone"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`p-6 relative border-3 border-dashed rounded-xl transition-all duration-300 min-h-[500px] flex flex-col justify-start overflow-hidden ${
                theme === "dark" 
                  ? "bg-[#1f1915] border-[#5e412d] shadow-inner" 
                  : "bg-[#e8dec5] border-[#a0744c] shadow-inner"
              }`}
            >
              
              {/* Drag instruction reminder header */}
              <div className="flex items-center justify-between gap-3 border-b border-[#523d2b]/20 pb-4 mb-5 text-xs text-[#b89f75]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  <span className="font-mono uppercase tracking-wider">
                    YAML Drag-box Sensor Area
                  </span>
                </div>
                <span className="font-sans hidden md:inline opacity-70">
                  컴퓨터 속의 yml 파일을 이 영역 안으로 올려놓으면 바로 파싱 편집 환경이 구축됩니다.
                </span>
              </div>

              {/* Render dynamic node config tree */}
              {Object.keys(data).length > 0 ? (
                <div id="editor" className="space-y-4">
                  {renderTreeNodes(data)}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
                  <div className="p-4 bg-red-400/15 border border-red-400/40 text-[#ff7777] rounded-lg mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 animate-bounce" />
                    <span className="font-pixel text-lg uppercase tracking-wide">
                      YAML Empty State
                    </span>
                  </div>
                  <p className="text-sm max-w-md font-sans mb-4 text-[#b89f75]">
                    적용 중인 설정 구조체가 없거나 삭제되었습니다. 아래 버튼을 눌러 기본 마인크래프트 수 정 시안용 예제 파일을 채우십시오.
                  </p>
                  <button 
                    onClick={() => {
                      const parsed = jsyaml.load(DEFAULT_YAML);
                      setData(parsed);
                      setOriginalData(JSON.parse(JSON.stringify(parsed)));
                    }}
                    className="px-5 py-2.5 bg-[#8d6033] hover:bg-[#c28a3d] rounded text-xs font-mono font-bold"
                  >
                    기본 예제 파일로 채우기
                  </button>
                </div>
              )}

            </div>

            {/* Bottom Infobox & Tooltip Indicator Panel */}
            <div className="panel border-3 border-[#c28a3d] bg-[#1a1410] p-4.5 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 flex gap-1 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-orange-300" />
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#ffb347]/10 border border-[#ffb347]/30 text-[#ffb347] rounded mt-0.5">
                  <Info className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-pixel text-lg text-[#ffd38d] uppercase tracking-wider mb-1 flex items-center gap-2">
                    {hoveredKey ? `${hoveredKey.toUpperCase()} 설명` : "⚙ 실시간 기어 도움판"}
                  </h4>
                  <p className="text-xs text-[#b89f75] leading-relaxed">
                    {hoveredDesc ? hoveredDesc : "에디터 내에 마우스를 올리거나 터치하면, 해당 설정이 인게임에서 담당하는 설명 및 추천 기본 스팀 사양이 이곳에 실시간 연동되어 출력됩니다."}
                  </p>
                </div>
              </div>
            </div>

            {/* Change Highlight Indicator legend */}
            <div className="flex items-center gap-4 text-xs font-mono bg-[#1b1410] border border-[#3a2f26] px-4 py-3 rounded-lg text-[#b89f75]">
              <span className="font-bold flex items-center gap-1 text-[#ffd38d]">
                <Flame className="w-4 h-4 text-[#ffb347] animate-pulse" />
                디자인 강조 가이드 :
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffb347] animate-pulse" />
                <span className="text-[11px]">수정된 슬라이드 값 및 주황색 불빛 강조 처리됨</span>
              </div>
              <div className="h-3 w-[1px] bg-[#3a2f26]" />
              <div className="text-[11px]">
                일반 가독성을 위해 <strong className="text-[#f0dfb4]">Pretendard</strong> 폰트가 핵심 설계로 반영되었습니다.
              </div>
            </div>

          </main>

        </div>
        
      </div>
    </div>
  );
}
