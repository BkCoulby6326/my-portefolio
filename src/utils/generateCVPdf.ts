import { jsPDF } from 'jspdf';
import { profileData, experienceData, educationData, projectsData } from '../data/portfolioData';

/**
 * Generates and downloads the official CV PDF for Bakary Coulibaly
 * adhering strictly to the typography, layout, and sections of the official document.
 */
export function downloadCVPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper for checking page overflow and adding a new page
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  const drawSectionTitle = (title: string) => {
    checkPageBreak(14);
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(title.toUpperCase(), margin, y);
    y += 2.5;
    doc.setDrawColor(20, 20, 20);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin + contentWidth, y);
    y += 5;
  };

  // ================= PAGE 1 =================
  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42);
  doc.text(profileData.name, margin, y);
  y += 7;

  // Contact info in 2 columns
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);

  const col1X = margin;
  const col2X = margin + contentWidth / 2 + 5;
  const startContactY = y;

  // Left col
  doc.text(`coulibaly.bakary6326@gmail.com`, col1X, y);
  y += 5;
  doc.text(`Daoudabougou, Bamako, Mali`, col1X, y);
  y += 5;
  doc.text(`11/07/2004`, col1X, y);

  // Right col
  let yRight = startContactY;
  doc.text(`+223 77 20 66 76`, col2X, yRight);
  yRight += 5;
  doc.text(`Malienne`, col2X, yRight);
  yRight += 5;
  doc.text(`linkedin.com/in/bakary-coulibaly-bb39663b0`, col2X, yRight);

  y = Math.max(y, yRight) + 6;

  // Profile Section
  drawSectionTitle('Profil');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  const profileText = profileData.fullBio.join(' ');
  const splitBio = doc.splitTextToSize(profileText, contentWidth);
  doc.text(splitBio, margin, y, { align: 'justify', maxWidth: contentWidth });
  y += splitBio.length * 4.5 + 4;

  // Experiences Professionnelles
  drawSectionTitle('Expériences Professionnelles');

  experienceData.forEach((exp) => {
    checkPageBreak(30);

    // Date & Role layout
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);

    // Date on left, role and company on right if structured or continuous
    const dateStr = exp.period || '';
    doc.text(dateStr, margin, y);

    const textStartX = margin + 35;
    const textWidth = contentWidth - 35;

    doc.text(exp.role, textStartX, y);
    y += 4.5;

    if (exp.company) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9.5);
      doc.setTextColor(51, 65, 85);
      doc.text(`${exp.company}${exp.location ? ` – ${exp.location}` : ''}`, textStartX, y);
      y += 4.5;
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);

    exp.missions.forEach((mission) => {
      checkPageBreak(8);
      const bulletText = `•  ${mission}`;
      const splitBullet = doc.splitTextToSize(bulletText, textWidth);
      doc.text(splitBullet, textStartX, y);
      y += splitBullet.length * 4;
    });

    y += 3;
  });

  // Education Section
  drawSectionTitle('Éducation');

  educationData.forEach((edu) => {
    checkPageBreak(22);

    const dateMatch = edu.description.match(/\((\d{4}\s*–\s*\d{4})\)/);
    const dateStr = dateMatch ? dateMatch[1] : (edu.degree.includes('2022') ? '2022 – 2026' : '');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);

    // Left date
    if (edu.degree.includes('Licence Professionnelle en informatique de gestion')) {
      doc.text('2022 – 2026', margin, y);
    } else if (edu.degree.includes('Programmation et Développement')) {
      doc.text('2024 – 2025', margin, y);
    } else if (edu.degree.includes('DUT')) {
      doc.text('2022 – 2024', margin, y);
    } else {
      doc.text('2018 – 2021', margin, y);
    }

    const textStartX = margin + 35;
    const textWidth = contentWidth - 35;

    doc.text(edu.degree.replace(/\(.*?\)/g, '').trim(), textStartX, y);
    y += 4.5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`${edu.institution} – ${edu.location}`, textStartX, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    const splitDesc = doc.splitTextToSize(edu.description, textWidth);
    doc.text(splitDesc, textStartX, y);
    y += splitDesc.length * 4 + 3;
  });

  // ================= PAGE 2 =================
  doc.addPage();
  y = margin;

  // Compétences
  drawSectionTitle('Compétences');

  const compCol1X = margin;
  const compCol2X = margin + contentWidth / 2 + 5;
  const compWidth = contentWidth / 2 - 5;
  const startCompY = y;

  // Left Column: Développement & Outils
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Développement', compCol1X, y);
  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  ['•  Flutter', '•  Laravel', '•  Symfony', '•  Spring Boot', '•  HTML5 / CSS3 / JavaScript'].forEach((item) => {
    doc.text(item, compCol1X, y);
    y += 4;
  });

  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Outils', compCol1X, y);
  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  [
    '•  Git / GitHub',
    '•  GitHub Actions',
    '•  Microsoft Office',
    '•  Canva',
    '•  Postman',
    '•  VS Code',
    '•  Intelligence artificielle appliquée au développement'
  ].forEach((item) => {
    const splitItem = doc.splitTextToSize(item, compWidth);
    doc.text(splitItem, compCol1X, y);
    y += splitItem.length * 4;
  });

  // Right Column: Bases de données & Support
  let rightY = startCompY;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Bases de données', compCol2X, rightY);
  rightY += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  ['•  MySQL', '•  PostgreSQL', '•  Oracle Database', '•  Firebase'].forEach((item) => {
    doc.text(item, compCol2X, rightY);
    rightY += 4;
  });

  rightY += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Support informatique', compCol2X, rightY);
  rightY += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  [
    '•  Support utilisateurs niveau 1',
    '•  Maintenance matérielle et logicielle',
    '•  Installation et configuration Windows',
    '•  Assistance à distance (AnyDesk)',
    '•  Configuration réseau et routeurs',
    '•  Diagnostic et résolution d’incidents',
    '•  Installation et mise à jour de logiciels'
  ].forEach((item) => {
    const splitItem = doc.splitTextToSize(item, compWidth);
    doc.text(splitItem, compCol2X, rightY);
    rightY += splitItem.length * 4;
  });

  y = Math.max(y, rightY) + 5;

  // Projets Académiques et Personnels
  drawSectionTitle('Projets Académiques et Personnels');

  const customProjects = [
    {
      title: 'Projet collaboratif – Plateforme de visualisation de CV',
      points: [
        'Développement en équipe d’un site web permettant la visualisation des CV des membres de l’équipe',
        'Utilisation de Git et GitHub pour la collaboration et le versionnement du code',
        'Mise en place du déploiement automatique avec GitHub Actions',
        'Publication du projet via GitHub Pages',
        'Participation à l’intégration frontend et à l’organisation du projet'
      ]
    },
    {
      title: 'Projet de Fin d’Études : Application de Gestion d’Atelier de Couture',
      points: [
        'Analyse fonctionnelle et conception d’une base de données dédiée',
        'Développement full-stack avec intégration d’une interface utilisateur adaptée',
        'Gestion des commandes, clients et paiements'
      ]
    },
    {
      title: 'Application Web de Gestion Scolaire (Projet ESAD)',
      points: [
        'Conception et gestion d’une base de données relationnelle (PostgreSQL)',
        'Structuration et normalisation des données',
        'Mise en place de mécanismes de validation et contrôle de cohérence',
        'Sécurisation de l’accès aux données utilisateurs'
      ]
    },
    {
      title: 'Application Mobile Météo',
      points: [
        'Géolocalisation automatique',
        'Affichage dynamique des prévisions',
        'Stockage local des recherches'
      ]
    }
  ];

  customProjects.forEach((proj) => {
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, margin, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);

    proj.points.forEach((pt) => {
      checkPageBreak(8);
      const bulletText = `•  ${pt}`;
      const splitText = doc.splitTextToSize(bulletText, contentWidth);
      doc.text(splitText, margin, y);
      y += splitText.length * 4;
    });

    y += 2.5;
  });

  // Langues
  drawSectionTitle('Langues');
  const langColWidth = contentWidth / 3;
  const startLangY = y;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Français', margin, startLangY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text('Compétence professionnelle', margin, startLangY + 4.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Bambara', margin + langColWidth, startLangY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text('Langue maternelle', margin + langColWidth, startLangY + 4.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Anglais', margin + langColWidth * 2, startLangY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text('Intermédiaire', margin + langColWidth * 2, startLangY + 4.5);

  // ================= PAGE 3 =================
  doc.addPage();
  y = margin;

  // Qualités Personnelles
  drawSectionTitle('Qualités Personnelles');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);

  if (profileData.personalQualities) {
    profileData.personalQualities.forEach((qual) => {
      doc.text(`•  ${qual}`, margin, y);
      y += 5;
    });
  }

  y += 6;

  // Centres d'intérêt
  drawSectionTitle("Centres d'intérêt");
  const interestColWidth = contentWidth / 3;
  const startIntY = y;

  const int1 = doc.splitTextToSize('• Lecture et auto-formation en programmation et nouvelles technologies', interestColWidth - 5);
  doc.text(int1, margin, startIntY);

  const int2 = doc.splitTextToSize('• Exploration des solutions d’IA pour le développement', interestColWidth - 5);
  doc.text(int2, margin + interestColWidth, startIntY);

  const int3 = doc.splitTextToSize('• Développement personnel', interestColWidth - 5);
  doc.text(int3, margin + interestColWidth * 2, startIntY);

  // Save the generated PDF directly to the user's computer
  doc.save('CV_Bakary_Coulibaly.pdf');
}
