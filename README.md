# 🎓 NST AI - Your Personal Study Companion


•	Presentation: https://nst-ai.aryanvbw.live/

•	Demo video: https://youtu.be/PgualJtHqiE

Welcome to **NST AI** – your AI-powered study buddy designed specifically for Newton School of Technologies! With NST AI, you can ask questions, summarize lectures, and interact with your notes offline using state-of-the-art language models like **Mistral 7b LLM** and **Nomic Embed Text**. Follow the steps below to set up NST AI on macOS.

---

## 🚀 Features
- 💬 **Ask AI Anything**: Get instant answers to questions about your lectures and notes.
- 📑 **Summarize Notes**: Automatically summarize classes, lectures, and key study topics.
- 🌐 **Offline Access**: Access powerful LLM capabilities without an internet connection.

---

## 📋 Prerequisites
Before you start, make sure the following are installed on your Mac:
- 🐍 **Python 3.11** [Download here](https://www.python.org/downloads/)
- 🍺 **Homebrew** [Install Homebrew](https://brew.sh/)

---

## ⚙️ Installation Guide

Follow these steps to install and set up NST AI:

### Step 1: 🔄 Update Pip
First, update `pip` to the latest version:

```
pip install pip --upgrade
```

### Step 2: 📦 Install Poetry

Install Poetry to manage project dependencies:
```
pip install poetry
poetry --version  
```
### Step 3: 🌐 Install Ollama.ai

1.	Visit Ollama’s official website and download the macOS version.
2.	After downloading, unzip the file, open it, and follow the instructions to move Ollama to your Applications folder.
3.	Important: Quit Ollama from the taskbar by selecting Quit Ollama.

### Step 4: 📥 Download LLM Models

NST AI uses Mistral 7b LLM and Nomic Embed Text models for offline functionality. Pull these models with:
```
ollama pull mistral
ollama pull nomic-embed-text
```
### Step 5: 🖥️ Start Ollama Service

Start the Ollama service:
```
ollama serve
```

⚠️ Note: If you see Error: listen tcp 127.0.0.1:11434: bind: address already in use, Ollama is already running. Close it from the taskbar and try again.

Step 6: 🛠️ Install Ollama LLM with Poetry

In a new terminal window, install NST AI’s dependencies:

```
poetry install --extras "ui llms-ollama embeddings-ollama vector-stores-qdrant"
```

### Step 7: 🚀 Run NST AI

To start NST AI, use:

  ```
PGPT_PROFILES=ollama make run
  ```

Access NST AI in your browser at http://localhost:8001.

🛠 Troubleshooting

•	🐢 Slow CPU or GPU Issues:
If NST AI is slow or if you experience GPU issues, modify the timeout setting:
Open ```components/llm/llm_component.py``` and add:

```request_timeout=300```



🎥 Video Tutorial

🌟 Final Note

NST AI is here to enhance student learning at NST, making studying easier and more efficient. If you have any questions or need assistance, feel free to reach out. Enjoy exploring the world of personalized AI learning! 🎉
