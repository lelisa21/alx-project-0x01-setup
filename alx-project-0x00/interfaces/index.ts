export interface PillProps{
    title: string;
}
export interface ButtonProps {
  title: string;
  styles?: string; 
  size?: "Small" | "Medium" | "Large";
  shapes?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
}
