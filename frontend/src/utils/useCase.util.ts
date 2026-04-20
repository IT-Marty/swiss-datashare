export const parseUseCases = (rawUseCase: unknown): string[] => {
  const normalized = (rawUseCase || "default")
    .toString()
    .toLowerCase()
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return normalized.length > 0 ? normalized : ["default"];
};

export const hasUseCase = (rawUseCase: unknown, target: string): boolean => {
  return parseUseCases(rawUseCase).includes(target.toLowerCase());
};
