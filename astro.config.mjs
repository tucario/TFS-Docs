// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.transflator.com',
  integrations: [
    starlight({
      title: 'Transflator Docs',
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
            { label: 'Sign up & verify email', slug: 'account-panel/sign-up' },
            { label: 'AI credits', slug: 'account-panel/ai-credits' },
            { label: 'Buying credits', slug: 'account-panel/buying-credits' },
            { label: 'API token', slug: 'account-panel/api-token' },
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
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
