import { Ace } from 'ace-builds';
import { LightThemes, DarkThemes } from './ace-themes';
import { CodeEditorProps } from './interfaces';
export type PaneStatus = 'error' | 'warning' | 'hidden';
export declare const DEFAULT_LIGHT_THEME: typeof LightThemes[number]['value'];
export declare const DEFAULT_DARK_THEME: typeof DarkThemes[number]['value'];
export declare function supportsKeyboardAccessibility(ace: any): boolean;
export declare function getDefaultConfig(ace: any): Partial<Ace.EditorOptions>;
export declare function getDefaultTheme(element: HTMLElement): CodeEditorProps.Theme;
export declare function getAceTheme(theme: CodeEditorProps.Theme): string;
export declare function getLanguageLabel(language: CodeEditorProps.Language): string;
//# sourceMappingURL=util.d.ts.map