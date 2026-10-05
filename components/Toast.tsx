import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast, theme } = usePortfolio();

  if (toasts.length === 0) return null;

  return (
    <div
      id="toast-notifications-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            id={`toast-${toast.id}`}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md transition-all shadow-lg ${
              theme === 'dark'
                ? 'bg-[#221D1A]/95 border-[#38312B] text-[#EFE8DE]'
                : 'bg-[#FAF7F2]/95 border-[#E2D8CC] text-[#2C2523]'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {isSuccess && <CheckCircle2 className="w-5 h-5 text-[#81B29A]" />}
              {isError && <AlertCircle className="w-5 h-5 text-[#E07A5F]" />}
              {!isSuccess && !isError && <Info className="w-5 h-5 text-[#C8A97E]" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4
                className={`text-sm font-semibold tracking-wide ${
                  theme === 'dark' ? 'text-[#F5EFEB]' : 'text-[#2C2523]'
                }`}
              >
                {toast.title}
              </h4>
              {toast.description && (
                <p
                  className={`text-xs mt-1 line-clamp-2 ${
                    theme === 'dark' ? 'text-[#B8A99A]' : 'text-[#6E6156]'
                  }`}
                >
                  {toast.description}
                </p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className={`shrink-0 p-1 transition-colors ${
                theme === 'dark'
                  ? 'text-[#8E8074] hover:text-[#EFE8DE]'
                  : 'text-[#9E8E81] hover:text-[#2C2523]'
              }`}
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
