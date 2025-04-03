import React from 'react';
import { ModeSelect } from "./ModeSelect";
import { Button } from './ui/button';

export const ThemeShowcase = () => {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <div className="container mx-auto p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold">Theme Showcase</h1>
                    <ModeSelect />
                </div>

                <div className="space-y-8">
                    <div className="p-6 bg-card text-card-foreground rounded-lg border border-border">
                        <h2 className="text-2xl font-semibold mb-4">Card Example</h2>
                        <p className="text-muted-foreground mb-4">
                            This is an example card with different background and text colors.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="default">
                                Default Button
                            </Button>
                            <Button variant="secondary">
                                Secondary Button
                            </Button>
                            <Button variant="destructive">
                                Destructive Button
                            </Button>
                            <Button variant="ghost">
                                Ghost Button
                            </Button>
                            <Button variant="outline">
                                Outline Button
                            </Button>
                            <Button variant="link">
                                Link Button
                            </Button>
                        </div>
                    </div>

                    <div className="p-4 bg-muted text-muted-foreground rounded-lg">
                        Muted background with text
                    </div>
                </div>
            </div>
        </div>
    );
}; 
