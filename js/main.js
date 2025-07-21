// --- MAIN FUNCTIONALITY ---
class APTISTraining {
    constructor() {
        this.currentData = null;
        this.currentTopic = null;
        this.statistics = {
            questionsAnswered: 0,
            suggestionsViewed: 0,
            topicsCompleted: new Set(),
            studyTime: 0
        };
        this.startTime = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateTopicSelect();
        this.loadStatistics();
        this.startStudyTimer();
        this.addScrollEffects();
        this.createFloatingElements();
    }

    setupEventListeners() {
        const topicSelect = document.getElementById('topic-select');
        const combinedPracticeBtn = document.getElementById('combined-practice-btn');
        const tabPart123 = document.getElementById('tab-part123');
        const tabPart4 = document.getElementById('tab-part4');

        if (topicSelect) {
            topicSelect.addEventListener('change', (e) => this.handleTopicChange(e));
        }

        if (combinedPracticeBtn) {
            combinedPracticeBtn.addEventListener('click', () => this.startCombinedPractice());
        }

        if (tabPart123) {
            tabPart123.addEventListener('click', () => this.showPart123Tab());
        }

        if (tabPart4) {
            tabPart4.addEventListener('click', () => this.showPart4Tab());
        }

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        
        // Add theme toggle
        this.setupThemeToggle();
    }

    handleKeyboardShortcuts(event) {
        // Ctrl + 1: Switch to Part 1-3
        if (event.ctrlKey && event.key === '1') {
            event.preventDefault();
            this.showPart123Tab();
        }
        // Ctrl + 2: Switch to Part 4
        if (event.ctrlKey && event.key === '2') {
            event.preventDefault();
            this.showPart4Tab();
        }
    }

    setupThemeToggle() {
        // Add theme toggle button to header if it doesn't exist
        const header = document.querySelector('header');
        if (header && !document.getElementById('theme-toggle')) {
            const themeToggle = document.createElement('button');
            themeToggle.id = 'theme-toggle';
            themeToggle.innerHTML = '🌙';
            themeToggle.className = 'fixed top-4 right-4 z-50 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300';
            themeToggle.onclick = () => this.toggleTheme();
            document.body.appendChild(themeToggle);
        }
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const toggleBtn = document.getElementById('theme-toggle');
        if (document.body.classList.contains('dark-theme')) {
            toggleBtn.innerHTML = '☀️';
        } else {
            toggleBtn.innerHTML = '🌙';
        }
    }

    addScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.question-card, .topic-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    createFloatingElements() {
        // Add floating decorative elements
        const container = document.querySelector('.container');
        if (container) {
            for (let i = 0; i < 3; i++) {
                const floatingElement = document.createElement('div');
                floatingElement.className = 'floating-decoration';
                floatingElement.style.cssText = `
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
                    border-radius: 50%;
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    animation: float 6s ease-in-out infinite;
                    animation-delay: ${i * 2}s;
                    pointer-events: none;
                    z-index: -1;
                `;
                container.appendChild(floatingElement);
            }
        }
    }

    startStudyTimer() {
        this.startTime = Date.now();
        setInterval(() => {
            if (this.startTime) {
                this.statistics.studyTime = Math.floor((Date.now() - this.startTime) / 1000);
                this.updateStatisticsDisplay();
            }
        }, 1000);
    }

