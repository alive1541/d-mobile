export interface PropsTypes {
  visible?: boolean;
  onClose?: (e: any) => void;
  prefixCls?: string;
  className?: string;
  keyboard?: boolean;
  style?: React.CSSProperties;
  mask?: boolean;
  children?: any;
  afterClose?: () => any;
  closable?: boolean;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  mousePosition?: {
    x: number;
    y: number;
  };
  title?: React.ReactNode;
  footer?: React.ReactNode;
  transitionName?: string;
  maskTransitionName?: string;
  animation?: any;
  maskAnimation?: any;
  wrapStyle?: {};
  bodyStyle?: {};
  maskStyle?: {};
  wrapClassName?: string;
  width?: number;
  height?: number;
  zIndex?: number;
  bodyProps?: any;
  maskProps?: any;
  wrapProps?: any;
  getContainer?: () => HTMLElement;
  forceRender?: boolean;
}
