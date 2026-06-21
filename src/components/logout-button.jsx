// components/logout-button.tsx
"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export default function LogoutButton() {
    return (
        <Button
            variant="light"
            onClick={() => { authClient.signOut(); redirect('/') }}
        >
            <LogOut size={16} /> Logout
        </Button>
    );
}