export { default as RemarkCheckbox } from './RemarkCheckbox';
export { default as Icon } from './Icon';
export { default as Editor } from './Editor';
export { default as Button } from './Button';
export { default as PartogramTable } from './PartogramTable';
export * from './Theme';
export declare let configs: Iconfig;
interface Iconfig {
    IconScriptUrl?: string;
}
export declare const config: (data: Iconfig) => void;
