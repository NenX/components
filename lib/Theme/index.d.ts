import React from 'react';
import { getThemeColor, applyAntdTheme } from './util';
interface IProps {
    primaryColor?: string;
    storageName?: string;
    style?: React.CSSProperties;
    placement?: any;
    onChange?: (color: string) => void;
}
declare const AntdThemeManipulator: {
    (props: IProps): JSX.Element;
    colors: string[];
};
export { AntdThemeManipulator, getThemeColor, applyAntdTheme as changeAntdTheme };
