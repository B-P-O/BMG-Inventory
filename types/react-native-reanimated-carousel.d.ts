// types/react-native-reanimated-carousel.d.ts
declare module "react-native-reanimated-carousel" {
  import { ComponentType } from "react";
  import { StyleProp, ViewStyle } from "react-native";

  // Define CarouselRef interface
  export interface CarouselRef {
    scrollTo: (options: { index: number; animated?: boolean }) => void;
    next: () => void;
    prev: () => void;
  }

  interface CarouselProps<T> {
    ref?: React.RefObject<CarouselRef>; // Use CarouselRef here
    data: T[];
    renderItem: (params: { item: T; index: number }) => JSX.Element;
    width: number;
    height: number;
    loop?: boolean;
    onSnapToItem?: (index: number) => void;
    style?: StyleProp<ViewStyle>;
    className?: string; // For NativeWind
    windowSize?: number;
    initialNumToRender?: number;
    maxToRenderPerBatch?: number;
    updateCellsBatchingPeriod?: number;
    autoPlay?: boolean;
    scrollAnimationDuration?: number;
    panGestureHandlerProps?: {
      activeOffsetX?: number[];
      [key: string]: any;
    };
  }

  const Carousel: ComponentType<CarouselProps<any>> & {
    scrollTo: CarouselRef["scrollTo"];
    next: CarouselRef["next"];
    prev: CarouselRef["prev"];
  };

  export default Carousel;
}
