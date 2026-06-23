import React, { useState, useEffect, useRef } from 'react';
import { Crown, Target, FileText, BookOpen, BarChart2, User, HelpCircle, Check, X, ChevronLeft, Star, Bell, Home, Send, Printer, Award, AlertCircle } from 'lucide-react';

let SUBJECTS = [];
let ALL_TASKS = [];

// ── pdf generator ──────────────────────────────────────
function generatePDF(htmlContent) {
  return new Promise((resolve, reject) => {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.width = '210mm';
    iframe.style.height = '297mm';
    document.body.appendChild(iframe);
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <html><head><meta charset="utf-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Montserrat', sans-serif; font-size: 11pt; color: #000; padding: 20px; }
        .page { width: 170mm; margin: 0 auto; }
        .title { font-family: 'Playfair Display', serif; font-size: 24pt; text-align: center; margin-bottom: 5mm; }
        .subtitle { text-align: center; font-size: 14pt; margin-bottom: 10mm; }
        .task-frame { border: 2px solid #000; padding: 5mm; margin-bottom: 8mm; }
        .task-frame .num { font-weight: 700; margin-bottom: 3mm; }
        .task-frame .opts { margin: 3mm 0; font-size: 10pt; }
        .task-frame .grid { border: 1px solid #999; height: 60mm; margin-top: 3mm; background: repeating-linear-gradient(0deg, #ddd 0px, #ddd 1px, transparent 1px, transparent 5mm), repeating-linear-gradient(90deg, #ddd 0px, #ddd 1px, transparent 1px, transparent 5mm); }
        .answers { margin-top: 10mm; font-size: 12pt; }
        .answers .row { margin: 3mm 0; }
        .header { font-family: 'Playfair Display', serif; font-size: 18pt; text-align: center; margin-bottom: 5mm; border-bottom: 2px solid #000; padding-bottom: 3mm; }
        .blanks { border: 1px solid #333; padding: 3mm; margin: 3mm 0; min-height: 80mm; }
        .blanks table { width: 100%; border-collapse: collapse; }
        .blanks td { border: 1px solid #000; padding: 2mm; text-align: center; }
        .draft { border: 1px dashed #999; min-height: 200mm; margin-top: 5mm; background: repeating-linear-gradient(0deg, #ddd 0px, #ddd 1px, transparent 1px, transparent 5mm); }
      </style></head><body>${htmlContent}</body></html>
    `);
    doc.close();
    setTimeout(() => {
      iframe.contentWindow.print();
      document.body.removeChild(iframe);
      resolve();
    }, 500);
  });
}

// ── helpers ────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

let TOPICS_BY_SUBJECT = {};

// ── main component ─────────────────────────────────────
export default function EgeBossPlatform() {
  const [screen, setScreen] = useState('home');
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('egeboss_user');
    return saved ? JSON.parse(saved) : { subjects: ['math','russian'], plan: 'Free', stars: 100, doneToday: 0, stats: {} };
  });
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [taskIdx, setTaskIdx] = useState(0);
  const [pdfTasks, setPdfTasks] = useState([]);
  const [pdfTopic, setPdfTopic] = useState('');
  const [pdfSubject, setPdfSubject] = useState('');
  const [testMode, setTestMode] = useState(null);
  const [result, setResult] = useState(null);
  const [showPlanInfo, setShowPlanInfo] = useState(false);
  const printRef = useRef();

  useEffect(() => {
    localStorage.setItem('egeboss_user', JSON.stringify(user));
  }, [user]);

  // Load tasks from external JSON
  useEffect(() => {
    fetch('/ege-boss/tasks.json')
      .then(r => r.json())
      .then(data => {
        SUBJECTS = data.subjects || [];
        ALL_TASKS = data.tasks || [];
        // Build TOPICS_BY_SUBJECT
        TOPICS_BY_SUBJECT = {};
        ALL_TASKS.forEach(t => {
          if (!TOPICS_BY_SUBJECT[t.subject]) TOPICS_BY_SUBJECT[t.subject] = new Set();
          TOPICS_BY_SUBJECT[t.subject].add(t.topic || '');
        });
        setReady(true);
      })
      .catch(() => {
        // Fallback: empty
        setReady(true);
      });
  }, []);

  const nav = s => { setScreen(s); setFeedback(null); setAnswer(''); setResult(null); setShowPlanInfo(false); };

  const toggleSubj = id => {
    setUser(p => {
      if (p.subjects.includes(id)) return { ...p, subjects: p.subjects.filter(s => s !== id) };
      if (p.subjects.length >= 3) return p;
      return { ...p, subjects: [...p.subjects, id] };
    });
  };

  const getDaily = () => {
    const subjs = user.subjects.length ? user.subjects : ['math'];
    const pool = ALL_TASKS.filter(t => subjs.includes(t.subject));
    const count = user.plan === 'Pro' ? 5 : 1;
    const picked = shuffle(pool).slice(0, count);
    setDailyTasks(picked);
    setTaskIdx(0);
    setAnswer('');
    setFeedback(null);
    setScreen('tasks');
  };

  const checkAnswer = () => {
    if (!answer.trim()) return;
    const t = dailyTasks[taskIdx];
    if (parseInt(answer) === t.answerIdx) {
      setFeedback('correct');
      setUser(p => ({ ...p, doneToday: p.doneToday + 1 }));
    } else {
      setFeedback('incorrect');
    }
  };

  const nextTask = () => {
    if (taskIdx + 1 < dailyTasks.length) {
      setTaskIdx(i => i + 1);
      setAnswer('');
      setFeedback(null);
    } else {
      setResult({ total: dailyTasks.length, correct: user.doneToday });
      setFeedback(null);
    }
  };

  const genTopicTest = (subject, topic, count) => {
    const pool = ALL_TASKS.filter(t => t.subject === subject && t.topic === topic);
    const picked = shuffle(pool).slice(0, count);
    setPdfTasks(picked);
    setPdfTopic(topic);
    setPdfSubject(subject);
    setTestMode('topic');
    setScreen('test');
  };

  const genKimVariant = (subject) => {
    const pool = ALL_TASKS.filter(t => t.subject === subject);
    const picked = shuffle(pool).slice(0, 10);
    setPdfTasks(picked);
    setPdfSubject(subject);
    setPdfTopic('');
    setTestMode('kim');
    setScreen('test');
  };

  const buildPdfHtml = () => {
    if (testMode === 'topic') {
      return `<div class="page">
        <div class="title">ЕГЭ 2027</div>
        <div class="subtitle">${SUBJECTS.find(s => s.id === pdfSubject)?.name}<br/>Тема: ${pdfTopic}</div>
        ${pdfTasks.map((t, i) => `
          <div class="task-frame">
            <div class="num">Задание ${i + 1}.</div>
            <div>${t.question}</div>
            <div class="opts">${t.options.map((o, j) => `${String.fromCharCode(65 + j)}) ${o}`).join('<br/>')}</div>
            <div class="grid"></div>
          </div>
        `).join('')}
        <div class="answers"><div class="header">Ответы</div>
        ${pdfTasks.map((t, i) => `<div class="row">${i + 1}. ${String.fromCharCode(65 + t.answerIdx)}</div>`).join('')}
        </div></div>`;
    }
    if (testMode === 'kim') {
      return `<div class="page">
        <div class="title">ЕГЭ 2027</div>
        <div class="subtitle">${SUBJECTS.find(s => s.id === pdfSubject)?.name}<br/>Тренировочный вариант</div>
        <div style="margin-bottom:10mm;font-size:10pt;"><b>Инструкция:</b> Экзамен состоит из ${pdfTasks.length} заданий. Время 235 мин.</div>
        ${pdfTasks.map((t, i) => `
          <div class="task-frame">
            <div class="num">Задание ${i + 1}.</div>
            <div>${t.question}</div>
            <div class="opts">${t.options.map((o, j) => `${String.fromCharCode(65 + j)}) ${o}`).join('<br/>')}</div>
            <div class="grid"></div>
          </div>
        `).join('')}
        <div style="page-break-before:always;"></div>
        <div class="header">Бланк ответов №1</div>
        <div class="blanks">
          <table><tr><td>№</td>${pdfTasks.map((_, i) => `<td>${i + 1}</td>`).join('')}</tr>
          <tr><td>Ответ</td>${pdfTasks.map(() => '<td></td>').join('')}</tr></table>
        </div>
        <div style="page-break-before:always;"></div>
        <div class="header">Бланк ответов №2</div>
        <div class="blanks" style="min-height:140mm"></div>
        <div style="page-break-before:always;"></div>
        <div class="header">Черновик</div>
        <div class="draft"></div>
        <div style="page-break-before:always;"></div>
        <div class="answers"><div class="header">Ответы</div>
        ${pdfTasks.map((t, i) => `<div class="row">${i + 1}. ${String.fromCharCode(65 + t.answerIdx)}</div>`).join('')}
        </div></div>`;
    }
    return '';
  };

  const handlePrint = () => generatePDF(buildPdfHtml());

  // ── renderers ────────────────────────────────────────

  const HomeScreen = () => (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
      <div className="text-center py-8 border-b-2 border-[#8B0000]">
        <Crown className="text-[#c69c6d] w-16 h-16 mx-auto mb-4 opacity-90" />
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#c69c6d] mb-2">БОСС ЕГЭ</h1>
        <p className="text-gray-400 font-light tracking-[0.2em] text-sm uppercase">Дисциплина. Стратегия. Результат.</p>
        <p className="text-xs text-gray-600 mt-2">{ALL_TASKS.length} заданий в базе</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { id: 'tasks', icon: Target, title: 'Задания', badge: user.plan === 'Pro' ? '5' : '1' },
          { id: 'subject_pick_topic', icon: FileText, title: 'Тест по теме', badge: 'PDF' },
          { id: 'subject_pick_kim', icon: BookOpen, title: 'Вариант КИМ', badge: 'Экзамен' },
          { id: 'stats', icon: BarChart2, title: 'Статистика', badge: 'Прогресс' },
          { id: 'profile', icon: User, title: 'Профиль', badge: user.plan },
          { id: 'help', icon: HelpCircle, title: 'Помощь', badge: 'Инфо' },
        ].map(item => (
          <button key={item.id} onClick={() => {
            if (item.id === 'subject_pick_topic') { setScreen('subject_pick_topic'); return; }
            if (item.id === 'subject_pick_kim') { setScreen('subject_pick_kim'); return; }
            if (item.id === 'tasks') { getDaily(); return; }
            nav(item.id);
          }} className="bg-[#151515] border border-[#333] hover:border-[#c69c6d] p-6 flex flex-col items-center text-center group transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-[10px] text-gray-500 uppercase tracking-wider">{item.badge}</div>
            <item.icon className="text-[#8B0000] group-hover:text-[#c69c6d] w-10 h-10 mb-4 transition-colors duration-300" />
            <span className="font-serif text-sm md:text-base text-[#e0d6c8] uppercase">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const TasksScreen = () => {
    if (dailyTasks.length === 0) return <div className="text-center py-12 text-gray-500">Нажми «Задания» на главной</div>;
    if (result) return (
      <div className="text-center py-12 bg-[#151515] border border-[#333] max-w-md mx-auto">
        <Award className="w-16 h-16 text-[#c69c6d] mx-auto mb-4" />
        <h3 className="text-xl text-white font-serif mb-4">Результат</h3>
        <p className="text-gray-400">Верно: {result.correct} / {result.total}</p>
        <p className="text-gray-400">Точность: {result.total ? Math.round(result.correct / result.total * 100) : 0}%</p>
        <button onClick={() => { setResult(null); setDailyTasks([]); nav('home'); }} className="mt-6 bg-[#8B0000] text-white px-6 py-2 uppercase tracking-widest text-sm">На главную</button>
      </div>
    );
    const t = dailyTasks[taskIdx];
    const limit = user.plan === 'Pro' ? 5 : 1;
    return (
      <div className="animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-4 mb-8 border-b border-[#333] pb-4">
          <button onClick={() => nav('home')} className="text-[#c69c6d] hover:text-white"><ChevronLeft size={28} /></button>
          <h2 className="font-serif text-2xl md:text-3xl text-[#c69c6d] uppercase tracking-widest">Задания</h2>
          <span className="ml-auto text-sm text-gray-500">{user.doneToday}/{limit}</span>
        </div>
        <div className="bg-[#151515] border border-[#333] p-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6 text-sm">
            <span className="text-[#c69c6d] font-semibold uppercase tracking-wider">{t.subjectName}</span>
            <span className="text-gray-500">{taskIdx + 1}/{dailyTasks.length}</span>
          </div>
          <div className="bg-[#101010] p-6 border border-[#222] mb-6 min-h-[100px] text-lg text-white">
            {t.question}
          </div>
          <div className="space-y-2 mb-6">
            {t.options.map((o, i) => (
              <button key={i} onClick={() => setAnswer(String(i))} className={`w-full text-left p-3 border text-sm transition-all ${answer === String(i) ? 'border-[#c69c6d] bg-[#c69c6d]/10' : 'border-[#333] hover:border-[#666]'}`}>
                {String.fromCharCode(65 + i)}. {o}
              </button>
            ))}
          </div>
          <button onClick={feedback === 'correct' ? nextTask : checkAnswer} disabled={!answer.trim()} className="w-full bg-[#8B0000] hover:bg-[#660000] disabled:opacity-30 text-white py-3 uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
            {feedback === 'correct' ? 'Далее' : <><Send size={18}/>Ответить</>}
          </button>
          {feedback && (
            <div className={`mt-4 p-4 border flex items-center gap-3 ${feedback === 'correct' ? 'bg-green-900/20 border-green-800 text-green-400' : 'bg-red-900/20 border-red-800 text-red-400'}`}>
              {feedback === 'correct' ? <Check size={20} /> : <X size={20} />}
              <span>{feedback === 'correct' ? 'Верно!' : `Неверно. Правильный ответ: ${String.fromCharCode(65 + t.answerIdx)}`}</span>
            </div>
          )}
          {feedback === 'incorrect' && t.explanation && (
            <div className="mt-2 p-3 bg-[#101010] border border-[#333] text-sm text-gray-400">{t.explanation}</div>
          )}
        </div>
      </div>
    );
  };

  const SubjectPickScreen = ({ mode }) => {
    const [step, setStep] = useState('subject');
    const [subj, setSubj] = useState('');
    const [topic, setTopic] = useState('');
    const [count, setCount] = useState(10);
    const topics = subj ? [...(TOPICS_BY_SUBJECT[subj] || [])] : [];

    if (step === 'subject') return (
      <div className="animate-in fade-in">
        <div className="flex items-center gap-4 mb-8 border-b border-[#333] pb-4">
          <button onClick={() => nav('home')} className="text-[#c69c6d] hover:text-white"><ChevronLeft size={28} /></button>
          <h2 className="font-serif text-2xl text-[#c69c6d] uppercase tracking-widest">{mode === 'kim' ? 'Вариант КИМ' : 'Тест по теме'}</h2>
        </div>
        <p className="text-gray-500 mb-6">Выбери предмет:</p>
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {user.subjects.map(s => {
            const sub = SUBJECTS.find(x => x.id === s);
            return <button key={s} onClick={() => {
              setSubj(s);
              if (mode === 'kim') { genKimVariant(s); return; }
              setStep('topic');
            }} className="bg-[#151515] border border-[#333] hover:border-[#c69c6d] p-4 text-left text-white transition-all">{sub?.name}</button>;
          })}
        </div>
      </div>
    );

    return (
      <div className="animate-in fade-in">
        <div className="flex items-center gap-4 mb-8 border-b border-[#333] pb-4">
          <button onClick={() => setStep('subject')} className="text-[#c69c6d]"><ChevronLeft size={28} /></button>
          <h2 className="font-serif text-2xl text-[#c69c6d] uppercase tracking-widest">Тест по теме</h2>
        </div>
        <p className="text-gray-500 mb-4">Тема ({SUBJECTS.find(s => s.id === subj)?.name}):</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {topics.map(t => <button key={t} onClick={() => { setTopic(t); setStep('count'); }} className={`px-4 py-2 border text-sm transition-all ${topic === t ? 'bg-[#c69c6d] text-black border-[#c69c6d]' : 'border-[#333] text-gray-400 hover:border-[#8B0000]'}`}>{t}</button>)}
        </div>
        {step === 'count' && (
          <div>
            <p className="text-gray-500 mb-4">Количество:</p>
            <div className="flex gap-2">
              {[5, 10, 15, 20].map(c => <button key={c} onClick={() => { setCount(c); genTopicTest(subj, topic, c); }} className={`px-6 py-3 border text-lg transition-all ${count === c ? 'bg-[#8B0000] text-white border-[#8B0000]' : 'border-[#333] text-gray-400 hover:border-[#8B0000]'}`}>{c}</button>)}
            </div>
          </div>
        )}
      </div>
    );
  };

  const TestScreen = () => (
    <div className="animate-in fade-in">
      <div className="flex items-center gap-4 mb-8 border-b border-[#333] pb-4">
        <button onClick={() => nav('home')} className="text-[#c69c6d] hover:text-white"><ChevronLeft size={28} /></button>
        <h2 className="font-serif text-2xl text-[#c69c6d] uppercase tracking-widest">{testMode === 'kim' ? 'Вариант КИМ' : pdfTopic}</h2>
        <button onClick={handlePrint} className="ml-auto bg-[#151515] border border-[#333] p-2 text-[#c69c6d] hover:bg-[#333]" title="Скачать PDF"><Printer size={20} /></button>
      </div>
      <div ref={printRef} className="bg-[#e4dccf] text-black p-4 md:p-8 max-w-3xl mx-auto shadow-2xl overflow-hidden" style={{ backgroundImage: 'linear-gradient(#c8c8c8 1px, transparent 1px), linear-gradient(90deg, #c8c8c8 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <div className="bg-white/80 p-6 border-2 border-black mb-8 backdrop-blur-sm mt-4">
          <h3 className="font-serif font-bold text-2xl uppercase tracking-widest text-center border-b-2 border-black pb-4 mb-4">
            {SUBJECTS.find(s => s.id === pdfSubject)?.name}
          </h3>
          <p className="text-center font-bold">{testMode === 'kim' ? 'Тренировочный вариант' : `Тема: ${pdfTopic}`}</p>
        </div>
        <div className="space-y-6">
          {pdfTasks.map((t, i) => (
            <div key={i} className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-bold mb-2">Задание {i + 1}.</div>
              <p className="mb-4">{t.question}</p>
              <div className="text-sm mb-4">{[...Array(4)].map((_, j) => t.options[j] ? <div key={j}>{String.fromCharCode(65 + j)}. {t.options[j]}</div> : null)}</div>
              <div className="border border-dashed border-gray-400 h-32 flex items-center justify-center text-gray-400 italic">Поле для решения</div>
              <div className="mt-2 text-right text-xs text-gray-500">N{i + 1}</div>
            </div>
          ))}
        </div>
        {testMode === 'kim' && (
          <>
            <div className="mt-12 border-t-2 border-black pt-6">
              <h4 className="font-bold text-center text-lg mb-4">Бланк ответов №1</h4>
              <div className="border-2 border-black p-4">
                <div className="grid grid-cols-5 gap-2 text-center text-sm">
                  {pdfTasks.map((_, i) => <div key={i} className="border border-black p-2">{i + 1}.</div>)}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-center text-lg mb-4">Бланк ответов №2</h4>
              <div className="border-2 border-black p-4 min-h-[200px]"></div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-center text-lg mb-4">Черновик</h4>
              <div className="border-2 border-dashed border-gray-500 p-4 min-h-[250px]"></div>
            </div>
          </>
        )}
        <div className="mt-12 border-t-2 border-black pt-6">
          <h4 className="font-bold text-center text-lg mb-4">Ответы</h4>
          <div className="space-y-1 text-center">
            {pdfTasks.map((t, i) => <div key={i}>{i + 1}. {String.fromCharCode(65 + t.answerIdx)}</div>)}
          </div>
        </div>
        <div className="mt-6 text-center text-xs font-bold uppercase tracking-widest">Сгенерировано системой БОСС ЕГЭ</div>
      </div>
      <div className="max-w-3xl mx-auto mt-6 flex justify-center gap-4">
        <button onClick={handlePrint} className="bg-[#8B0000] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#660000] transition-colors shadow-lg shadow-red-900/20 flex items-center gap-2">
          <Printer size={18}/> PDF / Печать
        </button>
        <button onClick={() => nav('home')} className="border border-[#333] text-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-[#333] transition-colors">Главная</button>
      </div>
    </div>
  );

  const StatsScreen = () => {
    const hasSub = user.plan === 'Pro';
    return (
      <div className="animate-in fade-in">
        <div className="flex items-center gap-4 mb-8 border-b border-[#333] pb-4">
          <button onClick={() => nav('home')} className="text-[#c69c6d] hover:text-white"><ChevronLeft size={28} /></button>
          <h2 className="font-serif text-2xl text-[#c69c6d] uppercase tracking-widest">Статистика</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#151515] border border-[#333] p-6">
            <h3 className="font-serif text-xl text-[#c69c6d] uppercase mb-6">Прогресс</h3>
            {user.subjects.map(sid => {
              const sn = SUBJECTS.find(x => x.id === sid)?.name;
              const score = user.stats[sid] || 0;
              return <div key={sid} className="mb-4">
                <div className="flex justify-between text-sm mb-1"><span className="text-white">{sn}</span><span className="text-[#c69c6d]">{score}/100</span></div>
                <div className="h-2 bg-[#222]"><div className="h-full bg-[#8B0000] transition-all" style={{ width: `${score}%` }}/></div>
              </div>;
            })}
          </div>
          <div className="bg-[#151515] border border-[#333] p-6 relative">
            {!hasSub && <div className="absolute inset-0 bg-[#101010]/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-6 text-center">
              <Crown className="text-gray-600 w-12 h-12 mb-4" />
              <p className="text-gray-400 text-sm mb-4">Детальная статистика в Pro</p>
              <button onClick={() => nav('profile')} className="bg-[#c69c6d] text-black px-6 py-2 text-sm uppercase font-bold tracking-widest">Pro</button>
            </div>}
            <h3 className="font-serif text-xl text-[#c69c6d] uppercase mb-6">Слабые зоны</h3>
            <p className="text-gray-500 text-sm">Решай задания — появятся данные.</p>
          </div>
        </div>
      </div>
    );
  };

  const ProfileScreen = () => (
    <div className="animate-in fade-in">
      <div className="flex items-center gap-4 mb-8 border-b border-[#333] pb-4">
        <button onClick={() => nav('home')} className="text-[#c69c6d] hover:text-white"><ChevronLeft size={28} /></button>
        <h2 className="font-serif text-2xl text-[#c69c6d] uppercase tracking-widest">Профиль</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="bg-[#151515] border border-[#333] p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#c69c6d] mb-4 flex items-center justify-center bg-[#101010]"><User className="w-10 h-10 text-[#c69c6d]" /></div>
            <div className={`px-4 py-1 text-xs font-bold tracking-widest uppercase border ${user.plan === 'Pro' ? 'bg-[#c69c6d] text-black border-[#c69c6d]' : 'text-gray-400 border-[#333]'}`}>{user.plan}</div>
            <button onClick={() => setUser(p => ({ ...p, plan: p.plan === 'Free' ? 'Pro' : 'Free' }))} className="mt-4 bg-[#8B0000] text-white py-2 px-4 text-xs uppercase tracking-widest hover:bg-[#660000]">[DEV] Переключить</button>
          </div>
          <div className="bg-[#151515] border border-[#333] p-6">
            <h4 className="font-serif text-lg text-[#c69c6d] uppercase mb-4">Звёзды</h4>
            <div className="flex items-center gap-2 text-2xl text-white"><Star className="text-yellow-500 fill-yellow-500" size={24}/>{user.stars}</div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#151515] border border-[#333] p-6">
            <h4 className="font-serif text-lg text-[#c69c6d] uppercase mb-2">Предметы</h4>
            <p className="text-sm text-gray-500 mb-6">{user.subjects.length}/3 выбрано</p>
            <div className="flex flex-wrap gap-3">
              {SUBJECTS.map(sub => {
                const sel = user.subjects.includes(sub.id);
                const maxed = !sel && user.subjects.length >= 3;
                return <button key={sub.id} onClick={() => toggleSubj(sub.id)} disabled={maxed}
                  className={`px-4 py-2 border text-xs tracking-wider uppercase transition-all ${sel ? 'bg-[#c69c6d] text-black border-[#c69c6d] font-semibold' : 'border-[#333] text-gray-400 hover:border-[#8B0000]'} ${maxed ? 'opacity-30 cursor-not-allowed' : ''}`}>{sub.name}</button>;
              })}
            </div>
          </div>
          <div className="bg-[#151515] border border-[#333] p-6">
            <div className="flex justify-between items-center mb-4"><h4 className="font-serif text-lg text-[#c69c6d] uppercase">Подписка</h4></div>
            {user.plan === 'Free' ? (
              <div className="border border-[#333] p-4">
                <h5 className="text-white font-serif mb-2">Pro доступ:</h5>
                <ul className="text-sm text-gray-400 space-y-2 mb-4">
                  <li>✅ 5 заданий в день (сейчас 1)</li>
                  <li>✅ Статистика по темам</li>
                  <li>✅ Вариант КИМ с бланками</li>
                  <li>✅ Напоминания</li>
                </ul>
                <button onClick={() => setShowPlanInfo(true)} className="bg-[#c69c6d] text-black px-6 py-2 text-sm uppercase font-bold tracking-widest w-full">Оформить Pro</button>
              </div>
            ) : (
              <div className="bg-green-900/20 border border-green-800 p-4 text-green-400 text-sm">Подписка активна</div>
            )}
          </div>
        </div>
      </div>
      {showPlanInfo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowPlanInfo(false)}>
          <div className="bg-[#151515] border border-[#c69c6d] p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <h3 className="font-serif text-2xl text-[#c69c6d] uppercase mb-6">Pro подписка</h3>
            <ul className="space-y-3 text-gray-300 mb-6 text-sm">
              <li>🔥 5 заданий в день вместо 1</li>
              <li>📊 Полная статистика и слабые темы</li>
              <li>📄 Вариант КИМ с бланками</li>
              <li>🔔 Напоминания о занятиях</li>
              <li>🤝 Закрытый чат</li>
            </ul>
            <p className="text-[#c69c6d] font-bold mb-6">50 звёзд / месяц</p>
            <div className="flex gap-3">
              <button className="flex-1 bg-[#c69c6d] text-black py-3 uppercase tracking-widest font-bold text-sm">Оплатить Stars</button>
              <button onClick={() => setShowPlanInfo(false)} className="border border-[#333] text-white px-6 py-3 text-sm uppercase tracking-widest">Закрыть</button>
            </div>
            <p className="text-xs text-gray-600 mt-4 text-center">Telegram Stars. Звёзды приходят на аккаунт бота</p>
          </div>
        </div>
      )}
    </div>
  );

  const HelpScreen = () => (
    <div className="animate-in fade-in">
      <div className="flex items-center gap-4 mb-8 border-b border-[#333] pb-4">
        <button onClick={() => nav('home')} className="text-[#c69c6d] hover:text-white"><ChevronLeft size={28} /></button>
        <h2 className="font-serif text-2xl text-[#c69c6d] uppercase tracking-widest">Помощь</h2>
      </div>
      <div className="bg-[#151515] border border-[#333] p-8 max-w-2xl mx-auto text-gray-400">
        <HelpCircle className="w-16 h-16 text-[#c69c6d] mx-auto mb-4" />
        <h3 className="text-white text-xl font-serif uppercase tracking-widest mb-4 text-center">БОСС ЕГЭ</h3>
        <div className="space-y-4 text-sm">
          <p>Выбираешь предметы в профиле. Каждый день решаешь норму. Pro открывает все возможности.</p>
          <p><b className="text-white">Тест по теме:</b> выбери тему → количество → PDF с полями для решения</p>
          <p><b className="text-white">Вариант КИМ:</b> полный экзаменационный вариант с бланками</p>
          <p><b className="text-white">PDF:</b> кнопка «Принтер» открывает диалог печати → сохрани как PDF</p>
        </div>
      </div>
    </div>
  );

  if (!ready) return <div className="min-h-screen bg-[#101010] text-[#c69c6d] flex items-center justify-center text-lg">Загрузка заданий...</div>;

  return (
    <div className="min-h-screen bg-[#101010] text-[#e0d6c8] font-sans flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        .font-serif{font-family:'Playfair Display',serif}.font-sans{font-family:'Montserrat',sans-serif}
        .bg-pattern{background-image:radial-gradient(#2a2a2a 1px,transparent 1px);background-size:20px 20px}
        ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#101010}::-webkit-scrollbar-thumb{background:#333}::-webkit-scrollbar-thumb:hover{background:#c69c6d}
        .animate-in{animation:animIn 0.3s ease-out}@keyframes animIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @media print{body{background:#fff!important}nav,header{display:none!important}}
      `}</style>
      <header className="bg-[#151515] border-b border-[#333] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => nav('home')}>
            <Crown className="text-[#c69c6d]" size={24} />
            <span className="font-serif font-bold text-lg tracking-widest text-[#c69c6d] uppercase">Босс ЕГЭ</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex text-xs uppercase tracking-widest text-gray-400 bg-[#101010] px-3 py-1 border border-[#333] items-center gap-1">{user.plan} <Star size={12} className="text-[#c69c6d]"/></span>
            <User className="text-gray-400 cursor-pointer hover:text-[#c69c6d]" size={20} onClick={() => nav('profile')} />
          </div>
        </div>
      </header>
      <main className="flex-1 bg-pattern relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[50vh] bg-[#5a1010]/10 blur-[120px] -z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 py-8 pb-32">
          {screen === 'home' && <HomeScreen />}
          {screen === 'tasks' && <TasksScreen />}
          {screen === 'subject_pick_topic' && <SubjectPickScreen mode="topic" />}
          {screen === 'subject_pick_kim' && <SubjectPickScreen mode="kim" />}
          {screen === 'test' && <TestScreen />}
          {screen === 'stats' && <StatsScreen />}
          {screen === 'profile' && <ProfileScreen />}
          {screen === 'help' && <HelpScreen />}
        </div>
      </main>
      <nav className="bg-[#151515] border-t border-[#333] fixed bottom-0 w-full z-50">
        <div className="max-w-4xl mx-auto flex justify-around items-center h-16 px-2">
          {[
            { id: 'home', icon: Home, label: 'Главная' },
            { id: 'tasks', icon: Target, label: 'Задания', action: getDaily },
            { id: 'stats', icon: BarChart2, label: 'Стата' },
            { id: 'profile', icon: User, label: 'Профиль' }
          ].map(tab => (
            <button key={tab.id} onClick={() => tab.action ? tab.action() : nav(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${(screen === tab.id) || (tab.id === 'home' && ['home','subject_pick_topic','subject_pick_kim','test','help'].includes(screen)) ? 'text-[#c69c6d]' : 'text-gray-500 hover:text-gray-300'}`}>
              <tab.icon size={20} />
              <span className="text-[10px] uppercase tracking-widest font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
