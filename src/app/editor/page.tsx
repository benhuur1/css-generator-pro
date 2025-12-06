"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Code2, Copy, Download, Save } from "lucide-react"

interface CSSProperties {
  // Layout
  display: string
  width: string
  height: string
  padding: string
  margin: string
  
  // Typography
  fontSize: string
  fontWeight: string
  textAlign: string
  color: string
  
  // Background
  backgroundColor: string
  
  // Border
  borderRadius: string
  borderWidth: string
  borderStyle: string
  borderColor: string
  
  // Effects
  boxShadow: string
  opacity: string
}

export default function EditorPage() {
  const [cssProps, setCssProps] = useState<CSSProperties>({
    display: "block",
    width: "100%",
    height: "auto",
    padding: "16px",
    margin: "0px",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "left",
    color: "#000000",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    opacity: "1",
  })

  const [activeTab, setActiveTab] = useState("layout")

  const updateProp = (key: keyof CSSProperties, value: string) => {
    setCssProps((prev) => ({ ...prev, [key]: value }))
  }

  const generateCSS = () => {
    return Object.entries(cssProps)
      .map(([key, value]) => {
        // Convert camelCase to kebab-case
        const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase()
        return `  ${cssKey}: ${value};`
      })
      .join("\n")
  }

  const generatedCSS = `.elemento {\n${generateCSS()}\n}`

  const copyCSS = () => {
    navigator.clipboard.writeText(generatedCSS)
  }

  const downloadCSS = () => {
    const blob = new Blob([generatedCSS], { type: "text/css" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "styles.css"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Editor CSS
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Crie e customize seu CSS visualmente
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Editor Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Propriedades CSS</CardTitle>
            <CardDescription>
              Ajuste as propriedades e veja o preview em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="typography">Texto</TabsTrigger>
                <TabsTrigger value="colors">Cores</TabsTrigger>
                <TabsTrigger value="effects">Efeitos</TabsTrigger>
              </TabsList>

              <TabsContent value="layout" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Display</Label>
                  <Select value={cssProps.display} onValueChange={(v) => updateProp("display", v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="block">Block</SelectItem>
                      <SelectItem value="inline-block">Inline Block</SelectItem>
                      <SelectItem value="flex">Flex</SelectItem>
                      <SelectItem value="grid">Grid</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Width</Label>
                    <Input
                      value={cssProps.width}
                      onChange={(e) => updateProp("width", e.target.value)}
                      placeholder="100%"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Height</Label>
                    <Input
                      value={cssProps.height}
                      onChange={(e) => updateProp("height", e.target.value)}
                      placeholder="auto"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Padding</Label>
                    <Input
                      value={cssProps.padding}
                      onChange={(e) => updateProp("padding", e.target.value)}
                      placeholder="16px"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Margin</Label>
                    <Input
                      value={cssProps.margin}
                      onChange={(e) => updateProp("margin", e.target.value)}
                      placeholder="0px"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="typography" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Font Size</Label>
                    <Input
                      value={cssProps.fontSize}
                      onChange={(e) => updateProp("fontSize", e.target.value)}
                      placeholder="16px"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Font Weight</Label>
                    <Select value={cssProps.fontWeight} onValueChange={(v) => updateProp("fontWeight", v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="300">Light (300)</SelectItem>
                        <SelectItem value="400">Regular (400)</SelectItem>
                        <SelectItem value="500">Medium (500)</SelectItem>
                        <SelectItem value="600">Semibold (600)</SelectItem>
                        <SelectItem value="700">Bold (700)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Text Align</Label>
                  <Select value={cssProps.textAlign} onValueChange={(v) => updateProp("textAlign", v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                      <SelectItem value="justify">Justify</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Text Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={cssProps.color}
                      onChange={(e) => updateProp("color", e.target.value)}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={cssProps.color}
                      onChange={(e) => updateProp("color", e.target.value)}
                      placeholder="#000000"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="colors" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={cssProps.backgroundColor}
                      onChange={(e) => updateProp("backgroundColor", e.target.value)}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={cssProps.backgroundColor}
                      onChange={(e) => updateProp("backgroundColor", e.target.value)}
                      placeholder="#ffffff"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Border Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={cssProps.borderColor}
                      onChange={(e) => updateProp("borderColor", e.target.value)}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={cssProps.borderColor}
                      onChange={(e) => updateProp("borderColor", e.target.value)}
                      placeholder="#e2e8f0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Border Width</Label>
                    <Input
                      value={cssProps.borderWidth}
                      onChange={(e) => updateProp("borderWidth", e.target.value)}
                      placeholder="1px"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Border Style</Label>
                    <Select value={cssProps.borderStyle} onValueChange={(v) => updateProp("borderStyle", v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solid">Solid</SelectItem>
                        <SelectItem value="dashed">Dashed</SelectItem>
                        <SelectItem value="dotted">Dotted</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Border Radius</Label>
                  <Input
                    value={cssProps.borderRadius}
                    onChange={(e) => updateProp("borderRadius", e.target.value)}
                    placeholder="8px"
                  />
                </div>
              </TabsContent>

              <TabsContent value="effects" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Box Shadow</Label>
                  <Input
                    value={cssProps.boxShadow}
                    onChange={(e) => updateProp("boxShadow", e.target.value)}
                    placeholder="0 1px 3px rgba(0,0,0,0.1)"
                  />
                  <p className="text-xs text-slate-500">
                    Exemplo: 0 4px 6px rgba(0,0,0,0.1)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Opacity</Label>
                  <Input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={cssProps.opacity}
                    onChange={(e) => updateProp("opacity", e.target.value)}
                  />
                  <p className="text-xs text-slate-500">{cssProps.opacity}</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Preview & Code Panel */}
        <div className="space-y-6">
          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Veja como seu elemento ficará
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="min-h-[200px] bg-slate-100 dark:bg-slate-800 rounded-lg p-8 flex items-center justify-center">
                <div
                  style={{
                    display: cssProps.display,
                    width: cssProps.width,
                    height: cssProps.height,
                    padding: cssProps.padding,
                    margin: cssProps.margin,
                    fontSize: cssProps.fontSize,
                    fontWeight: cssProps.fontWeight,
                    textAlign: cssProps.textAlign as React.CSSProperties['textAlign'],
                    color: cssProps.color,
                    backgroundColor: cssProps.backgroundColor,
                    borderRadius: cssProps.borderRadius,
                    border: `${cssProps.borderWidth} ${cssProps.borderStyle} ${cssProps.borderColor}`,
                    boxShadow: cssProps.boxShadow,
                    opacity: cssProps.opacity,
                  }}
                >
                  Elemento de Preview
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generated CSS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  CSS Gerado
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyCSS}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadCSS}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Salvar
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{generatedCSS}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
