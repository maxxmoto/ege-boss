// Auto-generated from EGE-BOSS Python backend
export const SUBJECTS = [
  {
    "id": "math",
    "name": "Математика (профиль)"
  },
  {
    "id": "russian",
    "name": "Русский язык"
  },
  {
    "id": "physics",
    "name": "Физика"
  },
  {
    "id": "chemistry",
    "name": "Химия"
  },
  {
    "id": "english",
    "name": "Английский язык"
  },
  {
    "id": "biology",
    "name": "Биология"
  },
  {
    "id": "history",
    "name": "История"
  },
  {
    "id": "society",
    "name": "Обществознание"
  },
  {
    "id": "informatics",
    "name": "Информатика"
  }
];

export const ALL_TASKS = [
  {
    "id": "m1",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение sqrt(x+3) = x - 1. Если корней несколько, в ответе укажите их сумму.",
    "options": [
      "-1",
      "2",
      "3",
      "1"
    ],
    "answerIdx": 1,
    "explanation": "ОДЗ: x+3 >= 0 и x-1 >= 0 => x >= 1. Возводим в квадрат: x+3 = (x-1)^2 => x+3 = x^2 - 2x + 1 => x^2 - 3x - 2 = 0 => x = 2 или x = -1. x = -1 не подходит по ОДЗ. Ответ: 2."
  },
  {
    "id": "m2",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "Вычислите значение выражения: log2(8) + log3(9) - log5(25)",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": "log2(8) = 3 (т.к. 2^3=8), log3(9) = 2 (3^2=9), log5(25) = 2 (5^2=25). Итого: 3+2-2 = 3."
  },
  {
    "id": "m3",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "На отрезке [0; pi] решите уравнение sin(2x) = 1/2. Укажите количество корней.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 1,
    "explanation": "2x = pi/6 + 2pi*k или 2x = 5pi/6 + 2pi*k. x = pi/12 + pi*k или x = 5pi/12 + pi*k. На [0; pi]: x = pi/12, x = 5pi/12. Два корня."
  },
  {
    "id": "m4",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите значение производной функции f(x) = x^3 * ln(x) в точке x = 1.",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answerIdx": 1,
    "explanation": "f'(x) = 3x^2*ln(x) + x^3*(1/x) = 3x^2*ln(x) + x^2. f'(1) = 3*1*0 + 1 = 1."
  },
  {
    "id": "m5",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Бросают две игральные кости. Найдите вероятность того, что сумма выпавших очков больше 8.",
    "options": [
      "5/18",
      "7/36",
      "5/36",
      "1/6"
    ],
    "answerIdx": 0,
    "explanation": "Всего исходов: 6*6=36. Благоприятные: (3,6),(4,5),(4,6),(5,4),(5,5),(5,6),(6,3),(6,4),(6,5),(6,6) - 10 исходов. P = 10/36 = 5/18."
  },
  {
    "id": "m6",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "В треугольнике ABC угол C = 90°, AB = 10, AC = 6. Найдите sin B.",
    "options": [
      "0.6",
      "0.8",
      "0.75",
      "0.5"
    ],
    "answerIdx": 0,
    "explanation": "BC = sqrt(AB^2 - AC^2) = sqrt(100-36) = 8. sin B = AC/AB = 6/10 = 0.6."
  },
  {
    "id": "m7",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Высота цилиндра равна 5, радиус основания равен 3. Найдите объем цилиндра.",
    "options": [
      "15pi",
      "30pi",
      "45pi",
      "75pi"
    ],
    "answerIdx": 2,
    "explanation": "V = pi*R^2*h = pi*9*5 = 45pi."
  },
  {
    "id": "m8",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Решите неравенство: 2^x + 2^(x-1) < 12. В ответе укажите наибольшее целое решение.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 2,
    "explanation": "2^x + 2^x/2 < 12 => (3/2)*2^x < 12 => 2^x < 8 => x < 3. Наибольшее целое: x = 2."
  },
  {
    "id": "m9",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Текстовые задачи",
    "question": "Теплоход проходит по течению от A до B за 4 часа, против течения - за 6 часов. За сколько часов проплывет это расстояние плот?",
    "options": [
      "12",
      "18",
      "24",
      "10"
    ],
    "answerIdx": 2,
    "explanation": "v_тепл + v_теч = S/4, v_тепл - v_теч = S/6. Вычитаем: 2v_теч = S/4 - S/6 = S/12 => v_теч = S/24. Время плота = S/v_теч = 24 часа."
  },
  {
    "id": "m10",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Параметры",
    "question": "При каких значениях a уравнение |x^2 - 4| = a имеет ровно 3 корня?",
    "options": [
      "a=4",
      "a=0",
      "a=2",
      "a=3"
    ],
    "answerIdx": 0,
    "explanation": "График y = |x^2-4|. При a=4 прямая y=4 пересекает его в 3 точках: x=-2, x=0, x=2."
  },
  {
    "id": "m11",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Степени",
    "question": "Найдите значение выражения: (3^4 * 3^(-2)) / 3",
    "options": [
      "3",
      "9",
      "27",
      "81"
    ],
    "answerIdx": 1,
    "explanation": "3^4 * 3^(-2) = 3^2 = 9. 9/3 = 3."
  },
  {
    "id": "m12",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Показательные уравнения",
    "question": "Решите уравнение: 3^(x-1) = 27",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": "27 = 3^3. x-1 = 3 => x = 4."
  },
  {
    "id": "m13",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Иррациональные уравнения",
    "question": "Найдите корень уравнения sqrt(2x+1) = 3",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 1,
    "explanation": "2x+1 = 9 => 2x = 8 => x = 4."
  },
  {
    "id": "m14",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Прогрессии",
    "question": "Дана арифметическая прогрессия: 3, 7, 11, ... Найдите её 10-й член.",
    "options": [
      "35",
      "39",
      "43",
      "47"
    ],
    "answerIdx": 1,
    "explanation": "d = 4, a10 = a1 + 9d = 3 + 36 = 39."
  },
  {
    "id": "m15",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите sin(2a), если sin(a) = 0.6 и a в I четверти.",
    "options": [
      "0.96",
      "0.8",
      "0.48",
      "0.6"
    ],
    "answerIdx": 0,
    "explanation": "cos(a) = 0.8 (т.к. sin^2+cos^2=1). sin(2a) = 2*0.6*0.8 = 0.96."
  },
  {
    "id": "m16",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Найдите площадь прямоугольного треугольника с катетами 6 и 8.",
    "options": [
      "24",
      "48",
      "14",
      "28"
    ],
    "answerIdx": 0,
    "explanation": "S = 0.5*6*8 = 24."
  },
  {
    "id": "m17",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "В цилиндре высота 10 см, радиус основания 4 см. Найдите площадь боковой поверхности.",
    "options": [
      "40pi",
      "80pi",
      "160pi",
      "20pi"
    ],
    "answerIdx": 1,
    "explanation": "S_бок = 2pi*R*h = 2pi*4*10 = 80pi."
  },
  {
    "id": "m18",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Преобразования",
    "question": "Упростите выражение: (x^2-9)/(x-3)",
    "options": [
      "x-3",
      "x+3",
      "x-9",
      "x+9"
    ],
    "answerIdx": 1,
    "explanation": "(x^2-9) = (x-3)(x+3). Сокращаем (x-3), получаем x+3."
  },
  {
    "id": "m19",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите производную f(x) = sin(x) + cos(x) в точке x = pi/4.",
    "options": [
      "0",
      "1",
      "sqrt2",
      "-sqrt2"
    ],
    "answerIdx": 0,
    "explanation": "f'(x) = cos(x) - sin(x). f'(pi/4) = sqrt2/2 - sqrt2/2 = 0."
  },
  {
    "id": "m20",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Решите неравенство |x-2| < 3. Укажите длину промежутка.",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 1,
    "explanation": "-3 < x-2 < 3 => -1 < x < 5. Длина = 5-(-1) = 6."
  },
  {
    "id": "m21",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "Найдите log_5(125) + log_2(16)",
    "options": [
      "5",
      "7",
      "9",
      "10"
    ],
    "answerIdx": 1,
    "explanation": "log5(125) = 3 (5^3=125), log2(16) = 4 (2^4=16). 3+4=7."
  },
  {
    "id": "m22",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Вероятность выпадения орла 0.5. Монету бросили 3 раза. Найдите вероятность, что орёл выпадет ровно 2 раза.",
    "options": [
      "0.25",
      "0.375",
      "0.5",
      "0.125"
    ],
    "answerIdx": 1,
    "explanation": "P = C(3,2)*0.5^3 = 3*0.125 = 0.375."
  },
  {
    "id": "m23",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Функции",
    "question": "Найдите f(2) если f(x) = x^2 - 3x + 1",
    "options": [
      "-1",
      "1",
      "3",
      "5"
    ],
    "answerIdx": 3,
    "explanation": "f(2) = 4 - 6 + 1 = -1."
  },
  {
    "id": "m24",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Решите уравнение: sin(x) = 1/2 на [0, pi]. Укажите сумму корней.",
    "options": [
      "pi/6",
      "pi/3",
      "pi/2",
      "2pi/3"
    ],
    "answerIdx": 0,
    "explanation": "x = pi/6 или x = 5pi/6. Сумма = pi/6 + 5pi/6 = pi."
  },
  {
    "id": "m25",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Найдите наибольшее целое решение неравенства 3^x < 27",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 1,
    "explanation": "3^x < 27 => 3^x < 3^3 => x < 3. Наибольшее целое: 2."
  },
  {
    "id": "m26",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Векторы",
    "question": "Вектор a = (2, -1), вектор b = (3, 4). Найдите a * b (скалярное произведение).",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answerIdx": 0,
    "explanation": "a*b = 2*3 + (-1)*4 = 6 - 4 = 2."
  },
  {
    "id": "m27",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Прогрессии",
    "question": "Геометрическая прогрессия: 2, 6, 18, ... Найдите сумму первых 4 членов.",
    "options": [
      "40",
      "54",
      "80",
      "162"
    ],
    "answerIdx": 2,
    "explanation": "q=3, S4 = 2*(3^4-1)/(3-1) = 2*80/2 = 80."
  },
  {
    "id": "m28",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите точку максимума функции f(x) = -x^2 + 4x + 1",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 1,
    "explanation": "f'(x) = -2x + 4 = 0 => x = 2. Ветви вниз, это максимум."
  },
  {
    "id": "m29",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Периметр квадрата 24. Найдите его диагональ.",
    "options": [
      "6",
      "6sqrt2",
      "12",
      "12sqrt2"
    ],
    "answerIdx": 1,
    "explanation": "Сторона = 6. Диагональ = 6*sqrt2."
  },
  {
    "id": "m30",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "log_3(x) = 2. Найдите x.",
    "options": [
      "6",
      "9",
      "27",
      "81"
    ],
    "answerIdx": 1,
    "explanation": "x = 3^2 = 9."
  },
  {
    "id": "m31",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Показательные уравнения",
    "question": "Найдите корень уравнения: 2^(x+1) = 32",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 1,
    "explanation": "32 = 2^5. x+1 = 5 => x = 4."
  },
  {
    "id": "m32",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите значение cos(60°) + sin(30°)",
    "options": [
      "0.5",
      "1",
      "1.5",
      "2"
    ],
    "answerIdx": 1,
    "explanation": "cos60 = 0.5, sin30 = 0.5. Сумма = 1."
  },
  {
    "id": "m33",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Радиус шара 3. Найдите его объём.",
    "options": [
      "27pi",
      "36pi",
      "48pi",
      "108pi"
    ],
    "answerIdx": 1,
    "explanation": "V = 4/3 * pi * R^3 = 4/3 * 27 * pi = 36pi."
  },
  {
    "id": "m34",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Площадь треугольника 24, высота 6. Найдите основание.",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "answerIdx": 2,
    "explanation": "S = 0.5 * a * h => a = 2S/h = 48/6 = 8."
  },
  {
    "id": "m35",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Степени",
    "question": "Найдите значение выражения: 0.25 * 4^3",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answerIdx": 2,
    "explanation": "4^3=64, 0.25*64=16."
  },
  {
    "id": "m36",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Степени",
    "question": "Упростите: (a^2)^3 / a^4",
    "options": [
      "a^2",
      "a^3",
      "a^6",
      "a"
    ],
    "answerIdx": 0,
    "explanation": "a^(6-4)=a^2."
  },
  {
    "id": "m37",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите cos(a), если sin(a)=0.8 и a в I четверти.",
    "options": [
      "0.2",
      "0.4",
      "0.6",
      "0.8"
    ],
    "answerIdx": 2,
    "explanation": "cos^2=1-0.64=0.36, cos=0.6."
  },
  {
    "id": "m38",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Показательные уравнения",
    "question": "Решите: 5^(2x-1) = 125",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 1,
    "explanation": "125=5^3 => 2x-1=3 => x=2."
  },
  {
    "id": "m39",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите tg(45°) - cos(60°).",
    "options": [
      "0",
      "0.5",
      "1",
      "1.5"
    ],
    "answerIdx": 1,
    "explanation": "tg45=1, cos60=0.5, 1-0.5=0.5."
  },
  {
    "id": "m40",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Статистика",
    "question": "Среднее арифметическое чисел 5, 8, 12, x равно 8. Найдите x.",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answerIdx": 2,
    "explanation": "(5+8+12+x)/4=8 => x=32-25=7."
  },
  {
    "id": "m41",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "Найдите корень: log2(x) = -1",
    "options": [
      "0.25",
      "0.5",
      "1",
      "2"
    ],
    "answerIdx": 1,
    "explanation": "x=2^(-1)=0.5."
  },
  {
    "id": "m42",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Вероятность дождя 0.3. Найдите вероятность, что дождя НЕ будет.",
    "options": [
      "0.3",
      "0.5",
      "0.7",
      "0.9"
    ],
    "answerIdx": 2,
    "explanation": "P=1-0.3=0.7."
  },
  {
    "id": "m43",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Найдите площадь круга радиусом 5.",
    "options": [
      "10pi",
      "25pi",
      "50pi",
      "100pi"
    ],
    "answerIdx": 1,
    "explanation": "S=pi*5^2=25pi."
  },
  {
    "id": "m44",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите: |2x-1| = 3. Укажите сумму корней.",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answerIdx": 1,
    "explanation": "2x-1=3 => x=2, 2x-1=-3 => x=-1. Сумма=1."
  },
  {
    "id": "m45",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите f'(x) если f(x)=5x^4.",
    "options": [
      "20x^3",
      "15x^3",
      "10x^3",
      "5x^3"
    ],
    "answerIdx": 0,
    "explanation": "f'=5*4*x^3=20x^3."
  },
  {
    "id": "m46",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Текстовые задачи",
    "question": "Сумма двух чисел 15, разность 3. Найдите большее число.",
    "options": [
      "7",
      "9",
      "10",
      "12"
    ],
    "answerIdx": 1,
    "explanation": "x+y=15, x-y=3 => 2x=18 => x=9."
  },
  {
    "id": "m47",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Объём куба 27. Найдите его ребро.",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 1,
    "explanation": "a^3=27 => a=3."
  },
  {
    "id": "m48",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Комбинаторика",
    "question": "Найдите: 3! + 4!",
    "options": [
      "7",
      "10",
      "24",
      "30"
    ],
    "answerIdx": 3,
    "explanation": "3!=6, 4!=24, 6+24=30."
  },
  {
    "id": "m49",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Иррациональные уравнения",
    "question": "Решите: sqrt(2x+1) = 3",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": "2x+1=9 => x=4."
  },
  {
    "id": "m50",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 3x - 1 = 22",
    "options": [
      "29",
      "18",
      "95",
      "14"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m51",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: x + 39 = 21",
    "options": [
      "5",
      "4",
      "12",
      "28"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m52",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 2x = 80",
    "options": [
      "92",
      "84",
      "90",
      "70"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m53",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 5x - 15 = 42",
    "options": [
      "1",
      "98",
      "21",
      "90"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m54",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: x + 26 = 45",
    "options": [
      "28",
      "98",
      "44",
      "14"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m55",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 8x = 21",
    "options": [
      "45",
      "78",
      "34",
      "6"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m56",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Показательные уравнения",
    "question": "Решите: 3^(x-5) = 8",
    "options": [
      "11",
      "71",
      "38",
      "81"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m57",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Показательные уравнения",
    "question": "Решите: 3^(x-5) = 16",
    "options": [
      "6",
      "85",
      "30",
      "99"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m58",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "Найдите значение: log2(25)",
    "options": [
      "13",
      "49",
      "36",
      "59"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m59",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "Найдите значение: log5(27)",
    "options": [
      "46",
      "27",
      "86",
      "35"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m60",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите значение: sin(45) + sin(30)",
    "options": [
      "49",
      "35",
      "82",
      "89"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m61",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите значение: sin(60) + sin(30)",
    "options": [
      "41",
      "52",
      "35",
      "9"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m62",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите производную: f(x) = 6x^4",
    "options": [
      "28",
      "84",
      "64",
      "51"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m63",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите производную: f(x) = 5x^2",
    "options": [
      "18",
      "32",
      "96",
      "72"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m64",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Вероятность события A равна 0.4. Найдите вероятность противоположного события.",
    "options": [
      "75",
      "52",
      "47",
      "29"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m65",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Вероятность события A равна 0.7. Найдите вероятность противоположного события.",
    "options": [
      "12",
      "97",
      "7",
      "15"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m66",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Сторона квадрата равна 5. Найдите его площадь.",
    "options": [
      "77",
      "9",
      "50",
      "49"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m67",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Сторона квадрата равна 10. Найдите его площадь.",
    "options": [
      "88",
      "93",
      "15",
      "69"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m68",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Радиус шара 8. Найдите площадь поверхности.",
    "options": [
      "38",
      "56",
      "21",
      "59"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m69",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Радиус шара 7. Найдите площадь поверхности.",
    "options": [
      "65",
      "98",
      "23",
      "14"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m70",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Решите неравенство: 4x < 50. Укажите наибольшее целое решение.",
    "options": [
      "20",
      "48",
      "98",
      "21"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m71",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Решите неравенство: 2x < 48. Укажите наибольшее целое решение.",
    "options": [
      "63",
      "3",
      "15",
      "47"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m72",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Текстовые задачи",
    "question": "Велосипедист проехал 55 км за 2 часа. Найдите его скорость.",
    "options": [
      "73",
      "11",
      "94",
      "63"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m73",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Текстовые задачи",
    "question": "Велосипедист проехал 93 км за 3 часа. Найдите его скорость.",
    "options": [
      "85",
      "61",
      "71",
      "22"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m74",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Функции",
    "question": "Найдите f(4) если f(x) = 3x + 6",
    "options": [
      "70",
      "97",
      "94",
      "89"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m75",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Функции",
    "question": "Найдите f(5) если f(x) = 2x + 6",
    "options": [
      "57",
      "67",
      "58",
      "16"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m76",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Комбинаторика",
    "question": "Сколько способов выбрать 2 книги из 5?",
    "options": [
      "3",
      "76",
      "71",
      "30"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m77",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Комбинаторика",
    "question": "Сколько способов выбрать 2 книги из 5?",
    "options": [
      "91",
      "81",
      "8",
      "30"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m78",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Параметры",
    "question": "При каких a уравнение x^2 + 2x + a = 0 имеет ровно 1 корень?",
    "options": [
      "10",
      "66",
      "31",
      "36"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m79",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Параметры",
    "question": "При каких a уравнение x^2 + 5x + a = 0 имеет ровно 1 корень?",
    "options": [
      "70",
      "17",
      "93",
      "74"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m50",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 3x - 1 = 22",
    "options": [
      "29",
      "18",
      "95",
      "14"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m51",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: x + 39 = 21",
    "options": [
      "5",
      "4",
      "12",
      "28"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m52",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 2x = 80",
    "options": [
      "92",
      "84",
      "90",
      "70"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m53",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 5x - 15 = 42",
    "options": [
      "1",
      "98",
      "21",
      "90"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m54",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: x + 26 = 45",
    "options": [
      "28",
      "98",
      "44",
      "14"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m55",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите уравнение: 8x = 21",
    "options": [
      "45",
      "78",
      "34",
      "6"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m56",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Показательные уравнения",
    "question": "Решите: 3^(x-5) = 8",
    "options": [
      "11",
      "71",
      "38",
      "81"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m57",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Показательные уравнения",
    "question": "Решите: 3^(x-5) = 16",
    "options": [
      "6",
      "85",
      "30",
      "99"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m58",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "Найдите значение: log2(25)",
    "options": [
      "13",
      "49",
      "36",
      "59"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m59",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "Найдите значение: log5(27)",
    "options": [
      "46",
      "27",
      "86",
      "35"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m60",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите значение: sin(45) + sin(30)",
    "options": [
      "49",
      "35",
      "82",
      "89"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m61",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите значение: sin(60) + sin(30)",
    "options": [
      "41",
      "52",
      "35",
      "9"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m62",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите производную: f(x) = 6x^4",
    "options": [
      "28",
      "84",
      "64",
      "51"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m63",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Найдите производную: f(x) = 5x^2",
    "options": [
      "18",
      "32",
      "96",
      "72"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m64",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Вероятность события A равна 0.4. Найдите вероятность противоположного события.",
    "options": [
      "75",
      "52",
      "47",
      "29"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m65",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Вероятность события A равна 0.7. Найдите вероятность противоположного события.",
    "options": [
      "12",
      "97",
      "7",
      "15"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m66",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Сторона квадрата равна 5. Найдите его площадь.",
    "options": [
      "77",
      "9",
      "50",
      "49"
    ],
    "answerIdx": 3,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m67",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Сторона квадрата равна 10. Найдите его площадь.",
    "options": [
      "88",
      "93",
      "15",
      "69"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m68",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Радиус шара 8. Найдите площадь поверхности.",
    "options": [
      "38",
      "56",
      "21",
      "59"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m69",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Радиус шара 7. Найдите площадь поверхности.",
    "options": [
      "65",
      "98",
      "23",
      "14"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m70",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Решите неравенство: 4x < 50. Укажите наибольшее целое решение.",
    "options": [
      "20",
      "48",
      "98",
      "21"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m71",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Решите неравенство: 2x < 48. Укажите наибольшее целое решение.",
    "options": [
      "63",
      "3",
      "15",
      "47"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m72",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Текстовые задачи",
    "question": "Велосипедист проехал 55 км за 2 часа. Найдите его скорость.",
    "options": [
      "73",
      "11",
      "94",
      "63"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m73",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Текстовые задачи",
    "question": "Велосипедист проехал 93 км за 3 часа. Найдите его скорость.",
    "options": [
      "85",
      "61",
      "71",
      "22"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m74",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Функции",
    "question": "Найдите f(4) если f(x) = 3x + 6",
    "options": [
      "70",
      "97",
      "94",
      "89"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m75",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Функции",
    "question": "Найдите f(5) если f(x) = 2x + 6",
    "options": [
      "57",
      "67",
      "58",
      "16"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m76",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Комбинаторика",
    "question": "Сколько способов выбрать 2 книги из 5?",
    "options": [
      "3",
      "76",
      "71",
      "30"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m77",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Комбинаторика",
    "question": "Сколько способов выбрать 2 книги из 5?",
    "options": [
      "91",
      "81",
      "8",
      "30"
    ],
    "answerIdx": 0,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m78",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Параметры",
    "question": "При каких a уравнение x^2 + 2x + a = 0 имеет ровно 1 корень?",
    "options": [
      "10",
      "66",
      "31",
      "36"
    ],
    "answerIdx": 2,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m79",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Параметры",
    "question": "При каких a уравнение x^2 + 5x + a = 0 имеет ровно 1 корень?",
    "options": [
      "70",
      "17",
      "93",
      "74"
    ],
    "answerIdx": 1,
    "explanation": "Типовое задание ЕГЭ."
  },
  {
    "id": "m80",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Степени",
    "question": "Найдите значение: 2^6",
    "options": [
      "12",
      "32",
      "64",
      "128"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "m81",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Уравнения",
    "question": "Решите: 4x + 7 = 23",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "m82",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Планиметрия",
    "question": "Площадь прямоугольника 48, ширина 6. Найдите длину.",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "m83",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Стереометрия",
    "question": "Объём параллелепипеда 120, длина 6, ширина 5. Найдите высоту.",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "m84",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Неравенства",
    "question": "Сколько целых решений у неравенства x^2 < 16?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "m85",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Статистика",
    "question": "Найдите медиану чисел: 3, 7, 8, 12, 15",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "m86",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Вероятность",
    "question": "Вероятность выпадения 6 на кубике?",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "m87",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Производная",
    "question": "Производная x^4? Найдите f'(2) если f(x)=x^4.",
    "options": [
      "16",
      "24",
      "32",
      "48"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "m88",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Логарифмы",
    "question": "log3(81) = ?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "m89",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Комбинаторика",
    "question": "Сколько трёхзначных чисел можно составить из цифр 1,2,3 без повторов?",
    "options": [
      "3",
      "6",
      "9",
      "27"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "m90",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Тригонометрия",
    "question": "Найдите sin(180°) + cos(0°)",
    "options": [
      "-1",
      "0",
      "1",
      "2"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "m91",
    "subject": "math",
    "subjectName": "Математика (профиль)",
    "topic": "Преобразования",
    "question": "Округлите 3.14159 до сотых.",
    "options": [
      "3.14",
      "3.15",
      "3.141",
      "3.1"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "r1",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком ряду во всех словах пропущена чередующаяся гласная корня?",
    "options": [
      "предл_гать, выр_сли, к_саться",
      "зат_рать, к_рзина, зап_реть",
      "б_рюза, выт_рать, изл_жение",
      "г_ревать, с_рняк, к_сательная"
    ],
    "answerIdx": 0,
    "explanation": "В варианте 1 все слова с чередованием: лаг/лож, раст/рос, кас/кос."
  },
  {
    "id": "r2",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфоэпия",
    "question": "В каком слове НЕВЕРНО поставлено ударение?",
    "options": [
      "звонИт",
      "тОрты",
      "красИвее",
      "катАлог"
    ],
    "answerIdx": 3,
    "explanation": "Правильно: каталОг, ударение на последний слог."
  },
  {
    "id": "r3",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Лексические нормы",
    "question": "В каком предложении вместо слова ОДЕТЬ нужно употребить НАДЕТЬ?",
    "options": [
      "Мама одела ребенка в теплый комбинезон.",
      "Он одел шляпу и вышел на улицу.",
      "Медсестра одела пациента.",
      "Одень куклу в платье."
    ],
    "answerIdx": 1,
    "explanation": "ОДЕТЬ можно кого-то, НАДЕТЬ - что-то на себя. Шляпу надо НАДЕТЬ."
  },
  {
    "id": "r4",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Грамматические нормы",
    "question": "Укажите предложение с грамматической ошибкой.",
    "options": [
      "Благодаря усилиям команды проект был завершен.",
      "Согласно приказа директора все вернулись.",
      "Вопреки предсказаниям погода улучшилась.",
      "По окончании школы он поступил в университет."
    ],
    "answerIdx": 1,
    "explanation": "Правильно: Согласно прикаЗУ директора (дат. падеж, не род.)."
  },
  {
    "id": "r5",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "Укажите правильное объяснение постановки запятой: 'Солнце уже скрылось (?) и в комнате стало темно.'",
    "options": [
      "Запятая не нужна, т.к. союз И соединяет однородные",
      "Запятая нужна, т.к. это сложное предложение",
      "Запятая не нужна, т.к. есть общий член",
      "Запятая нужна, т.к. союз И повторяется"
    ],
    "answerIdx": 1,
    "explanation": "Это сложносочиненное предложение с двумя грамматическими основами (солнце скрылось, стало темно), поэтому запятая нужна."
  },
  {
    "id": "r6",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какое средство выразительности использовано: 'Горит восток зарею новой'?",
    "options": [
      "Метафора",
      "Эпитет",
      "Сравнение",
      "Олицетворение"
    ],
    "answerIdx": 0,
    "explanation": "Метафора - скрытое сравнение, 'горит восток' - восток освещен, как огнем."
  },
  {
    "id": "r7",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Синтаксис",
    "question": "Укажите словосочетание с типом связи ПРИМЫКАНИЕ.",
    "options": [
      "зеленый лес",
      "бежать быстро",
      "дом из кирпича",
      "любить родителей"
    ],
    "answerIdx": 1,
    "explanation": "Примыкание - зависимое слово неизменяемое (наречие, деепричастие). 'Бежать быстро' - глагол + наречие."
  },
  {
    "id": "r8",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком варианте НЕ со словом пишется СЛИТНО?",
    "options": [
      "(не)смотря на усталость",
      "еще (не)прочитанная книга",
      "(не)сделал задание",
      "говорил (не)громко, а тихо"
    ],
    "answerIdx": 0,
    "explanation": "'НЕ смотря на' = 'вопреки', пишется слитно. В остальных случаях раздельно или есть противопоставление."
  },
  {
    "id": "r9",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется буква И?",
    "options": [
      "пр_зидент",
      "пр_ключение",
      "пр_мер",
      "пр_чина"
    ],
    "answerIdx": 3,
    "explanation": "Причина - слово с приставкой ПРИ- (значение присоединения). В остальных - пре- (президент, приключение, пример)."
  },
  {
    "id": "r10",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "Укажите слово с проверяемой безударной гласной в корне.",
    "options": [
      "заг_рать",
      "к_снуться",
      "тр_ва",
      "р_сток"
    ],
    "answerIdx": 2,
    "explanation": "Трава - проверяем словом 'травы'. Остальные с чередованием."
  },
  {
    "id": "r11",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком варианте пишется НН?",
    "options": [
      "ветре ый день",
      "серебря ый",
      "кожа ый",
      "деревя ый"
    ],
    "answerIdx": 3,
    "explanation": "Деревянный - исключение. Ветреный - тоже исключение (с одной Н)."
  },
  {
    "id": "r12",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Синтаксис",
    "question": "Укажите словосочетание со связью СОГЛАСОВАНИЕ.",
    "options": [
      "читать книгу",
      "интересная книга",
      "читать быстро",
      "книга на столе"
    ],
    "answerIdx": 1,
    "explanation": "Согласование: зависимое слово согласуется в роде, числе, падеже (интересная книга)."
  },
  {
    "id": "r13",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Грамматические нормы",
    "question": "Найдите предложение с грамматической ошибкой.",
    "options": [
      "Мы встретились по приезде в город.",
      "По окончании школы он поступил в вуз.",
      "Согласно расписания мы уходим завтра.",
      "Благодаря совету друга я справился."
    ],
    "answerIdx": 2,
    "explanation": "Правильно: согласно расписаНИЮ (дат. падеж)."
  },
  {
    "id": "r14",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "Укажите номер предложения с пунктуационной ошибкой: (1) Солнце село, и стало темно. (2) Я знаю что ты прав. (3) Дождь шёл, не переставая.",
    "options": [
      "1",
      "2",
      "3",
      "нет ошибок"
    ],
    "answerIdx": 2,
    "explanation": "Во втором предложении пропущена запятая: 'Я знаю, что ты прав'."
  },
  {
    "id": "r15",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какое средство выразительности: 'Как хищный зверь, ворвался враг в столицу'?",
    "options": [
      "Метафора",
      "Сравнение",
      "Эпитет",
      "Гипербола"
    ],
    "answerIdx": 1,
    "explanation": "Сравнение: 'как хищный зверь' (союз КАК)."
  },
  {
    "id": "r16",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфоэпия",
    "question": "В каком слове НЕПРАВИЛЬНО выделена буква, обозначающая ударный гласный?",
    "options": [
      "звонИт",
      "тОрты",
      "бантЫ",
      "щавЕль"
    ],
    "answerIdx": 2,
    "explanation": "Правильно: бАнты. Ударение на первый слог."
  },
  {
    "id": "r17",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком ряду во всех словах пропущена одна и та же буква?",
    "options": [
      "бе_шумный, ра_будить, и_пуг",
      "пр_добрый, пр_шить, пр_кратить",
      "от_грать, сверх_нтересный, под_скать",
      "в_юга, с_ёмка, об_явление"
    ],
    "answerIdx": 3,
    "explanation": "Во всех словах Ъ: вьюга — разделительный Ь, съёмка - Ъ, объявление - Ъ."
  },
  {
    "id": "r18",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Лексические нормы",
    "question": "Найдите лишнее слово в ряду синонимов.",
    "options": [
      "храбрый",
      "смелый",
      "отважный",
      "трусливый"
    ],
    "answerIdx": 3,
    "explanation": "Трусливый - антоним, не синоним."
  },
  {
    "id": "r19",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Грамматические нормы",
    "question": "Укажите пример с ошибкой в образовании формы слова.",
    "options": [
      "их книги",
      "пять апельсинов",
      "с восьмистами рублями",
      "более красивый"
    ],
    "answerIdx": 2,
    "explanation": "Правильно: с восьмьюстами рублями (или с восемьюстами)."
  },
  {
    "id": "r20",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Синтаксис",
    "question": "Определите тип односоставного предложения: 'Мне холодно.'",
    "options": [
      "Определённо-личное",
      "Неопределённо-личное",
      "Безличное",
      "Назывное"
    ],
    "answerIdx": 2,
    "explanation": "Безличное: состояние природы/человека выражено безличным глаголом."
  },
  {
    "id": "r21",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Синтаксис",
    "question": "Сколько грамматических основ в предложении: 'Солнце светило, птицы пели, и ветер тихо шелестел листвой.'",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 2,
    "explanation": "Три основы: солнце светило, птицы пели, ветер шелестел."
  },
  {
    "id": "r22",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Морфемика",
    "question": "В каком слове нет суффикса -К-?",
    "options": [
      "ручка",
      "печка",
      "лавочка",
      "кочка"
    ],
    "answerIdx": 3,
    "explanation": "В слове 'кочка' корень 'кочк-', нет суффикса. В остальных: руч-к-а, печ-к-а, лавоч-к-а."
  },
  {
    "id": "r23",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Морфемика",
    "question": "Какое слово состоит из приставки, корня, суффикса и окончания?",
    "options": [
      "подводный",
      "пришкольный",
      "рассказ",
      "заморский"
    ],
    "answerIdx": 0,
    "explanation": "под- (прист) -вод- (кор) -н- (суф) -ый (оконч)."
  },
  {
    "id": "r24",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Синтаксис",
    "question": "Укажите номер предложения с типами связи: 'В комнате было душно, и я открыл окно.'",
    "options": [
      "ССП",
      "СПП",
      "БСП",
      "Простое"
    ],
    "answerIdx": 0,
    "explanation": "Сложносочинённое предложение (союз И)."
  },
  {
    "id": "r25",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Фонетика",
    "question": "В каком слове все согласные твёрдые?",
    "options": [
      "синий",
      "жёлтый",
      "чаща",
      "цирк"
    ],
    "answerIdx": 1,
    "explanation": "В слове 'жёлтый' ж, л, т, й - все твёрдые. В остальных есть мягкие."
  },
  {
    "id": "r26",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Фонетика",
    "question": "Сколько звуков в слове 'Якорь'?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answerIdx": 1,
    "explanation": "Якорь: [й'], [а], [к], [а], [р'] - 5 звуков."
  },
  {
    "id": "r27",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "Укажите слово с непроизносимой согласной.",
    "options": [
      "опас_ный",
      "счас_ливый",
      "вкус_ный",
      "прекрас_ный"
    ],
    "answerIdx": 1,
    "explanation": "Счастливый - непроизносимая Т."
  },
  {
    "id": "r28",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется буква Ё?",
    "options": [
      "ш_рох",
      "капюш_н",
      "ш_пот",
      "крыж_вник"
    ],
    "answerIdx": 2,
    "explanation": "Шёпот - в корне под ударением Ё."
  },
  {
    "id": "r29",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "Какое слово пишется слитно?",
    "options": [
      "(пол)лимона",
      "(пол)арбуза",
      "(пол)Москвы",
      "(пол)стола"
    ],
    "answerIdx": 0,
    "explanation": "Пол-лимона (перед Л пишется через дефис). Ни один не слитно... правильнее: полстола - слитно."
  },
  {
    "id": "r30",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Лексические нормы",
    "question": "Укажите предложение с фразеологизмом.",
    "options": [
      "Он сел на стул.",
      "Повесил нос и ушёл.",
      "Он купил хлеб.",
      "Солнце светит ярко."
    ],
    "answerIdx": 1,
    "explanation": "Повесил нос - фразеологизм (расстроился)."
  },
  {
    "id": "r31",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "В каком предложении нужно поставить тире?",
    "options": [
      "Москва столица России.",
      "Он хороший человек.",
      "Мы пришли домой.",
      "Солнце встало."
    ],
    "answerIdx": 0,
    "explanation": "Москва - столица России (подлежащее и сказуемое - существительные)."
  },
  {
    "id": "r32",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Морфология",
    "question": "Определите падеж слова 'книгу': 'Я читаю книгу.'",
    "options": [
      "Им.",
      "Род.",
      "Дат.",
      "Вин."
    ],
    "answerIdx": 3,
    "explanation": "Читаю (кого? что?) книгу - винительный падеж."
  },
  {
    "id": "r33",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Фонетика",
    "question": "Сколько букв и звуков в слове 'Ёж'?",
    "options": [
      "2б, 3зв",
      "2б, 2зв",
      "3б, 3зв",
      "3б, 4зв"
    ],
    "answerIdx": 0,
    "explanation": "Ёж: [й'], [о], [ш] - 2 буквы, 3 звука."
  },
  {
    "id": "r34",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Морфемика",
    "question": "В каком слове НЕТ приставки?",
    "options": [
      "полететь",
      "подумать",
      "посуда",
      "повесить"
    ],
    "answerIdx": 2,
    "explanation": "Посуда - корень 'пocуд-', приставки нет."
  },
  {
    "id": "r35",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Морфология",
    "question": "Какое прилагательное качественное?",
    "options": [
      "деревянный",
      "лисий",
      "красивый",
      "городской"
    ],
    "answerIdx": 2,
    "explanation": "Красивый - качественное (может быть красивее, очень красивый)."
  },
  {
    "id": "r36",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "Укажите слово с чередующейся гласной в корне.",
    "options": [
      "горизонт",
      "заря",
      "гора",
      "зарево"
    ],
    "answerIdx": 1,
    "explanation": "Заря - корень с чередованием зар/зор."
  },
  {
    "id": "r37",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком варианте ответа НЕ со словом пишется раздельно?",
    "options": [
      "(не)навидеть",
      "(не)здоровится",
      "(не)годовать",
      "(не)говорить"
    ],
    "answerIdx": 3,
    "explanation": "Не говорить - глагол, пишется раздельно. Остальные - без НЕ не употр."
  },
  {
    "id": "r38",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какой троп использован: 'В сто сорок солнц закат пылал'?",
    "options": [
      "Метафора",
      "Сравнение",
      "Гипербола",
      "Олицетворение"
    ],
    "answerIdx": 2,
    "explanation": "Гипербола - сильное преувеличение."
  },
  {
    "id": "r39",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется буква Е?",
    "options": [
      "пр_зидент",
      "пр_мер",
      "пр_чина",
      "пр_одолеть"
    ],
    "answerIdx": 3,
    "explanation": "Преодолеть - приставка ПРЕ-."
  },
  {
    "id": "r40",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется буква А?",
    "options": [
      "насл_ждение",
      "выр_сли",
      "пол_гать",
      "предл_гать"
    ],
    "answerIdx": 2,
    "explanation": "Полагать - корень с чередованием лаг/лож."
  },
  {
    "id": "r41",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется И?",
    "options": [
      "ц_фра",
      "сестриц_н",
      "панц_рь",
      "ц_плёнок"
    ],
    "answerIdx": 0,
    "explanation": "Цифра - исключение (в корне после Ц пишется И)."
  },
  {
    "id": "r42",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется Ы?",
    "options": [
      "ц_рк",
      "акц_я",
      "ц_ганский",
      "делегац_я"
    ],
    "answerIdx": 2,
    "explanation": "Цыганский - исключение (после Ц)."
  },
  {
    "id": "r43",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "Укажите слово с буквой З на конце приставки.",
    "options": [
      "и_пуг",
      "бе_шумный",
      "ра_будить",
      "в_лететь"
    ],
    "answerIdx": 2,
    "explanation": "Разбудить - приставка РАЗ- перед звонкой Б."
  },
  {
    "id": "r44",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Лексические нормы",
    "question": "Какое слово является паронимом к слову 'сытый'?",
    "options": [
      "сладкий",
      "сытный",
      "голодный",
      "вкусный"
    ],
    "answerIdx": 1,
    "explanation": "Сытый - сытный (паронимы)."
  },
  {
    "id": "r45",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Лексические нормы",
    "question": "Найдите лишнее слово в синонимическом ряду.",
    "options": [
      "красный",
      "алый",
      "бордовый",
      "зелёный"
    ],
    "answerIdx": 3,
    "explanation": "Зелёный - другой цвет."
  },
  {
    "id": "r46",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Грамматические нормы",
    "question": "Укажите ошибку в образовании формы слова.",
    "options": [
      "пять килограммов",
      "много яблоков",
      "их письма",
      "более красивый"
    ],
    "answerIdx": 1,
    "explanation": "Правильно: много яблок."
  },
  {
    "id": "r47",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Грамматические нормы",
    "question": "В каком предложении ошибка в управлении?",
    "options": [
      "Оплатить проезд",
      "Уверенность в победе",
      "Отзыв о книге",
      "Согласно расписания"
    ],
    "answerIdx": 3,
    "explanation": "Правильно: согласно расписаНИЮ."
  },
  {
    "id": "r48",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "Где нужно поставить запятую? 'Наступила осень(?) и листья пожелтели.'",
    "options": [
      "после 'осень'",
      "после 'листья'",
      "не нужна",
      "после 'наступила'"
    ],
    "answerIdx": 0,
    "explanation": "Запятая перед союзом 'и' в ССП."
  },
  {
    "id": "r49",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "Сколько запятых нужно в предложении: 'Солнце светило но было холодно.'",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answerIdx": 1,
    "explanation": "Одна запятая перед 'но'."
  },
  {
    "id": "r50",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какое средство: 'Мороз-воевода дозором обходит владенья свои'?",
    "options": [
      "Метафора",
      "Олицетворение",
      "Эпитет",
      "Сравнение"
    ],
    "answerIdx": 1,
    "explanation": "Мороз назван воеводой - олицетворение."
  },
  {
    "id": "r51",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какой троп: 'Умом Россию не понять'?",
    "options": [
      "Гипербола",
      "Литота",
      "Метафора",
      "Ирония"
    ],
    "answerIdx": 0,
    "explanation": "Гипербола - преувеличение."
  },
  {
    "id": "r39",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется буква Е?",
    "options": [
      "пр_зидент",
      "пр_мер",
      "пр_чина",
      "пр_одолеть"
    ],
    "answerIdx": 3,
    "explanation": "Преодолеть - приставка ПРЕ-."
  },
  {
    "id": "r40",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется буква А?",
    "options": [
      "насл_ждение",
      "выр_сли",
      "пол_гать",
      "предл_гать"
    ],
    "answerIdx": 2,
    "explanation": "Полагать - корень с чередованием лаг/лож."
  },
  {
    "id": "r41",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется И?",
    "options": [
      "ц_фра",
      "сестриц_н",
      "панц_рь",
      "ц_плёнок"
    ],
    "answerIdx": 0,
    "explanation": "Цифра - исключение (в корне после Ц пишется И)."
  },
  {
    "id": "r42",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется Ы?",
    "options": [
      "ц_рк",
      "акц_я",
      "ц_ганский",
      "делегац_я"
    ],
    "answerIdx": 2,
    "explanation": "Цыганский - исключение (после Ц)."
  },
  {
    "id": "r43",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "Укажите слово с буквой З на конце приставки.",
    "options": [
      "и_пуг",
      "бе_шумный",
      "ра_будить",
      "в_лететь"
    ],
    "answerIdx": 2,
    "explanation": "Разбудить - приставка РАЗ- перед звонкой Б."
  },
  {
    "id": "r44",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Лексические нормы",
    "question": "Какое слово является паронимом к слову 'сытый'?",
    "options": [
      "сладкий",
      "сытный",
      "голодный",
      "вкусный"
    ],
    "answerIdx": 1,
    "explanation": "Сытый - сытный (паронимы)."
  },
  {
    "id": "r45",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Лексические нормы",
    "question": "Найдите лишнее слово в синонимическом ряду.",
    "options": [
      "красный",
      "алый",
      "бордовый",
      "зелёный"
    ],
    "answerIdx": 3,
    "explanation": "Зелёный - другой цвет."
  },
  {
    "id": "r46",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Грамматические нормы",
    "question": "Укажите ошибку в образовании формы слова.",
    "options": [
      "пять килограммов",
      "много яблоков",
      "их письма",
      "более красивый"
    ],
    "answerIdx": 1,
    "explanation": "Правильно: много яблок."
  },
  {
    "id": "r47",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Грамматические нормы",
    "question": "В каком предложении ошибка в управлении?",
    "options": [
      "Оплатить проезд",
      "Уверенность в победе",
      "Отзыв о книге",
      "Согласно расписания"
    ],
    "answerIdx": 3,
    "explanation": "Правильно: согласно расписаНИЮ."
  },
  {
    "id": "r48",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "Где нужно поставить запятую? 'Наступила осень(?) и листья пожелтели.'",
    "options": [
      "после 'осень'",
      "после 'листья'",
      "не нужна",
      "после 'наступила'"
    ],
    "answerIdx": 0,
    "explanation": "Запятая перед союзом 'и' в ССП."
  },
  {
    "id": "r49",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "Сколько запятых нужно в предложении: 'Солнце светило но было холодно.'",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answerIdx": 1,
    "explanation": "Одна запятая перед 'но'."
  },
  {
    "id": "r50",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какое средство: 'Мороз-воевода дозором обходит владенья свои'?",
    "options": [
      "Метафора",
      "Олицетворение",
      "Эпитет",
      "Сравнение"
    ],
    "answerIdx": 1,
    "explanation": "Мороз назван воеводой - олицетворение."
  },
  {
    "id": "r51",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какой троп: 'Умом Россию не понять'?",
    "options": [
      "Гипербола",
      "Литота",
      "Метафора",
      "Ирония"
    ],
    "answerIdx": 0,
    "explanation": "Гипербола - преувеличение."
  },
  {
    "id": "r52",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "В каком слове пишется Ъ?",
    "options": [
      "с_езд",
      "в_юга",
      "об_явление",
      "сол_вы"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "r53",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Синтаксис",
    "question": "В предложении: 'Мне грустно.' - какое оно по составу?",
    "options": [
      "Двусоставное",
      "Односоставное безличное",
      "Назывное",
      "Сложное"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "r54",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Пунктуация",
    "question": "Сколько запятых: 'Я купил яблоки груши бананы и виноград.'",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "r55",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Орфография",
    "question": "Какое слово пишется через дефис?",
    "options": [
      "полМосквы",
      "поллимона",
      "полстола",
      "полчаса"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "r56",
    "subject": "russian",
    "subjectName": "Русский язык",
    "topic": "Выразительность",
    "question": "Какой троп: 'Золотые руки'?",
    "options": [
      "Метафора",
      "Эпитет",
      "Сравнение",
      "Метонимия"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "p1",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Тело движется равноускоренно из состояния покоя. За 4 секунды оно прошло 32 м. Найдите ускорение тела.",
    "options": [
      "2 м/с^2",
      "4 м/с^2",
      "8 м/с^2",
      "16 м/с^2"
    ],
    "answerIdx": 1,
    "explanation": "S = at^2/2 => a = 2S/t^2 = 64/16 = 4 м/с^2."
  },
  {
    "id": "p2",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Тело массой 2 кг движется по окружности радиусом 0.5 м со скоростью 3 м/с. Найдите центростремительную силу.",
    "options": [
      "9 Н",
      "18 Н",
      "36 Н",
      "6 Н"
    ],
    "answerIdx": 2,
    "explanation": "F = mv^2/R = 2*9/0.5 = 36 Н."
  },
  {
    "id": "p3",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "Тепловой двигатель получает от нагревателя 500 Дж теплоты и отдает холодильнику 300 Дж. Найдите КПД двигателя.",
    "options": [
      "20%",
      "40%",
      "60%",
      "80%"
    ],
    "answerIdx": 1,
    "explanation": "КПД = (Qн - Qх)/Qн * 100% = (500-300)/500 * 100% = 40%."
  },
  {
    "id": "p4",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Через проводник сопротивлением 10 Ом течет ток 2 А. Найдите напряжение на концах проводника.",
    "options": [
      "5 В",
      "10 В",
      "20 В",
      "40 В"
    ],
    "answerIdx": 2,
    "explanation": "U = I*R = 2*10 = 20 В (закон Ома)."
  },
  {
    "id": "p5",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Магнетизм",
    "question": "Электрон движется в магнитном поле со скоростью 10^6 м/с. Индукция поля 0.01 Тл. Найдите силу Лоренца (e = 1.6*10^-19 Кл).",
    "options": [
      "1.6*10^-15 Н",
      "1.6*10^-17 Н",
      "3.2*10^-15 Н",
      "3.2*10^-17 Н"
    ],
    "answerIdx": 0,
    "explanation": "F = qvB = 1.6*10^-19 * 10^6 * 0.01 = 1.6*10^-15 Н."
  },
  {
    "id": "p6",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Колебания",
    "question": "Период колебаний математического маятника равен 2 с. Найдите его длину (g = 10 м/с^2, pi^2 ≈ 10).",
    "options": [
      "0.5 м",
      "1 м",
      "2 м",
      "4 м"
    ],
    "answerIdx": 1,
    "explanation": "T = 2pi*sqrt(L/g) => L = g*(T/(2pi))^2 = 10*(2/(2pi))^2 = 10*(1/pi)^2 ≈ 10/10 = 1 м."
  },
  {
    "id": "p7",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Оптика",
    "question": "Свет переходит из воздуха в воду. Показатель преломления воды 1.33. Угол падения 45°, чему примерно равен угол преломления?",
    "options": [
      "22°",
      "32°",
      "45°",
      "60°"
    ],
    "answerIdx": 1,
    "explanation": "n1*sin(a) = n2*sin(b). 1*sin45 = 1.33*sin(b). sin(b) = 0.707/1.33 ≈ 0.53. b ≈ 32°."
  },
  {
    "id": "p8",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Законы сохранения",
    "question": "Тело массой 2 кг падает с высоты 10 м. Найдите его кинетическую энергию в момент удара о землю (g = 10 м/с^2).",
    "options": [
      "50 Дж",
      "100 Дж",
      "200 Дж",
      "400 Дж"
    ],
    "answerIdx": 2,
    "explanation": "Потенциальная энергия mgh = 2*10*10 = 200 Дж переходит в кинетическую. Eк = 200 Дж."
  },
  {
    "id": "p9",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Автомобиль движется со скоростью 72 км/ч. Выразите скорость в м/с.",
    "options": [
      "10 м/с",
      "20 м/с",
      "25 м/с",
      "30 м/с"
    ],
    "answerIdx": 1,
    "explanation": "72 км/ч = 72 * 1000 / 3600 = 20 м/с."
  },
  {
    "id": "p10",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Сила 10 Н сообщает телу ускорение 2 м/с^2. Найдите массу тела.",
    "options": [
      "2 кг",
      "5 кг",
      "10 кг",
      "20 кг"
    ],
    "answerIdx": 1,
    "explanation": "F = ma => m = F/a = 10/2 = 5 кг."
  },
  {
    "id": "p11",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "Какое количество теплоты нужно для нагрева 2 кг воды на 50°C? (c=4200 Дж/кг°C)",
    "options": [
      "210 кДж",
      "420 кДж",
      "840 кДж",
      "1680 кДж"
    ],
    "answerIdx": 1,
    "explanation": "Q = cmΔt = 4200 * 2 * 50 = 420000 Дж = 420 кДж."
  },
  {
    "id": "p12",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Два резистора 4 Ом и 6 Ом соединены последовательно. Найдите общее сопротивление.",
    "options": [
      "2.4 Ом",
      "4 Ом",
      "6 Ом",
      "10 Ом"
    ],
    "answerIdx": 3,
    "explanation": "R_посл = R1 + R2 = 4 + 6 = 10 Ом."
  },
  {
    "id": "p13",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Колебания",
    "question": "Период колебаний 0.5 с. Найдите частоту.",
    "options": [
      "0.5 Гц",
      "1 Гц",
      "2 Гц",
      "4 Гц"
    ],
    "answerIdx": 2,
    "explanation": "ν = 1/T = 1/0.5 = 2 Гц."
  },
  {
    "id": "p14",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Квантовая физика",
    "question": "Работа выхода электрона 2 эВ. Найдите красную границу фотоэффекта. (h=4.14*10^-15 эВ·с)",
    "options": [
      "4.14*10^14 Гц",
      "4.83*10^14 Гц",
      "2.07*10^14 Гц",
      "8.28*10^14 Гц"
    ],
    "answerIdx": 1,
    "explanation": "ν_мин = A/h = 2 / (4.14*10^-15) ≈ 4.83*10^14 Гц."
  },
  {
    "id": "p15",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Тело брошено вертикально вверх со скоростью 20 м/с. Найдите максимальную высоту подъёма (g=10).",
    "options": [
      "10 м",
      "20 м",
      "30 м",
      "40 м"
    ],
    "answerIdx": 1,
    "explanation": "h_max = v^2/(2g) = 400/20 = 20 м."
  },
  {
    "id": "p16",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "ЭДС источника 12 В, внутреннее сопротивление 1 Ом, внешнее 5 Ом. Найдите силу тока.",
    "options": [
      "1 А",
      "2 А",
      "3 А",
      "4 А"
    ],
    "answerIdx": 1,
    "explanation": "I = ε/(R+r) = 12/(5+1) = 2 А."
  },
  {
    "id": "p17",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Ядерная физика",
    "question": "Сколько протонов в ядре урана-238?",
    "options": [
      "92",
      "146",
      "238",
      "138"
    ],
    "answerIdx": 0,
    "explanation": "Уран имеет 92 протона (порядковый номер). Нейтронов: 238-92=146."
  },
  {
    "id": "p18",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Колебания и волны",
    "question": "Длина волны 2 м, скорость 340 м/с. Найдите частоту.",
    "options": [
      "85 Гц",
      "170 Гц",
      "340 Гц",
      "680 Гц"
    ],
    "answerIdx": 1,
    "explanation": "v = λν => ν = v/λ = 340/2 = 170 Гц."
  },
  {
    "id": "p19",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Сила трения 5 Н, масса тела 2 кг. Найдите коэффициент трения (g=10).",
    "options": [
      "0.15",
      "0.25",
      "0.35",
      "0.45"
    ],
    "answerIdx": 1,
    "explanation": "Fтр = μmg => μ = Fтр/(mg) = 5/20 = 0.25."
  },
  {
    "id": "p20",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Мощность тока 100 Вт, напряжение 220 В. Найдите силу тока.",
    "options": [
      "~0.45 А",
      "~0.55 А",
      "~2.2 А",
      "~220 А"
    ],
    "answerIdx": 0,
    "explanation": "P = UI => I = P/U = 100/220 ≈ 0.45 А."
  },
  {
    "id": "p21",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Оптика",
    "question": "Показатель преломления стекла 1.5. Скорость света в стекле равна?",
    "options": [
      "2*10^8 м/с",
      "3*10^8 м/с",
      "1.5*10^8 м/с",
      "4.5*10^8 м/с"
    ],
    "answerIdx": 0,
    "explanation": "n = c/v => v = c/n = 3*10^8/1.5 = 2*10^8 м/с."
  },
  {
    "id": "p22",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Заряд 2 Кл перемещается в электрическом поле. Работа поля 10 Дж. Найдите напряжение.",
    "options": [
      "2 В",
      "5 В",
      "10 В",
      "20 В"
    ],
    "answerIdx": 1,
    "explanation": "U = A/q = 10/2 = 5 В."
  },
  {
    "id": "p23",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Молекулярная физика",
    "question": "Идеальный газ изобарно расширяется. Как изменится его температура?",
    "options": [
      "Увеличится",
      "Уменьшится",
      "Не изменится",
      "Может как угодно"
    ],
    "answerIdx": 0,
    "explanation": "При изобарном расширении V↑, по закону Гей-Люссака T↑."
  },
  {
    "id": "p24",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Законы сохранения",
    "question": "Масса 2 кг, скорость 5 м/с. Найдите импульс.",
    "options": [
      "5 кг*м/с",
      "10 кг*м/с",
      "15 кг*м/с",
      "25 кг*м/с"
    ],
    "answerIdx": 1,
    "explanation": "p = mv = 2*5 = 10 кг*м/с."
  },
  {
    "id": "p25",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Молекулярная физика",
    "question": "Температура газа 27°C. Найдите её в Кельвинах.",
    "options": [
      "250 К",
      "273 К",
      "300 К",
      "327 К"
    ],
    "answerIdx": 2,
    "explanation": "T = 27 + 273 = 300 K."
  },
  {
    "id": "p26",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "Работа газа 200 Дж, внутренняя энергия уменьшилась на 100 Дж. Найдите количество теплоты.",
    "options": [
      "100 Дж",
      "200 Дж",
      "300 Дж",
      "-100 Дж"
    ],
    "answerIdx": 0,
    "explanation": "Q = ΔU + A = -100 + 200 = 100 Дж."
  },
  {
    "id": "p27",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Камень падает с высоты 20 м. Найдите время падения (g=10).",
    "options": [
      "1 с",
      "2 с",
      "3 с",
      "4 с"
    ],
    "answerIdx": 1,
    "explanation": "h=gt^2/2 => t=sqrt(2h/g)=sqrt(40/10)=2 с."
  },
  {
    "id": "p28",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Найдите силу тяжести, действующую на тело массой 3 кг (g=10).",
    "options": [
      "3 Н",
      "10 Н",
      "30 Н",
      "300 Н"
    ],
    "answerIdx": 2,
    "explanation": "F=mg=3*10=30 Н."
  },
  {
    "id": "p29",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Квантовая физика",
    "question": "Энергия фотона 3.3*10^-19 Дж. Найдите частоту (h=6.6*10^-34).",
    "options": [
      "3*10^14 Гц",
      "5*10^14 Гц",
      "7*10^14 Гц",
      "9*10^14 Гц"
    ],
    "answerIdx": 1,
    "explanation": "v=E/h=3.3/6.6*10^15=0.5*10^15=5*10^14 Гц."
  },
  {
    "id": "p30",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Колебания и волны",
    "question": "На каком минимальном расстоянии от антенны радиолокатора может быть обнаружен объект, если длительность импульса 10^-6 с? (c=3*10^8 м/с)",
    "options": [
      "50 м",
      "100 м",
      "150 м",
      "300 м"
    ],
    "answerIdx": 2,
    "explanation": "S=c*t/2=3*10^8*10^-6/2=150 м."
  },
  {
    "id": "p31",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Три резистора по 6 Ом соединены параллельно. Найдите общее сопротивление.",
    "options": [
      "2 Ом",
      "3 Ом",
      "6 Ом",
      "18 Ом"
    ],
    "answerIdx": 0,
    "explanation": "1/R=1/6+1/6+1/6=3/6 => R=2 Ом."
  },
  {
    "id": "p32",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "КПД теплового двигателя 25%. Найдите работу, если получено 400 Дж теплоты.",
    "options": [
      "50 Дж",
      "100 Дж",
      "200 Дж",
      "300 Дж"
    ],
    "answerIdx": 1,
    "explanation": "A=Q*КПД/100=400*0.25=100 Дж."
  },
  {
    "id": "p33",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Мощность электродвигателя 500 Вт. Какую работу он совершит за 10 с?",
    "options": [
      "2500 Дж",
      "5000 Дж",
      "7500 Дж",
      "10000 Дж"
    ],
    "answerIdx": 1,
    "explanation": "A=P*t=500*10=5000 Дж."
  },
  {
    "id": "p34",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Колебания",
    "question": "Определите длину звуковой волны частотой 440 Гц в воздухе (v=340 м/с).",
    "options": [
      "~0.55 м",
      "~0.77 м",
      "~1.1 м",
      "~1.3 м"
    ],
    "answerIdx": 1,
    "explanation": "λ=v/ν=340/440≈0.77 м."
  },
  {
    "id": "p35",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Ядерная физика",
    "question": "Период полураспада 4 дня. Какая доля радиоактивных атомов останется через 8 дней?",
    "options": [
      "1/2",
      "1/4",
      "1/8",
      "1/16"
    ],
    "answerIdx": 1,
    "explanation": "N/N0=(1/2)^(t/T)=(1/2)^(8/4)=1/4."
  },
  {
    "id": "p36",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Груз массой 2 кг растягивает пружину на 4 см. Найдите жёсткость пружины.",
    "options": [
      "200 Н/м",
      "400 Н/м",
      "500 Н/м",
      "800 Н/м"
    ],
    "answerIdx": 2,
    "explanation": "F=kx => k=mg/x=20/0.04=500 Н/м."
  },
  {
    "id": "p37",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Ядерная физика",
    "question": "Дефект массы ядра 0.1 а.е.м. Найдите энергию связи (1 а.е.м.=931 МэВ).",
    "options": [
      "73.1 МэВ",
      "93.1 МэВ",
      "103.1 МэВ",
      "133.1 МэВ"
    ],
    "answerIdx": 1,
    "explanation": "E=0.1*931=93.1 МэВ."
  },
  {
    "id": "p38",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Молекулярная физика",
    "question": "В сосуде 2 моля газа при температуре 27°C. Найдите давление, если объём 50 л. (R=8.31)",
    "options": [
      "~10^5 Па",
      "~2*10^5 Па",
      "~5*10^4 Па",
      "~3*10^5 Па"
    ],
    "answerIdx": 0,
    "explanation": "PV=nRT => P=nRT/V=2*8.31*300/0.05≈10^5 Па."
  },
  {
    "id": "p39",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Автомобиль едет со скоростью 108 км/ч. Выразите в м/с.",
    "options": [
      "105",
      "122",
      "49",
      "32"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p40",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Тело свободно падает с высоты 20 м. Найдите время падения (g=10).",
    "options": [
      "106",
      "187",
      "120",
      "55"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p41",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Сила 13 Н сообщает телу ускорение 5 м/с^2. Найдите массу.",
    "options": [
      "28",
      "64",
      "94",
      "87"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p42",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Масса 4 кг, ускорение 5 м/с^2. Найдите силу.",
    "options": [
      "119",
      "64",
      "72",
      "24"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p43",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "КПД теплового двигателя 20%. Получено 2000 Дж теплоты. Найдите полезную работу.",
    "options": [
      "24",
      "193",
      "70",
      "4"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p44",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "Нагреватель отдал 1494 Дж, холодильник получил 1185 Дж. Найдите КПД.",
    "options": [
      "16",
      "103",
      "28",
      "43"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p45",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Напряжение 36 В, ток 5 А. Найдите сопротивление.",
    "options": [
      "109",
      "179",
      "37",
      "188"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p46",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Сопротивление 23 Ом, ток 4 А. Найдите напряжение.",
    "options": [
      "139",
      "149",
      "189",
      "8"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p47",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Магнетизм",
    "question": "Сила тока 1 А, длина проводника 0.2 м, индукция 0.1 Тл. Найдите силу Ампера.",
    "options": [
      "129",
      "41",
      "136",
      "62"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p48",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Оптика",
    "question": "Угол падения 30°, угол преломления 20°. Найдите показатель преломления.",
    "options": [
      "18",
      "173",
      "77",
      "61"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p49",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Колебания",
    "question": "Частота колебаний 50 Гц. Найдите период.",
    "options": [
      "169",
      "80",
      "21",
      "108"
    ],
    "answerIdx": 1,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p50",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Ядерная физика",
    "question": "Период полураспада 8 дня. Сколько останется через 8 дней от исходного количества?",
    "options": [
      "34",
      "166",
      "102",
      "172"
    ],
    "answerIdx": 0,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p39",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Автомобиль едет со скоростью 108 км/ч. Выразите в м/с.",
    "options": [
      "105",
      "122",
      "49",
      "32"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p40",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Тело свободно падает с высоты 20 м. Найдите время падения (g=10).",
    "options": [
      "106",
      "187",
      "120",
      "55"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p41",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Сила 13 Н сообщает телу ускорение 5 м/с^2. Найдите массу.",
    "options": [
      "28",
      "64",
      "94",
      "87"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p42",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Динамика",
    "question": "Масса 4 кг, ускорение 5 м/с^2. Найдите силу.",
    "options": [
      "119",
      "64",
      "72",
      "24"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p43",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "КПД теплового двигателя 20%. Получено 2000 Дж теплоты. Найдите полезную работу.",
    "options": [
      "24",
      "193",
      "70",
      "4"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p44",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Термодинамика",
    "question": "Нагреватель отдал 1494 Дж, холодильник получил 1185 Дж. Найдите КПД.",
    "options": [
      "16",
      "103",
      "28",
      "43"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p45",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Напряжение 36 В, ток 5 А. Найдите сопротивление.",
    "options": [
      "109",
      "179",
      "37",
      "188"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p46",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Сопротивление 23 Ом, ток 4 А. Найдите напряжение.",
    "options": [
      "139",
      "149",
      "189",
      "8"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p47",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Магнетизм",
    "question": "Сила тока 1 А, длина проводника 0.2 м, индукция 0.1 Тл. Найдите силу Ампера.",
    "options": [
      "129",
      "41",
      "136",
      "62"
    ],
    "answerIdx": 3,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p48",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Оптика",
    "question": "Угол падения 30°, угол преломления 20°. Найдите показатель преломления.",
    "options": [
      "18",
      "173",
      "77",
      "61"
    ],
    "answerIdx": 2,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p49",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Колебания",
    "question": "Частота колебаний 50 Гц. Найдите период.",
    "options": [
      "169",
      "80",
      "21",
      "108"
    ],
    "answerIdx": 1,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p50",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Ядерная физика",
    "question": "Период полураспада 8 дня. Сколько останется через 8 дней от исходного количества?",
    "options": [
      "34",
      "166",
      "102",
      "172"
    ],
    "answerIdx": 0,
    "explanation": "Расчёт по формуле."
  },
  {
    "id": "p51",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Работа 100 Дж, время 5 с. Найдите мощность.",
    "options": [
      "5 Вт",
      "20 Вт",
      "50 Вт",
      "500 Вт"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "p52",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Кинематика",
    "question": "Ускорение 2 м/с^2, время 3 с из покоя. Найдите скорость.",
    "options": [
      "4 м/с",
      "6 м/с",
      "8 м/с",
      "10 м/с"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "p53",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Законы сохранения",
    "question": "Потенциальная энергия 200 Дж, масса 5 кг, g=10. Найдите высоту.",
    "options": [
      "2 м",
      "3 м",
      "4 м",
      "10 м"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "p54",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Электричество",
    "question": "Сила тока 0.5 А, время 10 с. Найдите заряд.",
    "options": [
      "2 Кл",
      "5 Кл",
      "10 Кл",
      "20 Кл"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "p55",
    "subject": "physics",
    "subjectName": "Физика",
    "topic": "Молекулярная физика",
    "question": "Абсолютная температура 0°C в Кельвинах?",
    "options": [
      "-273 К",
      "0 К",
      "273 К",
      "373 К"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "s1",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Человек и общество",
    "question": "Что из перечисленного относится к биологическим потребностям человека?",
    "options": [
      "Общение с друзьями",
      "Потребность в пище",
      "Получение образования",
      "Самореализация"
    ],
    "answerIdx": 1,
    "explanation": "Биологические потребности - это потребности, связанные с выживанием: еда, вода, сон, дыхание."
  },
  {
    "id": "s2",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что из перечисленного является фактором производства?",
    "options": [
      "Прибыль",
      "Заработная плата",
      "Капитал",
      "Налоги"
    ],
    "answerIdx": 2,
    "explanation": "Факторы производства: труд, земля, капитал, предпринимательские способности, информация."
  },
  {
    "id": "s3",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "Какая форма правления предполагает передачу власти по наследству?",
    "options": [
      "Монархия",
      "Республика",
      "Демократия",
      "Федерация"
    ],
    "answerIdx": 0,
    "explanation": "Монархия - форма правления, где власть передается по наследству. Республика предполагает выборность власти."
  },
  {
    "id": "s4",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Право",
    "question": "Какая отрасль права регулирует отношения между работником и работодателем?",
    "options": [
      "Гражданское право",
      "Трудовое право",
      "Административное право",
      "Уголовное право"
    ],
    "answerIdx": 1,
    "explanation": "Трудовое право регулирует трудовые отношения: заключение договоров, оплата труда, отпуска."
  },
  {
    "id": "s5",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Социальные отношения",
    "question": "Верны ли суждения о социальной стратификации: А) Социальная стратификация существует в любом обществе; Б) Критерием стратификации может быть доход.",
    "options": [
      "Верно только А",
      "Верно только Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 2,
    "explanation": "Оба суждения верны. Стратификация - деление общества на слои, существует везде. Доход - один из критериев."
  },
  {
    "id": "s6",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Типология обществ",
    "question": "Какой признак характеризует постиндустриальное общество?",
    "options": [
      "Преобладание сельского хозяйства",
      "Развитие промышленности",
      "Преобладание сферы услуг",
      "Натуральное хозяйство"
    ],
    "answerIdx": 2,
    "explanation": "В постиндустриальном обществе преобладает сфера услуг и информационные технологии."
  },
  {
    "id": "s7",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "К какому виду налогов относится НДС?",
    "options": [
      "Прямой налог",
      "Косвенный налог",
      "Местный налог",
      "Прогрессивный налог"
    ],
    "answerIdx": 1,
    "explanation": "НДС - косвенный налог, т.к. включается в цену товара и фактически уплачивается потребителем."
  },
  {
    "id": "s8",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "Что относится к полномочиям Президента РФ?",
    "options": [
      "Утверждение бюджета",
      "Назначение Председателя Правительства",
      "Принятие законов",
      "Назначение выборов Президента"
    ],
    "answerIdx": 1,
    "explanation": "Президент назначает Председателя Правительства с согласия Госдумы. Бюджет утверждает Дума, законы принимает ФС."
  },
  {
    "id": "s9",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что из перечисленного относится к факторам производства?",
    "options": [
      "Прибыль",
      "Рента",
      "Капитал",
      "Налог"
    ],
    "answerIdx": 2,
    "explanation": "Факторы производства: труд, земля, капитал, предпринимательство."
  },
  {
    "id": "s10",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "Какая форма правления в России?",
    "options": [
      "Президентская республика",
      "Парламентская республика",
      "Смешанная республика",
      "Монархия"
    ],
    "answerIdx": 2,
    "explanation": "РФ - смешанная (президентско-парламентская) республика."
  },
  {
    "id": "s11",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что такое ВВП?",
    "options": [
      "Сумма всех товаров в стране",
      "Стоимость всех товаров и услуг в стране за год",
      "Доходы бюджета",
      "Экспорт минус импорт"
    ],
    "answerIdx": 1,
    "explanation": "ВВП - рыночная стоимость всех товаров и услуг, произведённых в стране за год."
  },
  {
    "id": "s12",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Социальные отношения",
    "question": "Какая семья считается расширенной?",
    "options": [
      "Родители + дети",
      "Родители + дети + бабушки/дедушки",
      "Один родитель + дети",
      "Супруги без детей"
    ],
    "answerIdx": 1,
    "explanation": "Расширенная включает несколько поколений."
  },
  {
    "id": "s13",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Право",
    "question": "Верны ли суждения: А) Нормы права регулируют все общественные отношения; Б) Нормы права обязательны для всех.",
    "options": [
      "Верно А",
      "Верно Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 1,
    "explanation": "Нормы права регулируют только те отношения, что урегулированы законом. Но они обязательны для всех."
  },
  {
    "id": "s14",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Право",
    "question": "Какая отрасль права регулирует отношения собственности?",
    "options": [
      "Уголовное право",
      "Гражданское право",
      "Административное право",
      "Трудовое право"
    ],
    "answerIdx": 1,
    "explanation": "Гражданское право регулирует имущественные и личные неимущественные отношения."
  },
  {
    "id": "s15",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Типология обществ",
    "question": "Какой тип общества характеризуется развитием промышленности?",
    "options": [
      "Традиционное",
      "Индустриальное",
      "Постиндустриальное",
      "Аграрное"
    ],
    "answerIdx": 1,
    "explanation": "Индустриальное общество основано на промышленном производстве."
  },
  {
    "id": "s16",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что относится к доходам государственного бюджета?",
    "options": [
      "Субсидии",
      "Налоги",
      "Дотации",
      "Трансферты"
    ],
    "answerIdx": 1,
    "explanation": "Налоги - основной источник доходов бюджета. Остальное - расходы."
  },
  {
    "id": "s17",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Социальные отношения",
    "question": "Какая функция семьи относится к репродуктивной?",
    "options": [
      "Воспитание детей",
      "Рождение детей",
      "Ведение хозяйства",
      "Забота о пожилых"
    ],
    "answerIdx": 1,
    "explanation": "Репродуктивная функция - рождение детей, воспроизводство населения."
  },
  {
    "id": "s18",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "Какой признак государства?",
    "options": [
      "Наличие флага",
      "Суверенитет",
      "Наличие гимна",
      "Столица"
    ],
    "answerIdx": 1,
    "explanation": "Суверенитет - важнейший признак государства, верховная власть на своей территории."
  },
  {
    "id": "s19",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Социальные отношения",
    "question": "Что является примером горизонтальной социальной мобильности?",
    "options": [
      "Повышение в должности",
      "Переезд в другой город на ту же должность",
      "Понижение в должности",
      "Разжалование"
    ],
    "answerIdx": 1,
    "explanation": "Горизонтальная мобильность - смена статуса без повышения/понижения."
  },
  {
    "id": "s20",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Духовная сфера",
    "question": "Какая из перечисленных религий относится к мировым?",
    "options": [
      "Индуизм",
      "Иудаизм",
      "Буддизм",
      "Конфуцианство"
    ],
    "answerIdx": 2,
    "explanation": "Мировые религии: буддизм, христианство, ислам."
  },
  {
    "id": "s21",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что такое инфляция?",
    "options": [
      "Рост производства",
      "Рост цен",
      "Падение цен",
      "Рост доходов"
    ],
    "answerIdx": 1,
    "explanation": "Инфляция - долговременный рост общего уровня цен."
  },
  {
    "id": "s22",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "К какой ветви власти относится Правительство РФ?",
    "options": [
      "Законодательной",
      "Исполнительной",
      "Судебной",
      "Контрольной"
    ],
    "answerIdx": 1,
    "explanation": "Правительство - высший орган исполнительной власти."
  },
  {
    "id": "s23",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Духовная сфера",
    "question": "Верны ли суждения об образовании: А) Образование в РФ обязательно; Б) Образование можно получить только в школе.",
    "options": [
      "Верно А",
      "Верно Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 0,
    "explanation": "Образование обязательно до 9 классов (основное общее). Б - неверно, есть много форм."
  },
  {
    "id": "s24",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Социальные отношения",
    "question": "Что является примером формальной социальной группы?",
    "options": [
      "Друзья",
      "Семья",
      "Коллектив завода",
      "Пассажиры автобуса"
    ],
    "answerIdx": 2,
    "explanation": "Формальная группа - с официальной структурой (коллектив завода)."
  },
  {
    "id": "s25",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "Какой режим характеризуется полным контролем над обществом?",
    "options": [
      "Демократия",
      "Авторитаризм",
      "Тоталитаризм",
      "Либерализм"
    ],
    "answerIdx": 2,
    "explanation": "Тоталитаризм - полный контроль государства над всеми сферами."
  },
  {
    "id": "s26",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что такое акциз?",
    "options": [
      "Подоходный налог",
      "Налог на добавленную стоимость",
      "Косвенный налог на отдельные товары",
      "Государственная пошлина"
    ],
    "answerIdx": 2,
    "explanation": "Акциз - косвенный налог на алкоголь, табак, топливо."
  },
  {
    "id": "s27",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Социальные отношения",
    "question": "Какая социальная группа выделена по демографическому признаку?",
    "options": [
      "Молодёжь",
      "Студенты",
      "Рабочие",
      "Горожане"
    ],
    "answerIdx": 0,
    "explanation": "Молодёжь - демографическая группа (по возрасту)."
  },
  {
    "id": "s28",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что является функцией денег?",
    "options": [
      "Средство производства",
      "Мера стоимости",
      "Фактор производства",
      "Капитал"
    ],
    "answerIdx": 1,
    "explanation": "Мера стоимости - функция денег."
  },
  {
    "id": "s29",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Какой из перечисленных налогов является прямым?",
    "options": [
      "НДС",
      "Акциз",
      "Налог на прибыль",
      "Таможенная пошлина"
    ],
    "answerIdx": 2,
    "explanation": "Налог на прибыль - прямой налог."
  },
  {
    "id": "s30",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Духовная сфера",
    "question": "Какая форма культуры понятна без специальной подготовки?",
    "options": [
      "Наука",
      "Массовая культура",
      "Религия",
      "Искусство"
    ],
    "answerIdx": 1,
    "explanation": "Массовая культура рассчитана на широкую аудиторию."
  },
  {
    "id": "s31",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "Что является признаком правового государства?",
    "options": [
      "Монархия",
      "Верховенство закона",
      "Унитарное устройство",
      "Тоталитаризм"
    ],
    "answerIdx": 1,
    "explanation": "Верховенство закона - важнейший признак правового государства."
  },
  {
    "id": "s32",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Политика",
    "question": "Кто является главой государства в РФ?",
    "options": [
      "Председатель Правительства",
      "Президент",
      "Председатель Госдумы",
      "Министр"
    ],
    "answerIdx": 1,
    "explanation": "Президент - глава государства."
  },
  {
    "id": "s33",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Право",
    "question": "Какая отрасль права применяется при краже?",
    "options": [
      "Гражданское",
      "Трудовое",
      "Уголовное",
      "Административное"
    ],
    "answerIdx": 2,
    "explanation": "Кража - уголовное преступление, регулируется УК."
  },
  {
    "id": "s34",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Экономика",
    "question": "Что из перечисленного относится к факторам производства?",
    "options": [
      "Акции",
      "Труд",
      "Облигации",
      "Рента"
    ],
    "answerIdx": 1,
    "explanation": "Труд - фактор производства."
  },
  {
    "id": "s35",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Типология обществ",
    "question": "Какой тип общества называют традиционным?",
    "options": [
      "Промышленное",
      "Аграрное",
      "Информационное",
      "Техногенное"
    ],
    "answerIdx": 1,
    "explanation": "Традиционное (аграрное) - сельское хозяйство основа экономики."
  },
  {
    "id": "s36",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Духовная сфера",
    "question": "Верны ли суждения: А) Культура бывает материальной и духовной; Б) Культура передаётся по наследству.",
    "options": [
      "Верно А",
      "Верно Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 0,
    "explanation": "Культура бывает материальной и духовной (А - верно). Б - неверно, культура не передаётся генетически."
  },
  {
    "id": "s37",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что является признаком рыночной экономики?",
    "options": [
      "Монополия государства",
      "Свободное ценообразование",
      "Централизованное планирование",
      "Директивное распределение"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s38",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая функция семьи относится к воспитательной?",
    "options": [
      "Рождение детей",
      "Передача опыта детям",
      "Ведение хозяйства",
      "Защита детей"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s39",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой фактор производства относится к капиталу?",
    "options": [
      "Труд рабочих",
      "Здание завода",
      "Полезные ископаемые",
      "Предпринимательские способности"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s40",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что относится к формам территориально-государственного устройства?",
    "options": [
      "Монархия",
      "Федерация",
      "Демократия",
      "Республика"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s41",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая отрасль права регулирует административные правонарушения?",
    "options": [
      "Уголовное право",
      "Административное право",
      "Гражданское право",
      "Трудовое право"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s42",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что из перечисленного — социальная норма?",
    "options": [
      "Уголовный кодекс",
      "Закон Ньютона",
      "Кулинарный рецепт",
      "Инструкция к стиральной машине"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s43",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая религия относится к мировым?",
    "options": [
      "Конфуцианство",
      "Ислам",
      "Индуизм",
      "Иудаизм"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s44",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое дефолт?",
    "options": [
      "Рост экономики",
      "Отказ платить по долгам",
      "Укрепление валюты",
      "Снижение налогов"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s45",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой режим характеризуется разделением властей?",
    "options": [
      "Тоталитарный",
      "Демократический",
      "Авторитарный",
      "Монархический"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s46",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое ВВП на душу населения?",
    "options": [
      "Общий ВВП/численность населения",
      "ВВП/территория",
      "ВВП + инфляция",
      "ВВП - налоги"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s47",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Верны ли суждения о налогах: А) Косвенные налоги включаются в цену товара; Б) НДС — прямой налог.",
    "options": [
      "Верно А",
      "Верно Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s48",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что относится к глобальным проблемам?",
    "options": [
      "Проблема выбора профессии",
      "Экологическая проблема",
      "Проблема транспорта",
      "Проблема образования"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s49",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой социальный статус является предписанным?",
    "options": [
      "Студент",
      "Пол (муж/жен)",
      "Работник",
      "Директор"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s50",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что является результатом социализации?",
    "options": [
      "Рождение человека",
      "Формирование личности",
      "Получение паспорта",
      "Окончание школы"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s51",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая ветвь власти осуществляет правосудие?",
    "options": [
      "Законодательная",
      "Исполнительная",
      "Судебная",
      "Контрольная"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "s52",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое акционирование?",
    "options": [
      "Ликвидация предприятия",
      "Превращение в АО",
      "Национализация",
      "Приватизация"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s53",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая тенденция развития образования в РФ?",
    "options": [
      "Уменьшение сроков",
      "Гуманизация",
      "Увеличение платы",
      "Сокращение предметов"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s54",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Верны ли суждения об инфляции: А) Инфляция ведёт к обесцениванию денег; Б) Высокая инфляция полезна.",
    "options": [
      "Верно А",
      "Верно Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s55",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой тип безработицы связан с поиском работы?",
    "options": [
      "Фрикционная",
      "Циклическая",
      "Структурная",
      "Сезонная"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s56",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое ВВП?",
    "options": [
      "Сумма товаров",
      "Рыночная стоимость всего произведённого за год",
      "Доходы населения",
      "Госбюджет"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s57",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая сфера общества включает науку и культуру?",
    "options": [
      "Экономическая",
      "Политическая",
      "Духовная",
      "Социальная"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "s58",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Кто является субъектом политики?",
    "options": [
      "Гражданин",
      "Предприятие",
      "Банк",
      "Больница"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s37",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что является признаком рыночной экономики?",
    "options": [
      "Монополия государства",
      "Свободное ценообразование",
      "Централизованное планирование",
      "Директивное распределение"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s38",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая функция семьи относится к воспитательной?",
    "options": [
      "Рождение детей",
      "Передача опыта детям",
      "Ведение хозяйства",
      "Защита детей"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s39",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой фактор производства относится к капиталу?",
    "options": [
      "Труд рабочих",
      "Здание завода",
      "Полезные ископаемые",
      "Предпринимательские способности"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s40",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что относится к формам территориально-государственного устройства?",
    "options": [
      "Монархия",
      "Федерация",
      "Демократия",
      "Республика"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s41",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая отрасль права регулирует административные правонарушения?",
    "options": [
      "Уголовное право",
      "Административное право",
      "Гражданское право",
      "Трудовое право"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s42",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что из перечисленного — социальная норма?",
    "options": [
      "Уголовный кодекс",
      "Закон Ньютона",
      "Кулинарный рецепт",
      "Инструкция к стиральной машине"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s43",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая религия относится к мировым?",
    "options": [
      "Конфуцианство",
      "Ислам",
      "Индуизм",
      "Иудаизм"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s44",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое дефолт?",
    "options": [
      "Рост экономики",
      "Отказ платить по долгам",
      "Укрепление валюты",
      "Снижение налогов"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s45",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой режим характеризуется разделением властей?",
    "options": [
      "Тоталитарный",
      "Демократический",
      "Авторитарный",
      "Монархический"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s46",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое ВВП на душу населения?",
    "options": [
      "Общий ВВП/численность населения",
      "ВВП/территория",
      "ВВП + инфляция",
      "ВВП - налоги"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s47",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Верны ли суждения о налогах: А) Косвенные налоги включаются в цену товара; Б) НДС — прямой налог.",
    "options": [
      "Верно А",
      "Верно Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s48",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что относится к глобальным проблемам?",
    "options": [
      "Проблема выбора профессии",
      "Экологическая проблема",
      "Проблема транспорта",
      "Проблема образования"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s49",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой социальный статус является предписанным?",
    "options": [
      "Студент",
      "Пол (муж/жен)",
      "Работник",
      "Директор"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s50",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что является результатом социализации?",
    "options": [
      "Рождение человека",
      "Формирование личности",
      "Получение паспорта",
      "Окончание школы"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s51",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая ветвь власти осуществляет правосудие?",
    "options": [
      "Законодательная",
      "Исполнительная",
      "Судебная",
      "Контрольная"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "s52",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое акционирование?",
    "options": [
      "Ликвидация предприятия",
      "Превращение в АО",
      "Национализация",
      "Приватизация"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s53",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая тенденция развития образования в РФ?",
    "options": [
      "Уменьшение сроков",
      "Гуманизация",
      "Увеличение платы",
      "Сокращение предметов"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s54",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Верны ли суждения об инфляции: А) Инфляция ведёт к обесцениванию денег; Б) Высокая инфляция полезна.",
    "options": [
      "Верно А",
      "Верно Б",
      "Оба верны",
      "Оба неверны"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s55",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какой тип безработицы связан с поиском работы?",
    "options": [
      "Фрикционная",
      "Циклическая",
      "Структурная",
      "Сезонная"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s56",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Что такое ВВП?",
    "options": [
      "Сумма товаров",
      "Рыночная стоимость всего произведённого за год",
      "Доходы населения",
      "Госбюджет"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s57",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Какая сфера общества включает науку и культуру?",
    "options": [
      "Экономическая",
      "Политическая",
      "Духовная",
      "Социальная"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "s58",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Обществознание",
    "question": "Кто является субъектом политики?",
    "options": [
      "Гражданин",
      "Предприятие",
      "Банк",
      "Больница"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "s59",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Типология обществ",
    "question": "Что характеризует постиндустриальное общество?",
    "options": [
      "С/Х основа",
      "Промышленность",
      "Сфера услуг",
      "Натуральное хозяйство"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "s60",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Социальные отношения",
    "question": "Какая форма санкции относится к формальной?",
    "options": [
      "Похвала",
      "Премия",
      "Улыбка",
      "Аплодисменты"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "s61",
    "subject": "society",
    "subjectName": "Обществознание",
    "topic": "Право",
    "question": "Что из перечисленного - источник права?",
    "options": [
      "Учебник",
      "Закон",
      "Статья в журнале",
      "Лекция"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c1",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Строение атома",
    "question": "Сколько электронов находится на внешнем уровне атома кислорода?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answerIdx": 2,
    "explanation": "Кислород находится в VI группе, значит на внешнем уровне 6 электронов."
  },
  {
    "id": "c2",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химическая связь",
    "question": "Какая связь в молекуле хлора Cl2?",
    "options": [
      "Ионная",
      "Ковалентная неполярная",
      "Ковалентная полярная",
      "Металлическая"
    ],
    "answerIdx": 1,
    "explanation": "Cl2 - два атома одного элемента, электроотрицательность одинаковая - связь ковалентная неполярная."
  },
  {
    "id": "c3",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Количество вещества",
    "question": "Какой объем (н.у.) занимает 1 моль углекислого газа CO2?",
    "options": [
      "11.2 л",
      "22.4 л",
      "33.6 л",
      "44.8 л"
    ],
    "answerIdx": 1,
    "explanation": "1 моль любого газа при н.у. занимает 22.4 л (закон Авогадро)."
  },
  {
    "id": "c4",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Гидролиз",
    "question": "Какая среда в растворе хлорида аммония NH4Cl?",
    "options": [
      "Нейтральная",
      "Кислая",
      "Щелочная",
      "Зависит от концентрации"
    ],
    "answerIdx": 1,
    "explanation": "NH4Cl - соль слабого основания и сильной кислоты. Гидролиз по катиону, среда кислая."
  },
  {
    "id": "c5",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Органическая химия",
    "question": "Какое вещество является изомером бутана?",
    "options": [
      "Бутен",
      "2-метилпропан",
      "Бутанол",
      "Циклобутан"
    ],
    "answerIdx": 1,
    "explanation": "Изомеры - вещества с одинаковым составом, разным строением. 2-метилпропан (изобутан) - изомер бутана C4H10."
  },
  {
    "id": "c6",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Окислительно-восстановительные реакции",
    "question": "В каком соединении степень окисления хрома равна +6?",
    "options": [
      "Cr2O3",
      "CrO3",
      "Cr(OH)3",
      "Cr2(SO4)3"
    ],
    "answerIdx": 1,
    "explanation": "В CrO3 у кислорода -2, значит у хрома +6. В остальных: Cr2O3 (+3), Cr(OH)3 (+3), Cr2(SO4)3 (+3)."
  },
  {
    "id": "c7",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Основные понятия",
    "question": "Молярная масса H2SO4 равна?",
    "options": [
      "49 г/моль",
      "98 г/моль",
      "196 г/моль",
      "100 г/моль"
    ],
    "answerIdx": 1,
    "explanation": "M = 2*1 + 32 + 4*16 = 98 г/моль."
  },
  {
    "id": "c8",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химическая связь",
    "question": "Какая связь в молекуле H2O?",
    "options": [
      "Ионная",
      "Ковалентная полярная",
      "Ковалентная неполярная",
      "Металлическая"
    ],
    "answerIdx": 1,
    "explanation": "Вода - ковалентная полярная связь (разные элементы - H и O)."
  },
  {
    "id": "c9",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Количество вещества",
    "question": "Сколько атомов в 1 моле H2O?",
    "options": [
      "6*10^23",
      "1.8*10^24",
      "3*10^23",
      "12*10^23"
    ],
    "answerIdx": 1,
    "explanation": "1 моль H2O = 6*10^23 молекул. В каждой 3 атома. Итого 1.8*10^24."
  },
  {
    "id": "c10",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Неорганическая химия",
    "question": "Какой газ выделяется при взаимодействии цинка с HCl?",
    "options": [
      "Кислород",
      "Водород",
      "Хлор",
      "Хлороводород"
    ],
    "answerIdx": 1,
    "explanation": "Zn + 2HCl = ZnCl2 + H2↑"
  },
  {
    "id": "c11",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Строение атома",
    "question": "Сколько неспаренных электронов у атома азота в основном состоянии?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 2,
    "explanation": "Азот: 1s2 2s2 2p3. На p-подуровне 3 неспаренных электрона."
  },
  {
    "id": "c12",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химическая кинетика",
    "question": "Как изменится скорость реакции при повышении температуры на 30°C (γ=2)?",
    "options": [
      "Увеличится в 2 раза",
      "Увеличится в 4 раза",
      "Увеличится в 8 раз",
      "Увеличится в 16 раз"
    ],
    "answerIdx": 2,
    "explanation": "Правило Вант-Гоффа: v2/v1 = γ^(ΔT/10) = 2^3 = 8."
  },
  {
    "id": "c13",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Основные понятия",
    "question": "Формула серной кислоты?",
    "options": [
      "H2SO3",
      "H2SO4",
      "H2S",
      "SO3"
    ],
    "answerIdx": 1,
    "explanation": "Серная кислота - H2SO4."
  },
  {
    "id": "c14",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Гидролиз",
    "question": "Какая среда в растворе Na2CO3?",
    "options": [
      "Нейтральная",
      "Кислая",
      "Щелочная",
      "Зависит"
    ],
    "answerIdx": 2,
    "explanation": "Na2CO3 - соль сильного основания и слабой кислоты, гидролиз по аниону, среда щелочная."
  },
  {
    "id": "c15",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Органическая химия",
    "question": "Что такое изомеры?",
    "options": [
      "Вещества с разным составом",
      "Вещества с одинаковым составом, разным строением",
      "Одинаковые вещества",
      "Разные формы одного элемента"
    ],
    "answerIdx": 1,
    "explanation": "Изомеры - вещества с одинаковым составом, но разным строением."
  },
  {
    "id": "c16",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Неорганическая химия",
    "question": "Качественная реакция на углекислый газ?",
    "options": [
      "Известковая вода мутнеет",
      "Лакмус краснеет",
      "Запах тухлых яиц",
      "Горит синим пламенем"
    ],
    "answerIdx": 0,
    "explanation": "CO2 + Ca(OH)2 = CaCO3↓ + H2O (муть)."
  },
  {
    "id": "c17",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Строение атома",
    "question": "Какой элемент имеет электронную конфигурацию 1s2 2s2 2p6 3s2?",
    "options": [
      "Ne",
      "Na",
      "Mg",
      "Al"
    ],
    "answerIdx": 2,
    "explanation": "12 электронов = магний (Mg)."
  },
  {
    "id": "c18",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Количество вещества",
    "question": "m(NaCl) = 11.7 г. Найдите количество вещества (M=58.5 г/моль).",
    "options": [
      "0.1 моль",
      "0.2 моль",
      "0.5 моль",
      "1 моль"
    ],
    "answerIdx": 1,
    "explanation": "n = m/M = 11.7/58.5 = 0.2 моль."
  },
  {
    "id": "c19",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Строение атома",
    "question": "Какой элемент имеет 15 протонов?",
    "options": [
      "Si",
      "P",
      "S",
      "Cl"
    ],
    "answerIdx": 1,
    "explanation": "Фосфор (P) - 15 протонов."
  },
  {
    "id": "c20",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химическая связь",
    "question": "Какая связь в молекуле NaCl?",
    "options": [
      "Ковалентная полярная",
      "Ионная",
      "Металлическая",
      "Ковалентная неполярная"
    ],
    "answerIdx": 1,
    "explanation": "NaCl - ионная связь (металл+неметалл)."
  },
  {
    "id": "c21",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Количество вещества",
    "question": "Сколько моль в 36 г воды (H2O, M=18 г/моль)?",
    "options": [
      "1 моль",
      "2 моль",
      "3 моль",
      "4 моль"
    ],
    "answerIdx": 1,
    "explanation": "n=m/M=36/18=2 моль."
  },
  {
    "id": "c22",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "ОВР",
    "question": "В каком соединении степень окисления серы +6?",
    "options": [
      "H2S",
      "SO2",
      "H2SO4",
      "Na2S"
    ],
    "answerIdx": 2,
    "explanation": "В H2SO4 у S степень +6."
  },
  {
    "id": "c23",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Электролиты",
    "question": "Какая среда у раствора CH3COOH?",
    "options": [
      "Нейтральная",
      "Кислая",
      "Щелочная",
      "Нельзя определить"
    ],
    "answerIdx": 1,
    "explanation": "Уксусная кислота - слабая кислота, среда кислая."
  },
  {
    "id": "c24",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Количество вещества",
    "question": "Какой объём занимают 2 моль газа при н.у.?",
    "options": [
      "22.4 л",
      "44.8 л",
      "67.2 л",
      "89.6 л"
    ],
    "answerIdx": 1,
    "explanation": "V=n*Vm=2*22.4=44.8 л."
  },
  {
    "id": "c25",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Органическая химия",
    "question": "Сколько изомеров у пентана C5H12?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 1,
    "explanation": "3 изомера: н-пентан, изопентан, неопентан."
  },
  {
    "id": "c26",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Органическая химия",
    "question": "Как называется реакция: C2H4 + H2O = C2H5OH?",
    "options": [
      "Дегидратация",
      "Гидратация",
      "Гидрирование",
      "Изомеризация"
    ],
    "answerIdx": 1,
    "explanation": "Гидратация - присоединение воды."
  },
  {
    "id": "c27",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая формула серной кислоты?",
    "options": [
      "HCl",
      "HNO3",
      "H2SO4",
      "H3PO4"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c28",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Сколько электронов у атома Na (e=11)?",
    "options": [
      "8",
      "11",
      "23",
      "6"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c29",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая связь в молекуле O2?",
    "options": [
      "Ионная",
      "Ковалентная неполярная",
      "Металлическая",
      "Водородная"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c30",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "В каком соединении степень окисления азота +5?",
    "options": [
      "NO",
      "NO2",
      "N2O5",
      "NH3"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c31",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой оксид является кислотным?",
    "options": [
      "Na2O",
      "CaO",
      "SO3",
      "FeO"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c32",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Формула гидроксида натрия?",
    "options": [
      "NaOH",
      "Na2O",
      "NaCl",
      "NaHCO3"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "c33",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая реакция является реакцией замещения?",
    "options": [
      "Zn + HCl",
      "H2 + O2",
      "Na + Cl2",
      "KOH + HCl"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "c34",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Сколько граммов в 0.5 моль H2O?",
    "options": [
      "6 г",
      "9 г",
      "18 г",
      "36 г"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c35",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Как изменяется атомный радиус по периоду?",
    "options": [
      "Увеличивается",
      "Уменьшается",
      "Не изменяется",
      "Сначала увеличивается"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c36",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая среда у раствора соды (Na2CO3)?",
    "options": [
      "Нейтральная",
      "Кислая",
      "Щелочная",
      "Зависит от концентрации"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c37",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой элемент входит в состав гемоглобина?",
    "options": [
      "Калий",
      "Натрий",
      "Железо",
      "Магний"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c38",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какое вещество входит в состав поваренной соли?",
    "options": [
      "KCl",
      "CaCO3",
      "NaCl",
      "NaHCO3"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c39",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая реакция называется гидратацией?",
    "options": [
      "Присоединение H2",
      "Присоединение H2O",
      "Отщепление H2O",
      "Присоединение Cl2"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c40",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой углеводород относится к алкенам?",
    "options": [
      "C2H6",
      "C2H4",
      "C2H2",
      "CH4"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c41",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Найдите pH 0.01M раствора HCl (сильная кислота).",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c42",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какое вещество реагирует с NaOH?",
    "options": [
      "MgO",
      "NaCl",
      "HCl",
      "K2O"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c43",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Сколько изомеров у гексана?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c44",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Как называется CH3OH?",
    "options": [
      "Метан",
      "Метанол",
      "Этанол",
      "Метановая кислота"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c45",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой металл самый активный?",
    "options": [
      "Fe",
      "Cu",
      "K",
      "Zn"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c46",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Что такое индикатор?",
    "options": [
      "Вещество для ускорения",
      "Вещество для определения среды",
      "Катализатор",
      "Фильтр"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c27",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая формула серной кислоты?",
    "options": [
      "HCl",
      "HNO3",
      "H2SO4",
      "H3PO4"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c28",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Сколько электронов у атома Na (e=11)?",
    "options": [
      "8",
      "11",
      "23",
      "6"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c29",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая связь в молекуле O2?",
    "options": [
      "Ионная",
      "Ковалентная неполярная",
      "Металлическая",
      "Водородная"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c30",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "В каком соединении степень окисления азота +5?",
    "options": [
      "NO",
      "NO2",
      "N2O5",
      "NH3"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c31",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой оксид является кислотным?",
    "options": [
      "Na2O",
      "CaO",
      "SO3",
      "FeO"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c32",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Формула гидроксида натрия?",
    "options": [
      "NaOH",
      "Na2O",
      "NaCl",
      "NaHCO3"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "c33",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая реакция является реакцией замещения?",
    "options": [
      "Zn + HCl",
      "H2 + O2",
      "Na + Cl2",
      "KOH + HCl"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "c34",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Сколько граммов в 0.5 моль H2O?",
    "options": [
      "6 г",
      "9 г",
      "18 г",
      "36 г"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c35",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Как изменяется атомный радиус по периоду?",
    "options": [
      "Увеличивается",
      "Уменьшается",
      "Не изменяется",
      "Сначала увеличивается"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c36",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая среда у раствора соды (Na2CO3)?",
    "options": [
      "Нейтральная",
      "Кислая",
      "Щелочная",
      "Зависит от концентрации"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c37",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой элемент входит в состав гемоглобина?",
    "options": [
      "Калий",
      "Натрий",
      "Железо",
      "Магний"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c38",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какое вещество входит в состав поваренной соли?",
    "options": [
      "KCl",
      "CaCO3",
      "NaCl",
      "NaHCO3"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c39",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какая реакция называется гидратацией?",
    "options": [
      "Присоединение H2",
      "Присоединение H2O",
      "Отщепление H2O",
      "Присоединение Cl2"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c40",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой углеводород относится к алкенам?",
    "options": [
      "C2H6",
      "C2H4",
      "C2H2",
      "CH4"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c41",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Найдите pH 0.01M раствора HCl (сильная кислота).",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c42",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какое вещество реагирует с NaOH?",
    "options": [
      "MgO",
      "NaCl",
      "HCl",
      "K2O"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c43",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Сколько изомеров у гексана?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c44",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Как называется CH3OH?",
    "options": [
      "Метан",
      "Метанол",
      "Этанол",
      "Метановая кислота"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c45",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Какой металл самый активный?",
    "options": [
      "Fe",
      "Cu",
      "K",
      "Zn"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c46",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Химия",
    "question": "Что такое индикатор?",
    "options": [
      "Вещество для ускорения",
      "Вещество для определения среды",
      "Катализатор",
      "Фильтр"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c47",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Органическая химия",
    "question": "Формула метана?",
    "options": [
      "C2H6",
      "CH4",
      "C2H4",
      "C3H8"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "c48",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Неорганическая химия",
    "question": "Какой металл реагирует с водой?",
    "options": [
      "Cu",
      "Fe",
      "Na",
      "Ag"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "c49",
    "subject": "chemistry",
    "subjectName": "Химия",
    "topic": "Количество вещества",
    "question": "Что тяжелее: 1 моль H2 или 1 моль O2?",
    "options": [
      "H2",
      "O2",
      "Одинаково",
      "Зависит от pH"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e1",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Past Simple",
    "question": "Choose the correct form: 'I ___ to the cinema yesterday.'",
    "options": [
      "go",
      "went",
      "have gone",
      "was going"
    ],
    "answerIdx": 1,
    "explanation": "С yesterday (вчера) используем Past Simple - went."
  },
  {
    "id": "e2",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Conditionals",
    "question": "Fill in the blank: 'If it rains, we ___ stay at home.'",
    "options": [
      "will",
      "would",
      "are",
      "do"
    ],
    "answerIdx": 0,
    "explanation": "First Conditional: if + Present Simple, will + infinitive."
  },
  {
    "id": "e3",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Prepositions",
    "question": "Choose the correct preposition: 'She is interested ___ learning French.'",
    "options": [
      "on",
      "in",
      "at",
      "of"
    ],
    "answerIdx": 1,
    "explanation": "Устойчивое выражение: interested IN (заинтересован в)."
  },
  {
    "id": "e4",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Vocabulary",
    "question": "What is the synonym of 'BIG'?",
    "options": [
      "Small",
      "Tiny",
      "Large",
      "Short"
    ],
    "answerIdx": 2,
    "explanation": "Large - большой, синоним к big. Small, tiny - маленькие, short - короткий."
  },
  {
    "id": "e5",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Passive Voice",
    "question": "Choose the correct passive: 'The letter ___ yesterday.'",
    "options": [
      "sent",
      "was sent",
      "is sent",
      "has sent"
    ],
    "answerIdx": 1,
    "explanation": "Пассивный залог, прошедшее время: was/were + V3. The letter was sent."
  },
  {
    "id": "e6",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Countable/Uncountable",
    "question": "Which word is a COUNTABLE noun?",
    "options": [
      "Water",
      "Advice",
      "Chair",
      "Information"
    ],
    "answerIdx": 2,
    "explanation": "Chair (стул) - исчисляемое (a chair, two chairs). Water, advice, information - неисчисляемые."
  },
  {
    "id": "e7",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Present Perfect Continuous",
    "question": "Choose: 'She ___ English for 5 years.'",
    "options": [
      "learns",
      "is learning",
      "has been learning",
      "learned"
    ],
    "answerIdx": 2,
    "explanation": "Present Perfect Continuous с for 5 years."
  },
  {
    "id": "e8",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Adverbs",
    "question": "Fill in: 'He is not tall ___ to reach the shelf.'",
    "options": [
      "enough",
      "too",
      "so",
      "very"
    ],
    "answerIdx": 0,
    "explanation": "Конструкция: adjective + enough + infinitive."
  },
  {
    "id": "e9",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Conditionals",
    "question": "Choose the correct form: 'If I ___ you, I would accept.'",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answerIdx": 2,
    "explanation": "Second Conditional: If I were you..."
  },
  {
    "id": "e10",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Vocabulary",
    "question": "What is the opposite of 'ancient'?",
    "options": [
      "old",
      "modern",
      "historic",
      "classic"
    ],
    "answerIdx": 1,
    "explanation": "Ancient = древний, modern = современный (антоним)."
  },
  {
    "id": "e11",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Passive Voice",
    "question": "Choose: 'The book ___ by Tolstoy.'",
    "options": [
      "wrote",
      "was written",
      "is writing",
      "has written"
    ],
    "answerIdx": 1,
    "explanation": "Пассив: was written (написана)."
  },
  {
    "id": "e12",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Vocabulary",
    "question": "Which word means 'очень большой'?",
    "options": [
      "tiny",
      "huge",
      "narrow",
      "shallow"
    ],
    "answerIdx": 1,
    "explanation": "Huge = огромный, очень большой."
  },
  {
    "id": "e13",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Prepositions",
    "question": "Correct preposition: 'We arrived ___ the airport at 5.'",
    "options": [
      "to",
      "in",
      "at",
      "on"
    ],
    "answerIdx": 2,
    "explanation": "Arrive AT (конкретное место). Arrive IN (город/страна)."
  },
  {
    "id": "e14",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Conjunctions",
    "question": "Choose: 'Neither the teacher ___ the students were late.'",
    "options": [
      "or",
      "nor",
      "and",
      "but"
    ],
    "answerIdx": 1,
    "explanation": "Neither... nor (ни... ни)."
  },
  {
    "id": "e15",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Vocabulary",
    "question": "What is 'job' in Russian?",
    "options": [
      "работа",
      "учеба",
      "хобби",
      "отдых"
    ],
    "answerIdx": 0,
    "explanation": "Job = работа (существительное)."
  },
  {
    "id": "e16",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Adverbs",
    "question": "Complete: 'I have ___ finished my homework.'",
    "options": [
      "just",
      "yet",
      "still",
      "already"
    ],
    "answerIdx": 0,
    "explanation": "Just = только что. Yet - в вопросах/отрицаниях."
  },
  {
    "id": "e17",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Comparatives",
    "question": "Choose: 'This is the ___ book I have ever read.'",
    "options": [
      "good",
      "better",
      "best",
      "well"
    ],
    "answerIdx": 2,
    "explanation": "Превосходная степень: the best (лучший)."
  },
  {
    "id": "e18",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Reported Speech",
    "question": "Complete: 'She asked me where I ___ .'",
    "options": [
      "live",
      "lived",
      "am living",
      "will live"
    ],
    "answerIdx": 1,
    "explanation": "Согласование времён: past simple после past simple."
  },
  {
    "id": "e19",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Present Continuous",
    "question": "Choose: 'I ___ to music now.'",
    "options": [
      "listen",
      "am listening",
      "listened",
      "have listened"
    ],
    "answerIdx": 1,
    "explanation": "Present Continuous (now)."
  },
  {
    "id": "e20",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Present Perfect",
    "question": "Choose: 'She ___ never been to London.'",
    "options": [
      "has",
      "have",
      "is",
      "was"
    ],
    "answerIdx": 0,
    "explanation": "Present Perfect: has been (she)."
  },
  {
    "id": "e21",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Comparatives",
    "question": "What is the comparative of 'good'?",
    "options": [
      "gooder",
      "better",
      "more good",
      "best"
    ],
    "answerIdx": 1,
    "explanation": "Good - better - the best (исключение)."
  },
  {
    "id": "e22",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Prepositions",
    "question": "Choose: 'He arrived ___ 5 o'clock.'",
    "options": [
      "in",
      "on",
      "at",
      "by"
    ],
    "answerIdx": 2,
    "explanation": "С точным временем используем AT."
  },
  {
    "id": "e23",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Vocabulary",
    "question": "Which word is a synonym of 'quickly'?",
    "options": [
      "slowly",
      "rapidly",
      "loudly",
      "quietly"
    ],
    "answerIdx": 1,
    "explanation": "Quickly = rapidly (быстро)."
  },
  {
    "id": "e24",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Adverbs",
    "question": "Choose: 'They have ___ finished their work.'",
    "options": [
      "yet",
      "already",
      "still",
      "ever"
    ],
    "answerIdx": 1,
    "explanation": "Already - уже (в утверждениях)."
  },
  {
    "id": "e25",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Infinitive",
    "question": "Complete: 'I would like ___ help you.'",
    "options": [
      "to",
      "for",
      "at",
      "in"
    ],
    "answerIdx": 0,
    "explanation": "Would like + to + infinitive."
  },
  {
    "id": "e26",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar: Comparatives",
    "question": "Choose: 'This is the ___ movie I've ever seen.'",
    "options": [
      "bad",
      "worse",
      "worst",
      "badly"
    ],
    "answerIdx": 2,
    "explanation": "Превосходная: the worst (худший)."
  },
  {
    "id": "e27",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'She ___ to school every day.'",
    "options": [
      "go",
      "goes",
      "going",
      "went"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e28",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'They ___ football now.'",
    "options": [
      "play",
      "are playing",
      "played",
      "have played"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e29",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'I have ___ been to Paris.'",
    "options": [
      "ever",
      "never",
      "yet",
      "since"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e30",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'This is the ___ day of my life!'",
    "options": [
      "bad",
      "worse",
      "worst",
      "most bad"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "e31",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What is 'dog' in Russian?",
    "options": [
      "кошка",
      "собака",
      "птица",
      "рыба"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e32",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'We arrived ___ the station at 6.'",
    "options": [
      "to",
      "in",
      "at",
      "on"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "e33",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: '___ you like some tea?'",
    "options": [
      "Would",
      "Do",
      "Are",
      "Have"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "e34",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'He is ___ young to drive a car.'",
    "options": [
      "too",
      "enough",
      "so",
      "very"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "e35",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What is the opposite of 'hot'?",
    "options": [
      "warm",
      "cold",
      "cool",
      "boiling"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e36",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'She asked me where I ___.'",
    "options": [
      "live",
      "lived",
      "am living",
      "will live"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e37",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'If it rains, I ___ stay home.'",
    "options": [
      "will",
      "would",
      "am",
      "do"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "e38",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'I ___ my homework yet.'",
    "options": [
      "did",
      "haven't done",
      "do",
      "am doing"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e39",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What does 'unfortunately' mean?",
    "options": [
      "к счастью",
      "к несчастью",
      "во-первых",
      "наконец"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e40",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Correct: 'My sister ___ a doctor.'",
    "options": [
      "am",
      "is",
      "are",
      "be"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e41",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'How ___ milk do you want?'",
    "options": [
      "many",
      "much",
      "few",
      "little"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e42",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'He said that he ___ coming.'",
    "options": [
      "is",
      "was",
      "will",
      "can"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e43",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What is a synonym of 'big'?",
    "options": [
      "small",
      "large",
      "tiny",
      "short"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e44",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'The car ___ stolen yesterday.'",
    "options": [
      "is",
      "was",
      "has",
      "will"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e45",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'I am interested ___ art.'",
    "options": [
      "on",
      "in",
      "at",
      "of"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e46",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'She sings ___.'",
    "options": [
      "beautiful",
      "beautifully",
      "beauty",
      "more beautiful"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e27",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'She ___ to school every day.'",
    "options": [
      "go",
      "goes",
      "going",
      "went"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e28",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'They ___ football now.'",
    "options": [
      "play",
      "are playing",
      "played",
      "have played"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e29",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'I have ___ been to Paris.'",
    "options": [
      "ever",
      "never",
      "yet",
      "since"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e30",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'This is the ___ day of my life!'",
    "options": [
      "bad",
      "worse",
      "worst",
      "most bad"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "e31",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What is 'dog' in Russian?",
    "options": [
      "кошка",
      "собака",
      "птица",
      "рыба"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e32",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'We arrived ___ the station at 6.'",
    "options": [
      "to",
      "in",
      "at",
      "on"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "e33",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: '___ you like some tea?'",
    "options": [
      "Would",
      "Do",
      "Are",
      "Have"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "e34",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'He is ___ young to drive a car.'",
    "options": [
      "too",
      "enough",
      "so",
      "very"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "e35",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What is the opposite of 'hot'?",
    "options": [
      "warm",
      "cold",
      "cool",
      "boiling"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e36",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'She asked me where I ___.'",
    "options": [
      "live",
      "lived",
      "am living",
      "will live"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e37",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'If it rains, I ___ stay home.'",
    "options": [
      "will",
      "would",
      "am",
      "do"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "e38",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'I ___ my homework yet.'",
    "options": [
      "did",
      "haven't done",
      "do",
      "am doing"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e39",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What does 'unfortunately' mean?",
    "options": [
      "к счастью",
      "к несчастью",
      "во-первых",
      "наконец"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e40",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Correct: 'My sister ___ a doctor.'",
    "options": [
      "am",
      "is",
      "are",
      "be"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e41",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'How ___ milk do you want?'",
    "options": [
      "many",
      "much",
      "few",
      "little"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e42",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'He said that he ___ coming.'",
    "options": [
      "is",
      "was",
      "will",
      "can"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e43",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What is a synonym of 'big'?",
    "options": [
      "small",
      "large",
      "tiny",
      "short"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e44",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'The car ___ stolen yesterday.'",
    "options": [
      "is",
      "was",
      "has",
      "will"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e45",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Complete: 'I am interested ___ art.'",
    "options": [
      "on",
      "in",
      "at",
      "of"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e46",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'She sings ___.'",
    "options": [
      "beautiful",
      "beautifully",
      "beauty",
      "more beautiful"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e47",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "Choose: 'There ___ many people in the room.'",
    "options": [
      "is",
      "are",
      "am",
      "be"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "e48",
    "subject": "english",
    "subjectName": "Английский язык",
    "topic": "Grammar",
    "question": "What's the past tense of 'go'?",
    "options": [
      "goed",
      "went",
      "gone",
      "going"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b1",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Цитология",
    "question": "Какая органелла клетки отвечает за синтез белка?",
    "options": [
      "Митохондрия",
      "Рибосома",
      "Аппарат Гольджи",
      "Лизосома"
    ],
    "answerIdx": 1,
    "explanation": "Рибосомы - органеллы, отвечающие за синтез белка (трансляцию)."
  },
  {
    "id": "b2",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Генетика",
    "question": "Сколько хромосом в половых клетках человека?",
    "options": [
      "23",
      "46",
      "92",
      "12"
    ],
    "answerIdx": 0,
    "explanation": "Половые клетки (гаметы) содержат гаплоидный набор - 23 хромосомы."
  },
  {
    "id": "b3",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Ботаника",
    "question": "Какое растение относится к отделу Голосеменные?",
    "options": [
      "Береза",
      "Сосна",
      "Папоротник",
      "Мох"
    ],
    "answerIdx": 1,
    "explanation": "Сосна - голосеменное растение (семена лежат открыто на чешуях шишек)."
  },
  {
    "id": "b4",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Фотосинтез",
    "question": "Какой процесс происходит в хлоропластах?",
    "options": [
      "Гликолиз",
      "Фотосинтез",
      "Трансляция",
      "Транскрипция"
    ],
    "answerIdx": 1,
    "explanation": "Фотосинтез происходит в хлоропластах, содержащих хлорофилл."
  },
  {
    "id": "b5",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какая система органов отвечает за газообмен у человека?",
    "options": [
      "Кровеносная",
      "Дыхательная",
      "Пищеварительная",
      "Выделительная"
    ],
    "answerIdx": 1,
    "explanation": "Дыхательная система (легкие, бронхи, трахея) обеспечивает газообмен."
  },
  {
    "id": "b6",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Эволюция",
    "question": "Что такое эволюция?",
    "options": [
      "Развитие организма от рождения до смерти",
      "Историческое развитие органического мира",
      "Изменение погоды",
      "Рост численности популяции"
    ],
    "answerIdx": 1,
    "explanation": "Эволюция - историческое развитие живой природы, процесс изменения видов со временем."
  },
  {
    "id": "b7",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Цитология",
    "question": "Какой органоид отвечает за энергетический обмен?",
    "options": [
      "Рибосома",
      "Митохондрия",
      "Лизосома",
      "Ядро"
    ],
    "answerIdx": 1,
    "explanation": "Митохондрии - 'энергетические станции' клетки, синтезируют АТФ."
  },
  {
    "id": "b8",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Генетика",
    "question": "Сколько хромосом у человека в соматической клетке?",
    "options": [
      "23",
      "46",
      "92",
      "44"
    ],
    "answerIdx": 1,
    "explanation": "В соматических клетках диплоидный набор - 46 хромосом."
  },
  {
    "id": "b9",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какой витамин содержится в рыбьем жире?",
    "options": [
      "Витамин A",
      "Витамин C",
      "Витамин D",
      "Витамин B"
    ],
    "answerIdx": 2,
    "explanation": "Рыбий жир богат витамином D."
  },
  {
    "id": "b10",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Ботаника",
    "question": "Какая ткань проводит воду в растениях?",
    "options": [
      "Эпителиальная",
      "Мышечная",
      "Ксилема",
      "Флоэма"
    ],
    "answerIdx": 2,
    "explanation": "Ксилема (древесина) проводит воду и минеральные соли вверх."
  },
  {
    "id": "b11",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Фотосинтез",
    "question": "Какой газ поглощается при фотосинтезе?",
    "options": [
      "Кислород",
      "Азот",
      "Углекислый газ",
      "Водород"
    ],
    "answerIdx": 2,
    "explanation": "6CO2 + 6H2O = C6H12O6 + 6O2. Поглощается CO2."
  },
  {
    "id": "b12",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какой процесс происходит в лимфатических узлах?",
    "options": [
      "Образование мочи",
      "Фильтрация лимфы",
      "Синтез инсулина",
      "Выработка желчи"
    ],
    "answerIdx": 1,
    "explanation": "Лимфоузлы фильтруют лимфу, задерживая бактерии."
  },
  {
    "id": "b13",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Экология",
    "question": "Как называется группа организмов одного вида, обитающих на одной территории?",
    "options": [
      "Биоценоз",
      "Популяция",
      "Вид",
      "Экосистема"
    ],
    "answerIdx": 1,
    "explanation": "Популяция - группа особей одного вида на общей территории."
  },
  {
    "id": "b14",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какая железа вырабатывает инсулин?",
    "options": [
      "Щитовидная",
      "Гипофиз",
      "Поджелудочная",
      "Надпочечники"
    ],
    "answerIdx": 2,
    "explanation": "Поджелудочная железа вырабатывает инсулин (бета-клетки)."
  },
  {
    "id": "b15",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Генетика",
    "question": "Что такое доминантный признак?",
    "options": [
      "Редкий признак",
      "Подавляющий признак",
      "Передающийся по наследству",
      "Приобретённый признак"
    ],
    "answerIdx": 1,
    "explanation": "Доминантный признак подавляет рецессивный при наследовании."
  },
  {
    "id": "b16",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Экология",
    "question": "Какой организм относят к гетеротрофам?",
    "options": [
      "Берёза",
      "Кактус",
      "Гриб",
      "Водоросль"
    ],
    "answerIdx": 2,
    "explanation": "Гетеротрофы питаются готовыми органическими веществами (грибы, животные)."
  },
  {
    "id": "b17",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Сколько камер в сердце человека?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": "4 камеры: 2 предсердия и 2 желудочка."
  },
  {
    "id": "b18",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какую функцию выполняют тромбоциты?",
    "options": [
      "Перенос кислорода",
      "Свёртывание крови",
      "Защита от инфекций",
      "Транспорт гормонов"
    ],
    "answerIdx": 1,
    "explanation": "Тромбоциты участвуют в свёртывании крови."
  },
  {
    "id": "b19",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Генетика",
    "question": "Как называется процесс считывания информации с ДНК на иРНК?",
    "options": [
      "Трансляция",
      "Транскрипция",
      "Репликация",
      "Трансформация"
    ],
    "answerIdx": 1,
    "explanation": "Транскрипция - синтез иРНК на матрице ДНК."
  },
  {
    "id": "b20",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какая система органов отвечает за транспорт газов?",
    "options": [
      "Нервная",
      "Кровеносная",
      "Дыхательная",
      "Пищеварительная"
    ],
    "answerIdx": 1,
    "explanation": "Кровеносная система транспортирует O2 и CO2."
  },
  {
    "id": "b21",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какой витамин синтезируется в коже под действием солнца?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerIdx": 3,
    "explanation": "Витамин D синтезируется в коже на солнце."
  },
  {
    "id": "b22",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Зоология",
    "question": "Сколько пар ходильных ног у паука?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": "У паукообразных 4 пары ходильных ног."
  },
  {
    "id": "b23",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Цитология",
    "question": "Какой органоид отвечает за внутриклеточное пищеварение?",
    "options": [
      "Рибосома",
      "Лизосома",
      "Митохондрия",
      "ЭПС"
    ],
    "answerIdx": 1,
    "explanation": "Лизосомы расщепляют вещества внутри клетки."
  },
  {
    "id": "b24",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Сколько шейных позвонков у человека?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answerIdx": 2,
    "explanation": "У человека 7 шейных позвонков."
  },
  {
    "id": "b25",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Анатомия",
    "question": "Какая группа крови считается универсальным донором?",
    "options": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "answerIdx": 0,
    "explanation": "I группа (0) - универсальный донор."
  },
  {
    "id": "b26",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Цитология",
    "question": "Какой процесс происходит в митохондриях?",
    "options": [
      "Фотосинтез",
      "Синтез белка",
      "Окисление веществ",
      "Деление клетки"
    ],
    "answerIdx": 2,
    "explanation": "В митохондриях происходит окисление органических в-в с синтезом АТФ."
  },
  {
    "id": "b27",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая клетка не имеет ядра?",
    "options": [
      "Эритроцит",
      "Лейкоцит",
      "Нейрон",
      "Мышечная"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b28",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой процесс происходит в ядре клетки?",
    "options": [
      "Трансляция",
      "Транскрипция",
      "Гликолиз",
      "Фотосинтез"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b29",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько пар ребер у человека?",
    "options": [
      "10",
      "12",
      "14",
      "8"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b30",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая железа относится к железам внутренней секреции?",
    "options": [
      "Потовая",
      "Сальная",
      "Щитовидная",
      "Слюнная"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b31",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой газ выделяется при фотосинтезе?",
    "options": [
      "CO2",
      "O2",
      "N2",
      "H2"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b32",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что такое хлорофилл?",
    "options": [
      "Фермент",
      "Пигмент",
      "Гормон",
      "Витамин"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b33",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой орган относится к пищеварительной системе?",
    "options": [
      "Лёгкие",
      "Почки",
      "Печень",
      "Сердце"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b34",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько камер в сердце человека?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b35",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какое растение относится к папоротникам?",
    "options": [
      "Сосна",
      "Берёза",
      "Щитовник",
      "Одуванчик"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b36",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что такое рефлекс?",
    "options": [
      "Осознанная реакция",
      "Ответ на раздражение",
      "Непроизвольная реакция",
      "Мышечное сокращение"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b37",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой витамин содержится в лимоне?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b38",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько хромосом у человека?",
    "options": [
      "46",
      "23",
      "48",
      "44"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b39",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Как размножаются бактерии?",
    "options": [
      "Почкованием",
      "Делением",
      "Спорами",
      "Половым путём"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b40",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какое животное относится к млекопитающим?",
    "options": [
      "Крокодил",
      "Дельфин",
      "Черепаха",
      "Ящерица"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b41",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что такое симбиоз?",
    "options": [
      "Взаимовыгодное сожительство",
      "Конкуренция",
      "Хищничество",
      "Паразитизм"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b42",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая ткань проводит воду в растениях?",
    "options": [
      "Эпидермис",
      "Ксилема",
      "Флоэма",
      "Паренхима"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b43",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что входит в состав центральной нервной системы?",
    "options": [
      "Головной мозг и спинной мозг",
      "Только мозг",
      "Нервы и узлы",
      "Рецепторы"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b44",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько отделов в головном мозге человека?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b45",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая кровь течёт в артериях?",
    "options": [
      "Венозная",
      "Артериальная (кроме лёгочной)",
      "Смешанная",
      "Лимфа"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b46",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой орган вырабатывает желчь?",
    "options": [
      "Желчный пузырь",
      "Печень",
      "Поджелудочная",
      "Почки"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b27",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая клетка не имеет ядра?",
    "options": [
      "Эритроцит",
      "Лейкоцит",
      "Нейрон",
      "Мышечная"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b28",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой процесс происходит в ядре клетки?",
    "options": [
      "Трансляция",
      "Транскрипция",
      "Гликолиз",
      "Фотосинтез"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b29",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько пар ребер у человека?",
    "options": [
      "10",
      "12",
      "14",
      "8"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b30",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая железа относится к железам внутренней секреции?",
    "options": [
      "Потовая",
      "Сальная",
      "Щитовидная",
      "Слюнная"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b31",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой газ выделяется при фотосинтезе?",
    "options": [
      "CO2",
      "O2",
      "N2",
      "H2"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b32",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что такое хлорофилл?",
    "options": [
      "Фермент",
      "Пигмент",
      "Гормон",
      "Витамин"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b33",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой орган относится к пищеварительной системе?",
    "options": [
      "Лёгкие",
      "Почки",
      "Печень",
      "Сердце"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b34",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько камер в сердце человека?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b35",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какое растение относится к папоротникам?",
    "options": [
      "Сосна",
      "Берёза",
      "Щитовник",
      "Одуванчик"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b36",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что такое рефлекс?",
    "options": [
      "Осознанная реакция",
      "Ответ на раздражение",
      "Непроизвольная реакция",
      "Мышечное сокращение"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b37",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой витамин содержится в лимоне?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b38",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько хромосом у человека?",
    "options": [
      "46",
      "23",
      "48",
      "44"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b39",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Как размножаются бактерии?",
    "options": [
      "Почкованием",
      "Делением",
      "Спорами",
      "Половым путём"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b40",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какое животное относится к млекопитающим?",
    "options": [
      "Крокодил",
      "Дельфин",
      "Черепаха",
      "Ящерица"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b41",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что такое симбиоз?",
    "options": [
      "Взаимовыгодное сожительство",
      "Конкуренция",
      "Хищничество",
      "Паразитизм"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b42",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая ткань проводит воду в растениях?",
    "options": [
      "Эпидермис",
      "Ксилема",
      "Флоэма",
      "Паренхима"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b43",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Что входит в состав центральной нервной системы?",
    "options": [
      "Головной мозг и спинной мозг",
      "Только мозг",
      "Нервы и узлы",
      "Рецепторы"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "b44",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Сколько отделов в головном мозге человека?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "b45",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какая кровь течёт в артериях?",
    "options": [
      "Венозная",
      "Артериальная (кроме лёгочной)",
      "Смешанная",
      "Лимфа"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b46",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Биология",
    "question": "Какой орган вырабатывает желчь?",
    "options": [
      "Желчный пузырь",
      "Печень",
      "Поджелудочная",
      "Почки"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "b47",
    "subject": "biology",
    "subjectName": "Биология",
    "topic": "Зоология",
    "question": "Какая наука изучает птиц?",
    "options": [
      "Энтомология",
      "Орнитология",
      "Ихтиология",
      "Ботаника"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h1",
    "subject": "history",
    "subjectName": "История",
    "topic": "Древняя Русь",
    "question": "В каком году произошло Крещение Руси?",
    "options": [
      "862 г.",
      "988 г.",
      "1054 г.",
      "1223 г."
    ],
    "answerIdx": 1,
    "explanation": "Крещение Руси произошло в 988 году при князе Владимире Святославиче."
  },
  {
    "id": "h2",
    "subject": "history",
    "subjectName": "История",
    "topic": "Российская империя",
    "question": "Кто был первым российским императором?",
    "options": [
      "Иван Грозный",
      "Петр I",
      "Екатерина II",
      "Александр I"
    ],
    "answerIdx": 1,
    "explanation": "Петр I принял титул императора в 1721 году после Северной войны."
  },
  {
    "id": "h3",
    "subject": "history",
    "subjectName": "История",
    "topic": "XIX век",
    "question": "Какое событие произошло в 1812 году?",
    "options": [
      "Бородинское сражение",
      "Куликовская битва",
      "Полтавская битва",
      "Ледовое побоище"
    ],
    "answerIdx": 0,
    "explanation": "Бородинское сражение - ключевое сражение Отечественной войны 1812 года."
  },
  {
    "id": "h4",
    "subject": "history",
    "subjectName": "История",
    "topic": "XIX век",
    "question": "В каком году отменили крепостное право в России?",
    "options": [
      "1801 г.",
      "1861 г.",
      "1917 г.",
      "1762 г."
    ],
    "answerIdx": 1,
    "explanation": "Крепостное право отменено 19 февраля 1861 года при Александре II."
  },
  {
    "id": "h5",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Кто руководил СССР в период Великой Отечественной войны?",
    "options": [
      "В.И. Ленин",
      "И.В. Сталин",
      "Н.С. Хрущев",
      "Л.И. Брежнев"
    ],
    "answerIdx": 1,
    "explanation": "И.В. Сталин был Генеральным секретарем ЦК ВКП(б) в период ВОВ (1941-1945)."
  },
  {
    "id": "h6",
    "subject": "history",
    "subjectName": "История",
    "topic": "Смутное время",
    "question": "Какое событие положило начало Смутному времени?",
    "options": [
      "Смерть Ивана Грозного",
      "Пресечение династии Рюриковичей",
      "Восстание Болотникова",
      "Польская интервенция"
    ],
    "answerIdx": 1,
    "explanation": "Смутное время (1598-1613) началось после пресечения династии Рюриковичей со смертью Федора Иоанновича."
  },
  {
    "id": "h7",
    "subject": "history",
    "subjectName": "История",
    "topic": "Древняя Русь",
    "question": "Кто разбил шведов в Невской битве?",
    "options": [
      "Александр Невский",
      "Дмитрий Донской",
      "Иван Калита",
      "Ярослав Мудрый"
    ],
    "answerIdx": 0,
    "explanation": "Невская битва 1240 г., Александр Невский разбил шведов."
  },
  {
    "id": "h8",
    "subject": "history",
    "subjectName": "История",
    "topic": "Древняя Русь",
    "question": "В каком году была Куликовская битва?",
    "options": [
      "1223 г.",
      "1240 г.",
      "1380 г.",
      "1480 г."
    ],
    "answerIdx": 2,
    "explanation": "Куликовская битва 1380 г. (Дмитрий Донской против Мамая)."
  },
  {
    "id": "h9",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Кто был последним императором России?",
    "options": [
      "Александр II",
      "Александр III",
      "Николай II",
      "Пётр III"
    ],
    "answerIdx": 2,
    "explanation": "Николай II отрёкся в 1917 г."
  },
  {
    "id": "h10",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Какое событие произошло 12 апреля 1961 года?",
    "options": [
      "Запуск Спутника",
      "Первый полёт человека в космос",
      "Карибский кризис",
      "Конец Второй мировой"
    ],
    "answerIdx": 1,
    "explanation": "Первый полёт человека в космос - Юрий Гагарин."
  },
  {
    "id": "h11",
    "subject": "history",
    "subjectName": "История",
    "topic": "Российская империя",
    "question": "Кто основал Московский университет?",
    "options": [
      "Пётр I",
      "Ломоносов",
      "Екатерина II",
      "Александр I"
    ],
    "answerIdx": 1,
    "explanation": "МГУ основан по инициативе М.В. Ломоносова в 1755 г."
  },
  {
    "id": "h12",
    "subject": "history",
    "subjectName": "История",
    "topic": "Древняя Русь",
    "question": "Как назывался первый свод законов Древней Руси?",
    "options": [
      "Соборное уложение",
      "Судебник",
      "Русская правда",
      "Устав"
    ],
    "answerIdx": 2,
    "explanation": "Русская Правда - первый свод законов (Ярослав Мудрый)."
  },
  {
    "id": "h13",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "С кем СССР воевал в 1939-1940 гг.",
    "options": [
      "С Германией",
      "С Финляндией",
      "С Польшей",
      "С Японией"
    ],
    "answerIdx": 1,
    "explanation": "Советско-финская война 1939-1940 гг."
  },
  {
    "id": "h14",
    "subject": "history",
    "subjectName": "История",
    "topic": "Древняя Русь",
    "question": "В каком веке было Крещение Руси?",
    "options": [
      "VIII век",
      "IX век",
      "X век",
      "XI век"
    ],
    "answerIdx": 2,
    "explanation": "Крещение Руси - 988 год (X век)."
  },
  {
    "id": "h15",
    "subject": "history",
    "subjectName": "История",
    "topic": "Смутное время",
    "question": "Кто возглавил восстание в 1670-1671 гг.",
    "options": [
      "Пугачёв",
      "Болотников",
      "Разин",
      "Хлопко"
    ],
    "answerIdx": 2,
    "explanation": "Восстание Степана Разина 1670-1671 гг."
  },
  {
    "id": "h16",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Какой документ приняли в 1905 году 17 октября?",
    "options": [
      "Конституция",
      "Манифест о свободах",
      "Указ об отмене крепостного права",
      "Декрет о мире"
    ],
    "answerIdx": 1,
    "explanation": "Манифест 17 октября ввёл гражданские свободы и Госдуму."
  },
  {
    "id": "h17",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Какой орган был создан в 1906 году?",
    "options": [
      "Сенат",
      "Госдума",
      "Госсовет",
      "Синод"
    ],
    "answerIdx": 1,
    "explanation": "Первая Государственная дума начала работу в 1906 г."
  },
  {
    "id": "h18",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "В каком городе проходила Ялтинская конференция 1945?",
    "options": [
      "Москва",
      "Берлин",
      "Ялта",
      "Санкт-Петербург"
    ],
    "answerIdx": 2,
    "explanation": "Ялтинская конференция (Февраль 1945) в Ялте."
  },
  {
    "id": "h19",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "В каком году началась Первая мировая война?",
    "options": [
      "1905",
      "1914",
      "1917",
      "1939"
    ],
    "answerIdx": 1,
    "explanation": "Первая мировая началась в 1914 году."
  },
  {
    "id": "h20",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Кто был первым президентом России?",
    "options": [
      "Горбачёв",
      "Ельцин",
      "Путин",
      "Хрущёв"
    ],
    "answerIdx": 1,
    "explanation": "Б.Н. Ельцин - первый президент РФ (1991 г.)."
  },
  {
    "id": "h21",
    "subject": "history",
    "subjectName": "История",
    "topic": "Российская империя",
    "question": "Какое событие произошло в 1709 году?",
    "options": [
      "Полтавская битва",
      "Бородинское сражение",
      "Ледовое побоище",
      "Куликовская битва"
    ],
    "answerIdx": 0,
    "explanation": "Полтавская битва 1709 г. - перелом в Северной войне."
  },
  {
    "id": "h22",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Как называлась политика военного коммунизма?",
    "options": [
      "Новая экономическая",
      "Военный коммунизм",
      "Перестройка",
      "Индустриализация"
    ],
    "answerIdx": 1,
    "explanation": "Политика военного коммунизма в 1918-1921 гг."
  },
  {
    "id": "h23",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "В каком году был подписан пакт Молотова-Риббентропа?",
    "options": [
      "1937",
      "1938",
      "1939",
      "1941"
    ],
    "answerIdx": 2,
    "explanation": "Пакт подписан 23 августа 1939 г."
  },
  {
    "id": "h24",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Кто руководил СССР в 1964-1982 гг?",
    "options": [
      "Хрущёв",
      "Брежнев",
      "Андропов",
      "Горбачёв"
    ],
    "answerIdx": 1,
    "explanation": "Л.И. Брежнев - генсек с 1964 по 1982 гг."
  },
  {
    "id": "h25",
    "subject": "history",
    "subjectName": "История",
    "topic": "XX век",
    "question": "Как называлась денежная реформа 1947 года?",
    "options": [
      "Конфискация",
      "Деноминация",
      "Дефолт",
      "Эмиссия"
    ],
    "answerIdx": 1,
    "explanation": "Деноминация - изменение нарицательной стоимости денег."
  },
  {
    "id": "h26",
    "subject": "history",
    "subjectName": "История",
    "topic": "Древняя Русь",
    "question": "Какая битва произошла в 1242 году?",
    "options": [
      "Невская",
      "Ледовое побоище",
      "Куликовская",
      "Бородинская"
    ],
    "answerIdx": 1,
    "explanation": "Ледовое побоище на Чудском озере."
  },
  {
    "id": "h27",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был первым русским царём?",
    "options": [
      "Иван Грозный",
      "Пётр I",
      "Александр I",
      "Иван Калита"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h28",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году основан Санкт-Петербург?",
    "options": [
      "1700",
      "1703",
      "1712",
      "1721"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h29",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто победил в Ледовом побоище?",
    "options": [
      "Шведы",
      "Немцы",
      "Русские",
      "Поляки"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "h30",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какой документ отменил крепостное право?",
    "options": [
      "Жалованная грамота",
      "Манифест 1861",
      "Указ 1793",
      "Соборное уложение"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h31",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был последним царём династии Романовых?",
    "options": [
      "Александр III",
      "Михаил II",
      "Николай II",
      "Пётр III"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "h32",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году началась Вторая мировая война?",
    "options": [
      "1937",
      "1939",
      "1941",
      "1945"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h33",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какое сражение стало коренным переломом в ВОВ?",
    "options": [
      "Московское",
      "Сталинградское",
      "Курское",
      "Ленинградское"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h34",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто осуществлял перестройку в СССР?",
    "options": [
      "Брежнев",
      "Горбачёв",
      "Хрущёв",
      "Андропов"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h35",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Как назывался первый полёт человека в космос?",
    "options": [
      "Спутник",
      "Восток",
      "Союз",
      "Мир"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h36",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто изображён на долларовой купюре?",
    "options": [
      "Вашингтон",
      "Линкольн",
      "Франклин",
      "Джефферсон"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h37",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какое событие произошло 7 ноября 1917 года?",
    "options": [
      "Февральская революция",
      "Октябрьская революция",
      "Начало НЭПа",
      "Образование СССР"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h38",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто разбил Наполеона в 1812?",
    "options": [
      "Кутузов",
      "Суворов",
      "Багратион",
      "Ермолов"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h39",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Как называлась столица Древней Руси?",
    "options": [
      "Новгород",
      "Киев",
      "Москва",
      "Владимир"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h40",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году была принята Конституция РФ?",
    "options": [
      "1991",
      "1993",
      "1995",
      "2000"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h41",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какая битва произошла в 1240 году?",
    "options": [
      "Ледовое побоище",
      "Невская",
      "Куликовская",
      "Грюнвальдская"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h42",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был отцом Петра I?",
    "options": [
      "Михаил Фёдорович",
      "Алексей Михайлович",
      "Фёдор Алексеевич",
      "Иван Алексеевич"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h43",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Как называлась первая печатная книга в России?",
    "options": [
      "Библия",
      "Апостол",
      "Часослов",
      "Букварь"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h44",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Что такое опричнина?",
    "options": [
      "Реформа армии",
      "Политика Ивана Грозного",
      "Налоговая реформа",
      "Отмена местничества"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h45",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году образовался СССР?",
    "options": [
      "1917",
      "1922",
      "1924",
      "1936"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h46",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был председателем Совнаркома в 1917?",
    "options": [
      "Ленин",
      "Сталин",
      "Троцкий",
      "Свердлов"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h27",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был первым русским царём?",
    "options": [
      "Иван Грозный",
      "Пётр I",
      "Александр I",
      "Иван Калита"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h28",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году основан Санкт-Петербург?",
    "options": [
      "1700",
      "1703",
      "1712",
      "1721"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h29",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто победил в Ледовом побоище?",
    "options": [
      "Шведы",
      "Немцы",
      "Русские",
      "Поляки"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "h30",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какой документ отменил крепостное право?",
    "options": [
      "Жалованная грамота",
      "Манифест 1861",
      "Указ 1793",
      "Соборное уложение"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h31",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был последним царём династии Романовых?",
    "options": [
      "Александр III",
      "Михаил II",
      "Николай II",
      "Пётр III"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "h32",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году началась Вторая мировая война?",
    "options": [
      "1937",
      "1939",
      "1941",
      "1945"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h33",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какое сражение стало коренным переломом в ВОВ?",
    "options": [
      "Московское",
      "Сталинградское",
      "Курское",
      "Ленинградское"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h34",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто осуществлял перестройку в СССР?",
    "options": [
      "Брежнев",
      "Горбачёв",
      "Хрущёв",
      "Андропов"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h35",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Как назывался первый полёт человека в космос?",
    "options": [
      "Спутник",
      "Восток",
      "Союз",
      "Мир"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h36",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто изображён на долларовой купюре?",
    "options": [
      "Вашингтон",
      "Линкольн",
      "Франклин",
      "Джефферсон"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h37",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какое событие произошло 7 ноября 1917 года?",
    "options": [
      "Февральская революция",
      "Октябрьская революция",
      "Начало НЭПа",
      "Образование СССР"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h38",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто разбил Наполеона в 1812?",
    "options": [
      "Кутузов",
      "Суворов",
      "Багратион",
      "Ермолов"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h39",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Как называлась столица Древней Руси?",
    "options": [
      "Новгород",
      "Киев",
      "Москва",
      "Владимир"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h40",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году была принята Конституция РФ?",
    "options": [
      "1991",
      "1993",
      "1995",
      "2000"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h41",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Какая битва произошла в 1240 году?",
    "options": [
      "Ледовое побоище",
      "Невская",
      "Куликовская",
      "Грюнвальдская"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h42",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был отцом Петра I?",
    "options": [
      "Михаил Фёдорович",
      "Алексей Михайлович",
      "Фёдор Алексеевич",
      "Иван Алексеевич"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h43",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Как называлась первая печатная книга в России?",
    "options": [
      "Библия",
      "Апостол",
      "Часослов",
      "Букварь"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h44",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Что такое опричнина?",
    "options": [
      "Реформа армии",
      "Политика Ивана Грозного",
      "Налоговая реформа",
      "Отмена местничества"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h45",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "В каком году образовался СССР?",
    "options": [
      "1917",
      "1922",
      "1924",
      "1936"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "h46",
    "subject": "history",
    "subjectName": "История",
    "topic": "История",
    "question": "Кто был председателем Совнаркома в 1917?",
    "options": [
      "Ленин",
      "Сталин",
      "Троцкий",
      "Свердлов"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "h47",
    "subject": "history",
    "subjectName": "История",
    "topic": "Древняя Русь",
    "question": "Кто основал Москву?",
    "options": [
      "Юрий Долгорукий",
      "Иван Калита",
      "Дмитрий Донской",
      "Владимир Мономах"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i1",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Измерение информации",
    "question": "Сколько бит в одном байте?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answerIdx": 1,
    "explanation": "1 байт = 8 бит."
  },
  {
    "id": "i2",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Системы счисления",
    "question": "Какая система счисления используется в компьютере?",
    "options": [
      "Десятичная",
      "Двоичная",
      "Восьмеричная",
      "Шестнадцатеричная"
    ],
    "answerIdx": 1,
    "explanation": "Компьютер использует двоичную систему счисления (0 и 1)."
  },
  {
    "id": "i3",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Сети",
    "question": "Что такое IP-адрес?",
    "options": [
      "Адрес веб-сайта",
      "Уникальный номер устройства в сети",
      "Пароль для доступа в интернет",
      "Название браузера"
    ],
    "answerIdx": 1,
    "explanation": "IP-адрес - уникальный числовой идентификатор устройства в компьютерной сети."
  },
  {
    "id": "i4",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Алгоритмы и структуры данных",
    "question": "Какая структура данных работает по принципу 'последним пришел - первым вышел' (LIFO)?",
    "options": [
      "Очередь",
      "Стек",
      "Массив",
      "Список"
    ],
    "answerIdx": 1,
    "explanation": "Стек (stack) - структура LIFO. Очередь - FIFO."
  },
  {
    "id": "i5",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Системы счисления",
    "question": "Чему равно число 1011 в двоичной системе в десятичной?",
    "options": [
      "8",
      "11",
      "13",
      "15"
    ],
    "answerIdx": 1,
    "explanation": "1011_2 = 1*8 + 0*4 + 1*2 + 1*1 = 8+0+2+1 = 11."
  },
  {
    "id": "i6",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Какая команда в Python выводит данные на экран?",
    "options": [
      "input()",
      "print()",
      "return()",
      "write()"
    ],
    "answerIdx": 1,
    "explanation": "Функция print() выводит данные в консоль в Python."
  },
  {
    "id": "i7",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Измерение информации",
    "question": "Сколько килобайт в 1 мегабайте?",
    "options": [
      "100",
      "1024",
      "1000",
      "512"
    ],
    "answerIdx": 1,
    "explanation": "1 МБ = 1024 КБ."
  },
  {
    "id": "i8",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Сети",
    "question": "Какой протокол используется для передачи веб-страниц?",
    "options": [
      "FTP",
      "HTTP",
      "TCP",
      "UDP"
    ],
    "answerIdx": 1,
    "explanation": "HTTP - HyperText Transfer Protocol."
  },
  {
    "id": "i9",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Алгоритмы",
    "question": "Что такое алгоритм?",
    "options": [
      "Любая последовательность действий",
      "Формальное описание последовательности действий для решения задачи",
      "Программа на Python",
      "Математическая формула"
    ],
    "answerIdx": 1,
    "explanation": "Алгоритм - точное предписание исполнителю выполнить последовательность действий."
  },
  {
    "id": "i10",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Какой оператор в Python обозначает логическое И?",
    "options": [
      "&&",
      "and",
      "&",
      "||"
    ],
    "answerIdx": 1,
    "explanation": "В Python: and, or, not."
  },
  {
    "id": "i11",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Системы счисления",
    "question": "Число 13 в двоичной системе равно?",
    "options": [
      "1011",
      "1101",
      "1110",
      "1001"
    ],
    "answerIdx": 1,
    "explanation": "13 = 8+4+1 = 1101_2."
  },
  {
    "id": "i12",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Алгоритмы и структуры данных",
    "question": "Какая структура данных работает по принципу FIFO?",
    "options": [
      "Стек",
      "Очередь",
      "Массив",
      "Дерево"
    ],
    "answerIdx": 1,
    "explanation": "Очередь (queue) - First In, First Out."
  },
  {
    "id": "i13",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Измерение информации",
    "question": "Сколько символов в кодировке ASCII?",
    "options": [
      "128",
      "256",
      "64",
      "512"
    ],
    "answerIdx": 0,
    "explanation": "ASCII содержит 128 символов (0-127)."
  },
  {
    "id": "i14",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Результат операции NOT (True OR False) в Python?",
    "options": [
      "True",
      "False",
      "1",
      "0"
    ],
    "answerIdx": 0,
    "explanation": "True OR False = True, NOT True = False."
  },
  {
    "id": "i15",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Что хранит в себе переменная после присваивания a = '5'?",
    "options": [
      "Число 5",
      "Строку '5'",
      "Логическое True",
      "Ничего"
    ],
    "answerIdx": 1,
    "explanation": "Кавычки означают строковый тип данных."
  },
  {
    "id": "i16",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Измерение информации",
    "question": "Сколько битов в 2 байтах?",
    "options": [
      "8",
      "16",
      "24",
      "32"
    ],
    "answerIdx": 1,
    "explanation": "1 байт = 8 бит, 2 байта = 16 бит."
  },
  {
    "id": "i17",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Расширение .exe соответствует какому типу файлов?",
    "options": [
      "Текстовый",
      "Исполняемый",
      "Графический",
      "Аудио"
    ],
    "answerIdx": 1,
    "explanation": ".exe - исполняемый файл (executable)."
  },
  {
    "id": "i18",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Переменная bool может принимать значения...",
    "options": [
      "0 и 1",
      "True и False",
      "+ и -",
      "Да и Нет"
    ],
    "answerIdx": 1,
    "explanation": "bool - логический тип, True/False."
  },
  {
    "id": "i19",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Какой логической операции соответствует таблица: 00=0, 01=0, 10=0, 11=1?",
    "options": [
      "ИЛИ",
      "И",
      "НЕ",
      "ИСКЛЮЧАЮЩЕЕ ИЛИ"
    ],
    "answerIdx": 1,
    "explanation": "Конъюнкция (И): 1 только когда оба 1."
  },
  {
    "id": "i20",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Системы счисления",
    "question": "Сколько будет 10 в двоичной системе, если перевести в десятичную?",
    "options": [
      "1",
      "2",
      "4",
      "10"
    ],
    "answerIdx": 1,
    "explanation": "10_2=1*2+0=2."
  },
  {
    "id": "i21",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Системы счисления",
    "question": "Чему равно 0xFF в десятичной системе?",
    "options": [
      "155",
      "205",
      "245",
      "255"
    ],
    "answerIdx": 3,
    "explanation": "FF_16=15*16+15=255."
  },
  {
    "id": "i22",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Сети",
    "question": "Какая программа является браузером?",
    "options": [
      "Word",
      "Chrome",
      "Excel",
      "Photoshop"
    ],
    "answerIdx": 1,
    "explanation": "Google Chrome - веб-браузер."
  },
  {
    "id": "i23",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Измерение информации",
    "question": "Файл размером 2 МБ. Сколько это байт?",
    "options": [
      "2^10",
      "2^20",
      "2^21",
      "2^10*2"
    ],
    "answerIdx": 2,
    "explanation": "2 МБ = 2*1024*1024 = 2^21 байт."
  },
  {
    "id": "i24",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Программирование",
    "question": "Какой тип данных в Python обозначает целое число?",
    "options": [
      "float",
      "int",
      "str",
      "bool"
    ],
    "answerIdx": 1,
    "explanation": "int (integer) - целое число."
  },
  {
    "id": "i25",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Алгоритмы",
    "question": "Сложность алгоритма O(n). Сколько операций для n=100?",
    "options": [
      "1000",
      "100",
      "10",
      "10000"
    ],
    "answerIdx": 1,
    "explanation": "O(n) - линейная, около 100 операций."
  },
  {
    "id": "i26",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Сети",
    "question": "Что означает IP-адрес 127.0.0.1?",
    "options": [
      "Шлюз",
      "Localhost",
      "DNS-сервер",
      "Внешний адрес"
    ],
    "answerIdx": 1,
    "explanation": "127.0.0.1 - localhost (собственный компьютер)."
  },
  {
    "id": "i27",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Чему равно 1 КБ?",
    "options": [
      "1000 байт",
      "1024 байт",
      "512 байт",
      "2048 байт"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i28",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая система счисления используется в компьютере?",
    "options": [
      "Десятичная",
      "Двоичная",
      "Восьмеричная",
      "Шестнадцатеричная"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i29",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое алгоритм?",
    "options": [
      "Программа",
      "Последовательность действий",
      "Устройство",
      "Файл"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i30",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая клавиша используется для копирования?",
    "options": [
      "Ctrl+V",
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+Z"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i31",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое URL?",
    "options": [
      "Адрес сайта",
      "Протокол",
      "Браузер",
      "Файл"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i32",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какой тип файла имеет расширение .docx?",
    "options": [
      "Изображение",
      "Текст",
      "Видео",
      "Музыка"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i33",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Сколько бит в 3 байтах?",
    "options": [
      "16",
      "24",
      "32",
      "48"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i34",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое переменная в программировании?",
    "options": [
      "Константа",
      "Именованная область памяти",
      "Функция",
      "Массив"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i35",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая операция является логическим отрицанием?",
    "options": [
      "И",
      "ИЛИ",
      "НЕ",
      "ИСКЛ-ИЛИ"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "i36",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что делает оператор '=' в Python?",
    "options": [
      "Сравнивает",
      "Присваивает",
      "Равно",
      "Умножает"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i37",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какой цикл выполняется пока условие истинно?",
    "options": [
      "for",
      "while",
      "do-while",
      "foreach"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i38",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что хранится в оперативной памяти?",
    "options": [
      "Данные при выключении",
      "Текущие данные",
      "Файлы",
      "Программы навсегда"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i39",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая сеть является глобальной?",
    "options": [
      "Локальная",
      "Интернет",
      "Одноранговая",
      "Корпоративная"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i40",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое браузер?",
    "options": [
      "Программа для просмотра веб-страниц",
      "Сервер",
      "Поисковик",
      "Антивирус"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i41",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Как расшифровывается HTML?",
    "options": [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "HyperText Making Language",
      "None"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i42",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое массив?",
    "options": [
      "Переменная",
      "Структура данных",
      "Функция",
      "Цикл"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i43",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Сколько будет 101_2 + 1_2?",
    "options": [
      "110_2",
      "100_2",
      "111_2",
      "10_2"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i44",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Как обозначается пустое значение в Python?",
    "options": [
      "0",
      "None",
      "null",
      "false"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i45",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какое расширение у исполняемых файлов в Windows?",
    "options": [
      ".txt",
      ".exe",
      ".doc",
      ".jpg"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i46",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое SQL?",
    "options": [
      "Язык программирования",
      "Язык запросов к БД",
      "Протокол передачи",
      "Формат файла"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i27",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Чему равно 1 КБ?",
    "options": [
      "1000 байт",
      "1024 байт",
      "512 байт",
      "2048 байт"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i28",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая система счисления используется в компьютере?",
    "options": [
      "Десятичная",
      "Двоичная",
      "Восьмеричная",
      "Шестнадцатеричная"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i29",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое алгоритм?",
    "options": [
      "Программа",
      "Последовательность действий",
      "Устройство",
      "Файл"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i30",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая клавиша используется для копирования?",
    "options": [
      "Ctrl+V",
      "Ctrl+C",
      "Ctrl+X",
      "Ctrl+Z"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i31",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое URL?",
    "options": [
      "Адрес сайта",
      "Протокол",
      "Браузер",
      "Файл"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i32",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какой тип файла имеет расширение .docx?",
    "options": [
      "Изображение",
      "Текст",
      "Видео",
      "Музыка"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i33",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Сколько бит в 3 байтах?",
    "options": [
      "16",
      "24",
      "32",
      "48"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i34",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое переменная в программировании?",
    "options": [
      "Константа",
      "Именованная область памяти",
      "Функция",
      "Массив"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i35",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая операция является логическим отрицанием?",
    "options": [
      "И",
      "ИЛИ",
      "НЕ",
      "ИСКЛ-ИЛИ"
    ],
    "answerIdx": 2,
    "explanation": ""
  },
  {
    "id": "i36",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что делает оператор '=' в Python?",
    "options": [
      "Сравнивает",
      "Присваивает",
      "Равно",
      "Умножает"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i37",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какой цикл выполняется пока условие истинно?",
    "options": [
      "for",
      "while",
      "do-while",
      "foreach"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i38",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что хранится в оперативной памяти?",
    "options": [
      "Данные при выключении",
      "Текущие данные",
      "Файлы",
      "Программы навсегда"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i39",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какая сеть является глобальной?",
    "options": [
      "Локальная",
      "Интернет",
      "Одноранговая",
      "Корпоративная"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i40",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое браузер?",
    "options": [
      "Программа для просмотра веб-страниц",
      "Сервер",
      "Поисковик",
      "Антивирус"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i41",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Как расшифровывается HTML?",
    "options": [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "HyperText Making Language",
      "None"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i42",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое массив?",
    "options": [
      "Переменная",
      "Структура данных",
      "Функция",
      "Цикл"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i43",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Сколько будет 101_2 + 1_2?",
    "options": [
      "110_2",
      "100_2",
      "111_2",
      "10_2"
    ],
    "answerIdx": 0,
    "explanation": ""
  },
  {
    "id": "i44",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Как обозначается пустое значение в Python?",
    "options": [
      "0",
      "None",
      "null",
      "false"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i45",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Какое расширение у исполняемых файлов в Windows?",
    "options": [
      ".txt",
      ".exe",
      ".doc",
      ".jpg"
    ],
    "answerIdx": 1,
    "explanation": ""
  },
  {
    "id": "i46",
    "subject": "informatics",
    "subjectName": "Информатика",
    "topic": "Информатика",
    "question": "Что такое SQL?",
    "options": [
      "Язык программирования",
      "Язык запросов к БД",
      "Протокол передачи",
      "Формат файла"
    ],
    "answerIdx": 1,
    "explanation": ""
  }
];
