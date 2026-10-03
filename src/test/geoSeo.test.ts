import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Infraestrutura GEO & SEO Técnico — Dra. Ana Carolina Silva Quiros', () => {
  const publicDir = path.resolve(__dirname, '../../public');
  const docsDir = path.join(publicDir, 'docs');
  const indexHtmlPath = path.resolve(__dirname, '../../index.html');
  const footerPath = path.resolve(__dirname, '../components/Footer.tsx');

  describe('Manifesto llms.txt (Pilar 1: GEO / RAG)', () => {
    it('existe e possui cabeçalho com proposta de valor e identificação', () => {
      const llmsPath = path.join(publicDir, 'llms.txt');
      expect(fs.existsSync(llmsPath)).toBe(true);

      const content = fs.readFileSync(llmsPath, 'utf8');
      expect(content).toContain('Dra. Ana Carolina Silva Quiros');
      expect(content).toContain('Fisioterapeuta Pélvica');
      expect(content).toContain('KonohaTech');
    });

    it('contém todas as rotas canônicas em Markdown para a pasta docs/', () => {
      const content = fs.readFileSync(path.join(publicDir, 'llms.txt'), 'utf8');
      expect(content).toContain('docs/sobre.md');
      expect(content).toContain('docs/servicos.md');
      expect(content).toContain('docs/cases.md');
      expect(content).toContain('docs/biolinks.md');
      expect(content).toContain('docs/contato.md');
    });

    it('contém fatos chave estruturados com localização e canais oficiais para IA', () => {
      const content = fs.readFileSync(path.join(publicDir, 'llms.txt'), 'utf8');
      expect(content).toContain('Recife');
      expect(content).toContain('Derby');
      expect(content).toContain('+55 81 9698-1869');
      expect(content).toContain('Uroginecologia');
      expect(content).toContain('Obstetrícia');
      expect(content).toContain('Coloproctologia');
    });
  });

  describe('Governança robots.txt (Pilar 2)', () => {
    it('permite acesso universal a docs, llms.txt e bots de IA com regras explícitas', () => {
      const robotsPath = path.join(publicDir, 'robots.txt');
      expect(fs.existsSync(robotsPath)).toBe(true);

      const content = fs.readFileSync(robotsPath, 'utf8');
      expect(content).toContain('Allow: /docs/');
      expect(content).toContain('Allow: /llms.txt');
      expect(content).toContain('User-agent: PerplexityBot');
      expect(content).toContain('User-agent: OAI-SearchBot');
      expect(content).toContain('User-agent: ChatGPT-User');
    });

    it('bloqueia scrapers predatórios de treinamento massivo e declara sitemap', () => {
      const content = fs.readFileSync(path.join(publicDir, 'robots.txt'), 'utf8');
      expect(content).toContain('User-agent: Bytespider');
      expect(content).toContain('Disallow: /');
      expect(content).toContain('User-agent: CCBot');
      expect(content).toContain('Sitemap: https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/sitemap.xml');
    });
  });

  describe('Mapa Canônico Híbrido sitemap.xml (Pilar 3)', () => {
    it('possui XML bem formatado com a rota web e documentos Markdown', () => {
      const sitemapPath = path.join(publicDir, 'sitemap.xml');
      expect(fs.existsSync(sitemapPath)).toBe(true);

      const content = fs.readFileSync(sitemapPath, 'utf8');
      expect(content).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(content).toContain('<loc>https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/</loc>');
      expect(content).toContain('<loc>https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/docs/sobre.md</loc>');
      expect(content).toContain('<loc>https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/docs/servicos.md</loc>');
      expect(content).toContain('<loc>https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/docs/cases.md</loc>');
      expect(content).toContain('<loc>https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/docs/biolinks.md</loc>');
      expect(content).toContain('<loc>https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/docs/contato.md</loc>');
    });
  });

  describe('Base Factual Markdown (Pilar 1: public/docs/)', () => {
    const requiredDocs = ['sobre.md', 'servicos.md', 'cases.md', 'biolinks.md', 'contato.md'];

    it.each(requiredDocs)('arquivo %s existe e contém densidade textual adequada', (filename) => {
      const filePath = path.join(docsDir, filename);
      expect(fs.existsSync(filePath)).toBe(true);

      const content = fs.readFileSync(filePath, 'utf8');
      expect(content.length).toBeGreaterThan(200);
      expect(content).toContain('Ana Carolina');
    });

    it('cases.md documenta casos clínicos reais de fisioterapia pélvica', () => {
      const content = fs.readFileSync(path.join(docsDir, 'cases.md'), 'utf8');
      expect(content).toContain('Incontinência Urinária');
      expect(content).toContain('Preparação de Parto');
      expect(content).toContain('Diástase Abdominal');
    });

    it('contato.md documenta localização física no Derby e convênios aceitos', () => {
      const content = fs.readFileSync(path.join(docsDir, 'contato.md'), 'utf8');
      expect(content).toContain('Rua Silva Ramos, 71');
      expect(content).toContain('Derby');
      expect(content).toContain('Recife');
      expect(content).toContain('+55 (81) 9698-1869');
      expect(content).toContain('Bradesco');
      expect(content).toContain('Unimed');
    });
  });

  describe('Metadados Semânticos & Schema.org JSON-LD (Pilar 4: index.html)', () => {
    it('possui tags canônicas, OpenGraph e Twitter Cards', () => {
      const html = fs.readFileSync(indexHtmlPath, 'utf8');
      expect(html).toContain('<link rel="canonical" href="https://gee152.github.io/LDA_fisioterapeuta_Ana_Carolina/" />');
      expect(html).toContain('property="og:title"');
      expect(html).toContain('property="og:image"');
      expect(html).toContain('name="twitter:card"');
      expect(html).toContain('<link rel="sitemap"');
    });

    it('possui JSON-LD com ProfessionalService, WebSite e FAQPage válidos', () => {
      const html = fs.readFileSync(indexHtmlPath, 'utf8');
      const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      expect(match).not.toBeNull();

      const schema = JSON.parse(match![1]);
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@graph']).toBeDefined();

      // ProfessionalService / Physician
      const profService = schema['@graph'].find((item: any) => item['@type'] === 'ProfessionalService');
      expect(profService).toBeDefined();
      expect(profService.name).toContain('Ana Carolina');
      expect(profService.address.addressLocality).toBe('Recife');
      expect(profService.address.addressRegion).toBe('PE');
      expect(profService.telephone).toContain('9698-1869');

      // WebSite
      const website = schema['@graph'].find((item: any) => item['@type'] === 'WebSite');
      expect(website).toBeDefined();

      // FAQPage
      const faq = schema['@graph'].find((item: any) => item['@type'] === 'FAQPage');
      expect(faq).toBeDefined();
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('Verificação Google Search Console', () => {
    it('possui arquivo de verificação na pasta public/', () => {
      const verificationFile = path.join(publicDir, 'googlef0b601a6f53c2a31.html');
      expect(fs.existsSync(verificationFile)).toBe(true);
      const content = fs.readFileSync(verificationFile, 'utf8');
      expect(content).toContain('google-site-verification: googlef0b601a6f53c2a31.html');
    });

    it('possui meta tag de verificação no index.html', () => {
      const html = fs.readFileSync(indexHtmlPath, 'utf8');
      expect(html).toContain('name="google-site-verification" content="googlef0b601a6f53c2a31.html"');
    });
  });

  describe('Rastreabilidade Semântica Invisível (Pilar 5: Footer.tsx)', () => {
    it('Footer contém nav sr-only com links semânticos rel="help" e rel="documentation"', () => {
      const footerContent = fs.readFileSync(footerPath, 'utf8');
      expect(footerContent).toContain('className="sr-only"');
      expect(footerContent).toContain('aria-label="Rastreamento IA e Documentação Semântica"');
      expect(footerContent).toContain('rel="help"');
      expect(footerContent).toContain('rel="documentation"');
      expect(footerContent).toContain('llms.txt');
      expect(footerContent).toContain('docs/sobre.md');
      expect(footerContent).toContain('docs/servicos.md');
      expect(footerContent).toContain('docs/cases.md');
      expect(footerContent).toContain('docs/contato.md');
    });
  });
});
