        // Матрица кода (вместо звезд)
        function createMatrixCode() {
            const matrix = document.getElementById('codeMatrix');
            
            for (let i = 0; i < 50; i++) {
                const codeLine = document.createElement('div');
                codeLine.className = 'code-line';
                codeLine.style.left = Math.random() * 100 + '%';
                codeLine.style.fontSize = (Math.random() * 5 + 8) + 'px';
                codeLine.style.animationDuration = (Math.random() * 5 + 10) + 's';
                codeLine.style.animationDelay = Math.random() * 5 + 's';
                matrix.appendChild(codeLine);
                
                setTimeout(() => codeLine.remove(), 20000);
            }
        }

        // Технологические частицы 01
        function createTechParticle() {
            const particle = document.createElement('div');
            particle.className = 'tech-particle';
            particle.textContent = Math.random() > 0.5 ? '1' : '0';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 8000);
        }

        // Запуск эффектов
        setInterval(createMatrixCode, 3000);
        setInterval(createTechParticle, 150);


// Simple dictionary data
        const dictionary = {
            "GAAP": "Generally Accepted Accounting Principles — это аббревиатура, обозначающая стандарты и правила бухгалтерского учета, принятые в конкретной стране (чаще всего подразумевают US GAAP для США).",
            "fabric": "структура; коммутирующая матрица (в чипах, сетях).",
            "EEPROM": "(Electrically Erasable Programmable Read-Only Memory) (электрически стираемое программируемое ПЗУ) — тип энергонезависимой памяти, основа для флэш-памяти и микроконтроллеров.",
            "in-circuit emulation": "внутрисхемная эмуляция.",
            "label": "1. метка; 2. отметка; обозначение; 3. наклейка; ярлык; подпись; надпись; этикетка; 4. выносная надпись; 5. почтовая марка; 6. текстовая строка; текстовые данные; 7. помечать; маркировать; 8. этикетировать; 9. метить — идентификатор или подпись в коде/UI/данных.",
        };

        // Search function
        function searchWord() {
            const input = document.getElementById('searchInput').value.trim().toLowerCase();
            const resultDiv = document.getElementById('result');
            
            if (input === '') {
                resultDiv.innerHTML = '<div class="no-result">Пожалуйста, введите слово для поиска.</div>';
                return;
            }

            const definition = dictionary[input];
            if (definition) {
                resultDiv.innerHTML = `
                    <div class="result">
                        <div class="word">${input.charAt(0).toUpperCase() + input.slice(1)}</div>
                        <div class="definition">${definition}</div>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="no-result">
                        Не найдено информации для "${input}". Попробуйте слова: GAAP, fabric, EEPROM, in-circuit emulation, label.
                    </div>
                `;
            }
        }

        // Подсветка активной кнопки (опционально)
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Enter key support
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key == 'Enter') {
                searchWord();
            }
        });

        // Focus on input when page loads
        window.onload = function() {
            document.getElementById('searchInput').focus();
        };