import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Monitor, Sun, Moon, Sparkles, Layout, Type, CornerDownRight } from 'lucide-react';

const Settings = () => {
  const {
    theme,
    uiStyle,
    accentColor,
    borderRadius,
    fontFamily,
    setTheme,
    setUiStyle,
    setAccentColor,
    setBorderRadius,
    setFontFamily,
  } = useTheme();

  const themes = [
    { id: 'light', name: 'Light', icon: Sun, preview: 'bg-white text-gray-900' },
    { id: 'dark', name: 'Dark', icon: Moon, preview: 'bg-gray-900 text-white' },
    { id: 'system', name: 'System', icon: Monitor, preview: 'bg-gradient-to-r from-white to-gray-900' },
  ];

  const uiStyles = [
    { id: 'modern', name: 'Modern', description: 'Clean and minimal design' },
    { id: 'glassmorphism', name: 'Glassmorphism', description: 'Frosted glass effects' },
    { id: 'neumorphism', name: 'Neumorphism', description: 'Soft UI elements' },
    { id: 'brutalist', name: 'Brutalist', description: 'Bold and geometric' },
  ];

  const accentColors = [
    { id: 'blue', name: 'Ocean Blue', color: 'bg-blue-500', hex: '#3B82F6' },
    { id: 'purple', name: 'Royal Purple', color: 'bg-purple-500', hex: '#8B5CF6' },
    { id: 'emerald', name: 'Emerald Green', color: 'bg-emerald-500', hex: '#10B981' },
    { id: 'rose', name: 'Rose Pink', color: 'bg-rose-500', hex: '#F43F5E' },
    { id: 'amber', name: 'Sunset Amber', color: 'bg-amber-500', hex: '#F59E0B' },
    { id: 'cyan', name: 'Cyan Breeze', color: 'bg-cyan-500', hex: '#06B6D4' },
    { id: 'violet', name: 'Deep Violet', color: 'bg-violet-500', hex: '#7C3AED' },
    { id: 'lime', name: 'Electric Lime', color: 'bg-lime-500', hex: '#84CC16' },
  ];

  const borderRadiusOptions = [
    { id: 'none', name: 'Sharp', value: '0px' },
    { id: 'small', name: 'Subtle', value: '4px' },
    { id: 'medium', name: 'Rounded', value: '8px' },
    { id: 'large', name: 'Smooth', value: '16px' },
    { id: 'full', name: 'Pill', value: '9999px' },
  ];

  const fontFamilies = [
    { id: 'inter', name: 'Inter', class: 'font-sans' },
    { id: 'serif', name: 'Playfair Display', class: 'font-serif' },
    { id: 'mono', name: 'JetBrains Mono', class: 'font-mono' },
    { id: 'display', name: 'Poppins', class: 'font-sans' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Personalize Your Experience
            </h1>
            <p className="text-muted-foreground text-lg">
              Customize the interface to match your style and preferences
            </p>
          </div>

          {/* Theme Selection */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme Preference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
                {themes.map((themeOption) => (
                  <Label
                    key={themeOption.id}
                    className={`flex flex-col items-center space-y-2 p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                      theme === themeOption.id ? 'border-primary bg-primary/10' : 'border-border'
                    }`}
                  >
                    <RadioGroupItem value={themeOption.id} className="sr-only" />
                    <div className={`w-12 h-12 rounded-full ${themeOption.preview} flex items-center justify-center`}>
                      <themeOption.icon className="h-6 w-6" />
                    </div>
                    <span className="font-medium">{themeOption.name}</span>
                  </Label>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* UI Style */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="h-5 w-5" />
                UI Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={uiStyle} onValueChange={setUiStyle} className="grid grid-cols-2 gap-4">
                {uiStyles.map((style) => (
                  <Label
                    key={style.id}
                    className={`flex flex-col space-y-2 p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                      uiStyle === style.id ? 'border-primary bg-primary/10' : 'border-border'
                    }`}
                  >
                    <RadioGroupItem value={style.id} className="sr-only" />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{style.name}</span>
                      {uiStyle === style.id && <Badge variant="secondary">Active</Badge>}
                    </div>
                    <span className="text-sm text-muted-foreground">{style.description}</span>
                  </Label>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Accent Colors */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Accent Color
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                {accentColors.map((color) => (
                  <Label
                    key={color.id}
                    className={`flex flex-col items-center space-y-2 p-3 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                      accentColor === color.id ? 'border-primary bg-primary/10' : 'border-border'
                    }`}
                  >
                    <input
                      type="radio"
                      name="accentColor"
                      value={color.id}
                      checked={accentColor === color.id}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-8 h-8 rounded-full ${color.color} shadow-lg`} />
                    <span className="text-xs font-medium text-center">{color.name}</span>
                  </Label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Border Radius */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CornerDownRight className="h-5 w-5" />
                Corner Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={borderRadius} onValueChange={setBorderRadius}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {borderRadiusOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 bg-primary"
                          style={{ borderRadius: option.value }}
                        />
                        {option.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Font Family */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Typography
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={fontFamily} onValueChange={setFontFamily}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontFamilies.map((font) => (
                    <SelectItem key={font.id} value={font.id}>
                      <span className={font.class}>{font.name}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-semibold">Sample Content</h3>
                <p className="text-muted-foreground">
                  This is how your interface will look with the selected settings.
                </p>
                <div className="flex gap-2">
                  <Button>Primary Button</Button>
                  <Button variant="outline">Secondary Button</Button>
                </div>
                <Card className="p-4">
                  <p className="text-sm">Sample card component with current styling</p>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Reset Button */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => {
                setTheme('light');
                setUiStyle('modern');
                setAccentColor('blue');
                setBorderRadius('medium');
                setFontFamily('inter');
              }}
            >
              Reset to Defaults
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
