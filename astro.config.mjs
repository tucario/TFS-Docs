// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.transflator.com',
  integrations: [
    starlight({
      title: 'Transflator Docs',
      favicon: '/favicon.svg',
      head: [
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon.png' } },
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
          sidebar: [
            {
              label: 'Getting started',
              items: [
                { label: 'Welcome', slug: 'getting-started/welcome' },
                { label: 'Install the desktop app', slug: 'getting-started/install' },
                { label: 'Connect your Salesforce org', slug: 'getting-started/connect-your-org' },
                { label: 'Your first translation', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'Desktop app',
              items: [
                { label: 'Connections', slug: 'desktop-app/connections' },
                { label: 'Translation grid', slug: 'desktop-app/translation-grid' },
                { label: 'Batch AI translation', slug: 'desktop-app/batch-ai-translate' },
                { label: 'STF file workflow', slug: 'desktop-app/stf-file-workflow' },
                { label: 'Deploying to Salesforce', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'Account panel',
              items: [
                { label: 'Sign up & sign in', slug: 'account-panel/sign-up' },
                { label: 'Dashboard', slug: 'account-panel/dashboard' },
                { label: 'AI credits', slug: 'account-panel/ai-credits' },
                { label: 'Buying credits', slug: 'account-panel/buying-credits' },
                { label: 'API settings', slug: 'account-panel/api-token' },
                { label: 'Profile', slug: 'account-panel/profile' },
                { label: 'Delete your account', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'AI engines',
              items: [
                { label: 'Overview', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'Security',
              slug: 'security',
            },
            {
              label: 'Troubleshooting',
              items: [
                { label: 'OAuth errors', slug: 'troubleshooting/oauth-errors' },
                { label: 'Deploy failures', slug: 'troubleshooting/deploy-failures' },
                { label: 'Managed package skips', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
        de: {
          label: 'Deutsch',
          lang: 'de',
          sidebar: [
            {
              label: 'Erste Schritte',
              items: [
                { label: 'Willkommen', slug: 'getting-started/welcome' },
                { label: 'Desktop-App installieren', slug: 'getting-started/install' },
                { label: 'Salesforce-Org verbinden', slug: 'getting-started/connect-your-org' },
                { label: 'Ihre erste Übersetzung', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'Desktop-App',
              items: [
                { label: 'Verbindungen', slug: 'desktop-app/connections' },
                { label: 'Übersetzungsraster', slug: 'desktop-app/translation-grid' },
                { label: 'Batch-KI-Übersetzung', slug: 'desktop-app/batch-ai-translate' },
                { label: 'STF-Datei-Workflow', slug: 'desktop-app/stf-file-workflow' },
                { label: 'Bereitstellung in Salesforce', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'Kontopanel',
              items: [
                { label: 'Registrieren & Anmelden', slug: 'account-panel/sign-up' },
                { label: 'Dashboard', slug: 'account-panel/dashboard' },
                { label: 'KI-Guthaben', slug: 'account-panel/ai-credits' },
                { label: 'Guthaben kaufen', slug: 'account-panel/buying-credits' },
                { label: 'API-Einstellungen', slug: 'account-panel/api-token' },
                { label: 'Profil', slug: 'account-panel/profile' },
                { label: 'Konto löschen', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'KI-Engines',
              items: [
                { label: 'Übersicht', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'Sicherheit',
              slug: 'security',
            },
            {
              label: 'Fehlerbehebung',
              items: [
                { label: 'OAuth-Fehler', slug: 'troubleshooting/oauth-errors' },
                { label: 'Bereitstellungsfehler', slug: 'troubleshooting/deploy-failures' },
                { label: 'Managed Package Überspringungen', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
        fr: {
          label: 'Français',
          lang: 'fr',
          sidebar: [
            {
              label: 'Mise en route',
              items: [
                { label: 'Bienvenue', slug: 'getting-started/welcome' },
                { label: 'Installer l\'application de bureau', slug: 'getting-started/install' },
                { label: 'Connecter votre organisation Salesforce', slug: 'getting-started/connect-your-org' },
                { label: 'Votre première traduction', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'Application de bureau',
              items: [
                { label: 'Connexions', slug: 'desktop-app/connections' },
                { label: 'Grille de traduction', slug: 'desktop-app/translation-grid' },
                { label: 'Traduction IA par lots', slug: 'desktop-app/batch-ai-translate' },
                { label: 'Flux de travail des fichiers STF', slug: 'desktop-app/stf-file-workflow' },
                { label: 'Déploiement vers Salesforce', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'Panneau de compte',
              items: [
                { label: 'S\'inscrire et se connecter', slug: 'account-panel/sign-up' },
                { label: 'Tableau de bord', slug: 'account-panel/dashboard' },
                { label: 'Crédits IA', slug: 'account-panel/ai-credits' },
                { label: 'Acheter des crédits', slug: 'account-panel/buying-credits' },
                { label: 'Paramètres API', slug: 'account-panel/api-token' },
                { label: 'Profil', slug: 'account-panel/profile' },
                { label: 'Supprimer votre compte', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'Moteurs d\'IA',
              items: [
                { label: 'Aperçu', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'Sécurité',
              slug: 'security',
            },
            {
              label: 'Dépannage',
              items: [
                { label: 'Erreurs OAuth', slug: 'troubleshooting/oauth-errors' },
                { label: 'Échecs de déploiement', slug: 'troubleshooting/deploy-failures' },
                { label: 'Ignorance des packages gérés', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
        es: {
          label: 'Español',
          lang: 'es',
          sidebar: [
            {
              label: 'Primeros pasos',
              items: [
                { label: 'Bienvenido', slug: 'getting-started/welcome' },
                { label: 'Instalar la aplicación de escritorio', slug: 'getting-started/install' },
                { label: 'Conectar su organización de Salesforce', slug: 'getting-started/connect-your-org' },
                { label: 'Su primera traducción', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'Aplicación de escritorio',
              items: [
                { label: 'Conexiones', slug: 'desktop-app/connections' },
                { label: 'Cuadrícula de traducción', slug: 'desktop-app/translation-grid' },
                { label: 'Traducción por IA por lotes', slug: 'desktop-app/batch-ai-translate' },
                { label: 'Flujo de trabajo de archivos STF', slug: 'desktop-app/stf-file-workflow' },
                { label: 'Implementación en Salesforce', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'Panel de cuenta',
              items: [
                { label: 'Registrarse e iniciar sesión', slug: 'account-panel/sign-up' },
                { label: 'Panel principal', slug: 'account-panel/dashboard' },
                { label: 'Créditos de IA', slug: 'account-panel/ai-credits' },
                { label: 'Comprar créditos', slug: 'account-panel/buying-credits' },
                { label: 'Configuración de API', slug: 'account-panel/api-token' },
                { label: 'Perfil', slug: 'account-panel/profile' },
                { label: 'Eliminar su cuenta', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'Motores de IA',
              items: [
                { label: 'Descripción general', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'Seguridad',
              slug: 'security',
            },
            {
              label: 'Solución de problemas',
              items: [
                { label: 'Errores de OAuth', slug: 'troubleshooting/oauth-errors' },
                { label: 'Fallos de implementación', slug: 'troubleshooting/deploy-failures' },
                { label: 'Omisiones de paquetes gestionados', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
        ja: {
          label: '日本語',
          lang: 'ja',
          sidebar: [
            {
              label: 'はじめに',
              items: [
                { label: 'ようこそ', slug: 'getting-started/welcome' },
                { label: 'デスクトップアプリをインストールする', slug: 'getting-started/install' },
                { label: 'Salesforce組織を接続する', slug: 'getting-started/connect-your-org' },
                { label: '初めての翻訳', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'デスクトップアプリ',
              items: [
                { label: '接続', slug: 'desktop-app/connections' },
                { label: '翻訳グリッド', slug: 'desktop-app/translation-grid' },
                { label: '一括AI翻訳', slug: 'desktop-app/batch-ai-translate' },
                { label: 'STFファイルワークフロー', slug: 'desktop-app/stf-file-workflow' },
                { label: 'Salesforceへのデプロイ', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'アカウントパネル',
              items: [
                { label: 'サインアップとサインイン', slug: 'account-panel/sign-up' },
                { label: 'ダッシュボード', slug: 'account-panel/dashboard' },
                { label: 'AIクレジット', slug: 'account-panel/ai-credits' },
                { label: 'クレジットの購入', slug: 'account-panel/buying-credits' },
                { label: 'API設定', slug: 'account-panel/api-token' },
                { label: 'プロフィール', slug: 'account-panel/profile' },
                { label: 'アカウントを削除する', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'AIエンジン',
              items: [
                { label: '概要', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'セキュリティ',
              slug: 'security',
            },
            {
              label: 'トラブルシューティング',
              items: [
                { label: 'OAuthエラー', slug: 'troubleshooting/oauth-errors' },
                { label: 'デプロイ失敗', slug: 'troubleshooting/deploy-failures' },
                { label: '管理パッケージのスキップ', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
        pt: {
          label: 'Português',
          lang: 'pt',
          sidebar: [
            {
              label: 'Introdução',
              items: [
                { label: 'Bem-vindo', slug: 'getting-started/welcome' },
                { label: 'Instalar o aplicativo de desktop', slug: 'getting-started/install' },
                { label: 'Conectar sua organização Salesforce', slug: 'getting-started/connect-your-org' },
                { label: 'Sua primeira tradução', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'Aplicativo de desktop',
              items: [
                { label: 'Conexões', slug: 'desktop-app/connections' },
                { label: 'Grade de tradução', slug: 'desktop-app/translation-grid' },
                { label: 'Tradução por IA em lote', slug: 'desktop-app/batch-ai-translate' },
                { label: 'Fluxo de trabalho de arquivo STF', slug: 'desktop-app/stf-file-workflow' },
                { label: 'Implantando no Salesforce', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'Painel da conta',
              items: [
                { label: 'Inscrever-se e entrar', slug: 'account-panel/sign-up' },
                { label: 'Painel', slug: 'account-panel/dashboard' },
                { label: 'Créditos de IA', slug: 'account-panel/ai-credits' },
                { label: 'Comprar créditos', slug: 'account-panel/buying-credits' },
                { label: 'Configurações da API', slug: 'account-panel/api-token' },
                { label: 'Perfil', slug: 'account-panel/profile' },
                { label: 'Excluir sua conta', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'Motores de IA',
              items: [
                { label: 'Visão geral', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'Segurança',
              slug: 'security',
            },
            {
              label: 'Solução de problemas',
              items: [
                { label: 'Erros de OAuth', slug: 'troubleshooting/oauth-errors' },
                { label: 'Falhas de implantação', slug: 'troubleshooting/deploy-failures' },
                { label: 'Pulos de pacotes gerenciados', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
        pl: {
          label: 'Polski',
          lang: 'pl',
          sidebar: [
            {
              label: 'Pierwsze kroki',
              items: [
                { label: 'Witamy', slug: 'getting-started/welcome' },
                { label: 'Zainstaluj aplikację desktopową', slug: 'getting-started/install' },
                { label: 'Połącz swoją organizację Salesforce', slug: 'getting-started/connect-your-org' },
                { label: 'Twoje pierwsze tłumaczenie', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'Aplikacja desktopowa',
              items: [
                { label: 'Połączenia', slug: 'desktop-app/connections' },
                { label: 'Siatka tłumaczeń', slug: 'desktop-app/translation-grid' },
                { label: 'Zbiorcze tłumaczenie AI', slug: 'desktop-app/batch-ai-translate' },
                { label: 'Przepływ pracy z plikami STF', slug: 'desktop-app/stf-file-workflow' },
                { label: 'Wdrażanie do Salesforce', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'Panel konta',
              items: [
                { label: 'Rejestracja i logowanie', slug: 'account-panel/sign-up' },
                { label: 'Dashboard', slug: 'account-panel/dashboard' },
                { label: 'Kredyty AI', slug: 'account-panel/ai-credits' },
                { label: 'Kupowanie kredytów', slug: 'account-panel/buying-credits' },
                { label: 'Ustawienia API', slug: 'account-panel/api-token' },
                { label: 'Profil', slug: 'account-panel/profile' },
                { label: 'Usuń swoje konto', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'Silniki AI',
              items: [
                { label: 'Przegląd', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'Bezpieczeństwo',
              slug: 'security',
            },
            {
              label: 'Rozwiązywanie problemów',
              items: [
                { label: 'Błędy OAuth', slug: 'troubleshooting/oauth-errors' },
                { label: 'Błędy wdrażania', slug: 'troubleshooting/deploy-failures' },
                { label: 'Pominięcia pakietów zarządzanych', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
        ar: {
          label: 'العربية',
          lang: 'ar',
          dir: 'rtl',
          sidebar: [
            {
              label: 'البدء',
              items: [
                { label: 'مرحباً', slug: 'getting-started/welcome' },
                { label: 'تثبيت تطبيق السطح المكتب', slug: 'getting-started/install' },
                { label: 'ربط مؤسسة Salesforce الخاصة بك', slug: 'getting-started/connect-your-org' },
                { label: 'ترجمتك الأولى', slug: 'getting-started/your-first-translation' },
              ],
            },
            {
              label: 'تطبيق السطح المكتب',
              items: [
                { label: 'الاتصالات', slug: 'desktop-app/connections' },
                { label: 'شبكة الترجمة', slug: 'desktop-app/translation-grid' },
                { label: 'ترجمة الذكاء الاصطناعي الجماعية', slug: 'desktop-app/batch-ai-translate' },
                { label: 'سير عمل ملف STF', slug: 'desktop-app/stf-file-workflow' },
                { label: 'النشر في Salesforce', slug: 'desktop-app/deploying' },
              ],
            },
            {
              label: 'لوحة الحساب',
              items: [
                { label: 'التسجيل وتسجيل الدخول', slug: 'account-panel/sign-up' },
                { label: 'لوحة التحكم', slug: 'account-panel/dashboard' },
                { label: 'رصيد الذكاء الاصطناعي', slug: 'account-panel/ai-credits' },
                { label: 'شراء الرصيد', slug: 'account-panel/buying-credits' },
                { label: 'إعدادات API', slug: 'account-panel/api-token' },
                { label: 'الملف الشخصي', slug: 'account-panel/profile' },
                { label: 'حذف حسابك', slug: 'account-panel/delete-account' },
              ],
            },
            {
              label: 'محركات الذكاء الاصطناعي',
              items: [
                { label: 'نظرة عامة', slug: 'ai-engines/overview' },
                { label: 'Google Gemini', slug: 'ai-engines/gemini' },
                { label: 'Anthropic Claude', slug: 'ai-engines/claude' },
                { label: 'Mistral', slug: 'ai-engines/mistral' },
                { label: 'DeepSeek', slug: 'ai-engines/deepseek' },
              ],
            },
            {
              label: 'الأمان',
              slug: 'security',
            },
            {
              label: 'استكشاف الأخطاء وإصلاحها',
              items: [
                { label: 'أخطاء OAuth', slug: 'troubleshooting/oauth-errors' },
                { label: 'فشل النشر', slug: 'troubleshooting/deploy-failures' },
                { label: 'تجاوزات الحزم المدارة', slug: 'troubleshooting/managed-package-skips' },
              ],
            },
          ],
        },
      },
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Transflator',
      },
      description: 'Documentation for Transflator — translate your Salesforce org with AI.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tucario/TransflatorDocumentation' },
        { icon: 'external', label: 'transflator.com', href: 'https://transflator.com' },
      ],
      editLink: {
        baseUrl: 'https://github.com/tucario/TransflatorDocumentation/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
