export interface Action<T> {
  text: string;
  onPress?: () => void | Promise<any>;
  style?: T | string;
}

export interface ModalPropsType<T> {
  visible?: boolean;
  onClose?: () => void;
  title?: string;
  closeable?: boolean;
  wrapClassName?: string;
  popup?: boolean;
  className?: string;
  transparent?: boolean;
  operation?: boolean;
  footer: Action<T>[];
  platform?: string;
}
