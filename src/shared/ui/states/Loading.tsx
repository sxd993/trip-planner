interface LoadingProps {
    label?: string;
}

export const Loading = ({ label = "Загрузка..." }: LoadingProps) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center py-10">
            <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600" />
                <span className="text-sm font-medium text-slate-600">{label}</span>
            </div>
        </div>
    );
};
