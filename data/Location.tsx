import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';

export default function Location({children}: {children: string}) {
  const setTerm = pageState((state) => state.setTerm);

  switch(children) {
    case "Abiotic Synthesis":
      return (<Link href="/note" onClick={()=>setTerm("Abiotic Synthesis")}>Abiotic Synthesis</Link>);
    case "Abiotic":
      return (<Link href="/note" onClick={()=>setTerm("Abiotic")}>Abiotic</Link>);
    case "Actin": 
      return (<Link href="/note" onClick={()=>setTerm("Actin")}>Actin</Link>);
    case "Activator": 
      return (<Link href="/note" onClick={()=>setTerm("Activator")}>Activator</Link>);
    case "Active Transport": 
      return (<Link href="/note" onClick={()=>setTerm("Active Transport")}>Active Transport</Link>);
    case "Adenylyl Cyclase": 
      return (<Link href="/note" onClick={()=>setTerm("Adenylyl Cyclase")}>Adenylyl Cyclase</Link>);
    case "Alternative RNA Splicing": 
      return (<Link href="/note" onClick={()=>setTerm("Alternative RNA Splicing")}>Alternative RNA Splicing</Link>); 
    case "Aminoacyl-tRNA Synthetase": 
      return (<Link href="/note" onClick={()=>setTerm("Aminoacyl-tRNA Synthetase")}>Aminoacyl-tRNA Synthetase</Link>);
    case "Amphipathic": 
      return (<Link href="/note" onClick={()=>setTerm("Amphipathic")}>Amphipathic</Link>);
    case "Amplification": 
      return (<Link href="/note" onClick={()=>setTerm("Amplification")}>Amplification</Link>);
    case "Anaphase": 
      return (<Link href="/note" onClick={()=>setTerm("Anaphase")}>Anaphase</Link>);
    case "Anticodon": 
      return (<Link href="/note" onClick={()=>setTerm("Anticodon")}>Anticodon</Link>);
    case "Antiparallel": 
      return (<Link href="/note" onClick={()=>setTerm("Antiparallel")}>Antiparallel</Link>);
    case "Antiport": 
      return (<Link href="/note" onClick={()=>setTerm("Antiport")}>Antiport</Link>);
    case "Antoni Van Leeuwenhoek": 
      return (<Link href="/note" onClick={()=>setTerm("Antoni Van Leeuwenhoek")}>Antoni Van Leeuwenhoek</Link>);
    case "Apoptosis": 
      return (<Link href="/note" onClick={()=>setTerm("Apoptosis")}>Apoptosis</Link>);
    case "Aquaporin": 
      return (<Link href="/note" onClick={()=>setTerm("Aquaporin")}>Aquaporin</Link>);
    case "ATP": 
      return (<Link href="/note" onClick={()=>setTerm("ATP")}>ATP</Link>);
    case "Autophagy": 
      return (<Link href="/note" onClick={()=>setTerm("Autophagy")}>Autophagy</Link>);
    case "Bacteriophage": 
      return (<Link href="/note" onClick={()=>setTerm("Bacteriophage")}>Bacteriophage</Link>);
    case "Base Pairing": 
      return (<Link href="/note" onClick={()=>setTerm("Base Pairing")}>Base Pairing</Link>);
    case "Benign": 
      return (<Link href="/note" onClick={()=>setTerm("Benign")}>Benign</Link>);
    case "Binary Fission": 
      return (<Link href="/note" onClick={()=>setTerm("Binary Fission")}>Binary Fission</Link>);
    case "cAMP": 
      return (<Link href="/note" onClick={()=>setTerm("cAMP")}>cAMP</Link>);
    case "Cancer": 
      return (<Link href="/note" onClick={()=>setTerm("Cancer")}>Cancer</Link>);
    case "Carrier Protein": 
      return (<Link href="/note" onClick={()=>setTerm("Carrier Protein")}>Carrier Protein</Link>);
    case "Cell": 
      return (<Link href="/note" onClick={()=>setTerm("Cell")}>Cell</Link>);
    case "Cell Cycle Control System": 
      return (<Link href="/note" onClick={()=>setTerm("Cell Cycle Control System")}>Cell Cycle Control System</Link>);
    case "Cell Plate": 
      return (<Link href="/note" onClick={()=>setTerm("Cell Plate")}>Cell Plate</Link>);
    case "Cell Wall": 
      return (<Link href="/note" onClick={()=>setTerm("Cell Wall")}>Cell Wall</Link>);
    case "Central Dogma": 
      return (<Link href="/note" onClick={()=>setTerm("Central Dogma")}>Central Dogma</Link>);
    case "Central Vacuole": 
      return (<Link href="/note" onClick={()=>setTerm("Central Vacuole")}>Central Vacuole</Link>);
    case "Centriole": 
      return (<Link href="/note" onClick={()=>setTerm("Centriole")}>Centriole</Link>)
    case "Centromere": 
      return (<Link href="/note" onClick={()=>setTerm("Centromere")}>Centromere</Link>);
    case "Centrosome": 
      return (<Link href="/note" onClick={()=>setTerm("Centrosome")}>Centrosome</Link>);
    case "Channel Protein": 
      return (<Link href="/note" onClick={()=>setTerm("Channel Protein")}>Channel Protein</Link>);
    case "Chargaff's Rule": 
      return (<Link href="/note" onClick={()=>setTerm("Chargaff's Rule")}>Chargaff's Rule</Link>);
    case "Charged tRNA": 
      return (<Link href="/note" onClick={()=>setTerm("Charged tRNA")}>Charged tRNA</Link>);
    case "Checkpoint": 
      return (<Link href="/note" onClick={()=>setTerm("Checkpoint")}>Checkpoint</Link>);
    case "Chloroplast": 
      return (<Link href="/note" onClick={()=>setTerm("Chloroplast")}>Chloroplast</Link>);
    case "Cholesterol": 
      return (<Link href="/note" onClick={()=>setTerm("Cholesterol")}>Cholesterol</Link>);
    case "Chromatin": 
      return (<Link href="/note" onClick={()=>setTerm("Chromatin")}>Chromatin</Link>);
    case "Chromosomal Theory of Inheritance": 
      return (<Link href="/note" onClick={()=>setTerm("Chromosomal Theory of Inheritance")}>Chromosomal Theory of Inheritance</Link>);
    case "Chromosome": 
      return (<Link href="/note" onClick={()=>setTerm("Chromosome")}>Chromosome</Link>);
    case "Cilia": 
      return (<Link href="/note" onClick={()=>setTerm("Cilia")}>Cilia</Link>);
    case "Cisternae": 
      return (<Link href="/note" onClick={()=>setTerm("Cisternae")}>Cisternae</Link>);
    case "Cleavage Furrow": 
      return (<Link href="/note" onClick={()=>setTerm("Cleavage Furrow")}>Cleavage Furrow</Link>);
    case "Clong Vector": 
      return (<Link href="/note" onClick={()=>setTerm("Clong Vector")}>Clong Vector</Link>);
    case "Coding Strand": 
      return (<Link href="/note" onClick={()=>setTerm("Coding Strand")}>Coding Strand</Link>);
    case "Codon": 
      return (<Link href="/note" onClick={()=>setTerm("Codon")}>Codon</Link>);
    case "Complementary": 
      return (<Link href="/note" onClick={()=>setTerm("Complementary")}>Complementary</Link>);
    case "Concentration Gradient": 
      return (<Link href="/note" onClick={()=>setTerm("Concentration Gradient")}>Concentration Gradient</Link>);
    case "Conformer": 
      return (<Link href="/note" onClick={()=>setTerm("Conformer")}>Conformer</Link>);
    case "Contractile Vacuole": 
      return (<Link href="/note" onClick={()=>setTerm("Contractile Vacuole")}>Contractile Vacuole</Link>);
    case "Contrast": 
      return (<Link href="/note" onClick={()=>setTerm("Contrast")}>Contrast</Link>);
    case "Control Elements": 
      return (<Link href="/note" onClick={()=>setTerm("Control Elements")}>Control Elements</Link>);
    case "Corepressor": 
      return (<Link href="/note" onClick={()=>setTerm("Corepressor")}>Corepressor</Link>);
    case "Cotransport": 
      return (<Link href="/note" onClick={()=>setTerm("Cotransport")}>Cotransport</Link>);
    case "CRISPR-Cas9": 
      return (<Link href="/note" onClick={()=>setTerm("CRISPR-Cas9")}>CRISPR-Cas9</Link>);
    case "Cristae": 
      return (<Link href="/note" onClick={()=>setTerm("Cristae")}>Cristae</Link>);
    case "Cyotkinesis": 
      return (<Link href="/note" onClick={()=>setTerm("Cyotkinesis")}>Cyotkinesis</Link>);
    case "Cytoplasm": 
      return (<Link href="/note" onClick={()=>setTerm("Cytoplasm")}>Cytoplasm</Link>);
    case "Cytoplasmic Determinant": 
      return (<Link href="/note" onClick={()=>setTerm("Cytoplasmic Determinant")}>Cytoplasmic Determinant</Link>);
    case "Cytoskeleton": 
      return (<Link href="/note" onClick={()=>setTerm("Cytoskeleton")}>Cytoskeleton</Link>);
    case "Cytosol": 
      return (<Link href="/note" onClick={()=>setTerm("Cytosol")}>Cytosol</Link>);
    case "Daughter Cell": 
      return (<Link href="/note" onClick={()=>setTerm("Daughter Cell")}>Daughter Cell</Link>);
    case "Density-Dependent Inhibition": 
      return (<Link href="/note" onClick={()=>setTerm("Density-Dependent Inhibition")}>Density-Dependent Inhibition</Link>);
    case "Dephosphorylation": 
      return (<Link href="/note" onClick={()=>setTerm("Dephosphorylation")}>Dephosphorylation</Link>);
    case "Desmosome": 
      return (<Link href="/note" onClick={()=>setTerm("Desmosome")}>Desmosome</Link>);
    case "Differential Gene Expression": 
      return (<Link href="/note" onClick={()=>setTerm("Differential Gene Expression")}>Differential Gene Expression</Link>);
    case "Differentiation": 
      return (<Link href="/note" onClick={()=>setTerm("Differentiation")}>Differentiation</Link>);
    case "Diffusion": 
      return (<Link href="/note" onClick={()=>setTerm("Diffusion")}>Diffusion</Link>);
    case "DNA Cloning": 
      return (<Link href="/note" onClick={()=>setTerm("DNA Cloning")}>DNA Cloning</Link>);
    case "DNA Ligase": 
      return (<Link href="/note" onClick={()=>setTerm("DNA Ligase")}>DNA Ligase</Link>);
    case "DNA Methylation": 
      return (<Link href="/note" onClick={()=>setTerm("DNA Methylation")}>DNA Methylation</Link>);
    case "DNA Polymerase": 
      return (<Link href="/note" onClick={()=>setTerm("DNA Polymerase")}>DNA Polymerase</Link>);
    case "DNA Profiling": 
      return (<Link href="/note" onClick={()=>setTerm("DNA Profiling")}>DNA Profiling</Link>);
    case "DNA Replication": 
      return (<Link href="/note" onClick={()=>setTerm("DNA Replication")}>DNA Replication</Link>);
    case "DNA Sequencing": 
      return (<Link href="/note" onClick={()=>setTerm("DNA Sequencing")}>DNA Sequencing</Link>);
    case "Double Helix": 
      return (<Link href="/note" onClick={()=>setTerm("Double Helix")}>Double Helix</Link>);
    case "Dynamic Equilibrium": 
      return (<Link href="/note" onClick={()=>setTerm("Dynamic Equilibrium")}>Dynamic Equilibrium</Link>);
    case "Electrochemical Gradient": 
      return (<Link href="/note" onClick={()=>setTerm("Electrochemical Gradient")}>Electrochemical Gradient</Link>);;
    case "Electron Microscope": 
      return (<Link href="/note" onClick={()=>setTerm("Electron Microscope")}>Electron Microscope</Link>);
    case "Elongation": 
      return (<Link href="/note" onClick={()=>setTerm("Elongation")}>Elongation</Link>);
    case "Embryo": 
      return (<Link href="/note" onClick={()=>setTerm("Embryo")}>Embryo</Link>);
    case "Endocrine Signaling": 
      return (<Link href="/note" onClick={()=>setTerm("Endocrine Signaling")}>Endocrine Signaling</Link>);
    case "Endocine System": 
      return (<Link href="/note" onClick={()=>setTerm("Endocine System")}>Endocine System</Link>);
    case "Endocytosis": 
      return (<Link href="/note" onClick={()=>setTerm("Endocytosis")}>Endocytosis</Link>);
    case "Endomembrane System": 
      return (<Link href="/note" onClick={()=>setTerm("Endomembrane System")}>Endomembrane System</Link>);
    case "Endoplasmic Reticulum": 
      return (<Link href="/note" onClick={()=>setTerm("Endoplasmic Reticulum")}>Endoplasmic Reticulum</Link>);
    case "Endosymbiotic Theory": 
      return (<Link href="/note" onClick={()=>setTerm("Endosymbiotic Theory")}>Endosymbiotic Theory</Link>);
    case "Endothermy": 
      return (<Link href="/note" onClick={()=>setTerm("Endothermy")}>Endothermy</Link>);
    case "Enhancer": 
      return (<Link href="/note" onClick={()=>setTerm("Enhancer")}>Enhancer</Link>);
    case "Epigenetics": 
      return (<Link href="/note" onClick={()=>setTerm("Epigenetics")}>Epigenetics</Link>);
    case "Erwin Chargaff": 
      return (<Link href="/note" onClick={()=>setTerm("Erwin Chargaff")}>Erwin Chargaff</Link>);
    case "Euchromatin": 
      return (<Link href="/note" onClick={()=>setTerm("Euchromatin")}>Euchromatin</Link>);
    case "Eukaryotes": 
      return (<Link href="/note" onClick={()=>setTerm("Eukaryotes")}>Eukaryotes</Link>);
    case "Evo-Devo": 
      return (<Link href="/note" onClick={()=>setTerm("Evo-Devo")}>Evo-Devo</Link>);
    case "Exocytosis": 
      return (<Link href="/note" onClick={()=>setTerm("Exocytosis")}>Exocytosis</Link>);
    case "Exon": 
      return (<Link href="/note" onClick={()=>setTerm("Exon")}>Exon</Link>);
    case "Extracellular Matrix": 
      return (<Link href="/note" onClick={()=>setTerm("Extracellular Matrix")}>Extracellular Matrix</Link>);
    case "Facilitated Diffusion": 
      return (<Link href="/note" onClick={()=>setTerm("Facilitated Diffusion")}>Facilitated Diffusion</Link>);
    case "Feedback Inhibition": 
      return (<Link href="/note" onClick={()=>setTerm("Feedback Inhibition")}>Feedback Inhibition</Link>);
    case "Fever": 
      return (<Link href="/note" onClick={()=>setTerm("Fever")}>Fever</Link>);
    case "Fimbriae": 
      return (<Link href="/note" onClick={()=>setTerm("Fimbriae")}>Fimbriae</Link>);
    case "Flaccid": 
      return (<Link href="/note" onClick={()=>setTerm("Flaccid")}>Flaccid</Link>);
    case "Flagella": 
      return (<Link href="/note" onClick={()=>setTerm("Flagella")}>Flagella</Link>);
    case "Fluid Mosaic Model": 
      return (<Link href="/note" onClick={()=>setTerm("Fluid Mosaic Model")}>Fluid Mosaic Model</Link>);
    case "Food Vacuoles": 
      return (<Link href="/note" onClick={()=>setTerm("Food Vacuoles")}>Food Vacuoles</Link>);
    case "Frameshift Mutation": 
      return (<Link href="/note" onClick={()=>setTerm("Frameshift Mutation")}>Frameshift Mutation</Link>);
    case "Frederick Griffith": 
      return (<Link href="/note" onClick={()=>setTerm("Frederick Griffith")}>Frederick Griffith</Link>);
    case "Free Water": 
      return (<Link href="/note" onClick={()=>setTerm("Free Water")}>Free Water</Link>);
    case "G Protein": 
      return (<Link href="/note" onClick={()=>setTerm("G Protein")}>G Protein</Link>);
    case "G Protein-Coupled Receptor": 
      return (<Link href="/note" onClick={()=>setTerm("G Protein-Coupled Receptor")}>G Protein-Coupled Receptor</Link>);
    case "G0 Phase": 
      return (<Link href="/note" onClick={()=>setTerm("G0 Phase")}>G0 Phase</Link>);
    case "G1 Phase": 
      return (<Link href="/note" onClick={()=>setTerm("G1 Phase")}>G1 Phase</Link>);
    case "G2 Phase": 
      return (<Link href="/note" onClick={()=>setTerm("G2 Phase")}>G2 Phase</Link>);
    case "Gap Junction": 
      return (<Link href="/note" onClick={()=>setTerm("Gap Junction")}>Gap Junction</Link>);
    case "Gated Channel": 
      return (<Link href="/note" onClick={()=>setTerm("Gated Channel")}>Gated Channel</Link>);
    case "Gel Electrophoresis": 
      return (<Link href="/note" onClick={()=>setTerm("Gel Electrophoresis")}>Gel Electrophoresis</Link>);
    case "Gene Cloning": 
      return (<Link href="/note" onClick={()=>setTerm("Gene Cloning")}>Gene Cloning</Link>);
    case "Gene Expression": 
      return (<Link href="/note" onClick={()=>setTerm("Gene Expression")}>Gene Expression</Link>);
    case "Genetic Code": 
      return (<Link href="/note" onClick={()=>setTerm("Genetic Code")}>Genetic Code</Link>);
    case "Genetic Engineering": 
      return (<Link href="/note" onClick={()=>setTerm("Genetic Engineering")}>Genetic Engineering</Link>);
    case "Genome": 
      return (<Link href="/note" onClick={()=>setTerm("Genome")}>Genome</Link>);
    case "Gland": 
      return (<Link href="/note" onClick={()=>setTerm("Gland")}>Gland</Link>);
    case "Glycocalyx": 
      return (<Link href="/note" onClick={()=>setTerm("Glycocalyx")}>Glycocalyx</Link>);
    case "Glycolipid": 
      return (<Link href="/note" onClick={()=>setTerm("Glycolipid")}>Glycolipid</Link>);
    case "Glycoprotein": 
      return (<Link href="/note" onClick={()=>setTerm("Glycoprotein")}>Glycoprotein</Link>);
    case "Golgi Apparatus": 
      return (<Link href="/note" onClick={()=>setTerm("Golgi Apparatus")}>Golgi Apparatus</Link>);;
    case "Golgi Faces": 
      return (<Link href="/note" onClick={()=>setTerm("Golgi Faces")}>Golgi Faces</Link>);
    case "Granum": 
      return (<Link href="/note" onClick={()=>setTerm("Granum")}>Granum</Link>);
    case "Growth Factor": 
      return (<Link href="/note" onClick={()=>setTerm("Growth Factor")}>Growth Factor</Link>);
    case "Helicase": 
      return (<Link href="/note" onClick={()=>setTerm("Helicase")}>Helicase</Link>);
    case "Hershey & Chase": 
      return (<Link href="/note" onClick={()=>setTerm("Hershey & Chase")}>Hershey & Chase</Link>);
    case "Heterochromatin": 
      return (<Link href="/note" onClick={()=>setTerm("Heterochromatin")}>Heterochromatin</Link>);
    case "Histone Acetylation": 
      return (<Link href="/note" onClick={()=>setTerm("Histone Acetylation")}>Histone Acetylation</Link>);
    case "Histone Modification": 
      return (<Link href="/note" onClick={()=>setTerm("Histone Modification")}>Histone Modification</Link>);
    case "Histones": 
      return (<Link href="/note" onClick={()=>setTerm("Histones")}>Histones</Link>);
    case "Homeostasis": 
      return (<Link href="/note" onClick={()=>setTerm("Homeostasis")}>Homeostasis</Link>);
    case "Homeotic Gene": 
      return (<Link href="/note" onClick={()=>setTerm("Homeotic Gene")}>Homeotic Gene</Link>);
    case "Hormone": 
      return (<Link href="/note" onClick={()=>setTerm("Hormone")}>Hormone</Link>);
    case "Hydrophilic": 
      return (<Link href="/note" onClick={()=>setTerm("Hydrophilic")}>Hydrophilic</Link>);
    case "Hydrophobic": 
      return (<Link href="/note" onClick={()=>setTerm("Hydrophobic")}>Hydrophobic</Link>);
    case "Hypertonic": 
      return (<Link href="/note" onClick={()=>setTerm("Hypertonic")}>Hypertonic</Link>);
    case "Hypotonic": 
      return (<Link href="/note" onClick={()=>setTerm("Hypotonic")}>Hypotonic</Link>);
    case "Induced Pluripotent Stem Cells": 
      return (<Link href="/note" onClick={()=>setTerm("Induced Pluripotent Stem Cells")}>Induced Pluripotent Stem Cells</Link>);
    case "Inducer": 
      return (<Link href="/note" onClick={()=>setTerm("Inducer")}>Inducer</Link>);
    case "Inducible Operon": 
      return (<Link href="/note" onClick={()=>setTerm("Inducible Operon")}>Inducible Operon</Link>);
    case "Initiation": 
      return (<Link href="/note" onClick={()=>setTerm("Initiation")}>Initiation</Link>);
    case "Insertion-Deletion": 
      return (<Link href="/note" onClick={()=>setTerm("Insertion-Deletion")}>Insertion-Deletion</Link>);
    case "Interal Protein": 
      return (<Link href="/note" onClick={()=>setTerm("Interal Protein")}>Interal Protein</Link>);
    case "Integrin": 
      return (<Link href="/note" onClick={()=>setTerm("Integrin")}>Integrin</Link>);
    case "Intermediate Filament": 
      return (<Link href="/note" onClick={()=>setTerm("Intermediate Filament")}>Intermediate Filament</Link>);
    case "Interphase": 
      return (<Link href="/note" onClick={()=>setTerm("Interphase")}>Interphase</Link>);
    case "Interstitial Fluid": 
      return (<Link href="/note" onClick={()=>setTerm("Interstitial Fluid")}>Interstitial Fluid</Link>);
    case "Intron": 
      return (<Link href="/note" onClick={()=>setTerm("Intron")}>Intron</Link>);
    case "Ion Channel": 
      return (<Link href="/note" onClick={()=>setTerm("Ion Channel")}>Ion Channel</Link>);
    case "Ionization Cosntant": 
      return (<Link href="/note" onClick={()=>setTerm("Ionization Cosntant")}>Ionization Cosntant</Link>);
    case "Isotonic": 
      return (<Link href="/note" onClick={()=>setTerm("Isotonic")}>Isotonic</Link>);
    case "Junk DNA": 
      return (<Link href="/note" onClick={()=>setTerm("Junk DNA")}>Junk DNA</Link>);
    case "Kinase": 
      return (<Link href="/note" onClick={()=>setTerm("Kinase")}>Kinase</Link>);
    case "Kinetochore": 
      return (<Link href="/note" onClick={()=>setTerm("Kinetochore")}>Kinetochore</Link>);
    case "Lagging Strand": 
      return (<Link href="/note" onClick={()=>setTerm("Lagging Strand")}>Lagging Strand</Link>);
    case "Leading Strand": 
      return (<Link href="/note" onClick={()=>setTerm("Leading Strand")}>Leading Strand</Link>);
    case "Ligand": 
      return (<Link href="/note" onClick={()=>setTerm("Ligand")}>Ligand</Link>);
    case "Ligand-Gated Ion Channel": 
      return (<Link href="/note" onClick={()=>setTerm("Ligand-Gated Ion Channel")}>Ligand-Gated Ion Channel</Link>);
    case "Light Microscope": 
      return (<Link href="/note" onClick={()=>setTerm("Light Microscope")}>Light Microscope</Link>);
    case "Locus": 
      return (<Link href="/note" onClick={()=>setTerm("Locus")}>Locus</Link>);
    case "Lumen": 
      return (<Link href="/note" onClick={()=>setTerm("Lumen")}>Lumen</Link>);
    case "Lysosome": 
      return (<Link href="/note" onClick={()=>setTerm("Lysosome")}>Lysosome</Link>);
    case "Magnification": 
      return (<Link href="/note" onClick={()=>setTerm("Magnification")}>Magnification</Link>);
    case "Malignant": 
      return (<Link href="/note" onClick={()=>setTerm("Malignant")}>Malignant</Link>);
    case "Maselson & Stahl": 
      return (<Link href="/note" onClick={()=>setTerm("Maselson & Stahl")}>Maselson & Stahl</Link>);
    case "Maternal Effect Gene": 
      return (<Link href="/note" onClick={()=>setTerm("Maternal Effect Gene")}>Maternal Effect Gene</Link>);
    case "Membrane Potential": 
      return (<Link href="/note" onClick={()=>setTerm("Membrane Potential")}>Membrane Potential</Link>);
    case "Membrane Sidedness": 
      return (<Link href="/note" onClick={()=>setTerm("Membrane Sidedness")}>Membrane Sidedness</Link>);
    case "Metaphase": 
      return (<Link href="/note" onClick={()=>setTerm("Metaphase")}>Metaphase</Link>);
    case "Metaphase Plate": 
      return (<Link href="/note" onClick={()=>setTerm("Metaphase Plate")}>Metaphase Plate</Link>);
    case "Metastasis": 
      return (<Link href="/note" onClick={()=>setTerm("Metastasis")}>Metastasis</Link>);
    case "Microfilament": 
      return (<Link href="/note" onClick={()=>setTerm("Microfilament")}>Microfilament</Link>);
    case "Microtubule": 
      return (<Link href="/note" onClick={()=>setTerm("Microtubule")}>Microtubule</Link>);
    case "Miller-Urey Experiment": 
      return (<Link href="/note" onClick={()=>setTerm("Miller-Urey Experiment")}>Miller-Urey Experiment</Link>);
    case "Mismatch Repair": 
      return (<Link href="/note" onClick={()=>setTerm("Mismatch Repair")}>Mismatch Repair</Link>);
    case "Missense Mutation": 
      return (<Link href="/note" onClick={()=>setTerm("Missense Mutation")}>Missense Mutation</Link>);
    case "Mitochondria": 
      return (<Link href="/note" onClick={()=>setTerm("Mitochondria")}>Mitochondria</Link>);
    case "Mitochondrial Matrix": 
      return (<Link href="/note" onClick={()=>setTerm("Mitochondrial Matrix")}>Mitochondrial Matrix</Link>);
    case "Mitosis": 
      return (<Link href="/note" onClick={()=>setTerm("Mitosis")}>Mitosis</Link>);
    case "Mitotic Phase": 
      return (<Link href="/note" onClick={()=>setTerm("Mitotic Phase")}>Mitotic Phase</Link>);
    case "Mitotic Spindle": 
      return (<Link href="/note" onClick={()=>setTerm("Mitotic Spindle")}>Mitotic Spindle</Link>);
    case "Morphogensis": 
      return (<Link href="/note" onClick={()=>setTerm("Morphogensis")}>Morphogensis</Link>);
    case "Motor Protein": 
      return (<Link href="/note" onClick={()=>setTerm("Motor Protein")}>Motor Protein</Link>);
    case "mRNA": 
      return (<Link href="/note" onClick={()=>setTerm("mRNA")}>mRNA</Link>);
    case "Multipotent": 
      return (<Link href="/note" onClick={()=>setTerm("Multipotent")}>Multipotent</Link>);
    case "Mutagen": 
      return (<Link href="/note" onClick={()=>setTerm("Mutagen")}>Mutagen</Link>);
    case "Mutation": 
      return (<Link href="/note" onClick={()=>setTerm("Mutation")}>Mutation</Link>);
    case "Negative Feedback": 
      return (<Link href="/note" onClick={()=>setTerm("Negative Feedback")}>Negative Feedback</Link>);
    case "Nervous System": 
      return (<Link href="/note" onClick={()=>setTerm("Nervous System")}>Nervous System</Link>);
    case "Noncoding RNA": 
      return (<Link href="/note" onClick={()=>setTerm("Noncoding RNA")}>Noncoding RNA</Link>);
    case "Nuclear Envelope": 
      return (<Link href="/note" onClick={()=>setTerm("Nuclear Envelope")}>Nuclear Envelope</Link>);
    case "Nuclear Pore Complexes": 
      return (<Link href="/note" onClick={()=>setTerm("Nuclear Pore Complexes")}>Nuclear Pore Complexes</Link>);
    case "Nuclease": 
      return (<Link href="/note" onClick={()=>setTerm("Nuclease")}>Nuclease</Link>);
    case "Nucleoid Region": 
      return (<Link href="/note" onClick={()=>setTerm("Nucleoid Region")}>Nucleoid Region</Link>);
    case "Nucleolus": 
      return (<Link href="/note" onClick={()=>setTerm("Nucleolus")}>Nucleolus</Link>);
    case "Nucleotide": 
      return (<Link href="/note" onClick={()=>setTerm("Nucleotide")}>Nucleotide</Link>);
    case "Nucleus": 
      return (<Link href="/note" onClick={()=>setTerm("Nucleus")}>Nucleus</Link>);
    case "Objective Lens": 
      return (<Link href="/note" onClick={()=>setTerm("Objective Lens")}>Objective Lens</Link>);
    case "Okazaki Fragment": 
      return (<Link href="/note" onClick={()=>setTerm("Okazaki Fragment")}>Okazaki Fragment</Link>);
    case "Oncogene": 
      return (<Link href="/note" onClick={()=>setTerm("Oncogene")}>Oncogene</Link>);
    case "One-Gene One-Protein": 
      return (<Link href="/note" onClick={()=>setTerm("One-Gene One-Protein")}>One-Gene One-Protein</Link>);
    case "Oparin & Haldane": 
      return (<Link href="/note" onClick={()=>setTerm("Oparin & Haldane")}>Oparin & Haldane</Link>);
    case "Operator": 
      return (<Link href="/note" onClick={()=>setTerm("Operator")}>Operator</Link>);
    case "Operon": 
      return (<Link href="/note" onClick={()=>setTerm("Operon")}>Operon</Link>);
    case "Organ": 
      return (<Link href="/note" onClick={()=>setTerm("Organ")}>Organ</Link>);
    case "Organ System": 
      return (<Link href="/note" onClick={()=>setTerm("Organ System")}>Organ System</Link>);
    case "Organelle": 
      return (<Link href="/note" onClick={()=>setTerm("Organelle")}>Organelle</Link>);
    case "Origin of Replication": 
      return (<Link href="/note" onClick={()=>setTerm("Origin of Replication")}>Origin of Replication</Link>);
    case "Osmosis": 
      return (<Link href="/note" onClick={()=>setTerm("Osmosis")}>Osmosis</Link>);
    case "p53 Gene": 
      return (<Link href="/note" onClick={()=>setTerm("p53 Gene")}>p53 Gene</Link>);
    case "Paracrine Signaling": 
      return (<Link href="/note" onClick={()=>setTerm("Paracrine Signaling")}>Paracrine Signaling</Link>);
    case "Passive Transport": 
      return (<Link href="/note" onClick={()=>setTerm("Passive Transport")}>Passive Transport</Link>);
    case "Pattern Formation": 
      return (<Link href="/note" onClick={()=>setTerm("Pattern Formation")}>Pattern Formation</Link>);
    case "Peripheral Protein": 
      return (<Link href="/note" onClick={()=>setTerm("Peripheral Protein")}>Peripheral Protein</Link>);
    case "Peroxisome": 
      return (<Link href="/note" onClick={()=>setTerm("Peroxisome")}>Peroxisome</Link>);
    case "Phagocytosis": 
      return (<Link href="/note" onClick={()=>setTerm("Phagocytosis")}>Phagocytosis</Link>);
    case "Phosphatase": 
      return (<Link href="/note" onClick={()=>setTerm("Phosphatase")}>Phosphatase</Link>);
    case "Phospholipid": 
      return (<Link href="/note" onClick={()=>setTerm("Phospholipid")}>Phospholipid</Link>);
    case "Phosphorylation": 
      return (<Link href="/note" onClick={()=>setTerm("Phosphorylation")}>Phosphorylation</Link>);
    case "Phosphorylation Cascade": 
      return (<Link href="/note" onClick={()=>setTerm("Phosphorylation Cascade")}>Phosphorylation Cascade</Link>);
    case "Pinocytosis": 
      return (<Link href="/note" onClick={()=>setTerm("Pinocytosis")}>Pinocytosis</Link>);
    case "Plasma Membrane": 
      return (<Link href="/note" onClick={()=>setTerm("Plasma Membrane")}>Plasma Membrane</Link>);
    case "Plasmid": 
      return (<Link href="/note" onClick={()=>setTerm("Plasmid")}>Plasmid</Link>);
    case "Plasmodesma": 
      return (<Link href="/note" onClick={()=>setTerm("Plasmodesma")}>Plasmodesma</Link>);
    case "Plasmodesmata": 
      return (<Link href="/note" onClick={()=>setTerm("Plasmodesmata")}>Plasmodesmata</Link>);
    case "Plasmolysis": 
      return (<Link href="/note" onClick={()=>setTerm("Plasmolysis")}>Plasmolysis</Link>);
    case "Pluripotent": 
      return (<Link href="/note" onClick={()=>setTerm("Pluripotent")}>Pluripotent</Link>);
    case "Point Mutation": 
      return (<Link href="/note" onClick={()=>setTerm("Point Mutation")}>Point Mutation</Link>);
    case "Poly-A Tail": 
      return (<Link href="/note" onClick={()=>setTerm("Poly-A Tail")}>Poly-A Tail</Link>);
    case "Polymerase Chain Reaction": 
      return (<Link href="/note" onClick={()=>setTerm("Polymerase Chain Reaction")}>Polymerase Chain Reaction</Link>);
    case "Pore Complex": 
      return (<Link href="/note" onClick={()=>setTerm("Pore Complex")}>Pore Complex</Link>);
    case "Positive Feedback": 
      return (<Link href="/note" onClick={()=>setTerm("Positive Feedback")}>Positive Feedback</Link>);
    case "Positive Gene Regulation": 
      return (<Link href="/note" onClick={()=>setTerm("Positive Gene Regulation")}>Positive Gene Regulation</Link>);
    case "Post-Translational Modification": 
      return (<Link href="/note" onClick={()=>setTerm("Post-Translational Modification")}>Post-Translational Modification</Link>);
    case "Primase": 
      return (<Link href="/note" onClick={()=>setTerm("Primase")}>Primase</Link>);
    case "Primer": 
      return (<Link href="/note" onClick={()=>setTerm("Primer")}>Primer</Link>);
    case "Prometaphase": 
      return (<Link href="/note" onClick={()=>setTerm("Prometaphase")}>Prometaphase</Link>);
    case "Promoter": 
      return (<Link href="/note" onClick={()=>setTerm("Promoter")}>Promoter</Link>);
    case "Prophase": 
      return (<Link href="/note" onClick={()=>setTerm("Prophase")}>Prophase</Link>);
    case "Protein": 
      return (<Link href="/note" onClick={()=>setTerm("Protein")}>Protein</Link>);
    case "Proto-Oncogene": 
      return (<Link href="/note" onClick={()=>setTerm("Proto-Oncogene")}>Proto-Oncogene</Link>);
    case "Protocell": 
      return (<Link href="/note" onClick={()=>setTerm("Protocell")}>Protocell</Link>);
    case "Proton Pump": 
      return (<Link href="/note" onClick={()=>setTerm("Proton Pump")}>Proton Pump</Link>);
    case "Purine": 
      return (<Link href="/note" onClick={()=>setTerm("Purine")}>Purine</Link>);
    case "Pyrimidine": 
      return (<Link href="/note" onClick={()=>setTerm("Pyrimidine")}>Pyrimidine</Link>);
    case "Ras Gene": 
      return (<Link href="/note" onClick={()=>setTerm("Ras Gene")}>Ras Gene</Link>);
    case "Reading Frame": 
      return (<Link href="/note" onClick={()=>setTerm("Reading Frame")}>Reading Frame</Link>);
    case "Reception": 
      return (<Link href="/note" onClick={()=>setTerm("Reception")}>Reception</Link>);
    case "Receptor-Mediated Endocytosis": 
      return (<Link href="/note" onClick={()=>setTerm("Receptor-Mediated Endocytosis")}>Receptor-Mediated Endocytosis</Link>);
    case "Recombinant DNA": 
      return (<Link href="/note" onClick={()=>setTerm("Recombinant DNA")}>Recombinant DNA</Link>);
    case "Regulator": 
      return (<Link href="/note" onClick={()=>setTerm("Regulator")}>Regulator</Link>);
    case "Regulatory Gene": 
      return (<Link href="/note" onClick={()=>setTerm("Regulatory Gene")}>Regulatory Gene</Link>);
    case "Relay Molecule": 
      return (<Link href="/note" onClick={()=>setTerm("Relay Molecule")}>Relay Molecule</Link>);
    case "Release Factor": 
      return (<Link href="/note" onClick={()=>setTerm("Release Factor")}>Release Factor</Link>);
    case "Replication Bubble": 
      return (<Link href="/note" onClick={()=>setTerm("Replication Bubble")}>Replication Bubble</Link>);
    case "Replication Fork": 
      return (<Link href="/note" onClick={()=>setTerm("Replication Fork")}>Replication Fork</Link>);
    case "Repressible Operon": 
      return (<Link href="/note" onClick={()=>setTerm("Repressible Operon")}>Repressible Operon</Link>);
    case "Repressor": 
      return (<Link href="/note" onClick={()=>setTerm("Repressor")}>Repressor</Link>);
    case "Reproductive Clonin": 
      return (<Link href="/note" onClick={()=>setTerm("Reproductive Clonin")}>Reproductive Clonin</Link>);
    case "Resolution": 
      return (<Link href="/note" onClick={()=>setTerm("Resolution")}>Resolution</Link>);
    case "Response": 
      return (<Link href="/note" onClick={()=>setTerm("Response")}>Response</Link>);
    case "Restriction Enzyme": 
      return (<Link href="/note" onClick={()=>setTerm("Restriction Enzyme")}>Restriction Enzyme</Link>);
    case "Restriction Fragment": 
      return (<Link href="/note" onClick={()=>setTerm("Restriction Fragment")}>Restriction Fragment</Link>);
    case "Restriction Point": 
      return (<Link href="/note" onClick={()=>setTerm("Restriction Point")}>Restriction Point</Link>);
    case "Restriction Site": 
      return (<Link href="/note" onClick={()=>setTerm("Restriction Site")}>Restriction Site</Link>);
    case "Ribosomal RNA": 
      return (<Link href="/note" onClick={()=>setTerm("Ribosomal RNA")}>Ribosomal RNA</Link>);
    case "Ribosomal Subunits": 
      return (<Link href="/note" onClick={()=>setTerm("Ribosomal Subunits")}>Ribosomal Subunits</Link>);
    case "Ribosome": 
      return (<Link href="/note" onClick={()=>setTerm("Ribosome")}>Ribosome</Link>);
    case "Ribozyme": 
      return (<Link href="/note" onClick={()=>setTerm("Ribozyme")}>Ribozyme</Link>);
    case "RNA Interference": 
      return (<Link href="/note" onClick={()=>setTerm("RNA Interference")}>RNA Interference</Link>);
    case "RNA Polymerase": 
      return (<Link href="/note" onClick={()=>setTerm("RNA Polymerase")}>RNA Polymerase</Link>);
    case "RNA Processing": 
      return (<Link href="/note" onClick={()=>setTerm("RNA Processing")}>RNA Processing</Link>);
    case "RNA Splicing": 
      return (<Link href="/note" onClick={()=>setTerm("RNA Splicing")}>RNA Splicing</Link>);
    case "RNA World Hypothesis": 
      return (<Link href="/note" onClick={()=>setTerm("RNA World Hypothesis")}>RNA World Hypothesis</Link>);
    case "Robert Hook": 
      return (<Link href="/note" onClick={()=>setTerm("Robert Hook")}>Robert Hook</Link>);
    case "Rosalind Franklin": 
      return (<Link href="/note" onClick={()=>setTerm("Rosalind Franklin")}>Rosalind Franklin</Link>);
    case "S Phase": 
      return (<Link href="/note" onClick={()=>setTerm("S Phase")}>S Phase</Link>);
    case "Scale Bars": 
      return (<Link href="/note" onClick={()=>setTerm("Scale Bars")}>Scale Bars</Link>);
    case "Scanning Electron Microscope": 
      return (<Link href="/note" onClick={()=>setTerm("Scanning Electron Microscope")}>Scanning Electron Microscope</Link>);
    case "Second Messenger": 
      return (<Link href="/note" onClick={()=>setTerm("Second Messenger")}>Second Messenger</Link>);
    case "Selective Permeability": 
      return (<Link href="/note" onClick={()=>setTerm("Selective Permeability")}>Selective Permeability</Link>);
    case "Semiconservative Model": 
      return (<Link href="/note" onClick={()=>setTerm("Semiconservative Model")}>Semiconservative Model</Link>);
    case "Sensor": 
      return (<Link href="/note" onClick={()=>setTerm("Sensor")}>Sensor</Link>);
    case "Set Point": 
      return (<Link href="/note" onClick={()=>setTerm("Set Point")}>Set Point</Link>);
    case "Signal Peptide": 
      return (<Link href="/note" onClick={()=>setTerm("Signal Peptide")}>Signal Peptide</Link>);
    case "Signal Transduction Pathway": 
      return (<Link href="/note" onClick={()=>setTerm("Signal Transduction Pathway")}>Signal Transduction Pathway</Link>);
    case "Silent Mutation": 
      return (<Link href="/note" onClick={()=>setTerm("Silent Mutation")}>Silent Mutation</Link>);
    case "Single Stranded Binding Protein":
      return (<Link href="/note" onClick={()=>setTerm("Single Stranded Binding Protein")}>Single Stranded Binding Protein</Link>);
    case "Sister Chromatid": 
      return (<Link href="/note" onClick={()=>setTerm("Sister Chromatid")}>Sister Chromatid</Link>);
    case "Sodium Potassium Pump": 
      return (<Link href="/note" onClick={()=>setTerm("Sodium Potassium Pump")}>Sodium Potassium Pump</Link>);
    case "Somatic Cell": 
      return (<Link href="/note" onClick={()=>setTerm("Somatic Cell")}>Somatic Cell</Link>);
    case "Spindle Fiber": 
      return (<Link href="/note" onClick={()=>setTerm("Spindle Fiber")}>Spindle Fiber</Link>);
    case "Spliceosome": 
      return (<Link href="/note" onClick={()=>setTerm("Spliceosome")}>Spliceosome</Link>);
    case "Stem Cell": 
      return (<Link href="/note" onClick={()=>setTerm("Stem Cell")}>Stem Cell</Link>);
    case "Sticky End": 
      return (<Link href="/note" onClick={()=>setTerm("Sticky End")}>Sticky End</Link>);
    case "Stimulus": 
      return (<Link href="/note" onClick={()=>setTerm("Stimulus")}>Stimulus</Link>);
    case "Stroma": 
      return (<Link href="/note" onClick={()=>setTerm("Stroma")}>Stroma</Link>);
    case "Substitution": 
      return (<Link href="/note" onClick={()=>setTerm("Substitution")}>Substitution</Link>);
    case "Surface Area to Volume": 
      return (<Link href="/note" onClick={()=>setTerm("Surface Area to Volume")}>Surface Area to Volume</Link>);
    case "Symport": 
      return (<Link href="/note" onClick={()=>setTerm("Symport")}>Symport</Link>);
    case "Synaptic Signaling": 
      return (<Link href="/note" onClick={()=>setTerm("Synaptic Signaling")}>Synaptic Signaling</Link>);
    case "Taq Polymerase": 
      return (<Link href="/note" onClick={()=>setTerm("Taq Polymerase")}>Taq Polymerase</Link>);
    case "TATA Box": 
      return (<Link href="/note" onClick={()=>setTerm("TATA Box")}>TATA Box</Link>);
    case "Telomerase": 
      return (<Link href="/note" onClick={()=>setTerm("Telomerase")}>Telomerase</Link>);
    case "Telomere": 
      return (<Link href="/note" onClick={()=>setTerm("Telomere")}>Telomere</Link>);
    case "Telophase": 
      return (<Link href="/note" onClick={()=>setTerm("Telophase")}>Telophase</Link>);
    case "Template Strand": 
      return (<Link href="/note" onClick={()=>setTerm("Template Strand")}>Template Strand</Link>);
    case "Termination": 
      return (<Link href="/note" onClick={()=>setTerm("Termination")}>Termination</Link>);
    case "Terminator": 
      return (<Link href="/note" onClick={()=>setTerm("Terminator")}>Terminator</Link>);
    case "Therapeutic Cloning": 
      return (<Link href="/note" onClick={()=>setTerm("Therapeutic Cloning")}>Therapeutic Cloning</Link>);
    case "Thermoregulation": 
      return (<Link href="/note" onClick={()=>setTerm("Thermoregulation")}>Thermoregulation</Link>);
    case "Thomas Hunt Morgan": 
      return (<Link href="/note" onClick={()=>setTerm("Thomas Hunt Morgan")}>Thomas Hunt Morgan</Link>);
    case "Thylakoid": 
      return (<Link href="/note" onClick={()=>setTerm("Thylakoid")}>Thylakoid</Link>);
    case "Tight Junction": 
      return (<Link href="/note" onClick={()=>setTerm("Tight Junction")}>Tight Junction</Link>);
    case "Tonicity": 
      return (<Link href="/note" onClick={()=>setTerm("Tonicity")}>Tonicity</Link>);
    case "Topoisomerase": 
      return (<Link href="/note" onClick={()=>setTerm("Topoisomerase")}>Topoisomerase</Link>);
    case "Totipotent": 
      return (<Link href="/note" onClick={()=>setTerm("Totipotent")}>Totipotent</Link>);
    case "Transcription": 
      return (<Link href="/note" onClick={()=>setTerm("Transcription")}>Transcription</Link>);
    case "Transcription Factor": 
      return (<Link href="/note" onClick={()=>setTerm("Transcription Factor")}>Transcription Factor</Link>);
    case "Transcriptoin Initiation Complex": 
      return (<Link href="/note" onClick={()=>setTerm("Transcriptoin Initiation Complex")}>Transcriptoin Initiation Complex</Link>);
    case "Transcription Unit": 
      return (<Link href="/note" onClick={()=>setTerm("Transcription Unit")}>Transcription Unit</Link>);
    case "Transduction": 
      return (<Link href="/note" onClick={()=>setTerm("Transduction")}>Transduction</Link>);
    case "Transformation": 
      return (<Link href="/note" onClick={()=>setTerm("Transformation")}>Transformation</Link>);
    case "Translation": 
      return (<Link href="/note" onClick={()=>setTerm("Translation")}>Translation</Link>);
    case "Translation Initiation Complex": 
      return (<Link href="/note" onClick={()=>setTerm("Translation Initiation Complex")}>Translation Initiation Complex</Link>);
    case "Transmission Electron Microscope": 
      return (<Link href="/note" onClick={()=>setTerm("Transmission Electron Microscope")}>Transmission Electron Microscope</Link>);
    case "Transport Protein": 
      return (<Link href="/note" onClick={()=>setTerm("Transport Protein")}>Transport Protein</Link>);
    case "Transport Vesicle": 
      return (<Link href="/note" onClick={()=>setTerm("Transport Vesicle")}>Transport Vesicle</Link>);
    case "Triplet Code": 
      return (<Link href="/note" onClick={()=>setTerm("Triplet Code")}>Triplet Code</Link>);
    case "tRNA": 
      return (<Link href="/note" onClick={()=>setTerm("tRNA")}>tRNA</Link>);
    case "Tumor": 
      return (<Link href="/note" onClick={()=>setTerm("Tumor")}>Tumor</Link>);
    case "Tumor Supressor Gene": 
      return (<Link href="/note" onClick={()=>setTerm("Tumor Supressor Gene")}>Tumor Supressor Gene</Link>);
    case "Turgidity": 
      return (<Link href="/note" onClick={()=>setTerm("Turgidity")}>Turgidity</Link>);
    case "Vacuole": 
      return (<Link href="/note" onClick={()=>setTerm("Vacuole")}>Vacuole</Link>);
    case "Vasoconstriction": 
      return (<Link href="/note" onClick={()=>setTerm("Vasoconstriction")}>Vasoconstriction</Link>);
    case "Vasodilation": 
      return (<Link href="/note" onClick={()=>setTerm("Vasodilation")}>Vasodilation</Link>);
    case "Vesicle": 
      return (<Link href="/note" onClick={()=>setTerm("Vesicle")}>Vesicle</Link>);
    case "Voltage": 
     return (<Link href="/note" onClick={()=>setTerm("Voltage")}>Voltage</Link>);
      case "Water Potential": 
      return (<Link href="/note" onClick={()=>setTerm("Water Potential")}>Water Potential</Link>);
    case "Watson & Crick": 
      return (<Link href="/note" onClick={()=>setTerm("Watson & Crick")}>Watson & Crick</Link>);
    case "Wobble": 
      return (<Link href="/note" onClick={()=>setTerm("Wobble")}>Wobble</Link>);
    case "Zygote": 
      return (<Link href="/note" onClick={()=>setTerm("Zygote")}>Zygote</Link>);
    case "Ψ (Psi)": 
      return (<Link href="/note" onClick={()=>setTerm("Ψ (Psi)")}>Ψ (Psi)</Link>);
    }
}
