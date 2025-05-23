import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';
import Location from "./Location"


export default function Connections({children}: {children: string}) {
  const setTerm = pageState((state) => state.setTerm);

  switch(children) {
    case "Abiotic Synthesis":
      return (<Location>Abiotic</Location>);
    case "Abiotic":
      return;
    case "Actin": 
      return (<Location>Protein</Location>);
    case "Activator": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Protein</Location>
          <Location>Transcription</Location>
        </div>
      );
    case "Active Transport": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Plasma Membrane</Location>
          <Location>Carrier Protein</Location>
          <Location>ATP</Location>
          <Location>Concentration Gradient</Location>
          <Location>Electrochemical Gradient</Location>
        </div>
      );
    case "Adenylyl Cyclase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>ATP</Location>
          <Location>cAMP</Location>
          <Location>Transduction</Location>
        </div>
      );
    case "Alternative RNA Splicing": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>mRNA</Location>
          <Location>Exon</Location>
        </div>
      );
    case "Aminoacyl-tRNA Synthetase": 
      return (<Location>tRNA</Location>);
    case "Amphipathic": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Hydrophilic</Location>
          <Location>Hydrophobic</Location>
          <Location>Phospholipid</Location>
        </div>
      );
    case "Amplification": 
      return (<Location>Phosphorylation Cascade</Location>);
    case "Anaphase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
          <Location>Chromosome</Location>
        </div>
      );
    case "Anticodon": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Nucleotide</Location>
          <Location>tRNA</Location>
          <Location>Codon</Location>
          <Location>mRNA</Location>
        </div>
      );
    case "Antiparallel": 
      return (<Location>Double Helix</Location>);
    case "Antiport": 
      return (<Location>Active Transport</Location>);
    case "Antoni Van Leeuwenhoek": 
      return;
    case "Apoptosis": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Response</Location>
          <Location>Signal Transduction Pathway</Location>
        </div>
      );
    case "Aquaporin": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Channel Protein</Location>
          <Location>Plasma Membrane</Location>
          <Location>Osmosis</Location>
        </div>
      );
    case "ATP": 
      return;
    case "Autophagy": 
      return (<Location>Cell</Location>);
    case "Bacteriophage": 
      return;
    case "Base Pairing": 
      return;
    case "Benign": 
      return (<Location>Tumor</Location>);
    case "Binary Fission": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Prokaryotes</Location>
          <Location>Daughter Cell</Location>
        </div>
      );
    case "cAMP": 
      return;
    case "Cancer": 
      return (<Location>Mutation</Location>);
    case "Carrier Protein": 
      return (<Location>Plasma Membrane</Location>);
    case "Cell": 
      return;
    case "Cell Cycle Control System": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Checkpoint</Location>
        </div>
      );
    case "Cell Plate": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Cytokinesis</Location>
          <Location>Daughter Cell</Location>
        </div>
      );
    case "Cell Wall": 
      return (<Location>Plasma Membrane</Location>);
    case "Central Dogma": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>DNA</Location>
          <Location>RNA</Location>
          <Location>Protein</Location>
        </div>
      );
    case "Central Vacuole": 
      return (<Location>Vacuole</Location>);
    case "Centriole": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Microtubule</Location>
          <Location>Centrosome</Location>
          <Location>Sister Chromatid</Location>
          <Location>Spindle Fiber</Location>
          <Location>Mitosis</Location>
        </div>
      );
    case "Centromere": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Sister Chromatid</Location>
          <Location>Spindle Fiber</Location>
          <Location>Mitosis</Location>
        </div>
      );
    case "Centrosome": 
      return (<Location>Microtubule</Location>);
    case "Channel Protein": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Hydrophilic</Location>
          <Location>Plasma Membrane</Location>
        </div>
      );
    case "Chargaff's Rule": 
      return;
    case "Charged tRNA": 
      return (<Location>tRNA</Location>);
    case "Checkpoint": 
      return;
    case "Chloroplast": 
      return (<Location>Organelle</Location>);
    case "Cholesterol": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Plasma Membrane</Location>
          <Location>Phospholipid</Location>
        </div>
      );
    case "Chromatin": 
      return ( <Location>Chromosome</Location>);
    case "Chromosomal Theory of Inheritance": 
      return (<Location>Chromosome</Location>);
    case "Chromosome": 
      return (<Location>DNA</Location>);
    case "Cilia": 
      return (<Location>Microtubule</Location>);
    case "Cisternae": 
      return (<Location>Endoplasmic Reticulum</Location>);
    case "Cleavage Furrow": 
      return (<Location>Cytokinesis</Location>);
    case "Clong Vector": 
      return;
    case "Coding Strand": 
      return (<Location>mRNA</Location>);
    case "Codon": 
      return (<Location>Nucleotide</Location>);
    case "Complementary": 
      return (<Location>Nucleotide</Location>);
    case "Concentration Gradient": 
      return;
    case "Conformer": 
      return;
    case "Contractile Vacuole": 
      return;
    case "Contrast": 
      return;
    case "Control Elements": 
      return (<Location>Gene Expression</Location>);
    case "Corepressor": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Transcription</Location>
          <Location>Repressor</Location>
        </div>
      );
    case "Cotransport": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Diffusion</Location>
          <Location>Concentration Gradient</Location>
        </div>
      );
    case "CRISPR-Cas9": 
      return;
    case "Cristae": 
      return (<Location>Mitochondria</Location>);
    case "Cyotkinesis": 
      return (<Location>Daughter Cell</Location>);
    case "Cytoplasm": 
      return (<Location>Plasma Membrane</Location>);
    case "Cytoplasmic Determinant": 
      return;
    case "Cytoskeleton": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Microtubule</Location>
          <Location>Microfilament</Location>
          <Location>Intermediate Filament</Location>
        </div>
      );
    case "Cytosol": 
      return (<Location>Cytoplasm</Location>);
    case "Daughter Cell": 
      return;
    case "Density-Dependent Inhibition": 
      return;
    case "Dephosphorylation": 
      return;
    case "Desmosome": 
      return;
    case "Differential Gene Expression": 
      return;
    case "Differentiation": 
      return;
    case "Diffusion": 
      return;
    case "DNA Cloning": 
      return;
    case "DNA Ligase": 
      return;
    case "DNA Methylation": 
      return (<Location>Gene Expression</Location>);
    case "DNA Polymerase": 
      return;
    case "DNA Profiling": 
      return;
    case "DNA Replication": 
      return;
    case "DNA Sequencing": 
      return (<Location>Nucleotide</Location>);
    case "Double Helix": 
      return (<Location>Antiparallel</Location>);
    case "Dynamic Equilibrium": 
      return;
    case "Electrochemical Gradient": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Concentration Gradient</Location>
          <Location>Plasma Membrane</Location>
        </div>
      );
    case "Electron Microscope": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Transmission Electron Microscope</Location>
          <Location>Scanning Electron Microscope</Location>
        </div>
      );
    case "Elongation": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Transcription</Location>
          <Location>Translation</Location>
          <Location>RNA Polymerase</Location>
          <Location>Nucleotide</Location>
        </div>
      );
    case "Embryo": 
      return;
    case "Endocrine Signaling": 
      return (<Location>Hormone</Location>);
    case "Endocine System": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Gland</Location>
          <Location>Hormone</Location>
        </div>
      );
    case "Endocytosis": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Plasma Membrane</Location>
          <Location>Vesicle</Location>
        </div>
      );
    case "Endomembrane System": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Protein</Location>
          <Location>Organelle</Location>
        </div>
      );
    case "Endoplasmic Reticulum": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Ribosome</Location>
          <Location>Protein</Location>
          <Location>Lumen</Location>
          <Location>Transport Vesicle</Location>
        </div>
      );
    case "Endosymbiotic Theory": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitochondria</Location>
          <Location>Chloroplast</Location>
        </div>
      );
    case "Endothermy": 
      return;
    case "Enhancer": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Transcription</Location>
          <Location>Activator</Location>
        </div>
      );
    case "Epigenetics": 
      return (<Location>Gene Expression</Location>);
    case "Erwin Chargaff": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Base Pairing</Location>
        </div>
      );
    case "Euchromatin": 
      return (<Location>Chromatin</Location>);
    case "Eukaryotes": 
      return;
    case "Evo-Devo": 
      return;
    case "Exocytosis": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Vesicle</Location>
          <Location>Plasma Membrane</Location>
          <Location>Transport Vesicle</Location>
          <Location>Golgi Apparatus</Location>
          <Location>Microtubule</Location>
          <Location>Cytoskeleton</Location>
        </div>
      );
    case "Exon": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>mRNA</Location>
          <Location>Transcription</Location>
        </div>
      );
    case "Extracellular Matrix": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Glycoprotein</Location>
        </div>
      );
    case "Facilitated Diffusion": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Electrochemical Gradient</Location>
          <Location>Transport Protein</Location>
        </div>
      );
    case "Feedback Inhibition": 
      return;
    case "Fever": 
      return (<Location>Response</Location>);
    case "Fimbriae": 
      return (<Location>Prokaryotes</Location>);
    case "Flaccid": 
      return (<Location>Hypertonic</Location>);
    case "Flagella": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Organelle</Location>
          <Location>Prokaryotes</Location>
        </div>
      );
    case "Fluid Mosaic Model": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Plasma Membrane</Location>
          <Location>Protein</Location>
          <Location>Phospholipid</Location>
        </div>
      );
    case "Food Vacuoles": 
      return (<Location>Phagocytosis</Location>);
    case "Frameshift Mutation": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mutation</Location>
          <Location>Insertion-Deletion</Location>
          <Location>Nucleotide</Location>
          <Location>Reading Frame</Location>
        </div>
      );
    case "Frederick Griffith": 
      return;
    case "Free Water": 
      return;
    case "G Protein": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Transduction</Location>
          <Location>G Protein-Coupled Receptor</Location>
        </div>
      );
    case "G Protein-Coupled Receptor": 
      return (<Location>G proteins</Location>);
    case "G0 Phase": 
      return;
    case "G1 Phase": 
      return;
    case "G2 Phase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
        </div>
      );
    case "Gap Junction": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Protein</Location>
        </div>
      );
    case "Gated Channel": 
      return;
    case "Gel Electrophoresis": 
      return;
    case "Gene Cloning": 
      return (<Location>Gene</Location>);
    case "Gene Expression": 
      return (<Location>Gene Expression</Location>);
    case "Genetic Code": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Nucleotide</Location>
          <Location>Amino Acids</Location>
        </div>
      );
    case "Genetic Engineering": 
      return;
    case "Genome": 
      return;
    case "Gland": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Hormone</Location>
        </div>
      );
    case "Glycocalyx": 
      return;
    case "Glycolipid": 
      return;
    case "Glycoprotein": 
      return;
    case "Golgi Apparatus": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Organelle</Location>
          <Location>Cisternae</Location>
        </div>
      );
    case "Golgi Faces": 
      return;
    case "Granum": 
      return (<Location>Thylakoid</Location>);
    case "Growth Factor": 
      return;
    case "Helicase": 
      return;
    case "Hershey & Chase": 
      return;
    case "Heterochromatin": 
      return (<Location>Chromatin</Location>);
    case "Histone Acetylation": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Histones</Location>
          <Location>Transcription</Location>
        </div>
      );
    case "Histone Modification": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Histones</Location>
          <Location>Gene Expression</Location>
        </div>
      );
    case "Histones": 
      return (<Location>DNA</Location>);
    case "Homeostasis": 
      return;
    case "Homeotic Gene": 
      return;
    case "Hormone": 
      return (<Location>Hormone</Location>);
    case "Hydrophilic": 
      return (<Location>Hydrophilic</Location>);
    case "Hydrophobic": 
      return (<Location>Hydrophobic</Location>);
    case "Hypertonic": 
      return (<Location>hypertonic</Location>);
    case "Hypotonic": 
      return (<Location>hypotonic</Location>);
    case "Induced Pluripotent Stem Cells": 
      return (<Location>Stem Cell</Location>);
    case "Inducer": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Gene Expression</Location>
          <Location>Repressor</Location>
        </div>
      );
    case "Inducible Operon": 
      return (<Location>Operon</Location>);
    case "Initiation": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Transcription</Location>
          <Location>Translation</Location>
        </div>
      );
    case "Insertion-Deletion": 
      return (<Location>Mutation</Location>);
    case "Interal Protein": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Hydrophobic</Location>
          <Location>Hydrophilic</Location>
        </div>
      );
    case "Integrin": 
      return;
    case "Intermediate Filament": 
      return;
    case "Interphase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
          <Location>Meiosis</Location>
        </div>
      );
    case "Interstitial Fluid": 
      return;
    case "Intron": 
      return;
    case "Ion Channel": 
      return (<Location>Plasma Membrane</Location>);
    case "Ionization Cosntant": 
      return;
    case "Isotonic": 
      return (<Location>Cell</Location>);
    case "Junk DNA": 
      return;
    case "Kinase": 
      return;
    case "Kinetochore": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Protein</Location>
          <Location>Centromere</Location>
          <Location>Spindle Fiber</Location>
          <Location>Mitosis</Location>
        </div>
      );
    case "Lagging Strand": 
      return (<Location>Okazaki Fragment</Location>);
    case "Leading Strand": 
      return (<Location>DNA</Location>);
    case "Ligand": 
      return;
    case "Ligand-Gated Ion Channel": 
      return;
    case "Light Microscope": 
      return;
    case "Locus": 
      return;
    case "Lumen": 
      return (<Location>Endoplasmic Reticulum</Location>);
    case "Lysosome": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Hydrophilic</Location>
          <Location>Cytoplasm</Location>
        </div>
      );
    case "Magnification": 
      return;
    case "Malignant": 
      return (<Location>Tumor</Location>);
    case "Maselson & Stahl": 
      return;
    case "Maternal Effect Gene": 
      return;
    case "Membrane Potential": 
      return;
    case "Membrane Sidedness": 
      return;
    case "Metaphase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
          <Location>Chromosome</Location>
          <Location>Metaphase Plate</Location>
        </div>
      );
    case "Metaphase Plate": 
      return (<Location>Chromosome</Location>);
    case "Metastasis": 
      return (<Location>Cancer</Location>);
    case "Microfilament": 
      return (<Location>Eukaryotes</Location>);
    case "Microtubule": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Cytoskeleton</Location>
          <Location>Eukaryotes</Location>
        </div>
      );
    case "Miller-Urey Experiment": 
      return;
    case "Mismatch Repair": 
      return;
    case "Missense Mutation": 
      return (<Location>Mutation</Location>);
    case "Mitochondria": 
      return (<Location>Organelle</Location>);
    case "Mitochondrial Matrix": 
      return;
    case "Mitosis": 
      return (<Location>Eukaryotes</Location>);
    case "Mitotic Phase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
          <Location>Cytokinesis</Location>
        </div>
      );
    case "Mitotic Spindle": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Microtubule</Location>
          <Location>Protein</Location>
          <Location>Chromosome</Location>
          <Location>Mitosis</Location>
        </div>
      );
    case "Morphogensis": 
      return;
    case "Motor Protein": 
      return;
    case "mRNA": 
      return (<Location>Ribosome</Location>);
    case "Multipotent": 
      return (<Location>Stem Cell</Location>);
    case "Mutagen": 
      return (<Location>Mutation</Location>);
    case "Mutation": 
      return (<Location>Nucleotide</Location>);
    case "Negative Feedback": 
      return;
    case "Nervous System": 
      return;
    case "Noncoding RNA": 
      return;
    case "Nuclear Envelope": 
      return (<Location>Eukaryotes</Location>);
    case "Nuclear Pore Complexes": 
      return;
    case "Nuclease": 
      return;
    case "Nucleoid Region": 
      return;
    case "Nucleolus": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Nucleus</Location>
          <Location>Ribosomal RNA</Location>
        </div>
      );
    case "Nucleotide": 
      return (<Location>Nucleotide</Location>);
    case "Nucleus": 
      return (<Location>Eukaryotes</Location>);
    case "Objective Lens": 
      return;
    case "Okazaki Fragment": 
      return (<Location>Lagging Strand</Location>);
    case "Oncogene": 
      return (<Location>Cancer</Location>);
    case "One-Gene One-Protein": 
      return (<Location>Protein</Location>);
    case "Oparin & Haldane": 
      return;
    case "Operator": 
      return;
    case "Operon": 
      return (<Location>Promoter</Location>);
    case "Organ": 
      return;
    case "Organ System": 
      return;
    case "Organelle": 
      return (<Location>Cell</Location>);
    case "Origin of Replication": 
      return (<Location>Chromosome</Location>);
    case "Osmosis": 
      return (<Location>Diffusion</Location>);
    case "p53 Gene": 
      return (<Location>Tumor</Location>);
    case "Paracrine Signaling": 
      return;
    case "Passive Transport": 
      return (<Location>Plasma Membrane</Location>);
    case "Pattern Formation": 
      return;
    case "Peripheral Protein": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Protein</Location>
          <Location>Transduction</Location>
          <Location>Cell-Cell Recognition</Location>
          <Location>Intracellular Joining</Location>
          <Location>Cytoskeleton</Location>
          <Location>Extracellular Matrix</Location>
        </div>
      );
    case "Peroxisome": 
      return;
    case "Phagocytosis": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Active Transport</Location>
          <Location>Good Vacuole</Location>
          <Location>Lysosome</Location>
        </div>
      );
    case "Phosphatase": 
      return;
    case "Phospholipid": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Hydrophilic</Location>
          <Location>Hydrophobic</Location>
        </div>
      );
    case "Phosphorylation": 
      return (<Location>Protein</Location>);
    case "Phosphorylation Cascade": 
      return (<Location>Transduction</Location>);
    case "Pinocytosis": 
      return (<Location>Endocytosis</Location>);
    case "Plasma Membrane": 
      return (<Location>Cytoplasm</Location>);
    case "Plasmid": 
      return (<Location>Genetic Engineering</Location>);
    case "Plasmodesma": 
      return;
    case "Plasmodesmata": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Cytoplasm</Location>
          <Location>Cell Wall</Location>
        </div>
      );
    case "Plasmolysis": 
      return;
    case "Pluripotent": 
      return (<Location>Stem Cell</Location>);
    case "Point Mutation": 
      return (<Location>Mutation</Location>);
    case "Poly-A Tail": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mrna</Location>
          <Location>Translation</Location>
        </div>
      );
    case "Polymerase Chain Reaction": 
      return;
    case "Pore Complex": 
      return;
    case "Positive Feedback": 
      return;
    case "Positive Gene Regulation": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Activator</Location>
          <Location>Transcription</Location>
        </div>
      );
    case "Post-Translational Modification": 
      return;
    case "Primase": 
      return;
    case "Primer": 
      return (<Location>DNA Polymerase</Location>);
    case "Prokaryotes": 
      return (<Location>Prokaryotes</Location>);
    case "Prometaphase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
          <Location>Nuclear Envelope</Location>
          <Location>Microtubule</Location>
          <Location>Kinetochore</Location>
        </div>
      );
    case "Promoter": 
      return (<Location>Transcription</Location>);
    case "Prophase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
          <Location>Chromatin</Location>
          <Location>Chromosome</Location>
        </div>
      );
    case "Protein": 
      return (<Location>Cell</Location>);
    case "Proto-Oncogene": 
      return;
    case "Protocell": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Abiotic</Location>
          <Location>Cell</Location>
        </div>
      );
    case "Proton Pump": 
      return (<Location>Concentration Gradient</Location>);
    case "Purine": 
      return;
    case "Pyrimidine": 
      return;
    case "Ras Gene": 
      return (<Location>Cancer</Location>);
    case "Reading Frame": 
      return (<Location>Nucleotide</Location>);
    case "Reception": 
      return;
    case "Receptor-Mediated Endocytosis": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Plasma Membrane</Location>
          <Location>Vesicle</Location>
          <Location>Ligand</Location>
        </div>
      );
    case "Recombinant DNA": 
      return;
    case "Regulator": 
      return;
    case "Regulatory Gene": 
      return;
    case "Relay Molecule": 
      return;
    case "Release Factor": 
      return (<Location>Translation</Location>);
    case "Replication Bubble": 
      return;
    case "Replication Fork": 
      return;
    case "Repressible Operon": 
      return (<Location>Operon</Location>);
    case "Repressor": 
      return (<Location>Transcription</Location>);
    case "Reproductive Clonin": 
      return (<Location>Somatic Cell</Location>);
    case "Resolution": 
      return;
    case "Response": 
      return (<Location>Response</Location>);
    case "Restriction Enzyme": 
      return;
    case "Restriction Fragment": 
      return;
    case "Restriction Point": 
      return;
    case "Restriction Site": 
      return;
    case "Ribosomal RNA": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Ribosome</Location>
          <Location>Nucleolus</Location>
        </div>
      );
    case "Ribosomal Subunits": 
      return;
    case "Ribosome": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Cytosol</Location>
          <Location>Endoplasmic Reticulum</Location>
          <Location>Nuclear Envelope</Location>
        </div>
      );
    case "Ribozyme": 
      return;
    case "RNA Interference": 
      return (<Location>Gene Expression</Location>);
    case "RNA Polymerase": 
      return (<Location>RNA Polymerase</Location>);
    case "RNA Processing": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mrna</Location>
          <Location>Translation</Location>
        </div>
      );
    case "RNA Splicing": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Exon</Location>
          <Location>Mrna</Location>
        </div>
      );
    case "RNA World Hypothesis": 
      return;
    case "Robert Hook": 
      return;
    case "Rosalind Franklin": 
      return;
    case "S Phase": 
      return;
    case "Scale Bars": 
      return;
    case "Scanning Electron Microscope": 
      return;
    case "Second Messenger": 
      return;
    case "Selective Permeability": 
      return;
    case "Semiconservative Model": 
      return;
    case "Sensor": 
      return;
    case "Set Point": 
      return;
    case "Signal Peptide": 
      return;
    case "Signal Transduction Pathway": 
      return (<Location>Response</Location>);
    case "Silent Mutation": 
      return (<Location>Mutation</Location>);
    case "Single Stranded Binding Protein": 
      return;
    case "Sister Chromatid": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Chromosome</Location>
          <Location>Centromere</Location>
        </div>
      );
    case "Sodium Potassium Pump": 
      return (<Location>Cell</Location>);
    case "Somatic Cell": 
      return (<Location>Cell</Location>);
    case "Spindle Fiber": 
      return (<Location>Microtubule</Location>);
    case "Spliceosome": 
      return;
    case "Stem Cell": 
      return (<Location>Stem Cell</Location>);
    case "Sticky End": 
      return;
    case "Stimulus": 
      return;
    case "Stroma": 
      return;
    case "Substitution": 
      return;
    case "Surface Area to Volume": 
      return;
    case "Symport": 
      return (<Location>Active Transport</Location>);
    case "Synaptic Signaling": 
      return;
    case "Taq Polymerase": 
      return;
    case "TATA Box": 
      return (<Location>Promoter</Location>);
    case "Telomerase": 
      return (<Location>Telomere</Location>);
    case "Telomere": 
      return (<Location>Chromosome</Location>);
    case "Telophase": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Mitosis</Location>
          <Location>Nuclear Envelope</Location>
          <Location>Chromosome</Location>
        </div>
      );
    case "Template Strand": 
      return;
    case "Termination": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Translation</Location>
          <Location>Transcription</Location>
        </div>
      );
    case "Terminator": 
      return (<Location>Transcription</Location>);
    case "Therapeutic Cloning": 
      return;
    case "Thermoregulation": 
      return;
    case "Thomas Hunt Morgan": 
      return;
    case "Thylakoid": 
      return (<Location>Chloroplast</Location>);
    case "Tight Junction": 
      return;
    case "Tonicity": 
      return;
    case "Topoisomerase": 
      return;
    case "Totipotent": 
      return (<Location>Stem Cell</Location>);
    case "Transcription": 
      return (<Location>Transcription</Location>);
    case "Transcription Factor": 
      return (<Location>Gene Expression</Location>);
    case "Transcriptoin Initiation Complex": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Ribosome</Location>
          <Location>mRNA</Location>
          <Location>tRNA</Location>
        </div>
      );
    case "Transcription Unit": 
      return;
    case "Transduction": 
      return (<Location>Response</Location>);
    case "Transformation": 
      return (<Location>Cancer</Location>);
    case "Translation": 
      return (<Location>Translation</Location>);
    case "Translation Initiation Complex": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Ribosome</Location>
          <Location>mRNA</Location>
          <Location>tRNA</Location>
        </div>
      );
    case "Transmission Electron Microscope": 
      return;
    case "Transport Protein": 
      return (<Location>Protein</Location>);
    case "Transport Vesicle": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Endomembrane System</Location>
          <Location>Cytoplasm</Location>
        </div>
      );
    case "Triplet Code": 
      return (
        <div className="flex gap-x-[52px] justify-left">
          <Location>Nucleotide</Location>
          <Location>Nucleotide</Location>
          <Location>Nucleotide</Location>
        </div>
      );
    case "tRNA": 
      return (<Location>Ribosome</Location>);
    case "Tumor": 
      return (<Location>Tumor</Location>);
    case "Tumor Supressor Gene": 
      return (<Location>Cancer</Location>);
    case "Turgidity": 
      return;
    case "Vacuole": 
      return (<Location>Organelle</Location>);
    case "Vasoconstriction": 
      return;
    case "Vasodilation": 
      return;
    case "Vesicle": 
      return (<Location>Plasma Membrane</Location>);
    case "Voltage": 
      return;
    case "Water Potential": 
      return;
    case "Watson & Crick": 
      return (<Location>Double Helix</Location>);
    case "Wobble": 
      return;
    case "Zygote": 
      return;
    case "Ψ (Psi)": 
      return;
  }
}
