export type Lang = 'ru' | 'en'

const translations = {
	ru: {
		'exp.certificates': 'Сертификаты Яндекс Практикума',
		'exp.certificateRu': 'Сертификат ru',
		'exp.certificateEn': 'Сертификат en',
		'exp.certificateHint': 'Открыть PDF в новой вкладке',
		'channel.heading': 'Мой Telegram-канал',
		'channel.title': 'Максим Костенко | Будни Дата Инженера',
		'channel.desc':
			'Лайфстайл и айтишка: делюсь буднями дата-инженера, мыслями о работе в IT и лайфстайлом.',
		'channel.cta': 'Перейти в канал',
		'channel.avatarAlt': 'Аватар канала «Будни Дата Инженера»',
		// Nav
		'nav.about': 'О себе',
		'nav.experience': 'Опыт',
		'nav.skills': 'Навыки',
		'nav.projects': 'Проекты',
		'nav.contact': 'Контакты',

		// Hero
		'hero.available': 'Открыт к предложениям',
		'hero.desc':
			'Практикующий Data Engineer с опытом ~4 года. Строю end-to-end ETL-пайплайны, управляю каталогами данных и помогаю бизнесу принимать решения на основе актуальных данных.',
		'hero.btnContact': 'Связаться',
		'hero.btnProjects': 'Проекты',
		'hero.scroll': 'Скролл',
		'hero.typedStrings':
			'Data Engineer|ETL Developer|Data Scientist|Python Developer',

		// About
		'about.p1':
			'Практикующий Data Engineer с опытом построения end-to-end пайплайнов обработки данных и организации аналитической отчётности. Специализируюсь на внедрении и поддержке каталога данных OpenMetadata, разработке ETL-процессов в Apache Airflow с интеграцией SAP-систем и SAP HANA.',
		'about.p2':
			'Владею администрированием и оптимизацией PostgreSQL и ClickHouse, создаю интерактивные дашборды в Visiology. Понимаю принципы моделирования DWH, версионирования кода и работы с Docker. Легко нахожу общий язык с заказчиками, умею переводить бизнес-требования на язык данных.',
		'about.stat1': '~4 года',
		'about.stat2': '28+',
		'about.stat3': 'Python',
		'about.stat4': 'Data Eng.',
		'about.stat1label': 'Опыта',
		'about.stat2label': 'Технологий',
		'about.stat3label': 'Основной язык',
		'about.stat4label': 'Специализация',

		// Experience
		'exp.title': 'Опыт работы',
		'exp.total': '3 года 11 месяцев',

		'exp1.company': 'СИБИНТЕК (ДЗО ПАО НК Роснефть)',
		'exp1.position': 'Data Engineer',
		'exp1.period': 'Ноябрь 2024 — настоящее время · 1 год 5 мес.',
		'exp1.tag1': 'Apache Airflow',
		'exp1.tag2': 'ClickHouse',
		'exp1.tag3': 'OpenMetadata',
		'exp1.tag4': 'PostgreSQL',
		'exp1.tag5': 'SAP HANA',
		'exp1.tag6': 'Visiology',
		'exp1.desc':
			'Разработка ETL-пайплайнов в Apache Airflow с интеграцией SAP-систем. Внедрение и поддержка каталога данных OpenMetadata. Администрирование PostgreSQL и ClickHouse. Создание аналитических дашбордов в Visiology. Процессная аналитика (Processet).',

		'exp2.company': 'Яндекс Практикум',
		'exp2.position': 'Специалист по Data Science (обучение)',
		'exp2.period': 'Март 2024 — Февраль 2025 · 1 год',
		'exp2.tag1': 'Python',
		'exp2.tag2': 'SQL',
		'exp2.tag3': 'scikit-learn',
		'exp2.tag4': 'CV',
		'exp2.tag5': 'ML',
		'exp2.tag6': 'EDA',
		'exp2.desc':
			'Исследовательский и статистический анализ данных, проверка гипотез. Разработка и обучение ML-моделей, включая задачи компьютерного зрения. Полный цикл предобработки данных. SQL для извлечения и предобработки данных.',

		'exp3.company': 'Самостоятельная разработка',
		'exp3.position': 'Data Science Specialist',
		'exp3.period': 'Май 2022 — настоящее время · 3 года 11 мес.',
		'exp3.tag1': 'ML',
		'exp3.tag2': 'Computer Vision',
		'exp3.tag3': 'NLP',
		'exp3.tag4': 'Telegram Bots',
		'exp3.tag5': 'EDA',
		'exp3.tag6': 'Python',
		'exp3.desc':
			'HR-аналитика с предсказанием оттока сотрудников. Персонализация предложений для постоянных клиентов. Telegram-боты для образовательных платформ. Машинное обучение, компьютерное зрение, распознавание текста.',

		// Skills
		'skills.subtitle': 'Технологии и инструменты из реального опыта',
		'skill.python': 'Основной язык разработки',
		'skill.sql': 'PostgreSQL, ClickHouse, запросы',
		'skill.airflow': 'Оркестрация ETL-пайплайнов',
		'skill.spark': 'Распределённые вычисления',
		'skill.docker': 'Контейнеризация, Linux',
		'skill.kafka': 'Потоковая обработка данных',
		'skill.ml': 'scikit-learn, PyTorch, TensorFlow',
		'skill.pandas': 'Pandas, NumPy, обработка данных',
		'skill.openmd': 'Управление метаданными',

		// Projects
		'projects.subtitle': 'Реальные проекты с открытым исходным кодом',
		'proj1.title': 'Games EDA',
		'proj1.desc':
			'Разведочный анализ датасета видеоигр: тренды продаж по жанрам и платформам, корреляции оценок критиков и пользователей, выявление самых прибыльных серий.',
		'proj2.title': 'Локации нефтяного бурения',
		'proj2.desc':
			'Геопространственный анализ точек бурения: кластеризация месторождений, статистика по регионам, визуализация плотности скважин, прогнозирование перспективных зон.',
		'proj3.title': 'HR-аналитика: Отток сотрудников',
		'proj3.desc':
			'Предсказание увольнений с помощью ML-моделей. Анализ ключевых факторов оттока, классификатор (Random Forest, Logistic Regression), ROC-AUC оценка.',
		'proj4.title': 'Визуализация онлайн-продаж',
		'proj4.desc':
			'Интерактивные графики динамики онлайн-продаж: сезонность, топ-категории, географическое распределение покупателей, выявление паттернов.',
		'projects.more': 'Все репозитории на GitHub',

		// Contact
		'contact.subtitle':
			'Открыт к предложениям · Москва · Полная занятость / Удалённо',
		'contact.formTitle': 'Обсудим ваше предложение',
		'contact.name': 'Ваше имя',
		'contact.email': 'Email для ответа',
		'contact.message': 'Ваше предложение',
		'contact.messagePlaceholder':
			'Расскажите о проекте, вакансии или идее сотрудничества (от 10 символов)',
		'contact.send': 'Отправить предложение',
		'contact.formNote':
			'Имя, email и сообщение передаются через FormSubmit, чтобы я мог получить ваше предложение и ответить.',
		'contact.sending': 'Отправляем…',
		'contact.success':
			'Предложение принято сервисом отправки. Спасибо за обращение!',
		'contact.error':
			'Не удалось подтвердить отправку. Попробуйте ещё раз или напишите напрямую:',

		// Footer
		'footer.copy': '© 2026 Максим Костенко. Все права защищены.',
	},

	en: {
		'exp.certificates': 'Yandex Practicum certificates',
		'exp.certificateRu': 'Certificate in Russian',
		'exp.certificateEn': 'Certificate in English',
		'exp.certificateHint': 'Open PDF in a new tab',
		'channel.heading': 'My Telegram channel',
		'channel.title': 'Maxim Kostenko | Life of a Data Engineer',
		'channel.desc':
			'Lifestyle and tech: sharing everyday life as a data engineer, thoughts on working in IT, and life beyond code.',
		'channel.cta': 'Visit channel',
		'channel.avatarAlt': 'Life of a Data Engineer channel avatar',
		'nav.about': 'About',
		'nav.experience': 'Experience',
		'nav.skills': 'Skills',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',

		'hero.available': 'Open to opportunities',
		'hero.desc':
			'Practicing Data Engineer with ~4 years of experience. I build end-to-end ETL pipelines, manage data catalogs, and help businesses make decisions based on reliable data.',
		'hero.btnContact': 'Get in touch',
		'hero.btnProjects': 'Projects',
		'hero.scroll': 'Scroll',
		'hero.typedStrings':
			'Data Engineer|ETL Developer|Data Scientist|Python Developer',

		'about.p1':
			'Practicing Data Engineer specializing in building end-to-end data processing pipelines and analytical reporting. I implement and maintain the OpenMetadata data catalog, develop ETL processes in Apache Airflow with SAP systems integration and SAP HANA.',
		'about.p2':
			'Skilled in administering and optimizing PostgreSQL and ClickHouse, building interactive dashboards in Visiology. Familiar with DWH modeling principles, version control, and Docker. I easily bridge the gap between business requirements and data solutions.',
		'about.stat1': '~4 yrs',
		'about.stat2': '28+',
		'about.stat3': 'Python',
		'about.stat4': 'Data Eng.',
		'about.stat1label': 'Experience',
		'about.stat2label': 'Technologies',
		'about.stat3label': 'Primary language',
		'about.stat4label': 'Specialization',

		'exp.title': 'Work Experience',
		'exp.total': '3 years 11 months',

		'exp1.company': 'SIBINTEK (Rosneft subsidiary)',
		'exp1.position': 'Data Engineer',
		'exp1.period': 'November 2024 — Present · 1 yr 5 mo.',
		'exp1.tag1': 'Apache Airflow',
		'exp1.tag2': 'ClickHouse',
		'exp1.tag3': 'OpenMetadata',
		'exp1.tag4': 'PostgreSQL',
		'exp1.tag5': 'SAP HANA',
		'exp1.tag6': 'Visiology',
		'exp1.desc':
			'Developing ETL pipelines in Apache Airflow with SAP system integration. Implementing and maintaining OpenMetadata data catalog. Administering PostgreSQL and ClickHouse. Building analytical dashboards in Visiology. Process analytics (Processet).',

		'exp2.company': 'Yandex Practicum',
		'exp2.position': 'Data Science Specialist (training)',
		'exp2.period': 'March 2024 — February 2025 · 1 yr',
		'exp2.tag1': 'Python',
		'exp2.tag2': 'SQL',
		'exp2.tag3': 'scikit-learn',
		'exp2.tag4': 'CV',
		'exp2.tag5': 'ML',
		'exp2.tag6': 'EDA',
		'exp2.desc':
			'Exploratory and statistical data analysis, hypothesis testing. Building and training ML models including computer vision tasks. Full data preprocessing cycle. SQL for data extraction and preparation.',

		'exp3.company': 'Self-employed',
		'exp3.position': 'Data Science Specialist',
		'exp3.period': 'May 2022 — Present · 3 yrs 11 mo.',
		'exp3.tag1': 'ML',
		'exp3.tag2': 'Computer Vision',
		'exp3.tag3': 'NLP',
		'exp3.tag4': 'Telegram Bots',
		'exp3.tag5': 'EDA',
		'exp3.tag6': 'Python',
		'exp3.desc':
			'HR analytics project for employee churn prediction. Customer personalization for loyalty programs. Telegram bots for educational platforms. Machine learning, computer vision, and OCR projects.',

		'skills.subtitle': 'Technologies and tools from real experience',
		'skill.python': 'Primary development language',
		'skill.sql': 'PostgreSQL, ClickHouse, queries',
		'skill.airflow': 'ETL pipeline orchestration',
		'skill.spark': 'Distributed computing',
		'skill.docker': 'Containerization, Linux',
		'skill.kafka': 'Streaming data processing',
		'skill.ml': 'scikit-learn, PyTorch, TensorFlow',
		'skill.pandas': 'Pandas, NumPy, data processing',
		'skill.openmd': 'Metadata management',

		'projects.subtitle': 'Real open-source projects',
		'proj1.title': 'Games EDA',
		'proj1.desc':
			'Exploratory analysis of a video games dataset: sales trends by genre and platform, critic vs. user score correlations, identifying the most profitable franchises.',
		'proj2.title': 'Oil Drilling Locations',
		'proj2.desc':
			'Geospatial analysis of drilling sites: field clustering, regional statistics, well density visualization, and prediction of promising zones.',
		'proj3.title': 'HR Analytics: Employee Churn',
		'proj3.desc':
			'Predicting employee attrition with ML models. Key churn factor analysis, classifier (Random Forest, Logistic Regression), ROC-AUC evaluation.',
		'proj4.title': 'Online Sales Visualization',
		'proj4.desc':
			'Interactive online sales charts: seasonality, top categories, geographic customer distribution, pattern detection for business decisions.',
		'projects.more': 'All repositories on GitHub',

		'contact.subtitle': 'Open to offers · Moscow · Full-time / Remote',
		'contact.formTitle': 'Let’s discuss your proposal',
		'contact.name': 'Your name',
		'contact.email': 'Email for replies',
		'contact.message': 'Your proposal',
		'contact.messagePlaceholder':
			'Tell me about your project, vacancy or collaboration idea (at least 10 characters)',
		'contact.send': 'Send proposal',
		'contact.formNote':
			'Your name, email and message are sent via FormSubmit so I can receive your proposal and reply.',
		'contact.sending': 'Sending…',
		'contact.success':
			'Your proposal has been accepted by the sending service. Thank you!',
		'contact.error':
			'Unable to confirm submission. Please try again or email me directly:',

		'footer.copy': '© 2026 Maxim Kostenko. All rights reserved.',
	},
} as const

export type TranslationKey = keyof typeof translations.ru

export default translations
