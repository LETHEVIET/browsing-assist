import React from "react";
import {ThemeSettings} from "@/components/settings/theme-settings.tsx";
import {I18nSettings} from "@/components/settings/i18n-settings.tsx";
import {ApiKeySettings} from "@/components/settings/api-key-settings.tsx";

export function SettingsPage() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ApiKeySettings/>
            <I18nSettings/>
            <ThemeSettings/>
        </div>
    )
}

