export function Marquee({ text, speed = 20 }: { text: string; speed?: number }) {
  return (
    <div className="w-full overflow-hidden bg-foreground text-background py-3 border-y border-border flex whitespace-nowrap">
      <div 
        className="animate-marquee inline-block font-mono text-xs uppercase tracking-[0.2em]"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
      <div 
        className="animate-marquee inline-block font-mono text-xs uppercase tracking-[0.2em]"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
}
