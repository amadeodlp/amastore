export const resumeDescription = (description: string): string => {
  return description.length > 150
    ? description.slice(0, 150) + "..."
    : description;
};
