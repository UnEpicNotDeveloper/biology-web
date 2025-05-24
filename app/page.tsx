'use client'
import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ImageHotspots from "react-image-hotspots";
import Navbar from "../page-components/Navbar"


export default function Page() {
  const term = pageState().term;
  const setTerm = pageState((state) => state.setTerm);
  const hotspots = [
   {
      id: 'Channel Protein',
      x: 800/2776,
      y: 324/2482,
   },
   {
      id: 'Cytoplasm',
      x: 1052/2776,
      y: 324/2482,
   },
   {
      id: 'Hydrophilic',
      x: 972/2776,
      y: 310/2482,
   },
   {
      id: 'Endocytosis',
      x: 694/2776,
      y: 402/2482,
   },
   {
      id: 'Amphipathic',
      x: 762/2776,
      y: 383/2482,
   },
   {
      id: 'Pinocytosis',
      x: 908/2776,
      y: 345/2482,
   },
   {
      id: 'Surface Area to Volume',
      x: 849/2776,
      y: 376/2482,
   },
   {
      id: 'Miller-Urey Experiment',
      x: 972/2776,
      y: 381/2482,
   },
   {
      id: 'Scanning Electron Microscope',
      x: 1095/2776,
      y: 386/2482,
   },
   {
      id: 'Electron Microscope',
      x: 1192/2776,
      y: 397/2482,
   },
   {
      id: 'Nucleolus',
      x: 1293/2776,
      y: 430/2482,
   },
   {
      id: 'Lysosome',
      x: 1031/2776,
      y: 419/2482,
   },
   {
      id: 'Phospholipid',
      x: 897/2776,
      y: 422/2482,
   },
   {
      id: 'Abiotic Synthesis',
      x: 812/2776,
      y: 436/2482,
   },
   {
      id: 'Cholesterol',
      x: 743/2776,
      y: 454/2482,
   },
   {
      id: 'Aquaporin',
      x: 670/2776,
      y: 466/2482,
   },
   {
      id: 'Plasmodesmata',
      x: 965/2776,
      y: 449/2482,
   },
   {
      id: 'Light Microscope',
      x: 1095/2776,
      y: 452/2482,
   },
   {
      id: 'Nucleus',
      x: 1215/2776,
      y: 463/2482,
   },
   {
      id: 'Flaccid',
      x: 1003/2776,
      y: 487/2482,
   },
   {
      id: 'Plasma Membrane',
      x: 625/2776,
      y: 522/2482,
   },
   {
      id: 'Hypertonic',
      x: 863/2776,
      y: 485/2482,
   },
   {
      id: 'Passive Transport',
      x: 795/2776,
      y: 504/2482,
   },
   {
      id: 'Transport Vesicle',
      x: 1151/2776,
      y: 494/2482,
   },
   {
      id: 'Hydrophobic',
      x: 715/2776,
      y: 518/2482,
   },
   {
      id: 'Cytosol',
      x: 1274/2776,
      y: 500/2482,
   },
   {
      id: 'Scale Bars',
      x: 970/2776,
      y: 515/2482,
   },
   {
      id: 'Oparin & Haldane',
      x: 1090/2776,
      y: 527/2482,
   },
   {
      id: 'Nuclear Pore Complexes',
      x: 1213/2776,
      y: 530/2482,
   },
   {
      id: 'Membrane Sidedness',
      x: 904/2776,
      y: 537/2482,
   },
   {
      id: 'Integrin',
      x: 837/2776,
      y: 538/2482,
   },
   {
      id: 'Pore Complex',
      x: 1026/2776,
      y: 559/2482,
   },
   {
      id: 'Transmission Electron Microscope',
      x: 1149/2776,
      y: 536/2482,
   },
   {
      id: 'Ion Channel',
      x: 767/2776,
      y: 565/2482,
   },
   {
      id: 'Endoplasmic Recticulum',
      x: 1336/2776,
      y: 567/2482,
   },
   {
      id: 'Osmosis',
      x: 578/2776,
      y: 572/2482,
   },
   {
      id: 'Magnification',
      x: 963/2776,
      y: 586/2482,
   },
   {
      id: 'Cell Wall',
      x: 703/2776,
      y: 589/2482,
   },
   {
      id: 'Vesicle',
      x: 516/2776,
      y: 607/2482,
   },
   {
      id: 'Free Water',
      x: 1088/2776,
      y: 598/2482,
   },
   {
      id: 'Lumen',
      x: 1210/2776,
      y: 602/2482,
   },
   {
      id: 'Ribosome',
      x: 1410/2776,
      y: 598/2482,
   },
   {
      id: 'Water Potential',
      x: 894/2776,
      y: 606/2482,
   },
   {
      id: 'Contractile Vacuole',
      x: 1019/2776,
      y: 629/2482,
   },
   {
      id: 'Voltage',
      x: 828/2776,
      y: 626/2482,
   },
   {
      id: 'Objective Lens',
      x: 1147/2776,
      y: 636/2482,
   },
   {
      id: 'Abiotic',
      x: 636/2776,
      y: 626/2482,
   },
   {
      id: 'Robert Hook',
      x: 757/2776,
      y: 631/2482,
   },
   {
      id: 'Integral Protein',
      x: 948/2776,
      y: 657/2482,
   },
   {
      id: 'Antoni Van Leeuwenhoek',
      x: 1081/2776,
      y: 667/2482,
   },
   {
      id: 'RNA World Hypothesis',
      x: 686/2776,
      y: 660/2482,
   },
   {
      id: 'Mitochondrial Matrix',
      x: 1206/2776,
      y: 670/2482,
   },
   {
      id: 'Carrier Protein',
      x: 557/2776,
      y: 667/2482,
   },
   {
      id: 'Plasmolysis',
      x: 880/2776,
      y: 676/2482,
   },

   {
      id: 'Fluid Mosaic Model',
      x: 1005/2776,
      y: 697/2482,
   },
   {
      id: 'Microfilament',
      x: 1142/2776,
      y: 702/2482,
   },
   {
      id: 'Golgi Faces',
      x: 1265/2776,
      y: 707/2482,
   },
   {
      id: 'Glycocalyx',
      x: 814/2776,
      y: 697/2482,
   },
   {
      id: 'Symport',
      x: 620/2776,
      y: 697/2482,
   },
   {
      id: 'Glycolipid',
      x: 748/2776,
      y: 700/2482,
   },
   {
      id: 'Resolution',
      x: 1080/2776,
      y: 737/2482,
   },
   {
      id: 'Peroxisome',
      x: 679/2776,
      y: 730/2482,
   },
   {
      id: 'Electrochemical Gradient',
      x: 488/2776,
      y: 730/2482,
   },
   {
      id: 'Diffusion',
      x: 559/2776,
      y: 735/2482,
   },
   {
      id: 'Exocytosis',
      x: 880/2776,
      y: 744/2482,
   },
   {
      id: 'Hypotonic',
      x: 812/2776,
      y: 768/2482,
   },
   {
      id: 'Cisternae',
      x: 1201/2776,
      y: 742/2482,
   },
   {
      id: 'Ionization Constant',
      x: 743/2776,
      y: 768/2482,
   },
   {
      id: 'Stroma',
      x: 623/2776,
      y: 770/2482,
   },
   {
      id: 'Intermediate Filament',
      x: 1140/2776,
      y: 775/2482,
   },
   {
      id: 'mRNA',
      x: 1517/2776,
      y: 770/2482,
   },
   {
      id: 'Ribozyme',
      x: 1411/2776,
      y: 801/2482,
   },
   {
      id: 'Nucleoid Region',
      x: 1078/2776,
      y: 806/2482,
   },
   {
      id: 'Endosymbiotic Theory',
      x: 684/2776,
      y: 803/2482,
   },
   {
      id: 'Transport Protein',
      x: 897/2776,
      y: 811/2482,
   },
   {
      id: 'Eukaryotes',
      x: 1201/2776,
      y: 812/2482,
   },
   {
      id: 'Granum',
      x: 561/2776,
      y: 806/2482,
   },
   {
      id: 'Thylakoid',
      x: 490/2776,
      y: 801/2482,
   },
   {
      id: 'Dynamic Equilibrium',
      x: 776/2776,
      y: 827/2482,
   },
   {
      id: 'Nuclear Envelope',
      x: 1272/2776,
      y: 811/2482,
   },
   {
      id: 'Antiport',
      x: 823/2776,
      y: 841/2482,
   },
   {
      id: 'Mitochondria',
      x: 963/2776,
      y: 839/2482,
   },
   {
      id: 'Contrast',
      x: 840/2776,
      y: 853/2482,
   },
   {
      id: 'Fimbriae',
      x: 1140/2776,
      y: 844/2482,
   },
   {
      id: 'Golgi Apparatus',
      x: 1029/2776,
      y: 860/2482,
   },
   {
      id: 'Active Transport',
      x: 455/2776,
      y: 860/2482,
   },
   {
      id: 'Receptor-mediated endocytosis',
      x: 525/2776,
      y: 865/2482,
   },
   {
      id: 'Food Vacoules',
      x: 717/2776,
      y: 867/2482,
   },
   {
      id: ' (Psi)',//need to paste in psi
      x: 906/2776,
      y: 881/2482,
   },
   {
      id: 'Cristae',
      x: 783/2776,
      y: 898/2482,
   },
   {
      id: 'Endomembrane System',
      x: 1092/2776,
      y: 896/2482,
   },
   {
      id: 'Tonicity',
      x: 970/2776,
      y: 907/2482,
   },
   {
      id: 'Cotransport',
      x: 587/2776,
      y: 900/2482,
   },
   {
      id: 'Faciliatated Diffusion',
      x: 656/2776,
      y: 903/2482,
   },
   {
      id: 'Actin',
      x: 1180/2776,
      y: 900/2482,
   },
   {
      id: 'Sodium Potassium Pump',
      x: 849/2776,
      y: 922/2482,
   },
   {
      id: 'Motor Protein',
      x: 1036/2776,
      y: 936/2482,
   },
   {
      id: 'Membrane Potential',
      x: 913/2776,
      y: 950/2482,
   },
   {
      id: 'Histones',
      x: 1397/2776,
      y: 955/2482,
   },
   {
      id: 'Central Vacoule',
      x: 727/2776,
      y: 936/2482,
   },
   {
      id: 'Cytoskeleton',
      x: 1125/2776,
      y: 957/2482,
   },
   {
      id: 'Selective Permeability',
      x: 760/2776,
      y: 964/2482,
   },
   {
      id: 'Cilia',
      x: 979/2776,
      y: 979/2482,
   },
   {
      id: 'Chloroplast',
      x: 526/2776,
      y: 966/2482,
   },
   {
      id: 'Phagocytosis',
      x: 597/2776,
      y: 969/2482,
   },
   {
      id: 'Protocell',
      x: 668/2776,
      y: 976/2482,
   },
   {
      id: 'Turgidity',
      x: 856/2776,
      y: 922/2482,
   },
   {
      id: 'Proton Pump',
      x: 1057/2776,
      y: 1002/2482,
   },
   {
      id: 'Autophagy',
      x: 734/2776,
      y: 1004/2482,
   },
   {
      id: 'Glycoprotein',
      x: 920/2776,
      y: 1021/2482,
   },
   {
      id: 'Prokaryotes',
      x: 1187/2776,
      y: 1044/2482,
   },
   {
      id: 'Concentration Gradient',
      x: 627/2776,
      y: 1032/2482,
   },
   {
      id: 'Isotonic',
      x: 797/2776,
      y: 1035/2482,
   },
   {
      id: 'Peripheral Protein',
      x: 998/2776,
      y: 1047/2482,
   },
   {
      id: 'ATP',
      x: 696/2776,
      y: 1066/2482,
   },
   {
      id: 'Central Vacuole',
      x: 866/2776,
      y: 1063/2482,
   },
   {
      id: 'Organelle',
      x: 762/2776,
      y: 1094/2482,
   },
   {
      id: 'Flagella',
      x: 942/2776,
      y: 1089/2482,
   },
   {
      id: 'Cell',
      x: 875/2776,
      y: 1134/2482,
   },
   {
      id: 'Microtubule',
      x: 1026/2776,
      y: 1127/2482,
   },
   {
      id: 'Gated Channel',
      x: 710/2776,
      y: 1160/2482,
   },
   {
      id: 'Chromatin',
      x: 1350/2776,
      y: 1134/2482,
   },
   {
      id: 'Gap Junction',
      x: 1107/2776,
      y: 1160/2482,
   },
   {
      id: 'Extracellular Matrix',
      x: 963/2776,
      y: 1169/2482,
   },
   {
      id: 'Desmosome',
      x: 1033/2776,
      y: 1193/2482,
   },
   {
      id: 'Centrosome',
      x: 911/2776,
      y: 1219/2482,
   },
   {
      id: 'Chromosome',
      x: 1310/2776,
      y: 1221/2482,
   },
   {
      id: 'Tight Junction',
      x: 984/2776,
      y: 1238/2482,
   },
   {
      id: 'Centriole',
      x: 880/2776,
      y: 1279/2482,
   },
   {
      id: 'Exon',
      x: 1706/2776,
      y: 560/2482,
   },
   {
      id: 'Antiparallel',
      x: 1881/2776,
      y: 556/2482,
   },
   {
      id: 'Double Helix',
      x: 2039/2776,
      y: 570/2482,
   },
   {
      id: 'Lagging Strand',
      x: 1971/2776,
      y: 567/2482,
   },
   {
      id: 'tRNA',
      x: 1624/2776,
      y: 612/2482,
   },
   {
      id: 'Initiation',
      x: 1760/2776,
      y: 607/2482,
   },
   {
      id: 'Okazaki Fragment',
      x: 1838/2776,
      y: 612/2482,
   },
   {
      id: 'Transcription',
      x: 1916/2776,
      y: 619/2482,
   },
   {
      id: 'RNA Polymerase',
      x: 2004/2776,
      y: 629/2482,
   },
   {
      id: 'TATA Box',
      x: 2089/2776,
      y: 643/2482,
   },
   {
      id: 'RNA Splicing',
      x: 1586/2776,
      y: 674/2482,
   },
   {
      id: 'Alternative RNA Splicing',
      x: 1657/2776,
      y: 674/2482,
   },
   {
      id: 'Intron',
      x: 1725/2776,
      y: 677/2482,
   },
   {
      id: 'Charged tRNA',
      x: 1796/2776,
      y: 669/2482,
   },
   {
      id: 'Watson & Crick',
      x: 1871/2776,
      y: 671/2482,
   },
   {
      id: 'Enhacer',
      x: 1952/2776,
      y: 684/2482,
   },
   {
      id: 'Positive Gene Regulation',
      x: 2037/2776,
      y: 692/2482,
   },
   {
      id: 'DNA Polymerase',
      x: 2112/2776,
      y: 711/2482,
   },
   {
      id: 'Ribosomal Subunits',
      x: 1619/2776,
      y: 734/2482,
   },
   {
      id: 'Activator',
      x: 1690/2776,
      y: 737/2482,
   },
   {
      id: 'Aminoacyl-tRNA Synthetase',
      x: 1760/2776,
      y: 740/2482,
   },
   {
      id: 'Maselson & Stahl',
      x: 1829/2776,
      y: 730/2482,
   },
   {
      id: 'Primer',
      x: 1907/2776,
      y: 731/2482,
   },
   {
      id: 'Helicase',
      x: 1987/2776,
      y: 747/2482,
   },
   {
      id: 'Terminator',
      x: 2060/2776,
      y: 761/2482,
   },
   {
      id: 'Promoter',
      x: 2127/2776,
      y: 780/2482,
   },
   {
      id: 'Transcriptoin Initiation Complex',
      x: 1583/2776,
      y: 794/2482,
   },
   {
      id: 'Splicesosome',
      x: 1651/2776,
      y: 796/2482,
   },
   {
      id: 'Topoisomerase',
      x: 1725/2776,
      y: 801/2482,
   },
   {
      id: 'Mismatch Repair',
      x: 1794/2776,
      y: 803/2482,
   },
   {
      id: 'Rosalind Franklin',
      x: 1862/2776,
      y: 787/2482,
   },
   {
      id: 'Differential Gene Expression',
      x: 1936/2776,
      y: 796/2482,
   },
   {
      id: 'Semiconservative Model',
      x: 2011/2776,
      y: 808/2482,
   },
   {
      id: 'Corepressor',
      x: 2077/2776,
      y: 833/2482,
   },
   {
      id: 'Taq Polymerase',
      x: 2157/2776,
      y: 855/2482,
   },
   {
      id: 'Histone Acetylation',
      x: 1527/2776,
      y: 839/2482,
   },
   {
      id: 'Coding Strand',
      x: 1616/2776,
      y: 855/2482,
   },
   {
      id: 'Gene Cloning',
      x: 1687/2776,
      y: 860/2482,
   },
   {
      id: 'Template Strand',
      x: 1756/2776,
      y: 862/2482,
   },
   {
      id: 'Recombinant DNA',
      x: 1827/2776,
      y: 867/2482,
   },
   {
      id: 'Genome',
      x: 1893/2776,
      y: 848/2482,
   },
   {
      id: 'Transcription Unit',
      x: 1954/2776,
      y: 865/2482,
   },
   {
      id: 'Signal Peptide',
      x: 2027/2776,
      y: 881/2482,
   },
   {
      id: 'Replication Fork',
      x: 2096/2776,
      y: 903/2482,
   },
   {
      id: 'Translation Initiaion Complex',
      x: 1560/2776,
      y: 900/2482,
   },
   {
      id: 'Hershey & Chase',
      x: 2162/2776,
      y: 924/2482,
   },
   {
      id: 'Telomere',
      x: 1635/2776,
      y: 929/2482,
   },
   {
      id: 'DNA Profiling',
      x: 1709/2776,
      y: 929/2482,
   },
   {
      id: 'Leading Strand',
      x: 1902/2776,
      y: 917/2482,
   },
   {
      id: 'Primase',
      x: 1968/2776,
      y: 930/2482,
   },
   {
      id: 'Nuclease',
      x: 2039/2776,
      y: 952/2482,
   },
   {
      id: 'Polymerase Chain Reaction',
      x: 2107/2776,
      y: 973/2482,
   },
   {
      id: 'One-Gene One-Protein',
      x: 1543/2776,
      y: 966/2482,
   },
   {
      id: 'Central Dogma',
      x: 1919/2776,
      y: 982/2482,
   },
   {
      id: 'Telomerase',
      x: 1477/2776,
      y: 995/2482,
   },
   {
      id: 'Chargaff\'s Rule',
      x: 1673/2776,
      y: 986/2482,
   },
   {
      id: 'Restriction Fragment',
      x: 1987/2776,
      y: 998/2482,
   },
   {
      id: 'RNA Processing',
      x: 1602/2776,
      y: 1004/2482,
   },
   {
      id: 'Repressor',
      x: 1789/2776,
      y: 1009/2482,
   },
   {
      id: 'Protein',
      x: 1328/2776,
      y: 1002/2482,
   },
   {
      id: 'Substitution',
      x: 2176/2776,
      y: 996/2482,
   },
   {
      id: 'Junk DNA',
      x: 2056/2776,
      y: 1020/2482,
   },
   {
      id: 'Elongation',
      x: 1860/2776,
      y: 1021/2482,
   },
   {
      id: 'Gel Electrophoresis',
      x: 1933/2776,
      y: 1049/2482,
   },
   {
      id: 'Bacteriophage',
      x: 2122/2776,
      y: 1041/2482,
   },
   {
      id: 'Heterochromatin',
      x: 1539/2776,
      y: 1035/2482,
   },
   {
      id: 'Anticodon',
      x: 1723/2776,
      y: 1036/2482,
   },
   {
      id: 'Termination',
      x: 1652/2776,
      y: 1054/2482,
   },
   {
      id: 'Noncoding RNA',
      x: 1364/2776,
      y: 1061/2482,
   },
   {
      id: 'Chromosomal Theory of Inheritance',
      x: 1461/2776,
      y: 1062/2482,
   },
   {
      id: 'Signle Strand Binding Protein',
      x: 2001/2776,
      y: 1068/2482,
   },
   {
      id: 'Restriction Site',
      x: 2190/2776,
      y: 1064/2482,
   },
   {
      id: 'Operon',
      x: 1784/2776,
      y: 1080/2482,
   },
   {
      id: 'Euchromatin',
      x: 1588/2776,
      y: 1086/2482,
   },
   {
      id: 'Regulatory Gene',
      x: 2070/2776,
      y: 1089/2482,
   },
   {
      id: 'Feedback Inhibition',
      x: 1878/2776,
      y: 1089/2482,
   },
   {
      id: 'Triplet Code',
      x: 1701/2776,
      y: 1106/2482,
   },
   {
      id: 'Origin of Replication',
      x: 1517/2776,
      y: 1105/2482,
   },
   {
      id: 'Erwin Chargaff',
      x: 2136/2776,
      y: 1110/2482,
   },
   {
      id: 'Cloning Vector',
      x: 1940/2776,
      y: 1114/2482,
   },
   {
      id: 'RNA Interference',
      x: 1638/2776,
      y: 1134/2482,
   },
   {
      id: 'Locus',
      x: 1569/2776,
      y: 1143/2482,
   },
   {
      id: 'DNA Ligase',
      x: 1839/2776,
      y: 1136/2482,
   },
   {
      id: 'Purine',
      x: 1736/2776,
      y: 1143/2482,
   },
   {
      id: 'CRISPY-Cas9',
      x: 2015/2776,
      y: 1136/2482,
   },
   {
      id: 'DNA Replication',
      x: 1893/2776,
      y: 1158/2482,
   },
   {
      id: 'Plasmid',
      x: 2084/2776,
      y: 1156/2482,
   },
   {
      id: 'Thomas Hunt Morgan',
      x: 1498/2776,
      y: 1172/2482,
   },
   {
      id: 'Replication Bubble',
      x: 1959/2776,
      y: 1179/2482,
   },
   {
      id: 'Restriction Enzyme',
      x: 2228/2776,
      y: 1174/2482,
   },
   {
      id: 'Poly-A Tail',
      x: 1684/2776,
      y: 1181/2482,
   },
   {
      id: 'Histone Modification',
      x: 1619/2776,
      y: 1205/2482,
   },
   {
      id: 'Pyrimidine',
      x: 1841/2776,
      y: 1206/2482,
   },
   {
      id: 'Repressible Operon',
      x: 2302/2776,
      y: 1202/2482,
   },
   {
      id: 'Release Factor',
      x: 1550/2776,
      y: 1222/2482,
   },
   {
      id: 'Post-Translational Modification',
      x: 1772/2776,
      y: 1212/2482,
   },
   {
      id: 'Sticky End',
      x: 2098/2776,
      y: 1216/2482,
   },
   {
      id: 'DNA Cloning',
      x: 1900/2776,
      y: 1216/2482,
   },
   {
      id: 'Inducible Operon',
      x: 1975/2776,
      y: 1251/2482,
   },
   {
      id: 'Genetic Engineering',
      x: 2155/2776,
      y: 1266/2482,
   },
   {
      id: 'Mutagen',
      x: 1593/2776,
      y: 1272/2482,
   },
   {
      id: 'Epigenetics',
      x: 1723/2776,
      y: 1266/2482,
   },
   {
      id: 'Control Elements',
      x: 1801/2776,
      y: 1273/2482,
   },
   {
      id: 'Complementary',
      x: 1871/2776,
      y: 1278/2482,
   },
   {
      id: 'Frederick Griffith',
      x: 1657/2776,
      y: 1258/2482,
   },
   {
      id: 'Genetic Code',
      x: 1938/2776,
      y: 1302/2482,
   },
   {
      id: 'DNA Sequencing',
      x: 2013/2776,
      y: 1305/2482,
   },
   {
      id: 'Base Pairing',
      x: 2082/2776,
      y: 1290/2482,
   },
   {
      id: 'Translation',
      x: 1616/2776,
      y: 1336/2482,
   },
   {
      id: 'Codon',
      x: 1690/2776,
      y: 1323/2482,
   },
   {
      id: 'DNA Methylation',
      x: 1758/2776,
      y: 1331/2482,
   },
   {
      id: 'Operator',
      x: 1827/2776,
      y: 1337/2482,
   },
   {
      id: 'Point Mutation',
      x: 1895/2776,
      y: 1354/2482,
   },
   {
      id: 'Missense Mutation',
      x: 1968/2776,
      y: 1361/2482,
   },
   {
      id: 'Insertion-Deletion',
      x: 2034/2776,
      y: 1377/2482,
   },
   {
      id: 'Transcription Factor',
      x: 1503/2776,
      y: 1370/2482,
   },
   {
      id: 'Silent Mutation',
      x: 1782/2776,
      y: 1395/2482,
   },
   {
      id: 'Inducer',
      x: 1848/2776,
      y: 1409/2482,
   },
   {
      id: 'Wobble',
      x: 1961/2776,
      y: 1429/2482,
   },
   {
      id: 'Transformation',
      x: 1548/2776,
      y: 1487/2482,
   },
   {
      id: 'Gene Expression',
      x: 1654/2776,
      y: 1453/2482,
   },
   {
      id: 'Reading Frame',
      x: 1803/2776,
      y: 1460/2482,
   },
   {
      id: 'Nucleotide',
      x: 1900/2776,
      y: 1461/2482,
   },
   {
      id: 'Frameshit Mutation',
      x: 2011/2776,
      y: 1480/2482,
   },
   {
      id: 'Mutation',
      x: 1850/2776,
      y: 1451/2482,
   },
   {
      id: 'Telophase',
      x: 1168/2776,
      y: 1225/2482,
   },
   {
      id: 'Prometaphase',
      x: 1121/2776,
      y: 1273/2482,
   },
   {
      id: 'Mitotic Spindle',
      x: 1187/2776,
      y: 1292/2482,
   },
   {
      id: 'Regulator',
      x: 1253/2776,
      y: 1321/2482,
   },
   {
      id: 'Mitosis',
      x: 1012/2776,
      y: 1328/2482,
   },
   {
      id: 'cAMP',
      x: 1399/2776,
      y: 1337/2482,
   },
   {
      id: 'Spindle Fiber',
      x: 1092/2776,
      y: 1344/2482,
   },
   {
      id: 'Phosphorylation',
      x: 1173/2776,
      y: 1358/2482,
   },
   {
      id: 'Interstitial Fluid',
      x: 918/2776,
      y: 1363/2482,
   },
   {
      id: 'Kinetochore',
      x: 1303/2776,
      y: 1370/2482,
   },
   {
      id: 'Somatic Cell',
      x: 854/2776,
      y: 1394/2482,
   },
   {
      id: 'Ligand',
      x: 686/2776,
      y: 1426/2482,
   },
   {
      id: 'Binary Fission',
      x: 1041/2776,
      y: 1391/2482,
   },
   {
      id: 'Adenylyl Cyclase',
      x: 974/2776,
      y: 1408/2482,
   },
   {
      id: 'Prophase',
      x: 1236/2776,
      y: 1288/2482,
   },
   {
      id: 'Sister Chromatid',
      x: 1107/2776,
      y: 1413/2482,
   },
   {
      id: 'Daughter Cell',
      x: 795/2776,
      y: 1426/2482,
   },
   {
      id: 'Anaphase',
      x: 1175/2776,
      y: 1479/2482,
   },
   {
      id: 'Transduction',
      x: 727/2776,
      y: 1481/2482,
   },
   {
      id: 'Mitotic Phase',
      x: 859/2776,
      y: 1474/2482,
   },
   {
      id: 'Negative Feedback',
      x: 797/2776,
      y: 1496/2482,
   },
   {
      id: 'Phosphorylation Cascade',
      x: 998/2776,
      y: 1472/2482,
   },
   {
      id: 'Metaphase',
      x: 1236/2776,
      y: 1461/2482,
   },
   {
      id: 'Dephoshporylation',
      x: 1286/2776,
      y: 1513/2482,
   },
   {
      id: 'G2 Phase',
      x: 932/2776,
      y: 1480/2482,
   },
   {
      id: 'Interphase',
      x: 1066/2776,
      y: 1489/2482,
   },
   {
      id: 'Centromere',
      x: 1142/2776,
      y: 1514/2482,
   },
   {
      id: 'Response',
      x: 627/2776,
      y: 1544/2482,
   },
   {
      id: 'Cytokinesis',
      x: 686/2776,
      y: 1588/2482,
   },
   {
      id: 'Metaphase Plate',
      x: 1371/2776,
      y: 1510/2482,
   },
   {
      id: 'Thermoregulation',
      x: 1210/2776,
      y: 1527/2482,
   },
   {
      id: 'Reproductive Cloning',
      x: 887/2776,
      y: 1537/2482,
   },
   {
      id: 'Reception',
      x: 1010/2776,
      y: 1541/2482,
   },
   {
      id: 'Fever',
      x: 823/2776,
      y: 1560/2482,
   },
   {
      id: 'G Protein-Coupled Receptor',
      x: 755/2776,
      y: 1572/2482,
   },
   {
      id: 'Endothermy',
      x: 948/2776,
      y: 1570/2482,
   },
   {
      id: 'Differentiation',
      x: 1331/2776,
      y: 1565/2482,
   },
   {
      id: 'Zygote',
      x: 1616/2776,
      y: 1000/2482,
   },
   {
      id: 'Set Point',
      x: 1252/2776,
      y: 1580/2482,
   },
   {
      id: 'Cell Plate',
      x: 875/2776,
      y: 1604/2482,
   },
   {
      id: 'Stimulus',
      x: 800/2776,
      y: 1625/2482,
   },
   {
      id: 'Paracrine Signaling',
      x: 937/2776,
      y: 1638/2482,
   },
   {
      id: 'Endocrine Signlaing',
      x: 1378/2776,
      y: 1617/2482,
   },
   {
      id: 'Cytoplasmic Determinant',
      x: 1305/2776,
      y: 1629/2482,
   },
   {
      id: 'Ligand-Gated Ion Channel',
      x: 731/2776,
      y: 1636/2482,
   },
   {
      id: 'Signal Transduction Pathway',
      x: 644/2776,
      y: 1669/2482,
   },
   {
      id: 'Homeotic Gene',
      x: 1236/2776,
      y: 1643/2482,
   },
   {
      id: 'Kinase',
      x: 854/2776,
      y: 1672/2482,
   },
   {
      id: 'Positive Feedback',
      x: 774/2776,
      y: 1689/2482,
   },
   {
      id: 'G Protein',
      x: 705/2776,
      y: 1703/2482,
   },
   {
      id: 'Amplification',
      x: 1050/2776,
      y: 1378/2482,
   },
   {
      id: 'Induced Pluripotent Stem Cells',
      x: 1437/2776,
      y: 1672/2482,
   },
   {
      id: 'Multipotent',
      x: 1366/2776,
      y: 1689/2482,
   },
   {
      id: 'G0 Phase',
      x: 981/2776,
      y: 1690/2482,
   },
   {
      id: 'Conformer',
      x: 913/2776,
      y: 1707/2482,
   },
   {
      id: 'Vasodilation',
      x: 1295/2776,
      y: 1702/2482,
   },
   {
      id: 'Cleavage Furrow',
      x: 828/2776,
      y: 1735/2482,
   },
   {
      id: 'Morphogenesis',
      x: 1024/2776,
      y: 1749/2482,
   },
   {
      id: 'Apoptosis',
      x: 750/2776,
      y: 1756/2482,
   },
   {
      id: 'Plasmodesma',
      x: 956/2776,
      y: 1760/2482,
   },
   {
      id: 'Synaptic Signaling',
      x: 1090/2776,
      y: 1735/2482,
   },
   {
      id: 'Phosphatase',
      x: 887/2776,
      y: 1768/2482,
   },
   {
      id: 'Therapeutic Cloning',
      x: 1159/2776,
      y: 1724/2482,
   },
   {
      id: 'Second Messenger',
      x: 1229/2776,
      y: 1714/2482,
   },
   {
      id: 'Relay Molecule',
      x: 802/2776,
      y: 1801/2482,
   },
   {
      id: 'Sensor',
      x: 861/2776,
      y: 1838/2482,
   },
   {
      id: 'G1 Phase',
      x: 932/2776,
      y: 1827/2482,
   },
   {
      id: 'Evo-Devo',
      x: 1000/2776,
      y: 1813/2482,
   },
   {
      id: 'Growth Factor',
      x: 1066/2776,
      y: 1802/2482,
   },
   {
      id: 'Density-Dependent Inhibition',
      x: 1135/2776,
      y: 1792/2482,
   },
   {
      id: 'Vasoconstriction',
      x: 1203/2776,
      y: 1776/2482,
   },
   {
      id: 'Nervous System',
      x: 1274/2776,
      y: 1767/2482,
   },
   {
      id: 'Ras Gene',
      x: 1343/2776,
      y: 1754/2482,
   },
   {
      id: 'Metastasis',
      x: 1413/2776,
      y: 1740/2482,
   },
   {
      id: 'Cancer',
      x: 1543/2776,
      y: 1783/2482,
   },
   {
      id: 'Homeostasis',
      x: 906/2776,
      y: 1891/2482,
   },
   {
      id: 'Organ System',
      x: 977/2776,
      y: 1880/2482,
   },
   {
      id: 'Cell Cycle Control System',
      x: 1043/2776,
      y: 1862/2482,
   },
   {
      id: 'S Phase',
      x: 1111/2776,
      y: 1859/2482,
   },
   {
      id: 'Restriction Point',
      x: 1182/2776,
      y: 1846/2482,
   },
   {
      id: 'Maternal Effect Gene',
      x: 1251/2776,
      y: 1832/2482,
   },
   {
      id: 'Pluripotent',
      x: 1319/2776,
      y: 1821/2482,
   },
   {
      id: 'Tumor Supressor Gene',
      x: 1390/2776,
      y: 1810/2482,
   },
   {
      id: 'Hormone',
      x: 1456/2776,
      y: 1800/2482,
   },
   {
      id: 'Pattern Formation',
      x: 951/2776,
      y: 1944/2482,
   },
   {
      id: 'Benign',
      x: 1019/2776,
      y: 1932/2482,
   },
   {
      id: 'Embryo',
      x: 1088/2776,
      y: 1923/2482,
   },
   {
      id: 'Proto-Oncogene',
      x: 1156/2776,
      y: 1908/2482,
   },
   {
      id: 'Malignant',
      x: 1228/2776,
      y: 1899/2482,
   },
   {
      id: 'Totipotent',
      x: 1295/2776,
      y: 1885/2482,
   },
   {
      id: 'Oncogene',
      x: 1366/2776,
      y: 1873/2482,
   },
   {
      id: 'Stem Cell',
      x: 1447/2776,
      y: 1868/2482,
   },
   {
      id: 'Organ',
      x: 1081/2776,
      y: 1991/2482,
   },
   {
      id: 'Checkpoint',
      x: 1199/2776,
      y: 1965/2482,
   },
   {
      id: 'Tumor',
      x: 1147/2776,
      y: 2011/2482,
   },
   {
      id: 'Gland',
      x: 1272/2776,
      y: 1965/2482,
   },
   {
      id: 'p53 Gene',
      x: 1336/2776,
      y: 1944/2482,
   },
   {
      id: 'Endocrine System',
      x: 1406/2776,
      y: 1930/2482,
   },
  ]
  const imageWidth = 2776; 
  const imageHeight = 2482;

  return (
    <main>
      <Navbar />
      <div style={{ width: '100vw', height: '100vh' }}>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit
        limitToBounds={false}
      >
        <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: imageWidth, height: imageHeight }}>
            <img src="/pib.png" alt="Biology Map" style={{ width: imageWidth, height: imageHeight }}/>
            {hotspots.map((spot) => (
              <a href="/note">
                <button
                  key={spot.id}
                  onClick={() => setTerm(spot.id)}
                  style={{
                    position: "absolute",
                    left: `${spot.x * imageWidth}px`,
                    top: `${spot.y * imageHeight}px`,
                    transform: "translate(-50%, -50%)",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "red",
                    border: "none",
                    cursor: "pointer",
                  }}
                  title={spot.id}
                />
              </a>
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
    </main>
  );

  
  /*return (
    <div>
      <Link
        href="/note"
        onClick={() => setTerm("mRNA")}
      >
        {term} Abiotic Symthesis
      </Link>
    </div>
  );*/
}



/*
//this wraps the image (according to chatgpt)
function GraphViewer() { //- make sure the pib is in the correct directory
  return (
    <TransformWrapper>
      <TransformComponent>
        <img src="/pib.png" />     
      </TransformComponent>
    </TransformWrapper>
  );
}
//the /note might have to change to a set term or something idrk
const spots = [
  {x:100, y: 150, radius:20, page: "/note"},

];

function GraphWithHotspots() {
  const term = pageState().term;
  const setTerm = pageState((state) => state.setTerm);

  return(
    <ImageHotspots
      src="/pib.png"
      hotspots={spots}
      onClick={(spot) => setTerm("mRNA")}
    />
  );
}

function HotspotCircle({ coords, page}) {
  const[x, y, r] = coords;
  return (
    <Link href={page}>
      <div>
        style={{
          position: 'absolute',
          left: x-r,
          top: y-r, 
          width: r*2;
          height: r*2,
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      </div>
    </Link>
  )
}
*/