export default interface InputProps  {
  /**
   * id for input and label
   */
  id?: string;
  /**
   * If not provided, label will not be added
   */
  label?: string;
  /**
   * input value
   */
  value?: string;
  /**
   * For changing the value of the input
   */
  onChange?: (e: { target: { value: React.SetStateAction<string> } }) => void;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * One of various input types
   */
  type?: string;
}
