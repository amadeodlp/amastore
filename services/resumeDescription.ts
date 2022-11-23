export const resumeDescription = (description: string): string => {
  return description.length > 100
    ? description.slice(0, 100) + "..."
    : description;
};
