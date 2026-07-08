const programs = [
    { id: "7zip", name: "7-Zip", desc: "File archiver", winget: "7zip.7zip" },
    { id: "chrome", name: "Google Chrome", desc: "Web browser", winget: "Google.Chrome" },
    { id: "firefox", name: "Firefox", desc: "Web browser", winget: "Mozilla.Firefox" },
    { id: "edge", name: "Microsoft Edge", desc: "Web browser", winget: "Microsoft.Edge" },
    { id: "vlc", name: "VLC Media Player", desc: "Media player", winget: "VideoLAN.VLC" },
    { id: "spotify", name: "Spotify", desc: "Music streaming", winget: "Spotify.Spotify" },
    { id: "vscode", name: "VS Code", desc: "Code editor", winget: "Microsoft.VisualStudioCode" },
    { id: "nodejs", name: "Node.js", desc: "JavaScript runtime", winget: "OpenJS.NodeJS.LTS" },
    { id: "git", name: "Git", desc: "Version control", winget: "Git.Git" },
    { id: "python", name: "Python 3", desc: "Programming language", winget: "Python.Python.3.12" },
    { id: "obs", name: "OBS Studio", desc: "Screen recording & streaming", winget: "OBSProject.OBSStudio" },
    { id: "discord", name: "Discord", desc: "Voice & text chat", winget: "Discord.Discord" },
    { id: "notepadpp", name: "Notepad++", desc: "Advanced text editor", winget: "Notepad++.Notepad++" },
    { id: "powertoys", name: "PowerToys", desc: "Windows utilities", winget: "Microsoft.PowerToys" },
    { id: "terminal", name: "Windows Terminal", desc: "Modern terminal", winget: "Microsoft.WindowsTerminal" },
    { id: "postman", name: "Postman", desc: "API testing tool", winget: "Postman.Postman" },
    { id: "docker", name: "Docker Desktop", desc: "Containerization platform", winget: "Docker.DockerDesktop" },
    { id: "steam", name: "Steam", desc: "Gaming platform", winget: "Valve.Steam" },
    { id: "gimp", name: "GIMP", desc: "Image editor", winget: "GIMP.GIMP" },
    { id: "audacity", name: "Audacity", desc: "Audio editor", winget: "Audacity.Audacity" },
    { id: "telegram", name: "Telegram", desc: "Instant messaging", winget: "Telegram.TelegramDesktop" },
    { id: "everything", name: "Everything", desc: "File search tool", winget: "voidtools.Everything" },
    { id: "wireshark", name: "Wireshark", desc: "Network protocol analyzer", winget: "WiresharkFoundation.Wireshark" },
    { id: "winrar", name: "WinRAR", desc: "Archive extractor", winget: "RARLab.WinRAR" },
    { id: "sumatra", name: "SumatraPDF", desc: "Lightweight PDF reader", winget: "SumatraPDF.SumatraPDF" },
    { id: "thunderbird", name: "Thunderbird", desc: "Email client", winget: "Mozilla.Thunderbird" },
    { id: "bitwarden", name: "Bitwarden", desc: "Password manager", winget: "Bitwarden.Bitwarden" },
    { id: "obsidian", name: "Obsidian", desc: "Knowledge base & notes", winget: "Obsidian.Obsidian" },
    { id: "jetbrains", name: "JetBrains Toolbox", desc: "JetBrains tools manager", winget: "JetBrains.Toolbox" },
    { id: "ohmyposh", name: "Oh My Posh", desc: "Terminal prompt customizer", winget: "JanDeDobbeleer.OhMyPosh" },
];

const container = document.getElementById("programs");

function renderPrograms() {
    programs.forEach((p) => {
        const div = document.createElement("div");
        div.className = "program-item";
        div.dataset.id = p.id;
        div.innerHTML = `
            <input type="checkbox" id="${p.id}" data-winget="${p.winget}">
            <span class="checkmark"></span>
            <span class="program-info">
                <span class="program-name">${p.name}</span>
                <span class="program-desc">${p.desc}</span>
            </span>
        `;
        div.addEventListener("click", () => {
            const cb = div.querySelector("input[type='checkbox']");
            cb.checked = !cb.checked;
            div.classList.toggle("selected", cb.checked);
            updateCount();
        });
        container.appendChild(div);
    });
}

