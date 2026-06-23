// Petits composants d'interface réutilisables pour le panneau admin.
import { ReactNode, FC, PropsWithChildren, InputHTMLAttributes, TextareaHTMLAttributes, ButtonHTMLAttributes, SelectHTMLAttributes } from 'react';

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="block space-y-1.5">
      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
      {children}
      {hint && <span className="block text-[11px] text-slate-400">{hint}</span>}
    </label>
  );
}

const inputCls =
  'w-full px-3.5 py-2.5 bg-white border border-slate-300 text-slate-900 rounded-sm outline-none focus:border-[#161310] focus:ring-1 focus:ring-[#161310] transition-colors text-sm';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputCls} ${props.className ?? ''}`} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCls} resize-none ${props.className ?? ''}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputCls} ${props.className ?? ''}`} />;
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'gold' | 'dark' | 'ghost' | 'danger';
};
export function Button({ variant = 'dark', className = '', ...rest }: BtnProps) {
  const styles: Record<string, string> = {
    gold: 'bg-[#f0c420] hover:bg-[#ffe16d] text-[#161310] border border-[#f0c420]',
    dark: 'bg-[#161310] hover:bg-[#38322a] text-white border border-[#161310]',
    ghost: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300',
    danger: 'bg-red-50 hover:bg-red-600 hover:text-white text-red-600 border border-red-200',
  };
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 font-sans font-bold uppercase text-xs tracking-wider py-2.5 px-4 rounded-sm transition-all active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]} ${className}`}
    />
  );
}

export const Card: FC<PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-slate-200 rounded-sm p-5 ${className}`}>{children}</div>
  );
};
