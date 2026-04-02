import { useMemo } from "react";

function Background() {
    const symbols = ["</>","<> ", "{}", "()", "const", "=>", ";", "->", "+", "-", "*", "/", "<>", "[]", "::", "@", "#" , "%", "&", "|", "^", "~",
         "let", "var", "function", "return", "if", "else", "for", "while", "switch", "case", "break", "continue", "try", "catch", "finally"];

  // زاوية صغيرة فقط: مستقيم أو منحني يمين/يسار ±15°
  const rotationAngles = [-15, -10, -5, 0, 5, 10, 15];

  // useMemo لتوليد الرموز مرة واحدة وعدم استخدام impure function في render
  const items = useMemo(() => {
    const total = 20; // عدد الرموز
    const result = [];

    for (let i = 0; i < total; i++) {
      const top = Math.random() * 90 + 5;
      const left = Math.random() * 90 + 5;
      const size = Math.random() * 24 + 16; // زيادة الحجم قليلاً
      const rotation = rotationAngles[Math.floor(Math.random() * rotationAngles.length)];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];

      result.push({ top, left, size, rotation, symbol });
    }

    return result;
  }, []); // [] لتوليدها مرة واحدة فقط عند أول render

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute font-mono text-gray-200 font-semibold"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}

export default Background;