function toggleAll(select) {
    document.querySelectorAll(".program-item").forEach((item) => {
        const cb = item.querySelector("input[type='checkbox']");
        cb.checked = select;
        item.classList.toggle("selected", select);
    });
    updateCount();
}

function updateCount() {
    const count = document.querySelectorAll(
        ".program-item input[type='checkbox']:checked"
    ).length;
    document.getElementById("count").textContent = `${count} selected`;
}

function getSelected() {
    const selected = [];
    document
        .querySelectorAll(".program-item input[type='checkbox']:checked")
        .forEach((cb) => {
            selected.push(cb.dataset.winget);
        });
    return selected;
}

function generateScript() {
    const selected = getSelected();
    const output = document.getElementById("output");
    const pre = document.getElementById("scriptContent");

    if (selected.length === 0) {
        pre.textContent = "# Please select at least one program!";
        output.classList.add("show");
        output.style.display = "block";
        return;
    }

    const lines = [];
    lines.push("<#");
    lines.push("  Windows One-Click Install Script");
    lines.push("  Generated by https://installprograms");
    lines.push("  Uses winget to automatically install selected programs");
    lines.push("#>");
    lines.push("");
    lines.push('Write-Host "Checking winget..." -ForegroundColor Cyan');
    lines.push('if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {');
    lines.push('    Write-Host "Error: winget not found. Make sure you are running Windows 10 1809+ or Windows 11." -ForegroundColor Red');
    lines.push("    exit 1");
    lines.push("}");
    lines.push("");
    lines.push('Write-Host "==========================================" -ForegroundColor Green');
    lines.push('Write-Host "    Windows One-Click Installer" -ForegroundColor Green');
    lines.push('Write-Host "==========================================" -ForegroundColor Green');
    lines.push('Write-Host "The following programs will be installed:" -ForegroundColor Yellow');
    selected.forEach((id) => {
        const p = programs.find((x) => x.winget === id);
        if (p) lines.push(`Write-Host "  - ${p.name}" -ForegroundColor White`);
    });
    lines.push('Write-Host ""');
    lines.push('Write-Host "Installation will proceed automatically. Do not close this window..." -ForegroundColor Yellow');
    lines.push('Write-Host ""');
    lines.push("");

    selected.forEach((id, index) => {
        const p = programs.find((x) => x.winget === id);
        const label = p ? p.name : id;
        lines.push(`Write-Host "[${index + 1}/${selected.length}] Installing ${label}..." -ForegroundColor Cyan`);
        lines.push(`Write-Host "  Running: winget install --id ${id} --silent --accept-package-agreements --accept-source-agreements" -ForegroundColor DarkGray`);
        lines.push(`$exitCode = (Start-Process -FilePath "winget" -ArgumentList "install", "--id", "${id}", "--silent", "--accept-package-agreements", "--accept-source-agreements" -Wait -PassThru).ExitCode`);
        lines.push(`if ($exitCode -eq 0) {`);
        lines.push(`    Write-Host "  ✓ ${label} installed successfully!" -ForegroundColor Green`);
        lines.push("} else {");
        lines.push(`    Write-Host "  ✗ ${label} installation failed (exit code: $exitCode)" -ForegroundColor Red`);
        lines.push("}");
        lines.push("");
    });

    lines.push('Write-Host "==========================================" -ForegroundColor Green');
    lines.push('Write-Host "    All installations complete!" -ForegroundColor Green');
    lines.push('Write-Host "==========================================" -ForegroundColor Green');
    lines.push('Write-Host ""');
    lines.push('Write-Host "Press any key to exit..." -ForegroundColor Gray');
    lines.push('$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")');

    pre.textContent = lines.join("\n");
    output.classList.add("show");
    output.style.display = "block";
}

function copyScript() {
    const pre = document.getElementById("scriptContent");
    if (!pre.textContent) return;
    navigator.clipboard.writeText(pre.textContent).then(() => {
        alert("Script copied to clipboard!");
    });
}

function downloadScript() {
    const pre = document.getElementById("scriptContent");
    if (!pre.textContent) return;
    const blob = new Blob([pre.textContent], { type: "application/octet-stream" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "install-programs.ps1";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}

renderPrograms();
updateCount();