    loadStatistics() {
        const saved = localStorage.getItem('aptis-statistics');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.statistics = { ...this.statistics, ...parsed };
            this.statistics.topicsCompleted = new Set(parsed.topicsCompleted || []);
        }
    }

    saveStatistics() {
        const toSave = {
            ...this.statistics,
            topicsCompleted: Array.from(this.statistics.topicsCompleted)
        };
        localStorage.setItem('aptis-statistics', JSON.stringify(toSave));
    }

    updateStatisticsDisplay() {
        // Update statistics in the UI if statistics panel exists
        const statsPanel = document.getElementById('statistics-panel');
        if (statsPanel) {
            statsPanel.innerHTML = `
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div class="stat-card">
                        <div class="stat-number">${this.statistics.questionsAnswered}</div>
                        <div class="text-sm text-gray-600">Câu hỏi đã trả lời</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${this.statistics.suggestionsViewed}</div>
                        <div class="text-sm text-gray-600">Gợi ý đã xem</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${this.statistics.topicsCompleted.size}</div>
                        <div class="text-sm text-gray-600">Chủ đề hoàn thành</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${Math.floor(this.statistics.studyTime / 60)}</div>
                        <div class="text-sm text-gray-600">Phút học tập</div>
                    </div>
                </div>
            `;
        }
    }

    populateTopicSelect() {
        const topicSelect = document.getElementById('topic-select');
        if (!topicSelect) return;

        // Add topic count and difficulty indicators
        const topicEntries = Object.entries(practiceData).map(([topic, data]) => {
            const totalQuestions = (data['Part 1']?.length || 0) + 
                                 (data['Part 2']?.length || 0) + 
                                 (data['Part 3']?.length || 0) + 
                                 (data['Part 4'] ? 2 : 0);
            return { topic, data, totalQuestions };
        });

        // Sort by topic name
        topicEntries.sort((a, b) => a.topic.localeCompare(b.topic));

        topicEntries.forEach(({topic, totalQuestions}) => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = `${topic} (${totalQuestions} câu hỏi)`;
            topicSelect.appendChild(option);
        });
    }

    handleTopicChange(event) {
        const selectedTopic = event.target.value;
        if (selectedTopic) {
            this.currentData = practiceData[selectedTopic];
            this.showPracticeContainer();
            this.showPart123Tab(); // Default to Part 1-3
        } else {
            this.hidePracticeContainer();
        }
    }

    startCombinedPractice() {
        const selectedTopic = document.getElementById('topic-select').value;
        if (!selectedTopic) {
            alert('Vui lòng chọn một chủ đề trước khi bắt đầu luyện tập!');
            return;
        }
        this.currentData = practiceData[selectedTopic];
        this.showPracticeContainer();
        this.showPart123Tab();
    }

    showPracticeContainer() {
        const container = document.getElementById('practice-container');
        const welcomeMessage = document.getElementById('welcome-message');
        
        if (container) container.classList.remove('hidden');
        if (welcomeMessage) welcomeMessage.style.display = 'none';
    }

    hidePracticeContainer() {
        const container = document.getElementById('practice-container');
        const welcomeMessage = document.getElementById('welcome-message');
        
        if (container) container.classList.add('hidden');
        if (welcomeMessage) welcomeMessage.style.display = 'block';
    }

    showPart123Tab() {
        this.setActiveTab('tab-part123');
        this.renderPart123Content();
    }

    showPart4Tab() {
        this.setActiveTab('tab-part4');
        this.renderPart4Content();
    }

    setActiveTab(activeTabId) {
        const tabs = ['tab-part123', 'tab-part4'];
        tabs.forEach(tabId => {
            const tab = document.getElementById(tabId);
            if (tab) {
                if (tabId === activeTabId) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            }
        });
    }

    renderPart123Content() {
        const practiceArea = document.getElementById('practice-area');
        if (!practiceArea || !this.currentData) return;

        let html = '<div class="animate-fadeIn">';
        
        // Render Part 1
        if (this.currentData['Part 1']) {
            html += this.renderPartSection('Part 1', this.currentData['Part 1']);
        }

        // Render Part 2
        if (this.currentData['Part 2']) {
            html += this.renderPartSection('Part 2', this.currentData['Part 2']);
        }

        // Render Part 3
        if (this.currentData['Part 3']) {
            html += this.renderPartSection('Part 3', this.currentData['Part 3']);
        }

        html += '</div>';
        practiceArea.innerHTML = html;

        // Add event listeners for suggestion toggles
        this.addSuggestionToggleListeners();
    }

    renderPart4Content() {
        const practiceArea = document.getElementById('practice-area');
        if (!practiceArea || !this.currentData || !this.currentData['Part 4']) return;

        const part4Data = this.currentData['Part 4'];
        
        let html = `
            <div class="animate-fadeIn">
                <div class="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600 mr-3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <h2 class="text-xl sm:text-2xl font-bold text-slate-700">📧 Part 4: Email Writing</h2>
                    </div>
                    
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h3 class="font-semibold text-blue-800 mb-2">📋 Tình huống:</h3>
                        <p class="text-blue-700">${part4Data.scenario}</p>
                    </div>
                </div>
        `;

        // Friend Email
        if (part4Data.friend_email) {
            html += this.renderEmailSection('friend', 'Viết thư cho bạn bè (50 từ)', part4Data.friend_email);
        }

        // Manager Email
        if (part4Data.manager_email) {
            html += this.renderEmailSection('manager', 'Viết thư cho quản lý (120-150 từ)', part4Data.manager_email);
        }

        html += '</div>';
        practiceArea.innerHTML = html;

        // Add event listeners for suggestion toggles
        this.addSuggestionToggleListeners();
    }

    renderPartSection(partTitle, questions) {
        let html = `
            <div class="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 border border-gray-200">
                <div class="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 mr-3"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h2 class="text-xl sm:text-2xl font-bold text-slate-700">${partTitle}</h2>
                </div>
                <div class="space-y-4">
        `;

        questions.forEach((item, index) => {
            const questionId = `${partTitle.replace(' ', '').toLowerCase()}-${index}`;
            html += `
                <div class="border border-slate-200 rounded-lg p-4 question-card-mobile">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                        <h3 class="font-semibold text-slate-800 text-base sm:text-lg mb-2 sm:mb-0 flex-1">
                            ${item.question}
                        </h3>
                        <button onclick="toggleSuggestion('${questionId}')" 
                                class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition text-sm font-medium button-mobile mobile-full-width">
                            💡 Xem gợi ý
                        </button>
                    </div>
                    <div id="${questionId}" class="suggestion hidden">
                        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <div class="text-slate-700">${item.suggestion}</div>
                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div></div>';
        return html;
    }

    renderEmailSection(type, title, emailData) {
        const questionId = `email-${type}`;
        return `
            <div class="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 border border-gray-200">
                <div class="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 mr-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <h3 class="text-lg sm:text-xl font-bold text-slate-700">${title}</h3>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg mb-4">
                    <p class="text-blue-800 font-medium">${emailData.prompt}</p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                    <button onclick="toggleSuggestion('${questionId}-suggestion')" 
                            class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition text-sm font-medium button-mobile">
                        💡 Xem gợi ý viết
                    </button>
                    <button onclick="toggleSuggestion('${questionId}-sample')" 
                            class="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-green-700 transition text-sm font-medium button-mobile">
                        📝 Xem bài mẫu
                    </button>
                </div>

                <div id="${questionId}-suggestion" class="suggestion hidden">
                    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                        <h4 class="font-semibold text-yellow-800 mb-2">💡 Gợi ý cấu trúc:</h4>
                        <div class="text-slate-700">${emailData.suggestion}</div>
                    </div>
                </div>

                <div id="${questionId}-sample" class="suggestion hidden">
                    <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-400">
                        <h4 class="font-semibold text-green-800 mb-2">📝 Bài mẫu tham khảo:</h4>
                        <div class="sample-email">${emailData.sample}</div>
                    </div>
                </div>
            </div>
        `;
    }

    addSuggestionToggleListeners() {
        // The toggle function is defined globally
    }
}

// Global toggle function
function toggleSuggestion(id) {
    const element = document.getElementById(id);
    if (element) {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('show');
        } else {
            element.classList.add('hidden');
            element.classList.remove('show');
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new APTISTraining();
});
